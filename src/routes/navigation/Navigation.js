import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./tabs";

export default () => (
    <NavigationContainer>
        <TabNavigator/>
    </NavigationContainer>
)