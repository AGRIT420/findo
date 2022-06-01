import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Dialog from "react-native-dialog";

const HelpDialog = (props) => {
    const { title, content } = props;

    const [visible, setVisible] = useState(false);

    const show = () => {
        setVisible(true);
    }

    const dismiss = () => {
        setVisible(false);
    }

    return (
        <View style={styles.container}>
            <Dialog.Container visible={visible}>
                <Dialog.Title>{title}</Dialog.Title>
                <Dialog.Description>{content}</Dialog.Description>
                <Dialog.Button label="Ok" onPress={dismiss}/>
            </Dialog.Container>
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
})

export default HelpDialog;