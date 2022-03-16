
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import testImage from '../assets/favicon.png';
import DealCart from '../components/DealCart';
import SearchBottom from '../components/SearchBottom';
// import ActionSheet from '../components/ActionSheet';
const window = Dimensions.get('window')

const SearchDeals = (props) => {
    const navigation = props.navigation
    return (
        <ScrollView>
            <Header navigation={navigation}/>
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
            <View style={{
                padding: 5,
                alignItems: "center",
            }}>
                <View>
                    <DealCart headLine='Flat 35% OFF On All Order'
                        category='Ovenstory' img='https://www.daily-sun.com/assets/news_images/2019/09/23/Dailysun-2019-04-22-14.jpg'
                    />
                    <DealCart headLine='Flat 35% OFF On All Order'
                        category='Ovenstory' img='https://www.daily-sun.com/assets/news_images/2019/09/23/Dailysun-2019-04-22-14.jpg'
                    />
                    <DealCart headLine='Flat 35% OFF On All Order'
                        category='Ovenstory' img='https://www.daily-sun.com/assets/news_images/2019/09/23/Dailysun-2019-04-22-14.jpg'
                    />
                    <DealCart headLine='Flat 35% OFF On All Order'
                        category='Ovenstory' img='https://www.daily-sun.com/assets/news_images/2019/09/23/Dailysun-2019-04-22-14.jpg'
                    />
                </View>
            </View>
        </ScrollView>
    )
};

export default SearchDeals;
export const Header = (props) => {
    const navigation = props.navigation
    const [SearchParam, setSearchParams] = useState('Deals')
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
              navigation.navigate('SearchHotel')
            }}
            style={{
              flex: 2, backgroundColor: 'rgb(220,220,220)', height: '100%',
              borderTopRightRadius: 30, borderBottomRightRadius: 30, justifyContent: 'center', alignItems: 'center'
            }}>
            <Text style={{ color: 'rgb(130,130,130)', }}>{SearchParam}</Text>
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
  