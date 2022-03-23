import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, StatusBar, Image } from 'react-native';
import pets from '../../../assets/data/pets';
import { colors } from '../../theme';

const Messages = () => {
    return (
        <SafeAreaView style={styles.pageContainer}>
        <StatusBar animated={true} backgroundColor={colors.black}/>
        <View style={styles.titleBar}>
        <Text style={styles.title}>wiadomości</Text>
        </View>
        <View style={styles.pets}>
            {pets.map(pet => (
                <View style={styles.pet} key={pet.id}>
                    <Image source={{uri: pet.image}} style={styles.image}/>
                </View>
            ))}
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        backgroundColor: colors.white,
    },
    title: {
        fontFamily: 'Oxygen-Regular',
        fontSize: 28,
        color: colors.blue,
      },
    titleBar: {
        width: '100%',
        height: '7%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        justifyContent: 'center',
        backgroundColor: colors.white,
        paddingVertical: 2,
        borderBottomWidth: 1,
        borderColor: colors.ultraLightGray,
    },
    container: {
        width: '100%',
        height: '93%',
        padding: 10,
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
    },
  })

export default Messages;