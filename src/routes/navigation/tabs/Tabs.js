import React from "react";
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../../../theme";
import { HomeNavigator, FavoritesNavigator, MessagesNavigator } from "../stacks";
import Icon from 'react-native-vector-icons/Foundation';

const Tab = createBottomTabNavigator()

//const slidersIcon = ;

const TabNavigator = (props) => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
                switch(route.name) {
                    case 'Przeglądaj':
                        return(
                            <Icon
                                name="home" 
                                size={24} 
                                color={focused ? colors.blue : colors.lightGray}/>
                        )
                    case 'Ulubione':
                        return(
                            <Icon
                                name="heart" 
                                size={24} 
                                color={focused ? colors.blue : colors.lightGray}/>
                        )
                    case 'Wiadomości':
                        return(
                            <Icon 
                                name="comments" 
                                size={24} 
                                color={focused ? colors.blue : colors.lightGray}/>
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