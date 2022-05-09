import React from 'react';
import { View,ScrollView} from 'react-native'
import {useSelector} from 'react-redux'
import { backgroundColor } from '../assets/color';
import SalonCart from '../components/SalonCart';

const Salon = () => {
    const darkMode = useSelector(state => state.pageSettings.darkMode)
    return (
        <ScrollView style={{backgroundColor: backgroundColor(darkMode)}}>
            <SalonCart/>
            <SalonCart/>
            <SalonCart/>
            <SalonCart/>
            <SalonCart/>
            <SalonCart/>
            <SalonCart/>
            <SalonCart/>
        </ScrollView>
    );
};

export default Salon;