import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from "./StackNavigation";
const RootNavigator = () => {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    )
}

export default RootNavigator