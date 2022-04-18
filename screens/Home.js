import {
  Image, ScrollView, StyleSheet, Text,
  TouchableOpacity, View, StatusBar, Dimensions, ActivityIndicator
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
import Spa from '../assets/svgtopng/Spa.png'
import arrow from '../assets/svgtopng/arrow.png'
import { HotelMemberCart } from './Hotel'
import Brands from '../components/Brands'
import SmallDealCart from './../components/SmallDealCart';
import { postData, url } from '../action';
import { useDispatch } from 'react-redux';
import { setDeals, setBrands, setHotels, setUser } from '../action'
import { getAuth } from 'firebase/auth'
import app from '../firebase';

const window = Dimensions.get('window')
const auth = getAuth(app);
const Home = ({ navigation }) => {

  const [More, setMore] = React.useState(false)
  const [slider, setSlider] = React.useState(null)
  const [image, setImage] = React.useState(null)
  const [Brand, setBrand] = React.useState(null)
  const [BrandDeal, setBrandDeal] = React.useState(null)
  const [Hotel, setHotel] = React.useState(null)
  const dispatch = useDispatch()

  React.useEffect(() => {
    postData(url + "/getData", {
      tableName: 'user',
      condition: "uid=" + "'" + auth.currentUser.uid + "'"
    }).then(data => {
      if (Array.isArray(data)) {
        return dispatch(setUser(data))
      }
      console.log('Home.js->' + data.message)
    }).catch(err => {
      console.log('Home.js->' + err.code)
    })
  }, [])
  React.useEffect(() => {
    postData(url + "/getData", {
      tableName: "slider"
    }).then(data => {
      if (Array.isArray(data)) {
        setSlider(data)
        let arr = []
        data.forEach(data => {
          arr.push(data.image)
        })
        setImage(arr)
      }
    }).catch(err => {
      console.log(err.message);
    })
    postData(url + "/getData", {
      tableName: "brands",
      orderColumn: "popularity",
    }).then(data => {
      if (Array.isArray(data)) {
        setBrand(data);
        dispatch(setBrands(data));
      }
    }).catch(err => {
      console.log(err.message);
    })
  }, [])

  React.useEffect(() => {
    if (!Brand) {
      return
    }
    postData(url + "/getData", {
      tableName: 'deals',
      orderColumn: "date"
    }).then(data => {
      if (Array.isArray(data)) {
        let arr = []
        data.map((data) => {
          Brand.map(b => {
            if (b.id === data.brand_id) {
              let doc = { deal: data, brand: b }
              arr.push(doc)
            }
          })
        })
        setBrandDeal(arr)
        dispatch(setDeals(arr));
      }
    }).catch(err => {
      console.log(err)
    })
  }, [Brand])
  React.useEffect(() => {
    postData(url + "/getData", {
      tableName: 'hotels',
      orderColumn: 'popularity'
    }).then(data => {
      if (Array.isArray(data)) {
        dispatch(setHotels(data));
        setHotel(data)
      }
    }).catch(err => {
      console.log(err);
    })
  }, [])
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
        <View style={{
          height: 200,
          width: window.width - 30,
          borderRadius: 10,
          marginLeft: 15,
          justifyContent: 'center', alignItems: 'center'
        }}>
          {
            !image ? (
              <ActivityIndicator size="large" color="#FA454B" />
            ) : (
              <SliderBox images={image}
                paginationBoxVerticalPadding={10}
                autoplay
                circleLoop
                parentWidth={window.width - 30}
                ImageComponentStyle={{
                  borderRadius: 10,
                }}
              />
            )
          }
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
            //navigation.navigate('Category Single', { title: 'Health' })
          }} name="Health" icon={Health} />
          <IconsSet onPress={() => {
            //navigation.navigate('Category Single', { title: 'Games' })
          }} name="Games" icon={Games} />
          <IconsSet onPress={() => {
            //navigation.navigate('Category Single', { title: 'Camping' })
          }} name="Camping" icon={Camping} />
          <IconsSet onPress={() => {
            navigation.navigate('Category Single', { title: 'Restaurant' })
          }} name="Restaurant" icon={Restaurant} />
          <IconsSet onPress={() => {
            //navigation.navigate('Category Single', { title: 'Services' })
          }} name="Services" icon={Services} />
          <IconsSet onPress={() => {
            //navigation.navigate('Category Single', { title: 'Shopping' })
          }} name="Shopping" icon={Shopping} />
          <TouchableOpacity onPress={() => {
            setMore(!More)
          }} style={{
            borderWidth: 1, borderColor: 'rgb(220,220,220)', minHeight: 80,
            width: 80, borderRadius: 10, margin: 5,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <View style={{
              borderWidth: 1,
              borderRadius: 15,
              height: 28, width: 28,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <AntDesign name={More ? "left" : "right"} size={18} color="#FC444B" />
            </View>
            <Text style={{
              margin: 5
            }}>{More ? "Less" : "More"}</Text>
          </TouchableOpacity>
          {
            !More ? (
              <View></View>
            ) : (
              <View style={{ flexDirection: 'row', width: '87%' }}>
                <IconsSet onPress={() => {
                  //navigation.navigate('Category Single', { title: 'Travel' })
                }} name="Travel" icon={Travel} />
                <IconsSet onPress={() => {
                  //navigation.navigate('Category Single', { title: 'Villas' })
                }} name="Villas" icon={Villas} />
                <IconsSet onPress={() => {
                  //navigation.navigate('Category Single', { title: 'Spa' })
                }} name="Spa" icon={Spa} />
              </View>
            )
          }

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
          <Text style={{ fontWeight: 'bold', fontSize: 17, paddingHorizontal: 5, paddingVertical: 15 }}>Deals Near You</Text>
          <TouchableOpacity style={style.outline} onPress={() => {
            navigation.navigate('Category Single', { title: 'Deals Near You' })
          }}>
            <AntDesign name="right" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} >

          {
            BrandDeal ? (
              BrandDeal.map(d => (
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
            Brand ? (
              Brand.map(d => (
                <Brands key={d.id} data={d} img={d.image} />
              ))
            ) : (
              <ActivityIndicator size="large" color="#FA454B" />
            )
          }
        </ScrollView>
      </LinearGradient>

      <View style={{ width: '100%', backgroundColor: 'rgb(245,245,245)', paddingTop: 15, paddingBottom: 15 }}>
        <View style={{ borderWidth: 0.5, margin: 15, borderColor: 'rgb(220,220,220)' }}>
        </View>
        <View style={{
          width: '95%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10 }}>Popular Hotels</Text>
          <TouchableOpacity style={style.outline} onPress={() => {
            navigation.navigate('Category Single', { title: 'Popular Hotel' })
          }}>
            <AntDesign name="right" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true}>
          <View style={{ width: 10 }}></View>
          {
            Hotel ? (
              Hotel.map(d => (
                <HotelMemberCart key={d.id} data={d} />
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

export default Home

export const IconsSet = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[{
      borderWidth: 1, borderColor: 'rgb(220,220,220)', minHeight: 80,
      width: 80, borderRadius: 10, margin: 5,
      justifyContent: 'center',
      alignItems: 'center'
    }, props.style]}>
      <Image style={{ width: 25, height: 25, margin: 5 }} source={props.icon} />
      <Text>{props.name}</Text>
    </TouchableOpacity>
  );
}
const style = StyleSheet.create({
  outline: {
    borderRadius: 15,
    height: 28, width: 28,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#D8D8D8'
  }
})