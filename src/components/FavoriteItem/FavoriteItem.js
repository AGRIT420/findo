import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../theme';
import { useNavigation } from '@react-navigation/native';

const FavoriteItem = (props) => {
    const { userID, id, shelter, favoritePet, name, imageUri, description, breed, birthDate, inShelterSinceDate, healthCondition, favoriteID } = props.pet;

    const navigation = useNavigation();

    return (
      <View style={styles.root}>
        <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', {
          userID: userID,
          petID: id,
          shelterID: shelter.id,
          shelterUserID: shelter.user.id,
          name: name,
          shelterName: shelter.name,
          location: shelter.location,
          imageUri: imageUri,
          description: description,
          breed: breed,
          birthDate: birthDate,
          inShelterSinceDate: inShelterSinceDate,
          healthCondition: healthCondition,
          })}>
            <View style={styles.face}>
              <Image source={{ uri: imageUri }} style={styles.image}/>
              <View style={styles.data}>
                  <Text style={styles.name}>{name}</Text>
                  <Text style={styles.address}>{shelter.name}</Text>
                  <Text numberOfLines={3} style={styles.description}>{description}</Text>
              </View>
            </View>
          </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  face: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.ultraLightGray,
    flexDirection: 'row',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 15,
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
  },
  data: {
    width: '55%',
    alignContent: 'flex-end',
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  name: {
    fontFamily: 'oxygen_bold',
    fontSize: 32,
    color: colors.black,
    lineHeight: 48,
  },
  address: {
    fontFamily: 'oxygen_regular',
    marginTop: -4,
    marginBottom: 6,
    fontSize: 12,
    color: colors.gray,
  },
  description: {
    height: 70,
    fontFamily: 'oxygen_regular',
    fontSize: 16,
    color: colors.black,
    lineHeight: 16,
  },
})

export default FavoriteItem;