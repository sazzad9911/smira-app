import React from 'react';
import { View, Text, Image } from 'react-native'

const Brands = (props) => {
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
                height: 100, width: 100, backgroundColor: 'red', borderRadius: 10,


            }} source={{ uri: props.img }} />
        </View>
    );
};

export default Brands;