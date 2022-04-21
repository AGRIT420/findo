import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image, StatusBar, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../theme';
import { FontAwesome5 } from '@expo/vector-icons';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { getUser } from '../../graphql/queries';
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { updateUser } from '../../graphql/mutations';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const ProfileEdit = ({ route, navigation }) => {
    const imageUri = route?.params?.imageUri
    const username = route?.params?.username
    const firstName = route?.params?.firstName
    const lastName = route?.params?.lastName
    const birthDate = route?.params?.birthDate
    const city = route?.params?.city

    const [ newImageUri, setNewImageUri ] = useState(imageUri);
    const [ newFirstName, setNewFirstName ] = useState(firstName);
    const [ newLastName, setNewLastName ] = useState(lastName);
    const [ newBirthDate, setNewBirthDate ] = useState(birthDate);
    const [ newCity, setNewCity ] = useState(city);

    const updateUserData = async () => {
        try {
            const userInfo = await Auth.currentAuthenticatedUser();

            const data = {
                id: userInfo.attributes.sub,
                name: username,
                imageUri: newImageUri,
                firstName: newFirstName,
                lastName: newLastName,
                city: newCity,
                birthDate: newBirthDate,
            }

            const update = await API.graphql({ query: updateUser, variables: {input: data}});
            
            navigation.goBack()

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <SafeAreaView style={styles.pageContainer}>
            
            <StatusBar animated={true} barStyle='dark-content' backgroundColor={colors.white}/>
            <View style={styles.titleBar}>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={
                        () => navigation.goBack()}>
                        <FontAwesome5
                        name="chevron-left" 
                        size={22} 
                        color={colors.black}
                        style={styles.icon}/> 
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>edytuj profil</Text>
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.inputsContainer}>
                    <Text style={styles.inputLabel}>Nazwa użytkownika</Text>
                    <TextInput editable={false} style={[styles.input, {color: colors.lightGray}]} value={username}/>
                    <Text style={styles.inputLabel}>Imię</Text>
                    <TextInput editable={true} style={styles.input} value={newFirstName} onChangeText={setNewFirstName}/>
                    <Text style={styles.inputLabel}>Nazwisko</Text>
                    <TextInput editable={true} style={styles.input} value={newLastName} onChangeText={setNewLastName}/>
                    <Text style={styles.inputLabel}>Data urodzenia</Text>
                    <Pressable style={{width: '100%'}}>
                        <TextInput editable={false} style={styles.input} value={newBirthDate}  onChangeText={setNewBirthDate}/>
                    </Pressable>
                    <Text style={styles.inputLabel}>Miejsce zamieszkania</Text>
                    <TextInput editable={true} style={styles.input} value={newCity} onChangeText={setNewCity}/>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.cancelText}>Anuluj</Text>
                    </TouchableOpacity>
                    <TouchableNativeFeedback onPress={updateUserData}>
                        <LinearGradient
                            start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 0.0}}
                            locations={[0, 1.0]}
                            colors={[colors.purple, colors.blue]}
                            style={styles.button}>
                                <Text style={styles.buttonText}>Zatwierdź</Text>
                        </LinearGradient>
                    </TouchableNativeFeedback>
                </View>
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
        height: 56,
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
        fontFamily: 'oxygen_regular',
        fontSize: 32,
        color: colors.blue,
    },
    icon: {
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
    },
    content: {
        width: '90%',
        height: '100%',
        paddingTop: '5%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    buttonsContainer: {
        width: '100%',
        marginTop: 30,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    button: {
        width: 150,
        height: 44,
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
    buttonText: {
        fontFamily: 'oxygen_light',
        fontSize: 16,
        color: colors.white,
    },
    cancelText: {
        fontFamily: 'oxygen_bold',
        fontSize: 16,
        color: colors.gray,
        paddingHorizontal: 30,
    },
    inputsContainer: {
        width: '100%',
        paddingHorizontal: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    inputLabel: {
        marginLeft: 15,
        marginTop: 20,
        fontFamily: 'oxygen_regular',
        fontSize: 14,
        color: colors.gray,
    },
    input: {
        fontFamily: 'oxygen_regular',
        fontSize: 16,
        backgroundColor: colors.white,
        color: colors.black,
        width: '100%',
        marginTop: 4,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.ultraLightGray,
        shadowColor: "#666",
        shadowOffset: {
          width: 2,
          height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.65,
        elevation: 6, 
    },
  })

export default ProfileEdit;