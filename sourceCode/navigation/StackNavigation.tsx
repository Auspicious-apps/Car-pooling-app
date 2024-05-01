import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "../Screens/onboarding";
import { ForgotPassword, Login, ResendEmail, SignUp } from "../Screens/authStack";
import TabNavigator from "./TabNavigation";
import DetailsScreen from "../Screens/allScreens/DetailsScreen";
import Monthlyplan from "../Screens/allScreens/Monthlyplan";
const StackNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName={ROUTE_NAMES.SplashScreen}
            screenOptions={{ headerShown: false, gestureEnabled: false, gestureDirection: 'horizontal'}} >
            <Stack.Screen name={ROUTE_NAMES.SplashScreen} component={SplashScreen} />
            <Stack.Screen name={ROUTE_NAMES.Login} component={Login} />
            <Stack.Screen name={ROUTE_NAMES.ForgotPassword} component={ForgotPassword} />
            <Stack.Screen name={ROUTE_NAMES.ResendEmail} component={ResendEmail} />
            <Stack.Screen name={ROUTE_NAMES.SignUp} component={SignUp} />
            <Stack.Screen name={ROUTE_NAMES.TabNavigator} component={TabNavigator} />
            <Stack.Screen name={ROUTE_NAMES.DetailScreen} component={DetailsScreen} />
            <Stack.Screen name={ROUTE_NAMES.Monthlyplan} component={Monthlyplan} />
        </Stack.Navigator>
    )
}

export default StackNavigation;



export const ROUTE_NAMES ={
    SplashScreen:"SplashScreen",
    Login:"Login",
    SignUp:"SignUp",
    ForgotPassword:"ForgotPassword",
    ResendEmail:"ResendEmail",
    TabNavigator:'TabNavigator',
    DetailScreen:'DetailScreen',
    Monthlyplan:'Monthlyplan'

}