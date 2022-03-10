import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../../../theme';
import HeaderTitle from './HeaderTitle';
import Home from '../../../scenes/home';
import Messages from '../../../scenes/messages';

const Stack = createStackNavigator();

const navigationProps = {
    headerShown: false,
}

export const HomeNavigator = () => (
    <Stack.Navigator
        initialRouteName="Browse"
        //headerMode="screen"
        screenOptions={navigationProps}
    >
        <Stack.Screen
            name="BrowseScreen"
            component={Home}
            options={({ navigation }) => ({
                title: "Przeglądaj",
            })}
        />
    </Stack.Navigator>
)

export const MessagesNavigator = () => (
    <Stack.Navigator
        initialRouteName="Messages"
        //headerMode="screen"
        screenOptions={navigationProps}
    >
        <Stack.Screen
            name="MessagesScreen"
            component={Messages}
            options={({ navigation }) => ({
                title: "Wiadomości",
            })}
        />
    </Stack.Navigator>
)