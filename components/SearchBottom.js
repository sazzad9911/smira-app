import React from 'react';
import { View, Dimensions } from 'react-native'
const window= Dimensions.get('window')

const SearchBottom = () => {
    return (
        <View style={{
            backgroundColor: 'red',
            width: window.width,
            height: 70,

        }}>

        </View>
    );
};

export default SearchBottom;