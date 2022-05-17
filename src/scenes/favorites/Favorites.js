import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import FavoriteItem from '../../components/FavoriteItem/FavoriteItem';
import { colors } from '../../theme';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { getUser, listFavoritePets } from './queries';
import { onCreateFavoritePet, onDeleteFavoritePet } from './subscriptions';

const Favorites = () => {
    const [ pets, setPets ] = useState([]);
    const [ fixedPets, setFixedPets ] = useState([]);
    const [ petsUpdated, setPetsUpdated ] = useState([]);
    const [ userID, setUserID ] = useState(null);

    const setData = (fixedPets, userID) => {
            let petsFiltered = fixedPets;
            petsFiltered = petsFiltered.filter(function(pet) {
                return pet;
            }).map(function({id, shelter, favoritePet, name, imageUri, description, breed, birthDate, inShelterSinceDate, healthCondition}) {
                return {userID, id, shelter, favoritePet, name, imageUri, description, breed, birthDate, inShelterSinceDate, healthCondition};
            });
            return petsFiltered;
      }

    useEffect( () => {
        setPets([]);
        setFixedPets([]);
        setPetsUpdated([]);
        const fetchPets = async () => {
          try {
            const userInfo = await Auth.currentAuthenticatedUser();
            setUserID(userInfo.attributes.sub);
            API.graphql(graphqlOperation(listFavoritePets, { input: { filter: { userID: userInfo.attributes.sub } } }))
                .then(result => setPets(result.data.listFavoritePets.items))
          } catch (e) {
            console.log(e);
          }
        }
        fetchPets();
    }, []);

    useEffect( () => {
        setFixedPets([]);
        pets.map(pet => setFixedPets(fixedPets => [...fixedPets, pet.pet]));
    }, [pets])

    useEffect( () => {
        setFavorites(fixedPets, userID);
    }, [fixedPets, userID])

    const setFavorites = (fixedPets, userID) => {
            let petsModified = setData(fixedPets, userID);
            petsModified.map(pet => Object.assign(pet, { favoriteID: pet.id }));
            setPetsUpdated(petsModified);
    }

    useEffect( () => {
        const subscription = API.graphql(graphqlOperation(onCreateFavoritePet)).subscribe({
            next: (data) => {
                setPets(pets => [data.value.data.onCreateFavoritePet, ...pets]);
            }
        });
        return () => subscription.unsubscribe();
    }, [pets])

    useEffect( () => {
        const subscription = API.graphql(graphqlOperation(onDeleteFavoritePet)).subscribe({
            next: (data) => {
                let petsUpdated = pets.filter((pet) => pet.pet.id !== data.value.data.onDeleteFavoritePet.pet.id);
                setPets(petsUpdated);
            }
        });
        return () => subscription.unsubscribe();
    }, [pets])

    return (
        <View style={styles.pageContainer}>
            <StatusBar animated={true} barStyle='dark-content' backgroundColor={colors.white}/>
            <View style={styles.titleBar}>
                <Text style={styles.title}>polubione</Text>
            </View>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.list}>
                {petsUpdated.length > 0 &&
                    petsUpdated.map((item, key) => (
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