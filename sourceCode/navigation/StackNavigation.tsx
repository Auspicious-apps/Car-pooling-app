import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "../Screens/onboarding";
import { ForgotPassword, Login, ResendEmail, SignUp } from "../Screens/authStack";
import TabNavigator from "./TabNavigation";
import DetailsScreen from "../Screens/allScreens/DetailsScreen";
import Monthlyplan from "../Screens/allScreens/Monthlyplan";
import PersonalInfo from "../Screens/allScreens/PersonalInfo";
import EditProfile from "../Screens/allScreens/EditProfile";
import Subscription from "../Screens/allScreens/Subscription";
import PickupScreen from "../Screens/allScreens/PickupScreen";
import SubMonthlyplan from "../Screens/allScreens/SubMonthlyplan";
import ChangePassword from "../Screens/allScreens/ChangePassword";
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
            <Stack.Screen name={ROUTE_NAMES.PersonalInfo} component={PersonalInfo} />
            <Stack.Screen name={ROUTE_NAMES.EditProfile} component={EditProfile} />
            <Stack.Screen name={ROUTE_NAMES.Subscription} component={Subscription} />
            <Stack.Screen name={ROUTE_NAMES.SubMonthlyplan} component={SubMonthlyplan} />
            <Stack.Screen name={ROUTE_NAMES.ChangePassword} component={ChangePassword} />
            <Stack.Screen name={ROUTE_NAMES.PickupScreen} component={PickupScreen} />
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
    Monthlyplan:'Monthlyplan',
    PersonalInfo:'PersonalInfo',
    EditProfile:'EditProfile',
    Subscription:'Subscription',
    PickupScreen:'PickupScreen',
    SubMonthlyplan:'SubMonthlyplan',
    ChangePassword:'ChangePassword'
}