import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector, useDispatch } from 'react-redux'
import { setLoader } from '../action';

const DestinationCart = (props) => {
    const data = props.data
    const navigation = props.navigation;
    const dispatch = useDispatch()
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('Category Single', { title: 'Hotels',search: data.city})
            dispatch(setLoader('Hotels'))
        }} style={{
            marginLeft: 10,
            borderRadius: 10,
            width: 160,
            height: 250
        }}> 
            <Image style={{
                width: '100%',
                height: '100%',
                borderRadius: 10,
            }} source={{ uri: data.image }} />
            <LinearGradient style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                justifyContent: 'flex-end',
                padding: 10,
                borderRadius: 10,
            }} colors={['rgba(0, 0, 0, 0.183)', 'rgba(0, 0, 0, 0.836)']}>
                <Text style={{
                    color: 'white',
                    fontSize: 18,
                    fontFamily: 'PlusJakartaSansBold',
                    textAlign: 'center',
                    marginBottom: 10
                }}>{data.city}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default DestinationCart;