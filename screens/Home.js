import {
  Image, ScrollView, StyleSheet, Text,
  TouchableOpacity, View, StatusBar, Dimensions
} from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import testImage from '../assets/favicon.png';
import { LinearGradient } from 'expo-linear-gradient';
import { SliderBox } from "react-native-image-slider-box";
//------------------------------------------------------------------------------
import Hotels from '../assets/Icons/Hotels.svg'

const window = Dimensions.get('window')
const Home = ({ navigation }) => {
  const [Options, setOptions] = useState([
    {
      id: 1,
      img: Hotels
    },

  ]);
  const [TopBrands, setTopBrands] = useState([
    1, 2, 3, 4, 5
  ]);
  const images = [
    "https://d2eohwa6gpdg50.cloudfront.net/wp-content/uploads/sites/4/2021/12/28134738/sam-moqadam-yxZSAjyToP4-unsplash-scaled-1-1275x900.jpg",
    "https://121clicks.com/wp-content/uploads/2021/05/food_photography_tips_01.jpg"
  ]
  return (
    <ScrollView>
      <StatusBar animated={true} backgroundColor='#FA454B' />
      <TouchableOpacity style={{
        borderWidth: 1, borderColor: 'rgb(220,220,220)',
        justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',
        margin: 15, padding: 10, borderRadius: 100
      }} onPress={() => {
        navigation.navigate('Search')
      }}>
        <AntDesign name='search1' size={25} style={{ flex: 1 }} />
        <Text style={{ flex: 6, color: 'rgb(130,130,130)' }}
          placeholderTextColor={'rgb(130,130,130)'} >Hotels, Deals, Restaurants, etc</Text>
      </TouchableOpacity>
      <View style={{ width: '100%' }}>
        <View style={{ minHeight: 200, borderRadius: 10, marginLeft: 15 }}>
          <SliderBox images={images}
            paginationBoxVerticalPadding={10}
            autoplay
            circleLoop
            parentWidth={window.width - 30}
          />
        </View>
      </View>
      <View style={{ borderWidth: 0.5, margin: 15, borderColor: 'rgb(220,220,220)' }}>
      </View>

      <View>
        <View style={{
          flexDirection: 'row', flexWrap: 'wrap',
          justifyContent: 'center', alignItems: 'center'
        }}>
          {
            Options.map(opt => {
              return (
                <View key={opt.id} style={{
                  borderWidth: 1, borderColor: 'rgb(220,220,220)', height: 80,
                  width: 80, borderRadius: 10, margin: 5,
                }}>
                  
                </View>
              );
            })
          }
        </View>
      </View>
      <View style={{ borderWidth: 0.5, margin: 15, borderColor: 'rgb(220,220,220)' }}>
      </View>
      <View style={{ paddingLeft: 10, paddingRight: 10 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 17, padding: 15 }}>Deals new you</Text>
        <ScrollView horizontal={true} >
          <View style={{ width: 5 }}></View>
          <View style={{
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
          <View style={{
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
          <View style={{
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
        </ScrollView>
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

      <View style={{ width: '100%', backgroundColor: 'rgb(245,245,245)', paddinTop: 15, paddingBottom: 15 }}>
        <View style={{ marginTop: 25, marginBottom: 5, borderWidth: 0.5, borderColor: 'rgb(220,220,220)', width: '90%' }}></View>
        <View style={{ width: '100%' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10 }}>Popular Hotels</Text>
        </View>
        <ScrollView horizontal={true} style={{ width: '100%' }}>
          <View style={{ height: 200, width: 200, backgroundColor: 'gray', borderRadius: 15, margin: 10 }}>

          </View>
          <View style={{ height: 200, width: 200, backgroundColor: 'gray', borderRadius: 15, margin: 10 }}>

          </View>
          <View style={{ height: 200, width: 200, backgroundColor: 'gray', borderRadius: 15, margin: 10 }}>

          </View>
          <View style={{ height: 200, width: 200, backgroundColor: 'gray', borderRadius: 15, margin: 10 }}>

          </View>
        </ScrollView>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})