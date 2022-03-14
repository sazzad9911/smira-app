import React from 'react';
import {View,Text} from 'react-native'

const Hotel = (props) => {
    const params = props.route.params
    const navigation = props.navigation;

    return (
        <View>
            <Text>{params.title}</Text>
        </View>
    );
};

export default Hotel;