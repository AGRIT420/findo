import React from "react";
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../../../theme";
import { HomeNavigator, MessagesNavigator } from "../stacks";

const Tab = createBottomTabNavigator()

const TabNavigator = (props) => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
                switch(route.name) {
                    case 'Przeglądaj':
                        return(
                            <Text>XD</Text>
                        )
                    case 'Wiadomości':
                        return(
                            <Text>XD2</Text>
                        )
                    default:
                        return <View/>
                }
            },
            headerShown: false,
        })}
        initialRouteName={props.name}
        swipeEnabled={false}
    >
        <Tab.Screen name="Browse" component={HomeNavigator}/>
        <Tab.Screen name="Messages" component={MessagesNavigator}/>    
    </Tab.Navigator>
)

export default TabNavigator;