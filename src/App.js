import React, { useEffect, useState } from "react";
import Routes from "./routes";
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify';
import { getUser } from './graphql/queries';
import { createUser, deleteUser } from './graphql/mutations';
import awsconfig from './aws-exports.js';
import { withAuthenticator } from 'aws-amplify-react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

Amplify.configure(awsconfig)

import useFonts from "./hooks/useFonts";

const randomImages = [
    'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
    'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
    'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
    'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg',
]

const App = () => {
    const [isReady, setIsReady] = useState(false);

    const loadFonts = async () => {
        await useFonts();
    }

    const getRandomImage = () => {
        return randomImages[Math.floor(Math.random() * randomImages.length)];
    }

    useEffect(() => {
        const fetchUser = async() => {
            const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
            if(userInfo) {
                const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}));
                if(userData.data.getUser) {
                    console.log("User is already registered in database");
                    return;
                }
                const newUser = {
                    id: userInfo.attributes.sub,
                    name: userInfo.username,
                    imageUri: getRandomImage(),
                }
                await API.graphql(graphqlOperation(createUser, {input: newUser}))
            }
        }
        
        fetchUser();
    }, [])

    if (!isReady) {
        return (
            <AppLoading
                startAsync={loadFonts}
                onFinish={() => setIsReady(true)}
                onError={() => {}}
            />
        )
    }
    
    return(
        <Routes/>
    )
}

export default withAuthenticator(App)
