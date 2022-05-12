import React from 'react';
import { View,ScrollView} from 'react-native'
import {useSelector} from 'react-redux'
import { backgroundColor } from '../assets/color';
import SalonCart from '../components/SalonCart';
import {useDispatch} from 'react-redux'

const Salon = () => {
    const darkMode = useSelector(state => state.pageSettings.darkMode)
    const brands = useSelector(state => state.brands)
    return (
        <ScrollView style={{backgroundColor: backgroundColor(darkMode)}}>
        {
            brands ? (
                brands.map((doc,i)=>(
                    <SalonCart data={doc} key={i}/>
                ))
            ):(
                <></>
            )
        }
        </ScrollView>
    );
};

export default Salon;