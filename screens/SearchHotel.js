import { Image, ScrollView, StyleSheet, Text, TextInput,
     TouchableOpacity, View, Platform, Dimensions, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import Cards from '../components/Cards';
import { getData, storeData } from './Search'
import { useSelector } from 'react-redux';
import { postData, url, setLoader } from '../action';
import {useDispatch} from 'react-redux'
 
const SearchHotel = (props) => {
    const navigation = props.navigation
    const [SearchParam, setSearchParams] = React.useState(null)
    const [HotelData, setHotelData] = React.useState(null)
    const recentSearch=useSelector(state => state.recentSearch);

    React.useEffect(() => {
        getData('search').then((data) => {
            if (data) {
                setSearchParams(data[data.length - 1])
                //console.log(data[data.length - 1])
            }
        })
    },[])
    React.useEffect(() => {
        //console.log(recentSearch)
        postData(url + '/searchData', {
            tableName: 'hotels',
            searchColumn: 'name',
            searchData: SearchParam,
            orderColumn:recentSearch.shortBy,
            filterColumn:'categories',
            filterValue:recentSearch.category,
            betweenColumn:'ratings',
            betweenB:recentSearch.rating,
            betweenA:recentSearch.rating-1,

        }).then(data => {
            if (Array.isArray(data)) {
                setHotelData(data)
                return
            }
            console.log(data.message)
        }).catch(err => {
            console.log('Error: SearchHotel.js->'+ err.message)
        })
    }, [SearchParam+recentSearch.shortBy+recentSearch.rating+recentSearch.category])
    return (
        <ScrollView>
            <Header onChange={setSearchParams} search={SearchParam}
                navigation={navigation} />
            <View style={{
                flexDirection: 'row',
                padding: 5,
                justifyContent: 'space-between',
                paddingHorizontal: 10
            }}>
                <Text>{HotelData? HotelData.length:'0'} Hotels Found</Text>
                <View style={{ flexDirection: 'row' }}>
                    <MaterialIcons name="verified" size={24} color="green" />
                    <Text style={{ marginLeft: 5 }}>Free For Members</Text>
                </View>
            </View>
            {
                HotelData ? (
                    HotelData.map(doc => (
                        <Cards key={doc.id} doc={doc} navigation={navigation} 
                        img={{uri: doc.image}} title={doc.name}
                            address={doc.address} rating={doc.ratings}/>
                    ))
                ):(
                    <ActivityIndicator size="large" color="#FA454B" />
                )
            }
        </ScrollView>
    );
};

export default SearchHotel;

export const Header = (props) => {
    const navigation = props.navigation
    const [SearchParam, setSearchParams] = useState('Hotels')
    const dispatch = useDispatch()
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


                <TextInput value={props.search} onChangeText={props.onChange} style={{ flex: 5, paddingLeft: 20 }}
                    placeholder="Search" placeholderTextColor={'rgb(130,130,130)'} />
                <TouchableOpacity
                    onPress={() => {
                        dispatch(setLoader('SearchDeal'))
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
