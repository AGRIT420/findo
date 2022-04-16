import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../../theme';
import { FontAwesome5 } from '@expo/vector-icons';

const Profile = ({ navigation }) => {
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
                    <Text style={styles.title}>profil</Text>
                </View>
            </View>
            <View style={styles.content}>

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
    iconContainer: {
        width: '5%',
        alignItems: 'center',
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
    icon: {
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
    },
    content: {
        width: '90%',
        height: '100%',
        paddingTop: 8,
    },
  })

export default Profile;