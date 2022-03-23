import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, StatusBar, ScrollView, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../theme';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Details = ({ route, navigation }) => {
    const image = route?.params?.image
    const name = route?.params?.name
    const address = route?.params?.address
    const description = route?.params?.description
    const detailedDescription = route?.params?.detailedDescription
    const age = route?.params?.age
    const since = route?.params?.since
    const healthCondition = route?.params?.healthCondition

    const askQuestionHandler = () => {
        console.log('Zadaj pytanie');
    }
  
      const makeAppointmentHandler = () => {
        console.log("Umow sie");
    }

    return (
        <SafeAreaView style={styles.pageContainer}>
            <StatusBar animated={true} backgroundColor={colors.black}/>
            <View style={styles.titleBar}>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={
                        () => navigation.goBack()}>
                        <Icon
                        name="chevron-left" 
                        size={22} 
                        color={colors.black}
                        style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>szczegóły</Text>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.address}>{address}</Text>
                <View style={styles.detailsContainer}>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailName}>Wiek: </Text>
                        <Text style={styles.detail}>{age}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailName}>W schronisku od: </Text>
                        <Text style={styles.detail}>{since}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailName}>Stan zdrowia: </Text>
                        <Text style={styles.detail}>{healthCondition}</Text>
                    </View>
                </View>
                <View style={styles.detailedDescriptionContainer}>
                    <Text style={styles.description}>{detailedDescription}</Text>
                </View>
                <View style={styles.actionsContainer}>
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
        </SafeAreaView>
    )
}

Details.propTypes = {
    route: PropTypes.shape({
        params: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            address: PropTypes.string,
            description: PropTypes.string,
        }),
    }),
    navigation: PropTypes.shape({
        params: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            address: PropTypes.string,
            description: PropTypes.description,
        }),
        goBack: PropTypes.func,
    }),
}

Details.defaultProps = {
    route: {
        params: {
            image: 'https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixlib=rb-1.2.1&q=80&fm=jpg',
            name: '',
            address: '',
            description: '',
        },
    },
    navigation: {
        params: {
            image: 'https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixlib=rb-1.2.1&q=80&fm=jpg',
            name: '',
            address: '',
            description: '',
        },
        goBack: () => null,
    }
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
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        paddingVertical: 2,
    },
    iconContainer: {
        width: '5%',
        alignItems: 'center',
    },
    titleContainer: {
        width: '95%',
        paddingRight: '5%',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Oxygen-Regular',
        fontSize: 28,
        color: colors.blue,
    },
    icon: {
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
    },
    content: {
        width: '90%',
        height: '100%',
        paddingTop: 8,
    },
    name: {
        fontFamily: 'Oxygen-Bold',
        fontSize: 32,
        color: colors.black,
        lineHeight: 44,
    },
    address: {
        fontFamily: 'Oxygen-Regular',
        marginBottom: 4,
        fontSize: 12,
        color: colors.gray,
    },
    description: {
        fontFamily: 'Oxygen-Regular',
        fontSize: 14,
        color: colors.black,
        lineHeight: 24,
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
    detailsRow: {
        flexDirection: 'row',
    },
    detailsContainer: {
        paddingTop: 5,
    },
    detailedDescriptionContainer: {
        //backgroundColor: colors.purple,
        height: '45%',
        paddingTop: 10,
    },
    actionsContainer: {
        width: '100%',
        height: '20%',
        paddingVertical: 10,
        justifyContent: 'center',
        alignSelf: 'center',
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

export default Details;