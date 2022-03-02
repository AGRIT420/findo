import React from 'react';
import { Text, ImageBackground, View, StyleSheet, TouchableWithoutFeedbackBase } from 'react-native';

const Card = (props) => {
    const {name, image, description} = props.user;
    return (
        <View style={styles.card}>
            <ImageBackground 
                source={{ 
                    uri: image
                }} 
                style={styles.image}
            >
                <View style={styles.cardInner}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </ImageBackground>
        </View>    
    )
}

const styles = StyleSheet.create({
    card: {
      width: '98%',
      height: '80%',
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 1,
      shadowRadius: 5,
      elevation: 10,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 15,
      overflow: 'hidden',
      justifyContent: 'flex-end',
    },
    cardInner: {
      padding: 10,
    },
    name: {
      fontSize: 34,
      color: 'white',
      fontWeight: '600',
    },
    description: {
      fontSize: 16,
      color: 'white',
      lineHeight: 24,
      fontWeight: '300',
    },
  })

export default Card;