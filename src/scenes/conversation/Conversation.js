import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, StatusBar, ScrollView, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../theme';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Conversation = ({ route, navigation }) => {
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
            <StatusBar animated={true} barStyle='dark-content' backgroundColor={colors.white}/>
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
                    <Text style={styles.title}>konwersacja</Text>
                </View>
            </View>
            <View style={styles.content}>
            
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
  })

export default Conversation;