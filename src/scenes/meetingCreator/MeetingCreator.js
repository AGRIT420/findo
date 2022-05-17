import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image, Button, StatusBar, TouchableOpacity, TouchableNativeFeedback, ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../theme';
import { FontAwesome5 } from '@expo/vector-icons';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { getUser } from './queries';
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { createMessage } from '../../graphql/mutations';
import { createChatRoom, createChatRoomUser, updateChatRoom } from './mutations';

const MeetingCreator = ({ route, navigation }) => {
    const userID = route?.params?.userID
    const shelterUserID = route?.params?.shelterUserID
    const shelterName = route?.params?.shelterName
    const imageUri = route?.params?.imageUri
    const [meetingDate, setMeetingDate] = useState('');
    const [meetingHour, setMeetingHour] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    //const [chatRoomID, setChatRoomID] = useState('');


    const updateChatRoomLastMessage = async (chatRoomID, messageID) => {
        try {
            await API.graphql(graphqlOperation(updateChatRoom, {input: {id: chatRoomID, lastMessageID: messageID}}));
        } catch (e) {
            console.log(e);
        }
    }

    const sendProposal = async (chatRoomID) => {
        if(meetingDate && meetingHour) {
            try {
                const newMessageData = await API.graphql(graphqlOperation(createMessage, {input: {messageType: "proposal", status: "unanswered", content: additionalInfo, suggestedDate: meetingDate, suggestedHour: meetingHour, userID: userID, chatRoomID: chatRoomID}}));
                setMeetingDate('');
                setMeetingHour('');
                setAdditionalInfo('');
                await updateChatRoomLastMessage(chatRoomID, newMessageData.data.createMessage.id);
            } catch(e) {
               console.log(e);
            } 
        }
    }


    const onConfirm = async () => {
        try {
            const myUserData = await API.graphql(graphqlOperation(getUser, {id: userID}));

            if(myUserData.data.getUser.chatRoomUser.items.length > 0) {
                for(let i = 0; i < myUserData.data.getUser.chatRoomUser.items.length; i++) {
                    for(let j = 0; j < myUserData.data.getUser.chatRoomUser.items[i].chatRoom.chatRoomUsers.items.length; j++) {
                        if(myUserData.data.getUser.chatRoomUser.items[i].chatRoom.chatRoomUsers.items[j].user.id === shelterUserID) {
                            //setChatRoomID(myUserData.data.getUser.chatRoomUser.items[i].chatRoom.id)
                            console.log("Chat room already exists");
                            
                            sendProposal(myUserData.data.getUser.chatRoomUser.items[i].chatRoom.id);

                            ToastAndroid.showWithGravityAndOffset("Wysłano propozycję spotkania", ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);

                            navigation.goBack();
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

            sendProposal(newChatRoom.id);

            ToastAndroid.showWithGravityAndOffset("Wysłano propozycję spotkania", ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);

            navigation.goBack();

        } catch (e) {
            console.error(e);
        }
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
                    <Text style={styles.title}>umów się</Text>
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.inputsContainer}>
                    <Text style={styles.inputLabel}>Proponowana data spotkania</Text>
                    <TextInput editable={true} style={styles.input} onChangeText={setMeetingDate}/>
                    <Text style={styles.inputLabel}>Proponowana godzina</Text>
                    <TextInput editable={true} style={styles.input} onChangeText={setMeetingHour}/>
                    <Text style={styles.inputLabel}>Dodatkowe informacje/uwagi</Text>
                    <TextInput editable={true} style={styles.input} onChangeText={setAdditionalInfo} multiline={true} numberOfLines={4}/>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.cancelText}>Anuluj</Text>
                    </TouchableOpacity>
                    <TouchableNativeFeedback onPress={onConfirm}>
                        <LinearGradient
                            start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 0.0}}
                            locations={[0, 1.0]}
                            colors={[colors.purple, colors.blue]}
                            style={styles.button}>
                                <Text style={styles.buttonText}>Zatwierdź</Text>
                        </LinearGradient>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </SafeAreaView>
    )
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
        paddingTop: '5%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    buttonsContainer: {
        width: '100%',
        marginTop: 30,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    button: {
        width: 150,
        height: 44,
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
    buttonText: {
        fontFamily: 'oxygen_light',
        fontSize: 16,
        color: colors.white,
    },
    cancelText: {
        fontFamily: 'oxygen_bold',
        fontSize: 16,
        color: colors.gray,
        paddingHorizontal: 30,
    },
    inputsContainer: {
        width: '100%',
        paddingHorizontal: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    inputLabel: {
        marginLeft: 15,
        marginTop: 20,
        fontFamily: 'oxygen_regular',
        fontSize: 14,
        color: colors.gray,
    },
    input: {
        fontFamily: 'oxygen_regular',
        fontSize: 16,
        backgroundColor: colors.white,
        color: colors.black,
        width: '100%',
        marginTop: 4,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.ultraLightGray,
        shadowColor: "#666",
        shadowOffset: {
          width: 2,
          height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.65,
        elevation: 6, 
    },
  })

export default MeetingCreator;