import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

export default function Sidebar() {
    return (
        // <NavigationContainer>
        <Drawer.Navigator
            drawerContent={(props)=><CustomDrawer {...props} />}
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#333'
                },
                headerTitleStyle: {
                    color: '#fff'
                },
                headerTintColor: '#fff',
                drawerStyle: {
                    backgroundColor: '#22629e',
                    width: 240,
                },
            }}
            initialRouteName="Home">
            <Drawer.Screen
                name="Task App"
                component={HomeScreen} />
            <Drawer.Screen
                name="Profile"
                component={ProfileScreen} />
        </Drawer.Navigator>
        // </NavigationContainer>
    )
}
