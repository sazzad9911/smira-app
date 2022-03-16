import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import Cards from '../components/Cards';
import tub from '../assets/tub.png';

const SearchHotel = (props) => {
    const navigation = props.navigation
    return (
        <ScrollView>
            <Header navigation={navigation} />
            <View style={{
                flexDirection: 'row',
                padding: 5,
                justifyContent: 'space-between',
                paddingHorizontal: 10
            }}>
                <Text>2 Deals Found</Text>
                <View style={{ flexDirection: 'row' }}>
                    <MaterialIcons name="verified" size={24} color="green" />
                    <Text style={{ marginLeft: 5 }}>Free For Members</Text>
                </View>
            </View>
            <Cards navigation={navigation} img={tub} title="On the go"
                address="Alibaug, Maharashtra" />
            <Cards navigation={navigation} img={tub} title="On the go"
                address="Alibaug, Maharashtra" />
        </ScrollView>
    );
};

export default SearchHotel;

export const Header = (props) => {
    const navigation = props.navigation
    const [SearchParam, setSearchParams] = useState('Hotels')
    return (
        <View style={{
            backgroundColor: "#FA454B", width: '100%', minHeight: 100,
            justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center',
            paddingLeft: 10, paddingRight: 10, paddingTop: Platform.OS == 'ios' ? 40 : 0
        }}>
            <View style={{
                width: '90%', backgroundColor: 'white', height: 50,
                borderRadius: 50,
                flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
            }}>


                <TextInput style={{ flex: 5, paddingLeft: 20 }}
                    placeholder="Search" placeholderTextColor={'rgb(130,130,130)'} />
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('SearchDeal')
                    }}
                    style={{
                        flex: 2, backgroundColor: 'rgb(220,220,220)', height: '100%',
                        borderTopRightRadius: 30, borderBottomRightRadius: 30, justifyContent: 'center', alignItems: 'center'
                    }}>
                    <Text style={{ color: 'rgb(130,130,130)', }}>Hotels</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => {
                navigation.navigate('Home')
            }} style={{ width: '10%', alignItems: 'flex-end' }}>
                <MaterialIcons name="close" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}
