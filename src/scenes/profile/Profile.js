import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

const Profile = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <Text style={styles.title}>Profil</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        flex: 1,
        padding: 10,
    },
    container: {
        padding: 10,
    },
    title: {
      fontFamily: 'Oxygen-Bold',
      fontSize: 24,
      color: '#471069',
    },
    pets: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    pet: {
        width: 100,
        height: 100,
        margin: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
    }
  })

export default Profile;