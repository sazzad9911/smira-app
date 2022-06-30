import {
    Image, ScrollView, StyleSheet, Text, TextInput,
    TouchableOpacity, View, Platform, Dimensions, ActivityIndicator
} from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import Cards from '../components/Cards';
import { getData, storeData } from './Search'
import { useSelector } from 'react-redux';
import { postData, url, setLoader } from '../action';
import { useDispatch } from 'react-redux'
import { Picker } from '@react-native-picker/picker';

const SearchHotel = (props) => {
    const navigation = props.navigation
    const [SearchParam, setSearchParams] = React.useState(null)
    const [HotelData, setHotelData] = React.useState(null)
    const recentSearch = useSelector(state => state.recentSearch);

    React.useEffect(() => {
        getData('search').then((data) => {
            if (data) {
                setSearchParams(data[data.length - 1])
                //console.log(data[data.length - 1])
            }
        })
    }, [])
    React.useEffect(() => {
        //console.log(recentSearch)
        postData(url + '/getData', {
            tableName: 'hotels',
            condition:`name LIKE '${props.search}%' OR address LIKE '${props.search}%'`
        }).then(data => {
            if (Array.isArray(data)) {
                setHotelData(data)
                return
            }
            setHotelData([])
            console.log(data.message)
        }).catch(err => {
            console.log('Error: SearchHotel.js->' + err.message)
        })
    }, [props.search])
    return (
        <ScrollView>
            <View style={{
                flexDirection: 'row',
                padding: 5,
                justifyContent: 'space-between',
                paddingHorizontal: 10,
            }}>
                <Text style={{
                    fontSize: 13,
                    fontWeight: '500',
                    color: '#808080',
                    fontFamily: 'PlusJakartaSans',
                    marginLeft: 10
                }}>{HotelData ? HotelData.length : '0'} Hotels Found</Text>
                <View style={{ flexDirection: 'row' }}>
                    <MaterialIcons name="verified" size={23} color="green" />
                    <Text style={{
                        marginLeft: 5,
                        fontSize: 13,
                        fontWeight: '500',
                        color: '#000000', 
                        fontFamily: 'PlusJakartaSans',
                    }}>Free For Members</Text>
                </View>
            </View>
            {
                HotelData ? (
                    HotelData.map(doc => (
                        <Cards key={doc.id} doc={doc} navigation={navigation}
                                img={{ uri: doc.image }} title={doc.name}
                                address={doc.address} rating={doc.ratings} />
                    ))
                ) : (
                    <ActivityIndicator size="large" color="#FA454B" />
                )
            }
        </ScrollView>
    );
};

export default SearchHotel;