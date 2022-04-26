import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';
import { useSelector } from 'react-redux';
import { backgroundColor } from '../assets/color';
import { textColor } from './../assets/color';

const SettingsHeader = (props) => {
    const name = props.route.name;
    const navigation = props.navigation;
    const darkMode=useSelector(state=>state.pageSettings.darkMode)
    return (
        <View style={{
            height: Platform.OS == 'ios' ? 120 : 50,
            flexDirection: 'row',
            backgroundColor:backgroundColor(darkMode)
        }}>
            <TouchableOpacity onPress={() => {
                navigation.goBack();
            }} style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <AntDesign name="left" size={20} color="#808080" />
            </TouchableOpacity>
            <View style={{
                flex: 8,
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <Text style={{
                    fontSize: 20,
                    marginLeft: -40,
                    fontSize: 16,
                    fontFamily: 'PlusJakartaSansBold',
                    color:textColor(darkMode)
                }}>{name}</Text>
            </View>
        </View>
    );
};

export default SettingsHeader;
