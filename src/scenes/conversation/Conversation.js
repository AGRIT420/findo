import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../../theme';
import { FontAwesome5 } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import MessageRectangle from '../../components/MessageRectangle/MessageRectangle';
import MessageInputBox from '../../components/MessageInputBox/MessageInputBox';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { messagesByChatRoom } from '../../graphql/queries';

const Conversation = ({ route, navigation }) => {
    const id = route?.params?.id
    const username = route?.params?.username
    const imageUri = route?.params?.imageUri

    const [messages, setMessages] = useState([]);
    const [myID, setMyID] = useState(null);

    useEffect( () => {
        const fetchMessages = async () => {
            const messagesData = await API.graphql(graphqlOperation(messagesByChatRoom, {chatRoomID: id, sortDirection: "ASC"}));
            setMessages(messagesData.data.messagesByChatRoom.items);
        }
        fetchMessages();
    }, [])

    useEffect( () => {
        const getMyID = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            setMyID(userInfo.attributes.sub);
        }
        getMyID();
    }, [])

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
                    <Image source={{ uri: imageUri }} style={styles.avatar}/>
                    <Text numberOfLines={2} style={styles.title}>{username}</Text>
                </View>
            </View>
            
            <View style={styles.content}>
                <FlatList 
                    data={messages} 
                    renderItem={({ item }) => 
                            <MessageRectangle message={item} myID={myID}/>}
                    keyExtractor={(item) => item.id}
                />
                <MessageInputBox chatRoomID={id}/>
            </View>
            
        </SafeAreaView>
    )
}

Conversation.propTypes = {
    route: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
            username: PropTypes.string,
            imageUri: PropTypes.string,
        }),
    }),
    navigation: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
            username: PropTypes.string,
            imageUri: PropTypes.string,
        }),
        goBack: PropTypes.func,
    }),
}

Conversation.defaultProps = {
    route: {
        params: {
            id: '0',
            username: 'null',
        },
    },
    navigation: {
        params: {
            id: '0',
            username: 'null',
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
        borderBottomWidth: 1,
        borderColor: colors.ultraLightGray,
    },
    iconContainer: {
        width: '5%',
        alignItems: 'center',
    },
    titleContainer: {
        width: '95%',
        paddingRight: '5%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        width: '85%',
        paddingLeft: 12,
        lineHeight: 22,
        fontFamily: 'oxygen_regular',
        fontSize: 20,
        color: colors.blue,
    },
    icon: {
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
    },
    avatar: {
        width: 40,
        height: 40,
        marginLeft: 18,
        borderRadius: 30,
    },
    content: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
  })

export default Conversation;