import React from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const DestinationCart = () => {
    return (
        <TouchableOpacity style={{
            marginLeft:10,
            borderRadius:10,
            width:160,
            height:250
        }}>
            <Image style={{
                width: '100%',
                height: '100%',
                borderRadius: 10,
            }} source={{ uri:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=700&h=500&s=1'}}/>
            <LinearGradient style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                justifyContent:'flex-end',
                padding:20,
                borderRadius: 10,
            }} colors={['rgba(0, 0, 0, 0.183)', 'rgba(0, 0, 0, 0.836)']}>
            <Text style={{
                color:'white',
                fontSize:20,
                fontFamily:'PlusJakartaSansBold',
                textAlign: 'center',
                marginBottom:10
            }}>Goa</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default DestinationCart;