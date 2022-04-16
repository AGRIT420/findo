import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';
import moment from 'moment-timezone';
import 'moment/locale/pl';

const MessageRectangle = (props) => {
    const { message } = props;

    const isMyMessage = () => {
        return message.user.id === 'u1';
    }

    return (
        <View style={styles.container}>
            <LinearGradient
                start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 0.0}}
                locations={[0, 1.0]}
                colors={isMyMessage() ? [colors.darkBlue, colors.purple] : [colors.ultraLightGray, colors.ultraLightGray]}
                style={[styles.box, {
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
        paddingHorizontal: 10,
        paddingVertical: 8,
        elevation: 2,
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
        fontSize: 12,
    },
})

export default MessageRectangle;