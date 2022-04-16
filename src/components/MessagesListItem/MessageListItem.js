import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../../theme';
import moment from 'moment-timezone';
import 'moment/locale/pl';

const MessagesListItem = (props, { navigation }) => {
    const { room } = props;
    const user = room.users[1];


    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image source={{ uri: user.imageUri }} style={styles.avatar}/>
                <View style={styles.midContainer}>
                    <Text numberOfLines={1} style={styles.username}>{user.name}</Text>
                    <Text numberOfLines={1} style={styles.lastMessage}>{room.lastMessage.content}</Text>
                    <Text style={styles.time}> 
                        {moment(room.lastMessage.createdAt, 'YYYY-MM-DD HH:mm:ss', 'pl')
                        .subtract(12, 'hours')
                        .tz('Europe/Warsaw')
                        .startOf('second')
                        .fromNow()}
                    </Text>
                 </View>
            </View>
         </View>
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
    time: {
        paddingTop: 3,
        fontFamily: 'oxygen_light',
        fontSize: 14,
        color: colors.gray,
    },
})

export default MessagesListItem;