import React from 'react';
import { View, Text, TouchableOpacity,Platform } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const SettingsHeader = (props) => {
    const name = props.route.name;
    const navigation = props.navigation;

    return (
        <View style={{
            height: Platform.OS=='ios'?120: 50,
            flexDirection:'row'
        }}>
            <TouchableOpacity onPress={() =>{
                navigation.goBack();
            }} style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
            <View style={{
                flex: 8,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    fontSize:20,
                    marginLeft:-40
                }}>{name}</Text>
            </View>
        </View>
    );
};

export default SettingsHeader;
