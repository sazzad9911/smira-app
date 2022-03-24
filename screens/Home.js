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
import Hotels from '../assets/svgtopng/Hotels.png'
import Health from '../assets/svgtopng/Health.png'
import Games from '../assets/svgtopng/Games.png'
import Camping from '../assets/svgtopng/Camping.png'
import Restaurant from '../assets/svgtopng/Restaurant.png'
import Services from '../assets/svgtopng/Services.png'
import Shopping from '../assets/svgtopng/Shopping.png'
import Travel from '../assets/svgtopng/Travel.png'
import Villas from '../assets/svgtopng/Villas.png'
import { HotelMemberCart } from './Hotel'
import Brands from '../components/Brands'
import SmallDealCart from './../components/SmallDealCart';

const window = Dimensions.get('window')
const Home = ({ navigation }) => {

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
            //icon set
          }
          <IconsSet onPress={() => {
            navigation.navigate('Category Single', { title: 'Popular Hotel' })
          }} name="Hotels" icon={Hotels} />
          <IconsSet onPress={() => {
            navigation.navigate('Category Single', { title: '' })
          }} name="Health" icon={Health} />
          <IconsSet onPress={() => {
            navigation.navigate('Category Single', { title: '' })
          }} name="Games" icon={Games} />
          <IconsSet onPress={() => {
            navigation.navigate('Category Single', { title: '' })
          }} name="Camping" icon={Camping} />
          <IconsSet onPress={() => {
            navigation.navigate('Category Single', { title: 'Restaurant' })
          }} name="Restaurant" icon={Restaurant} />
          <IconsSet onPress={() => {
            navigation.navigate('Category Single', { title: '' })
          }} name="Services" icon={Services} />
          <IconsSet onPress={() => {
            navigation.navigate('Category Single', { title: '' })
          }} name="Shopping" icon={Shopping} />
          <IconsSet onPress={() => {
            navigation.navigate('Category Single', { title: '' })
          }} name="Travel" icon={Travel} />

        </View>
      </View>
      <View style={{ borderWidth: 0.5, margin: 15, borderColor: 'rgb(220,220,220)' }}>
      </View>
      <View style={{ paddingLeft: 10, paddingRight: 10 }}>
        <View style={{
          width: '95%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, padding: 15 }}>Deals new you</Text>
          <AntDesign onPress={() => {
            navigation.navigate('Category Single', { title: 'Popular Hotel' })
          }} name="rightcircle" size={24} color="#585858" />
        </View>
        <ScrollView horizontal={true} >
          <SmallDealCart icon='https://www.kindpng.com/picc/m/310-3105450_special-offer-banner-png-transparent-png.png'
            img='https://www.daily-sun.com/assets/news_images/2019/09/23/Dailysun-2019-04-22-14.jpg'
            title='Flat 25% OFF on all orders'
          />
          <SmallDealCart icon='https://www.kindpng.com/picc/m/310-3105450_special-offer-banner-png-transparent-png.png'
            img='https://www.daily-sun.com/assets/news_images/2019/09/23/Dailysun-2019-04-22-14.jpg'
            title='Flat 25% OFF on all orders'
          />
          <SmallDealCart icon='https://www.kindpng.com/picc/m/310-3105450_special-offer-banner-png-transparent-png.png'
            img='https://www.daily-sun.com/assets/news_images/2019/09/23/Dailysun-2019-04-22-14.jpg'
            title='Flat 25% OFF on all orders'
          />
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
          <Brands img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScyH6_XNmOwHCPuZHCqk9aaHADZGHfp5-FyA&usqp=CAU' />
          <Brands img='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/deer-icon-animal-logo-fashion-brand-logo-design-template-a35052e08e1706a6a9118c70d812cf39_screen.jpg?ts=1597394386' />
          <Brands img="https://images-platform.99static.com/QaJZniGXtK44vAT6nYiN3NMNWD4=/146x111:1346x1311/500x500/top/smart/99designs-contests-attachments/94/94573/attachment_94573795" />
          <Brands img='https://cdn.logojoy.com/wp-content/uploads/2018/05/30143356/127.png' />
          <Brands img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDKWW0BdV2kJicYJ4i00_PY9QstjrlUlb9Sg&usqp=CAU' />
        </ScrollView>
      </LinearGradient>

      <View style={{ width: '100%', backgroundColor: 'rgb(245,245,245)', paddinTop: 15, paddingBottom: 15 }}>
        <View style={{ marginTop: 25, marginBottom: 5, borderWidth: 0.5, borderColor: 'rgb(220,220,220)', width: '90%' }}></View>
        <View style={{
          width: '90%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10 }}>Popular Hotels</Text>
          <AntDesign onPress={() => {
            navigation.navigate('Category Single', { title: 'Popular Hotel' })
          }} name="rightcircle" size={24} color="#585858" />
        </View>
        <ScrollView horizontal={true} style={{ width: '100%', padding: 10 }}>
          <HotelMemberCart />
          <HotelMemberCart />
          <HotelMemberCart />
          <HotelMemberCart />
        </ScrollView>
      </View>
    </ScrollView>
  )
}

export default Home

export const IconsSet = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={{
      borderWidth: 1, borderColor: 'rgb(220,220,220)', minHeight: 80,
      width: 80, borderRadius: 10, margin: 5,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image style={{ width: 40, height: 40, margin: 5 }} source={props.icon} />
      <Text>{props.name}</Text>
    </TouchableOpacity>
  );
}