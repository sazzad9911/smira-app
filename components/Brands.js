import React from 'react';
import { View, Text, Image } from 'react-native'

const Brands = (props) => {
    return (
        <Image style={{
            height: 80, width: 80, backgroundColor: 'red', borderRadius: 10, shadowColor: 'gray',
            shadowOffset: { width: 5, height: 5 }, shadowOpacity: 0.6, shadowRadius: 5, marginLeft: 5, marginRight: 5
        }} source={{ uri:props.img}}/>
    );
};

export default Brands;