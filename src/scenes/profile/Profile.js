import React, { useEffect, useFocusEffect, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image, StatusBar, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../theme';
import { FontAwesome5 } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { getUser } from '../../graphql/queries';

const Profile = ({ navigation }) => {
    const isFocused = useIsFocused();

    const [ imageUri, setImageUri ] = useState(null);
    const [ username, setUsername ] = useState('');
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ birthDate, setBirthDate ] = useState('');
    const [ city, setCity ] = useState('');

    const logout = async () => {
        Auth.signOut();
    }

    useEffect( () => {
        if(isFocused) {
            fetchUserData();
        }
    }, [isFocused]);

    const fetchUserData = async () => {
        try {
            const userInfo = await Auth.currentAuthenticatedUser();
            const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}));

            setImageUri(userData.data.getUser.imageUri);
            setUsername(userData.data.getUser.name);
            setFirstName(userData.data.getUser.firstName);
            setLastName(userData.data.getUser.lastName);
            setBirthDate(userData.data.getUser.birthDate);
            setCity(userData.data.getUser.city);

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
                        <View style={styles.backButton}>
                            <FontAwesome5
                                name="chevron-left" 
                                size={22} 
                                color={colors.black}
                                style={styles.icon}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>profil</Text>
                </View>
            </View>
            <View style={styles.content}>
                <Image style={styles.avatar} source={{uri: imageUri ? imageUri : 'https://icon-library.com/images/default-profile-icon/default-profile-icon-3.jpg'}}/>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{firstName} </Text>
                    <Text style={styles.name}>{lastName}</Text>
                </View>
                <Text style={styles.city}>{city}</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableNativeFeedback onPress={ () => navigation.navigate('ProfileEditScreen', {
                        imageUri: imageUri,
                        username: username,
                        firstName: firstName,
                        lastName: lastName,
                        birthDate: birthDate,
                        city: city
                    })}>
                        <LinearGradient
                            start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 0.0}}
                            locations={[0, 1.0]}
                            colors={[colors.darkBlue, colors.blue]}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Edytuj profil</Text>
                        </LinearGradient>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={ () => navigation.navigate('InfoScreen')}>
                        <LinearGradient
                            start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 0.0}}
                            locations={[0, 1.0]}
                            colors={[colors.darkBlue, colors.blue]}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Informacje o aplikacji</Text>
                        </LinearGradient>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={logout}>
                        <LinearGradient
                            start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 0.0}}
                            locations={[0, 1.0]}
                            colors={[colors.darkBlue, colors.blue]}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Wyloguj</Text>
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
    backButton: {
        width: 80,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: colors.white,
    },
    iconContainer: {
        width: '5%',
        alignItems: 'center',
    },
    icon: {
        justifyContent: 'flex-start',
        alignSelf: 'center',
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
    content: {
        width: '90%',
        height: '100%',
        paddingTop: '10%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: colors.white,
        overflow: 'hidden',
    },
    nameContainer: {
        paddingTop: 16,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    name: {
        fontFamily: 'oxygen_light',
        fontSize: 40,
        color: colors.darkBlue
    },
    city: {
        fontFamily: 'oxygen_light',
        fontSize: 18,
        color: colors.gray,
    },
    buttonsContainer: {
        width: '100%',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },  
    button: {
        width: 240,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 14,
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
        fontSize: 18,
        color: colors.white,
    },
  })

export default Profile;