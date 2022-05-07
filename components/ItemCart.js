import React from 'react';
import { TouchableOpacity, View, Dimensions, Image,Text } from 'react-native'

const ItemCart = (props) => {
    const window = Dimensions.get('window')
    return (
        <TouchableOpacity style={{
            width: window.width / 2 - 20,
            margin: 10,
            borderRadius:10
        }}>
            <Image style={{
                width: '100%',
                height: 130,
                borderRadius: 10,
            }} source={{ uri: props.img }} />
            <Text style={{
                fontFamily:'PlusJakartaSansBold',
                fontSize:18,
                marginLeft:10
            }}>{props.name}</Text>
            <Text style={{
                fontFamily:'PlusJakartaSans',
                fontSize:14,
                marginLeft:10
            }}>{props.item} places</Text>
        </TouchableOpacity>
    );
};

export default ItemCart;