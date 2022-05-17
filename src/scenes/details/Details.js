import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, StyleSheet, StatusBar, ScrollView, ToastAndroid, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../theme';
import { FontAwesome5 } from '@expo/vector-icons';
import { API, graphqlOperation, Auth } from "aws-amplify";
import { createFavoritePet, deleteFavoritePet, createChatRoom, createChatRoomUser } from './mutations';
import { getUser } from './queries';
import { getPet } from '../../graphql/queries';
import { AntDesign } from '@expo/vector-icons';

const Details = ({ route, navigation }) => {
    const petID = route?.params?.petID
    const shelterID = route?.params?.shelterID
    const shelterUserID = route?.params?.shelterUserID
    const userID = route?.params?.userID
    const name = route?.params?.name
    const shelterName = route?.params?.shelterName
    const location = route?.params?.location
    const imageUri = route?.params?.imageUri
    const description = route?.params?.description
    const breed = route?.params?.breed
    const birthDate = route?.params?.birthDate
    const inShelterSinceDate = route?.params?.inShelterSinceDate
    const healthCondition = route?.params?.healthCondition

    const [favorite, setFavorite] = useState(false);
    const [favoriteID, setFavoriteID] = useState(null);

    useEffect( () => {
        const fetchPetData = async () => {
            await API.graphql(graphqlOperation(getPet, {id: petID}))
                .then((data) => checkIfPetIsFavorite(data.data.getPet.favoritePet.items))
        }
        const checkIfPetIsFavorite = (favoritesList) => {
           if (favoritesList.length > 0) {
               for (let i = 0; i < favoritesList.length; i++) {
                    if (favoritesList[i].userID === userID) {
                        setFavorite(true);
                        setFavoriteID(favoritesList[i].id);
                        return;
                    }
               }
           }
           setFavorite(false);
        }
        fetchPetData();
    }, [petID])

    const modifyFavoriteHandler = () => {
        if (favorite) {
          removeFromFavorites();
          ToastAndroid.showWithGravityAndOffset("Usunięto z ulubionych", ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
          console.log(name, " removed from favorites...");
        } else {
          addToFavorites();
          ToastAndroid.showWithGravityAndOffset("Dodano do ulubionych", ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
          console.log(name, " added to favorites...");
        }
    }

    const removeFromFavorites = async () => {
        try {
          await API.graphql(graphqlOperation(deleteFavoritePet, {input: {id: favoriteID}}))
            .then(() => setFavorite(false));
        } catch(e) {
          console.log(e);
        }
      }
  
    const addToFavorites = async () => {
        try {
          await API.graphql(graphqlOperation(createFavoritePet, {input: {petID: petID, userID: userID}}))
            .then(result => setFavoriteID(result.data.createFavoritePet.id))
            .then(() => setFavorite(true));
        } catch(e) {
          console.log(e);
        }
    }

    const askQuestionHandler = async () => {
        try {
            const userInfo = await Auth.currentAuthenticatedUser();
            const myUserData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}));

            if(myUserData.data.getUser.chatRoomUser.items.length > 0) {
                for(let i = 0; i < myUserData.data.getUser.chatRoomUser.items.length; i++) {
                    for(let j = 0; j < myUserData.data.getUser.chatRoomUser.items[i].chatRoom.chatRoomUsers.items.length; j++) {
                        if(myUserData.data.getUser.chatRoomUser.items[i].chatRoom.chatRoomUsers.items[j].user.id === shelterUserID) {
                            console.log("Chat room already exists");
                            navigation.navigate('ConversationScreen', {
                                id: myUserData.data.getUser.chatRoomUser.items[i].chatRoom.id,
                                username: shelterName,
                                imageUri: imageUri,
                            })
                            return;
                        }
                    }
                }
            }
        
            const newChatRoomData = await API.graphql(graphqlOperation(createChatRoom, { input: {lastMessageID: ""} }))

            if(!newChatRoomData.data) {
                console.log('Failed to create a chat room');
                return;
            }
            
            const newChatRoom = newChatRoomData.data.createChatRoom;

            await API.graphql(graphqlOperation(createChatRoomUser, {
                input: {
                    userID: shelterUserID,
                    chatRoomID: newChatRoom.id,
                }
            })) 

            await API.graphql(graphqlOperation(createChatRoomUser, {
                input: {
                    userID: userID,
                    chatRoomID: newChatRoom.id,
                }
            }))

            navigation.navigate('ConversationScreen', {
                id: newChatRoom.id,
                username: shelterName,
                imageUri: imageUri,
            })

        } catch (e) {
            console.error(e);
        }
    }
  
      const makeAppointmentHandler = () => {
        navigation.navigate('MeetingCreatorScreen', {
            userID: userID,
            shelterUserID: shelterUserID,
            shelterName: shelterName,
            imageUri: imageUri,
        })
        console.log("Umow sie");
    }

    return (
        <SafeAreaView style={styles.pageContainer}>
            <StatusBar animated={true} barStyle='dark-content' backgroundColor={colors.white}/>
            <View style={styles.titleBar}>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={
                        () => navigation.goBack()}>
                        <View style={styles.backButton}>
                            <FontAwesome5
                                name="chevron-left" 
                                size={22} 
                                color={colors.black}
                                style={styles.icon}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>szczegóły</Text>
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.petNameContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <TouchableOpacity onPress={modifyFavoriteHandler}>
                        <AntDesign
                            name={favorite ? "heart" : "hearto"}
                            size={24} 
                            color={colors.black}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.address}>{shelterName}</Text>
                <View style={styles.detailsContainer}>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailName}>Data urodzenia (przybliżona): </Text>
                        <Text style={styles.detail}>{birthDate}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailName}>W schronisku od: </Text>
                        <Text style={styles.detail}>{inShelterSinceDate}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailName}>Stan zdrowia: </Text>
                        <Text style={styles.detail}>{healthCondition}</Text>
                    </View>
                </View>
                <View style={styles.detailedDescriptionContainer}>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <View style={styles.actionsContainer}>
                    <TouchableOpacity onPress={askQuestionHandler}>
                        <Text style={styles.askQuestionButton}>Zadaj pytanie</Text>  
                    </TouchableOpacity>
                    <Text style={styles.centeredText}>lub</Text>
                    <TouchableNativeFeedback onPress={makeAppointmentHandler}>
                        <LinearGradient
                        start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 0.0}}
                        locations={[0, 1.0]}
                        colors={[colors.purple, colors.blue]}
                        style={[styles.linearGradient, styles.appointmentButton]}>
                            <Text style={styles.appointmentButtonText}>Umów się</Text>
                        </LinearGradient>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </SafeAreaView>
    )
}

