import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './../screens/Home';
import Bottom from '../components/Bottom'

const Tab = createBottomTabNavigator();


const BottomBar = () => {
    return (
        <Tab.Navigator tabBar={(props)=><Bottom {...props}/>}>
            <Tab.Screen options={{headerShown: false}} name='Dashboard' component={Home} />
        </Tab.Navigator>
    );
};

export default BottomBar;