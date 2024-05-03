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
import GeneralScreen from "../Screens/allScreens/GeneralScreen";
import PartnershipBenefits from "../Screens/allScreens/PartnershipBenefits";
import SupporAssistance from "../Screens/allScreens/SupporAssistance";
import AboutSwift from "../Screens/allScreens/AboutSwift";
import PolicyScreen from "../Screens/allScreens/PolicyScreen";
import TermsScreen from "../Screens/allScreens/TermsScreen";
import RateUsScreen from "../Screens/allScreens/RateUsScreen";
import CheckoutScreen from "../Screens/allScreens/CheckoutScreen";
import PayCheckout from "../Screens/allScreens/PayCheckout";
import PaymentInfo from "../Screens/allScreens/PaymentInfo";
import AddCard from "../Screens/allScreens/AddCard";
import Paymentsucces from "../Screens/allScreens/Paymentsucces";
import CarReserved from "../Screens/allScreens/CarReserved";
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
            <Stack.Screen name={ROUTE_NAMES.GeneralScreen} component={GeneralScreen} />
            <Stack.Screen name={ROUTE_NAMES.PartnershipBenefits} component={PartnershipBenefits} />
            <Stack.Screen name={ROUTE_NAMES.SupportAssistance} component={SupporAssistance} />
            <Stack.Screen name={ROUTE_NAMES.AboutSwift} component={AboutSwift} />
            <Stack.Screen name={ROUTE_NAMES.PolicyScreen} component={PolicyScreen} />
            <Stack.Screen name={ROUTE_NAMES.TermsScreen} component={TermsScreen} />
            <Stack.Screen name={ROUTE_NAMES.RateUsScreen} component={RateUsScreen} />
            <Stack.Screen name={ROUTE_NAMES.CheckoutScreen} component={CheckoutScreen} />
            <Stack.Screen name={ROUTE_NAMES.PayCheckout} component={PayCheckout} />
            <Stack.Screen name={ROUTE_NAMES.PaymentInfo} component={PaymentInfo} />
            <Stack.Screen name={ROUTE_NAMES.AddCard} component={AddCard} />
            <Stack.Screen name={ROUTE_NAMES.Paymentsucces} component={Paymentsucces} />
            <Stack.Screen name={ROUTE_NAMES.CarReserved} component={CarReserved} />

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
    ChangePassword:'ChangePassword',
    GeneralScreen:'GeneralScreen',
    PartnershipBenefits:'PartnershipBenefits',
    SupportAssistance:'SupportAssistance',
    AboutSwift:'AboutSwift',
    PolicyScreen:'PolicyScreen',
    TermsScreen:'TermsScreen',
    RateUsScreen:'RateUsScreen',
    CheckoutScreen:'CheckoutScreen',
    PayCheckout:'PayCheckout',
    PaymentInfo:'PaymentInfo',
    AddCard:'AddCard',
    Paymentsucces:'Paymentsucces',
    CarReserved:'CarReserved',

}