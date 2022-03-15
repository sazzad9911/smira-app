import React from 'react';
import {View, Text,Platform} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const HotelGallaryHeader = (props) => {
    return (
        <View style={{
            height: Platform.OS=='ios'?120: 50,
            flexDirection:'row',
            alignItems: 'center',
        }}>
            <AntDesign name="left" size={24} color="black" />
            <Text>{props.title}</Text>
        </View>
    );
};

export default HotelGallaryHeader;