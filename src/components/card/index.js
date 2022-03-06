import React from 'react';
import { Text, ImageBackground, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Card = (props) => {
    const {name, image, description} = props.pet;
    return (
      <View style={styles.card}>
        <ImageBackground source={{ uri: image }} style={styles.image}>
          <LinearGradient
            start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 0.0}}
            locations={[0, 1.0]}
            colors={['#471069', '#30c5d2']}
            style={[styles.linearGradient, styles.cardBanner]}>
            <View style={styles.cardInner}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
            </LinearGradient>
        </ImageBackground>
      </View>    
    )
}

const styles = StyleSheet.create({
    card: {
      width: '98%',
      height: '80%',
      borderRadius: 25,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
      
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 25,
      overflow: 'hidden',
      alignSelf: 'center',
      justifyContent: 'flex-end',
    },
    cardBanner: {
      opacity: 0.95,
      borderRadius: 25,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    cardInner: {
      paddingHorizontal: 20,
      paddingTop: 10,
      paddingBottom: 15,
    },
    name: {
      fontFamily: 'Oxygen-Bold',
      fontSize: 30,
      color: 'white',
      fontWeight: '600',
    },
    description: {
      fontFamily: 'Oxygen-Regular',
      fontSize: 13,
      color: 'white',
      lineHeight: 24,
      fontWeight: '300',
    },
  })

export default Card;