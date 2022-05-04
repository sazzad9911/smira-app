import React from 'react';
import { View, Text, Image, Dimensions, } from 'react-native'

const Brands = (props) => {
    const window = Dimensions.get('window')
    return (
        <View style={{
            shadowColor: 'gray',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.6,
            shadowRadius: 5,
            marginRight: 5,
            backgroundColor:'white',
            elevation:5,
            borderRadius:10
        }}>
            <Image style={{
                height: window.width/3-20,
                width: window.width/3-20, 
                backgroundColor: 'red', 
                borderRadius: 10,


            }} source={{ uri: props.img }} />
        </View>
    );
};

export default Brands;