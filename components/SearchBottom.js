import React from 'react';
import { View, Dimensions, Modal, TouchableOpacity, ScrollView, Text } from 'react-native'
import Filter from './Filter';
import ShortBy from './ShortBy';
import { AntDesign } from '@expo/vector-icons'
const window = Dimensions.get('window')
import { short } from './Icon'
import { SvgXml } from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux'
import { setBottomSheet } from '../action'
import { backgroundColor, textColor } from './../assets/color';

const SearchBottom = (props) => {
    const dispatch = useDispatch()
    const darkMode = useSelector(state => state.pageSettings.darkMode)

    return (
        <View style={{
            width: window.width,
            height: 90,
            backgroundColor: backgroundColor(darkMode),
            padding: 10,
            paddingBottom: 20,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 5,

            elevation: 9,
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                <TouchableOpacity onPress={() => {
                    dispatch(setBottomSheet('shortBy'))
                }} style={{
                    borderColor: '#D8D8D8',
                    borderWidth: 1,
                    width: 65,
                    marginRight: 10,
                    height: 50,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <SvgXml xml={short} height="20" width="20" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    dispatch(setBottomSheet('filter'))
                }} style={{
                    borderColor: '#D8D8D8',
                    borderWidth: 1,
                    width: 245,
                    marginRight: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 50,
                    borderRadius: 30,
                    marginLeft: 20,
                    fontFamily: 'PlusJakartaSans'
                }}>
                    <Text style={{
                        color: textColor(darkMode)
                    }}>Brands     |     Filters</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SearchBottom;