import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import pets from '../../../assets/data/pets';
import FavoriteItem from '../../components/FavoriteItem/FavoriteItem';
import { colors } from '../../theme';

const Favorites = () => {
    return (
        <View style={styles.pageContainer}>
            <StatusBar animated={true} barStyle='dark-content' backgroundColor={colors.white}/>
            <View style={styles.titleBar}>
                <Text style={styles.title}>polubione</Text>
            </View>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.list}>
                    {pets.map((item, key) => (
                        <FavoriteItem key={key} pet={item}/>
                    ))}
                </ScrollView>
            </View>
        </View>
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
        backgroundColor: colors.white,
    },
    titleBar: {
        width: '100%',
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        justifyContent: 'center',
        backgroundColor: colors.white,
        paddingVertical: 2,
        borderBottomWidth: 1,
        borderColor: colors.ultraLightGray,
    },
    title: {
        fontFamily: 'oxygen_regular',
        fontSize: 32,
        color: colors.blue,
    },
    container: {
        paddingBottom: 48,
        width: '100%',
    },
    list: {
        paddingTop: 10,
        width: '100%',
        height: '100%',
    },
  })

export default Favorites;