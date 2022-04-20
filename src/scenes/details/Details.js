import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, StatusBar, ScrollView, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../theme';
import { FontAwesome5 } from '@expo/vector-icons';
import { API, graphqlOperation, Auth } from "aws-amplify";
import { createChatRoom, createChatRoomUser, } from '../../graphql/mutations';
import { listChatRoomUsers, getUser, getChatRoom, getChatRoomUser } from '../../graphql/queries';

const Details = ({ route, navigation }) => {
    const shelterID = route?.params?.shelterID
    const image = route?.params?.image
    const name = route?.params?.name
    const address = route?.params?.address
    const description = route?.params?.description
    const age = route?.params?.age
    const since = route?.params?.since
    const healthCondition = route?.params?.healthCondition
    const user = route?.params?.user

    const askQuestionHandler = async () => {
        // console.log('Zadaj pytanie');
        try {
            const userInfo = await Auth.currentAuthenticatedUser();

            const chatRoomsUser1 = await API.graphql(graphqlOperation(listChatRoomUsers, {filter: {userID: {contains: userInfo.attributes.sub}}}))
            const chatRoomsUser2 = await API.graphql(graphqlOperation(listChatRoomUsers, {filter: {userID: {contains: shelterID}}}))
            
            for(let i = 0; i < chatRoomsUser1.data.listChatRoomUsers.items.length; i++) {
                for(let j = 0; j < chatRoomsUser2.data.listChatRoomUsers.items.length; j++) {
                    if(chatRoomsUser1.data.listChatRoomUsers.items[i].chatRoom.id === chatRoomsUser2.data.listChatRoomUsers.items[j].chatRoom.id) {
                        console.log("Chat room already exists");
                        navigation.navigate('ConversationScreen', {
                            id: chatRoomsUser1.data.listChatRoomUsers.items[i].chatRoom.id,
                            username: "test",
                        })
                        return;
                    }
                }
            }
        
            const newChatRoomData = await API.graphql(graphqlOperation(createChatRoom, { input: {} }))

            if(!newChatRoomData.data) {
                console.log('Failed to create a chat room');
                return;
            }
            
            const newChatRoom = newChatRoomData.data.createChatRoom;

            await API.graphql(graphqlOperation(createChatRoomUser, {
                input: {
                    userID: shelterID,
                    chatRoomID: newChatRoom.id,
                }
            })) 

            await API.graphql(graphqlOperation(createChatRoomUser, {
                input: {
                    userID: userInfo.attributes.sub,
                    chatRoomID: newChatRoom.id,
                }
            }))

            navigation.navigate('ConversationScreen', {
                id: newChatRoom.id,
                username: "test",
            })



        } catch (e) {
            console.error(e);
        }
    }
  
      const makeAppointmentHandler = () => {
        console.log("Umow sie");
    }

    return (
        <SafeAreaView style={styles.pageContainer}>
            <StatusBar animated={true} barStyle='dark-content' backgroundColor={colors.white}/>
            <View style={styles.titleBar}>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={
                        () => navigation.goBack()}>
                        <FontAwesome5
                        name="chevron-left" 
                        size={22} 
                        color={colors.black}
                        style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>szczegóły</Text>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.address}>{address}</Text>
                <View style={styles.detailsContainer}>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailName}>Wiek: </Text>
                        <Text style={styles.detail}>{age}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailName}>W schronisku od: </Text>
                        <Text style={styles.detail}>{since}</Text>
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
            image: PropTypes.string,
            name: PropTypes.string,
            address: PropTypes.string,
            description: PropTypes.string,
        }),
    }),
    navigation: PropTypes.shape({
        params: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            address: PropTypes.string,
            description: PropTypes.description,
        }),
        goBack: PropTypes.func,
    }),
}

Details.defaultProps = {
    route: {
        params: {
            image: 'https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixlib=rb-1.2.1&q=80&fm=jpg',
            name: '',
            address: '',
            description: '',
        },
    },
    navigation: {
        params: {
            image: 'https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixlib=rb-1.2.1&q=80&fm=jpg',
            name: '',
            address: '',
            description: '',
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
    iconContainer: {
        width: '5%',
        alignItems: 'center',
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
    icon: {
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
    },
    content: {
        width: '90%',
        height: '100%',
        paddingTop: 8,
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
        lineHeight: 20,
    },
    detail: {
        fontFamily: 'oxygen_bold',
        fontSize: 16,
        color: colors.black,
        lineHeight: 20,
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