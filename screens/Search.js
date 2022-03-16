import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, Dimensions } from 'react-native'
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


const Search = ({ navigation }) => {
  const [SearchParam, setSearchParams] = useState('Type')
  return (
    SearchParam != 'Type' ?
      (
        <Tab.Navigator tabBar={(props)=><SearchBottom {...props}/>}>
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
  const [Recents, setRecents] = useState([
    'Shirdi', 'Oven Story', 'Nashik', 'McDonalds', 'Lonavala',
    'Subway', 'Alibaug'
  ])
  const [TopBrands, setTopBrands] = useState([
    1, 2, 3, 4, 5
  ])
  const [YourDeals, setYourDeals] = useState([
    1, 2, 3, 4, 5
  ])
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


          <TextInput style={{ flex: 5, paddingLeft: 20 }}
            placeholder="Search" placeholderTextColor={'rgb(130,130,130)'} />
          <TouchableOpacity
            onPress={() => {
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
          Recents.map(recent => {
            return (
              <TouchableOpacity key={recent} style={{
                borderColor: 'rgb(200,200,200)', borderWidth: 1, paddingLeft: 20,
                paddingRight: 20, paddingTop: 10, paddingBottom: 10, borderRadius: 20,
                margin: 3.5
              }}>
                <Text style={{ color: 'rgb(130,130,130)' }}>{recent}</Text>
              </TouchableOpacity>
            );
          })
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
            TopBrands.map(brand => {
              return (
                <View key={brand}
                  style={{
                    height: 100, width: 100, backgroundColor: 'blue', borderRadius: 10,
                    marginBottom: 10, marginLeft: 4, marginRight: 4, marginTop: 5, shadowColor: 'black', shadowOffset: {
                      height: 0, width: 2
                    }, shadowOpacity: 0.5, shadowRadius: 5
                  }}>

                </View>
              );
            })
          }
        </ScrollView>
      </LinearGradient>
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 20, marginBottom: 10, marginLeft: 20, marginRight: 20 }}>Your Deals</Text>
        <ScrollView horizontal={true} >
          <View style={{ width: 10 }}></View>
          {
            YourDeals.map(deal => {
              return (
                <View key={deal} style={{
                  height: 130, width: 200, backgroundColor: 'white', borderRadius: 10,
                  shadowColor: 'gray',
                  shadowOffset: {
                    width: 2,
                    height: 2
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 5,
                  elevation: 10,
                  marginBottom: 15,
                  marginTop: 5,
                  marginLeft: 3,
                  marginRight: 3
                }}>
                  <View style={{ height: 70, width: 200, backgroundColor: 'red', borderRadius: 10 }}>

                  </View>
                  <View style={{ height: 60, width: 200, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Image source={testImage} style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: 'red' }} />
                    <Text style={{ width: 100, fontWeight: 'bold' }}>Flat 35% OFF On All Orders</Text>
                  </View>
                </View>
              );
            })
          }

        </ScrollView>
      </View>
    </ScrollView>
  )
}
