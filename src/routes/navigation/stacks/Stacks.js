import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../../scenes/home';
import Messages from '../../../scenes/messages';
import Favorites from '../../../scenes/favorites';
import Profile from '../../../scenes/profile';
import Details from '../../../scenes/details';

const Stack = createStackNavigator();

const navigationProps = {
    headerShown: false,
}

export const HomeNavigator = () => (
    <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={navigationProps}
    >
        <Stack.Screen
            name="HomeScreen"
            component={Home}
        />

        <Stack.Screen
            name="ProfileScreen"
            component={Profile}
        />
    </Stack.Navigator>
)

export const FavoritesNavigator = () => (
    <Stack.Navigator
        initialRouteName="FavoritesScreen"
        screenOptions={navigationProps}
    >
        <Stack.Screen
            name="FavoritesScreen"
            component={Favorites}
        />

        <Stack.Screen
            name="DetailsScreen"
            component={Details}
        />

    </Stack.Navigator>
)

export const MessagesNavigator = () => (
    <Stack.Navigator
        initialRouteName="MessagesScreen"
        screenOptions={navigationProps}
    >
        <Stack.Screen
            name="MessagesScreen"
            component={Messages}
        />
    </Stack.Navigator>
)