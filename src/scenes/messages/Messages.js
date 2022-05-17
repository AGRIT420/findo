import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, StatusBar, Vibration, FlatList } from 'react-native';
import { colors } from '../../theme';
import MessagesListItem from '../../components/MessagesListItem/MessageListItem';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { getUser } from './queries';
import { onUpdateChatRoom, onCreateChatRoom, onCreateChatRoomUser } from './subscriptions';

const Messages = ({ navigation }) => {

    const [ chatRooms, setChatRooms ] = useState([]);
    const [ newChatRoom, setNewChatRoom ] = useState(null);
    const [ myUserID, setMyUserID ] = useState(null);

    useEffect( () => {
        const fetchData = async () => {
            try {
                await Auth.currentAuthenticatedUser()
                    .then(userData => fetchChatRooms(userData.attributes.sub))
                    .then(roomsData => setChatRooms(roomsData.data.getUser.chatRoomUser.items))
                    .then(() => console.log("czat rooms wymagane: ", chatRooms))
            } catch (e) {
                console.log(e);
            }
        }

        const fetchChatRooms = async (userID) => {
            try {
                setMyUserID(userID);
                return await API.graphql(graphqlOperation(getUser, {id: userID}))
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);

    const fixChatRooms = () => {
        /*
        if (newChatRoom === null) {
            return (chatRooms.filter(item => item.chatRoom.lastMessage !== null));
        } else if (newChatRoom.chatRoomUsers.items.length < 2) {
            return ([]);
        } else if (newChatRoom.chatRoom.chatRoomUsers.items.length > 1) {
            return (chatRooms.filter(item => item.chatRoom.lastMessage !== null));
        }*/
        return (chatRooms.filter(item => item.chatRoom.lastMessage !== null));
    }

    useEffect( () => {
        const subscription = API.graphql(graphqlOperation(onCreateChatRoom)).subscribe({
            next: (data) => {
                let fixedChatRoom = { 
                    chatRoom: { 
                        chatRoomUsers: data.value.data.onCreateChatRoom.chatRoomUsers,
                        lastMessage: null 
                    }, 
                    id: data.value.data.onCreateChatRoom.id 
                }

                //setNewChatRoom(data.value.data.onCreateChatRoom)
                console.log("new czat: ", fixedChatRoom)
                setChatRooms(chatRooms => [fixedChatRoom , ...chatRooms]);
            },
            error: error => console.log("Error: ", error),
        })
        return () => subscription.unsubscribe();
    }, [chatRooms])
    
    useEffect( () => {
        const subscription = API.graphql(graphqlOperation(onCreateChatRoomUser)).subscribe({
            next: (data) => {
                if (data.value.data.onCreateChatRoomUser.chatRoom.chatRoomUsers.items.length > 1) {
                    console.log("new czatroomuser: ", data.value.data.onCreateChatRoomUser);
                    //setNewChatRoom(data.value.data.onCreateChatRoomUser);
                    setChatRooms(chatRooms => [data.value.data.onCreateChatRoomUser, ...chatRooms]);
                }
            },
            error: error => console.log("Error: ", error),
        })
        return () => subscription.unsubscribe();
    }, [chatRooms])
*
    useEffect( () => {
        const subscription = API.graphql(graphqlOperation(onUpdateChatRoom)).subscribe({
            next: (data) => {
                let updatedChatRooms = [...chatRooms];
                for (let i = 0; i < updatedChatRooms.length; i++) {
                    if (updatedChatRooms[i].chatRoom.id === data.value.data.onUpdateChatRoom.id) {
                        updatedChatRooms[i].chatRoom.lastMessage = data.value.data.onUpdateChatRoom.lastMessage;
                        break;
                    }
                }
                setChatRooms(updatedChatRooms);
                if (data.value.data.onUpdateChatRoom.lastMessage.user.id !== myUserID) {
                    Vibration.vibrate(100);
                }
                if (data.value.data.onUpdateChatRoom.lastMessage.messageType === "proposal") {
                    navigation.goBack();
                }
            },
            error: error => { console.log(error) }
        });
        return () => subscription.unsubscribe();``
    }, [chatRooms])

    return (
        <SafeAreaView style={styles.pageContainer}>
        <StatusBar animated={true} barStyle='dark-content' backgroundColor={colors.white}/>
        <View style={styles.titleBar}>
        <Text style={styles.title}>wiadomości</Text>
        </View>
        {chatRooms.length > 0 && 
            <FlatList 
                style={styles.list}
                data={fixChatRooms().sort((a, b) => a.chatRoom.lastMessage.createdAt.localeCompare(b.chatRoom.lastMessage.createdAt)).reverse()} 
                renderItem={({ item }) => 
                    <MessagesListItem chatRoom={item.chatRoom}/>}
                keyExtractor={(item) => item.chatRoom.id}
            />
        }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        backgroundColor: colors.white,
    },
    title: {
        fontFamily: 'oxygen_regular',
        fontSize: 32,
        color: colors.blue,
      },
    titleBar: {
        width: '100%',
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        justifyContent: 'center',
        backgroundColor: colors.white,
        paddingVertical: 2,
        borderBottomWidth: 1,
        borderColor: colors.ultraLightGray,
    },
    container: {
        width: '100%',
        height: '93%',
        padding: 10,
    },
    list: {
        width: '100%',
    }
  })

export default Messages;