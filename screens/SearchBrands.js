
import {
    Image, ScrollView, StyleSheet, Text, TextInput,
    TouchableOpacity, View, Platform, Dimensions, ActivityIndicator
  } from 'react-native'
  import React, { useState } from 'react'
  import { MaterialIcons } from '@expo/vector-icons'
  import { LinearGradient } from 'expo-linear-gradient'
  import testImage from '../assets/favicon.png';
  import DealCart from '../components/DealCart';
  import SearchBottom from '../components/SearchBottom';
  import { getData, storeData } from './Search'
  import { useSelector, useDispatch } from 'react-redux';
  import { postData, url, setLoader } from '../action';
  import { Picker } from '@react-native-picker/picker';
  import SalonCart from '../components/SalonCart';
  // import ActionSheet from '../components/ActionSheet';
  const window = Dimensions.get('window')
  
  const SearchBrands = (props) => {
    const navigation = props.navigation
    const [SearchParam, setSearchParams] = React.useState(null)
    const [DealData, setDealData] = React.useState(null)
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
      postData(url + '/searchData', {
        tableName: 'brands',
        searchColumn: 'address',
        searchData: props.search,
      }).then(data => {
        if (Array.isArray(data)) {
          setDealData(data)
          return
        }
        console.log(data.message)
      }).catch(err => {
        console.log('Error: SearchHotel.js->' + err.message)
      })
    }, [SearchParam + recentSearch.shortBy + recentSearch.brand+props.search])
    return (
      <ScrollView>
        <View style={{
          flexDirection: 'row',
          padding: 5,
          justifyContent: 'space-between',
          paddingHorizontal: 10
        }}>
          <Text>{DealData ? DealData.length : '0'} Brands Found</Text>
          {/* <View style={{ flexDirection: 'row' }}>
            <MaterialIcons name="verified" size={24} color="green" />
            <Text style={{ marginLeft: 5 }}>Free For Members</Text>
          </View> */}
        </View>
        <View style={{
          padding: 0,
          alignItems: "center",
        }}>
          {
              DealData ? (
                DealData.map((doc,i) => (
                  <View key={doc.id} style={{width:'100%'}}>
                  <SalonCart data={doc} key={i}/>
                  </View>
                ))
              ) : (
                <ActivityIndicator size="large" color="#FA454B" />
              )
            }
        </View>
      </ScrollView>
    )
  };
  
  export default SearchBrands;
  