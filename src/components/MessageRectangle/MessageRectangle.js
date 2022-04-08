import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme';
import moment from 'moment-timezone';
import 'moment/locale/pl';

const MessageRectangle = (props) => {
    const { message } = props;

    const isMyMessage = () => {
        return message.user.id === 'u1';
    }

    return (
        <View style={styles.container}>
            <View style={[styles.box, {
                backgroundColor: isMyMessage() ? colors.darkBlue : colors.ultraLightGray,
                marginLeft: isMyMessage() ? 60 : 0,
                marginRight: isMyMessage() ? 0 : 60,
                borderTopLeftRadius: isMyMessage() ? 16 : 0,
                borderTopRightRadius: isMyMessage() ? 0 : 16,
                borderBottomLeftRadius: isMyMessage() ? 16 : 16,
                borderBottomRightRadius: isMyMessage() ? 16 : 16,
            }]}>
                {!isMyMessage() && <Text style={styles.username}>{message.user.name}</Text>}
                <Text style={[styles.messageText, {
                    color: isMyMessage() ? colors.white : colors.black,
                }]}>{message.content}</Text>
                <Text style={[styles.time, {
                    color: isMyMessage() ? colors.ultraLightBlue : colors.gray,
                }]}>{moment(message.createdAt, 'YYYY-MM-DD HH:mm:ss', 'pl')
                            .subtract(12, 'hours')
                            .tz('Europe/Warsaw')
                            .startOf('second')
                            .fromNow()}
                </Text>
            </View>
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
        paddingHorizontal: 10,
        paddingVertical: 8,
        elevation: 2,
    },
    username: {
        fontFamily: 'Oxygen-Bold',
        color: colors.black,
        fontSize: 12,
        lineHeight: 12,
        marginBottom: 2,
    },
    messageText: {
        fontFamily: 'Oxygen-Regular',
        color: colors.black,
        fontSize: 14,
    },
    time: {
        fontFamily: 'Oxygen-Light',
        color: colors.gray,
        alignSelf: 'flex-end',
        fontSize: 10,
    },
})

export default MessageRectangle;