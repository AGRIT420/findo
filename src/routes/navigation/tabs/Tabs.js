import React from "react";
import { View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../../../theme";
import { HomeNavigator, FavoritesNavigator, MessagesNavigator } from "../stacks";
import { Foundation } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const TabNavigator = (props) => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
                switch(route.name) {
                    case 'Przeglądaj':
                        return(
                            <Foundation
                                name="home" 
                                size={24} 
                                color={focused ? colors.darkBlue : colors.lightGray}/>
                        )
                    case 'Ulubione':
                        return(
                            <Foundation
                                name="heart" 
                                size={24} 
                                color={focused ? colors.darkBlue : colors.lightGray}/>
                        )
                    case 'Wiadomości':
                        return(
                            <Foundation
                                name="comments" 
                                size={24} 
                                color={focused ? colors.darkBlue : colors.lightGray}/>
                        )
                    default:
                        return <View/>
                }
            },
            showLabel: false,
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.purple,
            tabBarInactiveTintColor: colors.lightGray,
            
        })}
        initialRouteName={props.name}
        swipeEnabled={false}
    >
        <Tab.Screen name="Przeglądaj" component={HomeNavigator}/>
        <Tab.Screen name="Ulubione" component={FavoritesNavigator}/>
        <Tab.Screen name="Wiadomości" component={MessagesNavigator}/>    
    </Tab.Navigator>
)

export default TabNavigator;