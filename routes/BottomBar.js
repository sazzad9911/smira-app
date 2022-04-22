import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './../screens/Home';
import Bottom from '../components/Bottom'
import OurBrand from '../screens/OurBrand';
import HomeHeader from "../components/HomeHeader";
import {Header} from '../screens/CategorySingleRoute';
import PopularHotel from './../screens/PopularHotel';
import PopularDeal from './../screens/PopularDeal';

const Tab = createBottomTabNavigator();


const BottomBar = () => {
    return (
        <Tab.Navigator tabBar={(props)=><Bottom {...props}/>}>
            <Tab.Screen options={{header:(props)=><HomeHeader {...props}/>}} name='Dashboard' component={Home} />
            <Tab.Screen options={{header:(props)=><Header title='Our Brands' {...props}/>}} name='OurBrand' component={OurBrand} />
            <Tab.Screen options={{header:(props)=><Header title='Hotels' {...props}/>}} name='Hotels' component={PopularHotel} />
            <Tab.Screen options={{header:(props)=><Header title='Restaurants' {...props}/>}} name='Restaurants' component={PopularDeal} />
        </Tab.Navigator>
    );
};

export default BottomBar;