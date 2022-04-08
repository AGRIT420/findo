import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { colors } from '../../theme';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Ionicons';
//import { TextInput } from 'react-native-gesture-handler';

const MessageInputBox = () => {
    const [message, setMessage] = useState('');

    const onPress = () => {
        if(message) {
           console.warn("Message: ", message);
           setMessage('');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <Icon name="emoji-happy" size={24} color={colors.gray} style={styles.emojiIcon}/>
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
                        <Icon2 name="send" size={22} color={colors.white}/>
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
        height: 44,
        flex: 1,
        alignItems: 'center',
    },
    emojiIcon: {
        padding: 10,
    },
    textInput: {
        flex: 1,
        marginRight: 10,
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