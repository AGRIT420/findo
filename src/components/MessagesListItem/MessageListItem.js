import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../../theme';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment-timezone';
import 'moment/locale/pl';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Auth } from 'aws-amplify';

const MessagesListItem = (props) => {
    const { chatRoom } = props;
    const [ otherUser, setOtherUser ] = useState(null);
    const [ myUserID, setMyUserID ] = useState(null);

    const navigation = useNavigation();

    useEffect( () => {
        //console.log("czat: ", chatRoom)
        const getOtherUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            setMyUserID(userInfo.attributes.sub)
            if (chatRoom.chatRoomUsers.items[0].user.id === myUserID) {
                setOtherUser(chatRoom.chatRoomUsers.items[1].user);
            } else {
                setOtherUser(chatRoom.chatRoomUsers.items[0].user);
            }
        }
        getOtherUser();
    }, [])

    if (!otherUser) {
        return null;
    }

    return (
        <TouchableOpacity onPress={() => navigation.navigate('ConversationScreen', {
            id: chatRoom.id,
            username: otherUser.name,
            imageUri: otherUser.imageUri,
        })}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{ uri: otherUser.imageUri }} style={styles.avatar}/>
                    <View style={styles.midContainer}>
                        <Text numberOfLines={1} style={styles.username}>{otherUser.name}</Text>
                        <Text numberOfLines={1} style={styles.lastMessage}>{(chatRoom.lastMessage ? 
                                                                                (chatRoom.lastMessage.messageType === "text" ? 
                                                                                    (chatRoom.lastMessage.user.id === myUserID ? `Ja: ${chatRoom.lastMessage.content}` : chatRoom.lastMessage.content) 
                                                                                : "Złożono propozycję spotkania...") 
                                                                            : "")}</Text>
                        <Text style={styles.time}> 
                            {chatRoom.lastMessage && moment(chatRoom.lastMessage.createdAt, 'YYYY-MM-DD HH:mm:ss', 'pl')
                            .add(2, 'hours')
                            .subtract(3, 'seconds')
                            .fromNow()}
                        </Text>
                    </View>
                </View>
            </View>
         </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.ultraLightGray,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    leftContainer: {
        width: '100%',
        flexDirection: 'row',
    },
    midContainer: {
        width: '78%',
        flexDirection: 'column',
    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 12,
        borderRadius: 60,
    },
    username: {
        flex: 1,
        fontFamily: 'oxygen_bold',
        fontSize: 16,
        color: colors.black,
    },
    lastMessage: {
        flex: 1,
        fontFamily: 'oxygen_regular',
        fontSize: 16,
        color: colors.gray,
    },
    lastMessageUnreaded: {
        flex: 1,
        fontFamily: 'oxygen_bold',
        fontSize: 16,
        color: colors.gray,
    },
    time: {
        paddingTop: 3,
        fontFamily: 'oxygen_light',
        fontSize: 14,
        color: colors.gray,
    },
})

export default MessagesListItem;