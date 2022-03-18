import React, { useState } from 'react';
import { Text, ImageBackground, View, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Animated, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../theme';
import FlipCard from 'react-native-flip-card';
const Card = (props) => {
    const {image, name, age, since, healthCondition, address, description, detailedDescription} = props.pet;

    const askQuestionHandler = () => {
      console.log('Zadaj pytanie');
    }

    const makeAppointmentHandler = () => {
      console.log("Umow sie");
    }

    const [isFlipped, setIsFlipped] = useState(false);

    return (
      <View style={styles.root}>
        <FlipCard flipVertical={false} flipHorizontal={true} friction={8}>
          <View style={styles.face}>
            <ImageBackground source={{ uri: image }} style={styles.image}>
              <LinearGradient
                start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 0.0}}
                locations={[0, 1.0]}
                colors={['#eeeeee', '#ffffff']}
                style={[styles.linearGradient, styles.cardBanner]}>
                <View style={styles.cardInner}>
                  <Text style={styles.name}>{name}</Text>
                  <Text style={styles.address}>{address}</Text>
                  <Text style={styles.description}>{description}</Text>
                </View>
              </LinearGradient>
            </ImageBackground>
          </View>

          <View style={styles.back}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.address}>{address}</Text>
            <View style={styles.detailsContainer}>
              <View style={styles.details}>
                <Text style={styles.detailName}>Wiek: </Text>
                <Text style={styles.detail}>{age}</Text>
              </View>
              <View style={styles.details}>
                <Text style={styles.detailName}>W schronisku od: </Text>
                <Text style={styles.detail}>{since}</Text>
              </View>
              <View style={styles.details}>
                <Text style={styles.detailName}>Stan zdrowia: </Text>
                <Text style={styles.detail}>{healthCondition}</Text>
              </View>
            </View>
            <View style={styles.detailedDescriptionContainer}>
              <Text style={styles.description}>{detailedDescription}</Text>
            </View>
            <View style={styles.actionsContent}>
              <TouchableOpacity onPress={askQuestionHandler}>
                <Text style={styles.askQuestionButton}>Zadaj pytanie</Text>  
              </TouchableOpacity>
              <Text style={styles.centeredText}>lub</Text>
              <TouchableNativeFeedback onPress={makeAppointmentHandler}>
                <LinearGradient
                  start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 0.0}}
                  locations={[0, 1.0]}
                  colors={[colors.purple, colors.blue]}
                  style={[styles.linearGradient, styles.appointmentButton]}>
                    <Text style={styles.appointmentButtonText}>Umów się</Text>
                </LinearGradient>
              </TouchableNativeFeedback>
            </View>
          </View>
        </FlipCard>
      </View>
    )
}

const styles = StyleSheet.create({
  root: {
    width: '98%',
    height: '100%',
  },
  face: {
    width: '100%',
    height: '100%',
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
  back: {
    width: '100%',
    height: '100%',
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    lineHeight: 32,
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
    width: '100%',
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
    fontSize: 32,
    color: colors.black,
    fontWeight: '600',
    lineHeight: 44,
  },
  address: {
    fontFamily: 'Oxygen-Regular',
    marginTop: -4,
    marginBottom: 4,
    fontSize: 12,
    color: colors.gray,
  },
  description: {
    fontFamily: 'Oxygen-Regular',
    fontSize: 14,
    color: colors.black,
    lineHeight: 24,
    fontWeight: '300',
  },
  detailName: {
    fontFamily: 'Oxygen-Regular',
    fontSize: 12,
    color: colors.black,
    lineHeight: 20,
  },
  detail: {
    fontFamily: 'Oxygen-Bold',
    fontSize: 12,
    color: colors.black,
    lineHeight: 20,
  },
  details: {
    flexDirection: 'row',
  },
  detailsContainer: {
    paddingTop: 5,
  },
  detailedDescriptionContainer: {
    //backgroundColor: colors.purple,
    height: '40%',
    paddingTop: 10,
  },
  actionsContent: {
    width: '100%',
    height: '30%',
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: colors.gray,
  },
  centeredText: {
    fontFamily: 'Oxygen-Regular', 
    padding: 10,
  },
  askQuestionButton: {
    fontFamily: 'Oxygen-Bold',
    color: colors.darkPurple,
    textDecorationLine: 'underline',
    fontSize: 15,
  },
  appointmentButton: {
    width: 240,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.65,
    elevation: 6, 
  },
  appointmentButtonText: {
    fontFamily: 'Oxygen-Regular',
    color: colors.white,
    textAlign: 'center',
    padding: 10, 
  }
})

export default Card;