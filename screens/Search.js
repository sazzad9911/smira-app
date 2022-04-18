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
// import ActionSheet from '../components/ActionSheet';
import SearchDeals from './SearchDeals';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SearchHotel from './SearchHotel';

const window = Dimensions.get('window')
const Tab = createBottomTabNavigator();
import { useSelector, useDispatch } from 'react-redux'
import Brands from '../components/Brands';
import SmallDealCart from '../components/SmallDealCart';
import { setRecentSearch } from '../action';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeData = async (key,value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    // saving error
    console.log('Error: Search.js->'+e.message)
  }
}

export const getData = async (key) => {
try {
  const jsonValue = await AsyncStorage.getItem(key)
  return jsonValue != null ? JSON.parse(jsonValue) : null;
} catch(e) {
  // error reading value
  console.log('Error: Search.js->'+e.message)
}
}
 
const Search = ({ navigation }) => {
  const [SearchParam, setSearchParams] = useState('Type')

  return (
    SearchParam != 'Type' ?
      (
        <Tab.Navigator tabBar={(props) => <SearchBottom {...props}/>}>
          <Tab.Screen options={{ headerShown: false }} name="SearchHotel" component={SearchHotel} />
          <Tab.Screen options={{
            headerShown: false
          }} name="SearchDeal" component={SearchDeals} />

        </Tab.Navigator>
      ) :
      (
        <Hotels
          SearchParam={SearchParam}
          setSearchParams={setSearchParams}
          navigation={navigation}
        />
      )
  )
}

export default Search

const Hotels = (props) => {
  const recent = useSelector(state => state.recentSearch)
  const brands = useSelector(state => state.brands)
  const deals = useSelector(state => state.deals)
  const [search, setSearch] = React.useState('')
  const [data,setData] = React.useState(null)
  React.useEffect(()=>{
    getData('search').then((data) => {
      if(Array.isArray(data)){
        setData(data)
      }else{
        setData([])
      }
    })
  },[])
  return (
    <ScrollView>
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


          <TextInput value={search} onChangeText={setSearch} style={{ flex: 5, paddingLeft: 20 }}
            placeholder="Search" placeholderTextColor={'rgb(130,130,130)'} />
          <TouchableOpacity
            onPress={() => {
              const get=getData('search').then((data) => {
                if(data){
                let arr = data;
                arr.push(search);
                  storeData('search', arr).catch(err=>{
                    console.log('Error: Search.js->'+err.message);
                  })
              }else{
                let arr = [];
                arr.push(search);
                storeData('search', arr).catch(err => {
                  console.log('Error: Search.js->'+err.message)
                })
              }
              })
              if (props.SearchParam === 'Hotels') {
                props.setSearchParams('Deals')
              } else {
                props.setSearchParams('Hotels')
              }
            }}
            style={{
              flex: 2, backgroundColor: 'rgb(220,220,220)', height: '100%',
              borderTopRightRadius: 30, borderBottomRightRadius: 30, justifyContent: 'center', alignItems: 'center'
            }}>
            <Text style={{ color: 'rgb(130,130,130)', }}>{props.SearchParam}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => {
          props.navigation.goBack()
        }} style={{ width: '10%', alignItems: 'flex-end' }}>
          <MaterialIcons name="close" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20, paddingBottom: 10 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Recent</Text>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 10, paddingRight: 10 }}>
        {
          data?(
            data.slice(Math.max(data.length - 7, 0)).map((doc,i) => {
            return (
              <TouchableOpacity onPress={() => {
                setSearch(doc)
              }} key={i} style={{
                borderColor: 'rgb(200,200,200)', borderWidth: 1, paddingLeft: 20,
                paddingRight: 20, paddingTop: 10, paddingBottom: 10, borderRadius: 20,
                margin: 3.5
              }}>
                <Text style={{ color: 'rgb(130,130,130)' }}>{doc}</Text>
              </TouchableOpacity>
            );
          })
          ):(
            <ActivityIndicator size="large" color="#FA454B" />
          )
        }
      </View>
      <LinearGradient style={{ width: '100%', marginTop: 15, flexDirection: 'column' }}
        colors={['#E00006', '#FB8B97']}
        start={[0, 1]} end={[1, 0]}
      >
        <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 20, paddingTop: 20, paddingBottom: 8 }}>
          <View>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Save on top brands</Text>
            <Text style={{ color: 'white', marginTop: 5, }}>Save big on most popular brands with us</Text>
          </View>
        </View>
        <ScrollView style={{ flex: 3, marginBottom: 10 }} horizontal={true}>
          <View style={{ width: 10 }}></View>
          {
            brands ? (
              brands.map(brand => {
                return (
                  <Brands key={brand.id} data={brand} img={brand.image} />
                );
              })
            ) : (
              <ActivityIndicator size="large" color="#FA454B" />
            )
          }
        </ScrollView>
      </LinearGradient>
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 20, marginBottom: 10, marginLeft: 20, marginRight: 20 }}>Your Deals</Text>
        <ScrollView horizontal={true} >
          <View style={{ width: 10 }}></View>
          {
            deals ? (
              deals.map(d => (
                <SmallDealCart key={d.deal.id} icon={d.brand.image}
                  img={d.deal.image}
                  title={d.deal.name}
                />
              ))
            ) : (
              <ActivityIndicator size="large" color="#FA454B" />
            )
          }

        </ScrollView>
      </View>
    </ScrollView>
  )
}
