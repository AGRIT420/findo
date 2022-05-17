import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';
import moment from 'moment-timezone';
import 'moment/locale/pl';

const MessageRectangle = (props) => {
    const { message, myID } = props;

    const isMyMessage = () => {
        //setLastSender(message.user.id);
        return message.user.id === myID;
    }

    return (
        <View style={styles.container}>
            <LinearGradient
                start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 0.0}}
                locations={[0, 1.0]}
                colors={isMyMessage() ? [colors.darkBlue, colors.darkBlue] : [colors.ultraLightGray, colors.ultraLightGray]}
                style={[styles.box, isMyMessage() ? styles.myMessageBox : styles.otherUserMessageBox]}>
                {!isMyMessage() && <Text style={styles.username}>{message.user.name}</Text>}
                <Text style={[styles.messageText, {
                    color: isMyMessage() ? colors.white : colors.black,
                }]}>{message.content}</Text>
                <Text style={[styles.time, {
                    color: isMyMessage() ? colors.ultraLightBlue : colors.gray,
                }]}>{moment(message.createdAt, 'YYYY-MM-DD HH:mm:ss', 'pl')
                            .add(2, 'hours')
                            .subtract(3, 'seconds')
                            .tz('Europe/Warsaw')
                            .startOf('second')
                            .fromNow()}
                </Text>
            </LinearGradient>
         </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    box: {
        backgroundColor: colors.ultraLightGray,
        paddingHorizontal: 14,
        paddingVertical: 10,
        //elevation: 2,
    },
    username: {
        fontFamily: 'oxygen_bold',
        color: colors.black,
        fontSize: 14,
        lineHeight: 14,
        marginBottom: 2,
    },
    messageText: {
        fontFamily: 'oxygen_regular',
        color: colors.black,
        fontSize: 16,
    },
    time: {
        fontFamily: 'oxygen_light',
        color: colors.gray,
        alignSelf: 'flex-end',
        paddingHorizontal: 10,
        paddingTop: 2,
        fontSize: 12,
    },
    myMessageBox: {
        backgroundColor: colors.darkBlue,
        marginLeft: 60,
        marginRight: 0,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    otherUserMessageBox: {
        backgroundColor: colors.ultraLightGray,
        marginLeft: 0,
        marginRight: 60,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 24,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    }
})

export default MessageRectangle;