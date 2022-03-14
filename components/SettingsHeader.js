import React from 'react';
import { View, Text,Button } from 'react-native'

const Header = (props) => {
    const name = props.route.name;
    const navigation=props.navigation;

    return (
        <View style={{ flexDirection: 'row',justifyContent:'center',alignItems: 'center'}}>
            <Button title="Back" onPress={()=>navigation.navigate('Home')}/>
            <Text>{name}</Text>
        </View>
    );
};

export default Header;