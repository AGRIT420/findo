import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../../scenes/home';
import Messages from '../../../scenes/messages';
import Favorites from '../../../scenes/favorites';
import Profile from '../../../scenes/profile';
import Details from '../../../scenes/details';
import Conversation from '../../../scenes/conversation';
import ProfileEdit from '../../../scenes/profileEdit';
import MeetingCreator from '../../../scenes/meetingCreator';
import Info from '../../../scenes/info/Info';

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
            name="DetailsScreen"
            component={Details}
        />

        <Stack.Screen
            name="ConversationScreen"
            component={Conversation}
        />

        <Stack.Screen
            name="MeetingCreatorScreen"
            component={MeetingCreator}
        />

        <Stack.Screen
            name="ProfileScreen"
            component={Profile}
        />

        <Stack.Screen
            name="ProfileEditScreen"
            component={ProfileEdit}
        />

        <Stack.Screen
            name="InfoScreen"
            component={Info}
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

        <Stack.Screen
            name="ConversationScreen"
            component={Conversation}
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

        <Stack.Screen
            name="ConversationScreen"
            component={Conversation}
        />

    </Stack.Navigator>
)

export const DetailsNavigator = () => (
    <Stack.Navigator
        initialRouteName="DetailsScreen"
        screenOptions={navigationProps}
    >
        <Stack.Screen
            name="DetailsScreen"
            component={Details}
        />

        <Stack.Screen
            name="ConversationScreen"
            component={Conversation}
        />

        <Stack.Screen
            name="MeetingCreatorScreen"
            component={MeetingCreator}
        />

    </Stack.Navigator>
)