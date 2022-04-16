import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../theme';
import { useNavigation } from '@react-navigation/native';

const FavoriteItem = (props) => {
    const { shelterID, image, name, address, description, detailedDescription, age, since, healthCondition } = props.pet;
    
    const navigation = useNavigation();

    return (
      <View style={styles.root}>
        <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', {
          shelterID: shelterID,
          image: image,
          name: name,
          address: address,
          description: description,
          detailedDescription: detailedDescription,
          age: age,
          since: since,
          healthCondition: healthCondition,
          })}>
            <View style={styles.face}>
              <Image source={{ uri: image }} style={styles.image}/>
              <View style={styles.data}>
                  <Text style={styles.name}>{name}</Text>
                  <Text style={styles.address}>{address}</Text>
                  <Text style={styles.description}>{description}</Text>
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