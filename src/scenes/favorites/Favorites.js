import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import pets from '../../../assets/data/pets';
import FavoriteItem from '../../components/FavoriteItem/FavoriteItem';
import FavoritesList from '../../components/FavoritesList/FavoritesList';
import { colors } from '../../theme';

const Favorites = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.pageContainer}>
            <StatusBar animated={true} backgroundColor={colors.black}/>
            <View style={styles.titleBar}>
                <Text style={styles.title}>polubione</Text>
            </View>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.list}>
                    {pets.map((item, key) => (
                        <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', {
                            key: item.key,
                            image: item.image,
                            name: item.name,
                            address: item.address,
                            description: item.description,
                            detailedDescription: item.detailedDescription,
                            age: item.age,
                            since: item.since,
                            healthCondition: item.healthCondition,
                        })}>
                            <FavoriteItem key={item.key} pet={item}/>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
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
    title: {
        fontFamily: 'Oxygen-Regular',
        fontSize: 28,
        color: colors.blue,
    },
    container: {
        paddingBottom: 60,
    },
    list: {
        paddingTop: 10,
        width: '100%',
        height: '100%',
    },
  })

export default Favorites;