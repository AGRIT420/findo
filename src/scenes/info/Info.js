import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image, StatusBar, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import { colors } from '../../theme';
import { FontAwesome5 } from '@expo/vector-icons';

const Info = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.pageContainer}>
            <StatusBar animated={true} barStyle='dark-content' backgroundColor={colors.white}/>
            <View style={styles.titleBar}>
                <View style={styles.iconContainer}>
                <TouchableOpacity onPress={
                        () => navigation.goBack()}>
                        <View style={styles.backButton}>
                            <FontAwesome5
                                name="chevron-left" 
                                size={22} 
                                color={colors.black}
                                style={styles.icon}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>informacje o aplikacji</Text>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.version}>v1.0.0</Text>
                <Text style={styles.copyright}>Copyright © 2022 findo</Text>
            </View>
        </SafeAreaView>
    )
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
    },
    backButton: {
        width: 80,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: colors.white,
    },
    iconContainer: {
        width: '5%',
        alignItems: 'center',
    },
    icon: {
        justifyContent: 'flex-start',
        alignSelf: 'center',
    },
    titleContainer: {
        width: '95%',
        paddingRight: '5%',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'oxygen_regular',
        fontSize: 32,
        color: colors.blue,
    },
    content: {
        width: '90%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    version: {
        fontFamily: 'oxygen_bold',
        fontSize: 28,
        paddingBottom: 10,
    },
    copyright: {
        fontFamily: 'oxygen_regular',
        fontSize: 14,
        color: colors.gray,
    }
  })

export default Info;