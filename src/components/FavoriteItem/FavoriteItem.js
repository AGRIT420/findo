import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { colors } from '../../theme';

const FavoriteItem = (props) => {
    const { image, name, address, description } = props.pet;
    
    return (
      <View style={styles.root}>
          <View style={styles.face}>
            <Image source={{ uri: image }} style={styles.image}/>
            <View style={styles.data}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.address}>{address}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
  root: {
    width: '98%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  face: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 1.65,
    borderWidth: 1,
    borderColor: colors.ultraLightGray,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 25,
    overflow: 'hidden',
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
  },
  data: {
    width: '55%',
    alignContent: 'flex-end',
    paddingHorizontal: 10,
  },
  name: {
    fontFamily: 'Oxygen-Bold',
    fontSize: 28,
    color: colors.black,
    fontWeight: '600',
    lineHeight: 44,
  },
  address: {
    fontFamily: 'Oxygen-Regular',
    marginTop: -4,
    marginBottom: 4,
    fontSize: 10,
    color: colors.gray,
  },
  description: {
    height: 70,
    fontFamily: 'Oxygen-Regular',
    fontSize: 12,
    color: colors.black,
    lineHeight: 14,
  },
})

export default FavoriteItem;