import React from 'react';
import {View, Text,Platform,TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const HotelGallaryHeader = (props) => {
    //const params = props.route.params

    return (
        <TouchableOpacity onPress={() =>props.navigation.goBack()} style={{
            height: Platform.OS=='ios'?120: 50,
            flexDirection:'row',
            alignItems: 'center',
            paddingLeft:10,
        }}>
            <AntDesign name="left" size={24} color="black" />
            <Text>{props.title}</Text>
        </TouchableOpacity>
    );
};

export default HotelGallaryHeader;