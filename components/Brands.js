import React from 'react';
import { View, Text, Image, Dimensions, } from 'react-native'

const Brands = (props) => {
    const window = Dimensions.get('window')
    return (
        <View style={{
            shadowColor: 'black',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.6,
            shadowRadius: 5,
            marginRight: 5,
            elevation:5,
            borderRadius:10,
            margin:10
        }}>
            <Image style={{
                height: window.width/3-40,
                width: window.width/3-40,
                borderRadius: 10,
                backgroundColor:'transparent'
            }} source={{ uri: props.img }} />
        </View>
    );
};

export default Brands;