Details.propTypes = {
    route: PropTypes.shape({
        params: PropTypes.shape({
            petID: PropTypes.string,
            shelterID: PropTypes.string,
            userID: PropTypes.string,
            name: PropTypes.string,
            shelterName: PropTypes.string,
            location: PropTypes.string,
            imageUri: PropTypes.string,
            description: PropTypes.string,
            breed: PropTypes.string,
            birthDate: PropTypes.string,
            inShelterSinceDate: PropTypes.string,
            healthCondition: PropTypes.string,
        }),
    }),
    navigation: PropTypes.shape({
        params: PropTypes.shape({
            petID: PropTypes.string,
            shelterID: PropTypes.string,
            userID: PropTypes.string,
            name: PropTypes.string,
            shelterName: PropTypes.string,
            location: PropTypes.string,
            imageUri: PropTypes.string,
            description: PropTypes.string,
            breed: PropTypes.string,
            birthDate: PropTypes.string,
            inShelterSinceDate: PropTypes.string,
            healthCondition: PropTypes.string,
        }),
        goBack: PropTypes.func,
    }),
}

Details.defaultProps = {
    route: {
        params: {
            petID: '',
            shelterID: '',
            userID: '',
            name: '',
            shelterName: '',
            location: '',
            imageUri: '',
            description: '',
            breed: '',
            birthDate: '',
            inShelterSinceDate: '',
            healthCondition: '',
        },
    },
    navigation: {
        params: {
            petID: '',
            shelterID: '',
            userID: '',
            name: '',
            shelterName: '',
            location: '',
            imageUri: '',
            description: '',
            breed: '',
            birthDate: '',
            inShelterSinceDate: '',
            healthCondition: '',
        },
        goBack: () => null,
    }
}

const styles = StyleSheet.create({
    pageContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        flex: 1,
    },
    titleBar: {
        width: '100%',
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        paddingVertical: 2,
    },
    backButton: {
        width: 80,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: colors.white,
    },
    iconContainer: {
        width: '5%',
        alignItems: 'center',
    },
    icon: {
        justifyContent: 'flex-start',
        alignSelf: 'center',
    },
    titleContainer: {
        width: '95%',
        paddingRight: '5%',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'oxygen_regular',
        fontSize: 32,
        color: colors.blue,
    },
    content: {
        width: '90%',
        height: '100%',
        paddingTop: 8,
    },
    petNameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        fontFamily: 'oxygen_bold',
        fontSize: 42,
        color: colors.black,
        lineHeight: 44,
    },
    address: {
        fontFamily: 'oxygen_regular',
        marginBottom: 4,
        fontSize: 16,
        color: colors.gray,
    },
    description: {
        fontFamily: 'oxygen_regular',
        fontSize: 18,
        color: colors.black,
        lineHeight: 24,
    },
    detailName: {
        fontFamily: 'oxygen_regular',
        fontSize: 16,
        color: colors.black,
        lineHeight: 24,
    },
    detail: {
        fontFamily: 'oxygen_bold',
        fontSize: 16,
        color: colors.black,
        lineHeight: 24,
    },
    detailsRow: {
        flexDirection: 'row',
    },
    detailsContainer: {
        paddingTop: 5,
    },
    detailedDescriptionContainer: {
        //backgroundColor: colors.purple,
        height: '45%',
        paddingTop: 10,
    },
    actionsContainer: {
        width: '100%',
        height: '20%',
        paddingVertical: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        //backgroundColor: colors.gray,
    },
    centeredText: {
        fontFamily: 'oxygen_regular', 
        fontSize: 16,
        padding: 10,
    },
    askQuestionButton: {
        fontFamily: 'oxygen_bold',
        color: colors.darkPurple,
        fontSize: 20,
    },
    appointmentButton: {
        width: 240,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.65,
        elevation: 6, 
    },
    appointmentButtonText: {
        fontFamily: 'oxygen_regular',
        fontSize: 18,
        color: colors.white,
        textAlign: 'center',
        padding: 10, 
    }
  })

export default Details;