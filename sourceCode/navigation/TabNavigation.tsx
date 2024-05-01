import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, View } from "react-native";
import { AvailiableCars, KeysScreen, PerformScreen, SettingsScreen, UserScreen } from "../Screens/allScreens/tabScreens";
import { imgUrl } from "../constant";
const Tab = createBottomTabNavigator();
const TabNavigator = () => {

    return (

        <Tab.Navigator
            initialRouteName={TAB_ROUTES.AvailiableCars}
           
            screenOptions={{
                tabBarActiveTintColor: '#57E667',
                tabBarInactiveTintColor: "red",
                tabBarLabelStyle: { fontSize: 16 },
                tabBarStyle: styles.tabBarStyle,
                
            }}>
            <Tab.Screen
                name={TAB_ROUTES.AvailiableCars}
                component={AvailiableCars}
                options={{
                    tabBarItemStyle: styles.tabBarItemStyle,
                    tabBarLabel: 'Cars',
                    headerShown: false,
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarIcon: ({focused}) => { return <Image style={[focused?  styles.iconFocus :styles.icon]} source={imgUrl.tabCar} /> },
                }} />
            <Tab.Screen
                name={TAB_ROUTES.KeysScreen}
                component={KeysScreen}
                options={{
                    tabBarItemStyle: styles.tabBarItemStyle,
                    tabBarLabel: 'Keys',
                    headerShown: false,
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarIcon: ({focused}) => { return <Image style={[focused?  styles.iconFocus :styles.icon]} source={imgUrl.tabkey} /> },
                }} />

            <Tab.Screen
                name={TAB_ROUTES.PerformScreen}
                component={PerformScreen}
                options={{
                    tabBarItemStyle: styles.tabBarItemStyle,
                    tabBarLabel: 'Performance',
                    headerShown: false,
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarIcon: ({focused}) => { return <Image style={[focused?  styles.iconFocus :styles.icon]} source={imgUrl.tabperform} /> },
                }} />

            <Tab.Screen
                name={TAB_ROUTES.UserScreen}
                component={UserScreen}
                options={{
                    tabBarItemStyle: styles.tabBarItemStyle,
                    tabBarLabel: 'My Profile',
                    headerShown: false,
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarIcon: ({focused}) => { return <Image style={[focused?  styles.iconFocus :styles.icon]} source={imgUrl.tabUser} /> },
                }} />

            <Tab.Screen
                name={TAB_ROUTES.SettingsScreen}
                component={SettingsScreen}
                options={{
                    tabBarItemStyle: styles.tabBarItemStyle,
                    tabBarLabel: 'Settings',
                    headerShown: false,
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarIcon: ({focused}) => { return <Image style={[focused?  styles.iconFocus :styles.icon]} source={imgUrl.tabsettings} /> },
                }} />
        </Tab.Navigator>

    )
}

export default TabNavigator

const styles = StyleSheet.create({

    tabBarStyle: {
        display: 'flex',
        backgroundColor: '#191919',
        overflow: 'hidden',
        height: 52,
        borderColor: '#191919',
        borderWidth: 0,

    },
    tabBarItemStyle: {
        height: 52,
        paddingVertical: 5,
        
    },

    tabBarLabelStyle: { fontSize: 12, fontWeight: '300', lineHeight: 16, fontFamily: 'Poppins-Regular', color: "#8F9A90" },
    icon: { height: 20, width: 20, },
    iconFocus:{ height: 20, width: 20, tintColor:'#57E667'},

})

export const TAB_ROUTES = {
    AvailiableCars: "AvailiableCars",
    KeysScreen: "KeysScreen",
    PerformScreen: "PerformScreen",
    UserScreen: "UserScreen",
    SettingsScreen: "SettingsScreen"
}