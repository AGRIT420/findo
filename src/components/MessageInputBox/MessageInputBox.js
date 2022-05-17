import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { colors } from '../../theme';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createMessage } from '../../graphql/mutations';
import { updateChatRoom } from './mutations';

const MessageInputBox = (props) => {
    const { chatRoomID } = props;
    const [message, setMessage] = useState('');
    const [myUserID, setMyUserID] = useState(null);

    useEffect( () => {
        const fetchUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            setMyUserID(userInfo.attributes.sub);
        }
        fetchUser();
    }, [])

    const updateChatRoomLastMessage = async (messageID) => {
        try {
            await API.graphql(graphqlOperation(updateChatRoom, {input: {id: chatRoomID, lastMessageID: messageID}}));
        } catch (e) {
            console.log(e);
        }
    }

    const onPress = async () => {
        if(message) {
            try {
                const newMessageData = await API.graphql(graphqlOperation(createMessage, {input: {messageType: "text", content: message, userID: myUserID, chatRoomID: chatRoomID}}));
                await updateChatRoomLastMessage(newMessageData.data.createMessage.id);
            } catch(e) {
               console.log(e);
            }
            setMessage('');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <Entypo name="emoji-happy" size={24} color={colors.gray} style={styles.emojiIcon}/>
                <TextInput
                    placeholder='Wprowadź wiadomość'
                    style={styles.textInput}
                    multiline
                    value={message}
                    onChangeText={setMessage}
                />
            </View>
            {message != '' && 
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.button}>
                        <Ionicons name="send" size={22} color={colors.white}/>
                    </View>
                </TouchableOpacity>
            }
         </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderTopWidth: 1,
        borderColor: colors.ultraLightGray,
    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: colors.ultraLightGray,
        borderRadius: 50,
        marginRight: 10,
        height: 46,
        flex: 1,
        alignItems: 'center',
    },
    emojiIcon: {
        padding: 10,
    },
    textInput: {
        flex: 1,
        marginRight: 10,
        fontFamily: 'oxygen_regular',
        fontSize: 16,
    },
    button: {
        backgroundColor: colors.darkBlue,
        paddingLeft: 2,
        borderRadius: 50,
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default MessageInputBox;