import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from './../screens/Onboarding';
import SignUp from './../screens/SignUp';
import SignIn from './../screens/SignIn';
import DrawerApp from './Drawer';
import {View,Text} from 'react-native'
import AnimatedLoader from 'react-native-animated-loader'
const Stack = createStackNavigator();

const StackNavigation = () => {


    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Onboarding" component={Onboarding} />
                <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
                <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
                <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={Dashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigation;

const Dashboard = () => {
    return (
        <DrawerApp />
    )
}