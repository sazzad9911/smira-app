import {
  Image, ScrollView, StyleSheet, Text,
  TouchableOpacity, View, StatusBar, Dimensions, ActivityIndicator, Modal, Alert, BackHandler,ImageBackground
} from 'react-native'
import React, { useState, useCallback, useMemo, useRef } from 'react'
import { AntDesign } from '@expo/vector-icons'
import testImage from '../assets/favicon.png';
import { SliderBox } from "react-native-image-slider-box";
//------------------------------------------------------------------------------
import arrow from '../assets/svgtopng/arrow.png'
import { HotelMemberCart } from './Hotel'
import Brands from '../components/Brands'
import SmallDealCart from './../components/SmallDealCart';
import { postData, url } from '../action';
import { useDispatch } from 'react-redux';
import { setDeals, setBrands, setHotels, setUser,setBottomSheet ,setAnimatedLoader,setNotifications} from '../action'
import { getAuth } from 'firebase/auth'
import app from '../firebase';
import { SvgXml } from 'react-native-svg';
import {
  Hotels, Health, Camping, Games,
  Restaurant, Services, Shopping, Spa_Salons, Travel, Villas
} from '../components/Icon';
import { FamilyCode } from './Account';
import { setLoader } from '../action'
import { backgroundColor, textColor } from './../assets/color';
import { useSelector } from 'react-redux';
import SliderCoupon from './SliderCoupon';
import ActivitiesCart from '../components/ActivitiesCart';
import Banner from './../components/Banner';
import DestinationCart from './../components/DestinationCart';
import NewDealCart from '../components/NewDealCart';
import Bottom from './../components/Bottom';
import ImageBanner from '../components/ImageBanner';
import ItemCart from '../components/ItemCart';
import SideSwipe from 'react-native-sideswipe';
import { useRoute } from '@react-navigation/native';
import {DetailsCart} from './../components/SalonCart';
import PopularDeals from '../views/PopularDeals'
import TopBrands from './../views/TopBrands';
import ActivitiesNearYou from './../views/ActivitiesNearYou';
import DestinationToGo from './../views/DestinationToGo';
import FeaturedHotel from './../views/FeaturedHotel';
import PopularOnlineRestaurants from './../views/PopularOnlineRestaurants';
import messaging from '@react-native-firebase/messaging';


const window = Dimensions.get('window')
const auth = getAuth(app);
const Home = ({ navigation }) => {

  const [More, setMore] = React.useState(false)
  const [slider, setSlider] = React.useState(null)
  const [image, setImage] = React.useState(null)
  const [BrandDeal, setBrandDeal] = React.useState(null)
  const [Deals, storeDeals] = React.useState(null)
  const [Hotel, setHotel] = React.useState(null)
  const dispatch = useDispatch()
  const darkMode = useSelector(state => state.pageSettings.darkMode)
  const [modalVisible, setModalVisible] = React.useState(false)
  const [SliderData, setSliderData] = React.useState(null)
  const [First, setFirst] = React.useState(null)
  const [Item, setItem] = React.useState([])
  const [NewData, setNewData] = React.useState(null)
  const [hasUnsavedChanges, setHasUnsavedChanges] = React.useState(null)
  const route = useRoute();
  const loader= useSelector(state => state.loader)
  const bottomSheet = useSelector(state => state.pageSettings.bottomSheet)
  const [secondBanner, setSecondBanner]=React.useState(null)
  const [Visible, setVisible]= React.useState(false)
  const [banner,setBanner]= React.useState()
  const brands = useSelector(state => state.brands)
  const notification= useSelector(state => state.notification)

  //notification token
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      getFcmToken() //<---- Add this
      console.log('Authorization status:', authStatus);
    }
  }
  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
     postData(url + '/updateData', {
      auth: auth.currentUser,
      tableName: 'user',
      columns: ['token'],
      values:[fcmToken],
      condition:`uid='${auth.currentUser.uid}'`
     }).then(res=>{
      console.log(`Home js:100${res}`)
     })
    } else {
     console.log("Failed", "No token received");
    }
  }
 
  React.useEffect(() => {
    requestUserPermission();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      postData(url + '/setData',{
        auth: auth.currentUser,
        tableName:'notification',
        columns:['name','description','uid'],
        values: [remoteMessage.notification.title,remoteMessage.notification.body,auth.currentUser.uid]
    }).then(response =>{
        console.log(response)
        dispatch(setNotifications(!notification))
    })
    });
    return unsubscribe;
   }, []);
  React.useEffect(() => {
    dispatch(setAnimatedLoader(false))
    dispatch(setBottomSheet(null))
    postData(url + "/getData", {
      tableName: 'user',
      condition: "uid=" + "'" + auth.currentUser.uid + "'"
    }).then(data => {
      if (Array.isArray(data)) {
        return dispatch(setUser(data))
      }
      console.log('Home.js->' + data.message)
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
        return setImage(arr)
      }
    })
  }, [])
  
  React.useEffect(() => {
    if (!brands) {
      return
    }
    let data = postData(url + "/getData", {
      tableName: 'deals',
      orderColumn: "date"
    }).then(data => {
      if (Array.isArray(data)) {
        storeDeals(data);
        let arr = []
        let category = ""
        data.map((data) => {
          category = category + data.type + ","
          brands.map(b => {
            if (b.id === data.brand_id) {
              let doc = { deal: data, brand: b }
              arr.push(doc)
            }
          })
        })
        let newData = category.split(',')
        newData = getUnique(newData)
        let z = []
        if (newData.length > 0) {
          z.push(newData.length)
        }
        if (newData.length > 4) {
          z.push(newData.length)
        } if (newData.length > 8) {
          z.push(newData.length)
        } if (newData.length > 12) {
          z.push(newData.length)
        }
        setNewData(newData)
        setItem(z)
        setBrandDeal(arr)
        
        return dispatch(setDeals(arr));
      }
    })
  }, [brands])
  function getUnique(array) {
    var uniqueArray = [];

    // Loop through array values
    for (var value of array) {
      if (uniqueArray.indexOf(value) === -1) {
        uniqueArray.push(value);
      }
    }
    return uniqueArray;
  }
  React.useEffect(() => {
    postData(url + "/getData", {
      tableName: "brands",
      orderColumn: "popularity",
    }).then(data => {
      if (Array.isArray(data)) {
        return dispatch(setBrands(data));
      }
      console.log(data.message)
    })
  }, [])
  
  //console.log(NewData)
  
  React.useEffect(() => {
    postData(url + '/getData', {
      tableName:'banner',
    }).then(data => {
      if(Array.isArray(data)){
        let first = data.filter(e => e.number == 1)
        if(first&&first.length > 0){
          setFirst(first[0])
        }
        let second=data.filter(e => e.number==2)
        if(second&&second.length > 0){
            setSecondBanner(second[0])
        }
        return setBanner(data)
      }
      console.log(data.message)
    })
  },[])

  React.useEffect(() => {
    console.log(route.name)
    const backAction = () => {
      if(!route.name){
        return true
      }
      
      dispatch(setBottomSheet(null))
     
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
  }, []);

  return (
    <View style={{
      height: '100%',
      width: '100%',
      backgroundColor: backgroundColor(darkMode)
    }}>
      <ScrollView showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <StatusBar animated={true} backgroundColor='#FA454B' />
        <TouchableOpacity style={{
          borderWidth: 1, borderColor: 'rgb(220,220,220)',
          justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',
          margin: 15, padding: 10, borderRadius: 100,
          backgroundColor: '#fff'
        }} onPress={() => {
          navigation.navigate('Search')
        }}>
          <SvgXml
            style={{ 
              marginRight: 20,
              marginLeft: 5,
            }}
            xml={darkMode ? `<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M8.83188 1.5C5.32322 1.5 2.47888 4.25814 2.47888 7.66049C2.47888 11.0628 5.32322 13.821 8.83188 13.821C12.3406 13.821 15.1849 11.0628 15.1849 7.66049C15.1849 4.25814 12.3406 1.5 8.83188 1.5ZM0.932007 7.66049C0.932007 3.42972 4.4689 0 8.83188 0C13.1949 0 16.7318 3.42972 16.7318 7.66049C16.7318 11.8913 13.1949 15.321 8.83188 15.321C4.4689 15.321 0.932007 11.8913 0.932007 7.66049Z" fill="white"/>
           <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2408 12.2963C13.5424 12.003 14.0321 12.0024 14.3346 12.2949L17.1286 14.9972C17.431 15.2897 17.4316 15.7646 17.13 16.0578C16.8283 16.3511 16.3386 16.3517 16.0362 16.0592L13.2422 13.3569C12.9398 13.0644 12.9391 12.5896 13.2408 12.2963Z" fill="white"/>
            </svg>
          `: `<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M8.83188 1.5C5.32322 1.5 2.47888 4.25814 2.47888 7.66049C2.47888 11.0628 5.32322 13.821 8.83188 13.821C12.3406 13.821 15.1849 11.0628 15.1849 7.66049C15.1849 4.25814 12.3406 1.5 8.83188 1.5ZM0.932007 7.66049C0.932007 3.42972 4.4689 0 8.83188 0C13.1949 0 16.7318 3.42972 16.7318 7.66049C16.7318 11.8913 13.1949 15.321 8.83188 15.321C4.4689 15.321 0.932007 11.8913 0.932007 7.66049Z" fill="black"/>
           <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2408 12.2963C13.5424 12.003 14.0321 12.0024 14.3346 12.2949L17.1286 14.9972C17.431 15.2897 17.4316 15.7646 17.13 16.0578C16.8283 16.3511 16.3386 16.3517 16.0362 16.0592L13.2422 13.3569C12.9398 13.0644 12.9391 12.5896 13.2408 12.2963Z" fill="black"/>
            </svg>
          `}
            height="20"
            width="20" />

          <Text style={{
            flex: 6,
            color: 'rgb(130,130,130)',
            fontFamily: 'PlusJakartaSans',
            fontSize: 12
          }}
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
                  onCurrentImagePressed={index => {
                    setSliderData(slider[index])
                    if(slider[index].brand_id){
                      setModalVisible(true)
                    }
                  }}
                />
              )
            }
          </View>
        </View>
        <View style={{
          backgroundColor: '#ffff', paddingTop: 10,
          paddingBottom: 10, marginTop: 10, marginBottom: 10
        }}>
          <View style={{
            flexDirection: 'row', flexWrap: 'wrap',
            alignItems: 'center', padding: 10, marginHorizontal: 10,
            }}>
            {
              //icon set
            }
            <IconsSet onPress={() => {
              navigation.navigate('Category Single', { title: 'Hotels',search:'a' })
              dispatch(setLoader('Hotels'))
            }} name="Hotels" icon={Hotels} />
            <IconsSet onPress={() => {
              navigation.navigate('Category Single', { title: 'Salon',search:'Restaurant' })
              dispatch(setLoader('Restaurant'))
            }} name="Restaurant" icon={Restaurant} />
            <IconsSet onPress={() => {
              navigation.navigate('Category Single', { title: 'Salon',search:'Games' })
              dispatch(setLoader('Games'))
            }} name="Games" icon={Games} />
            <IconsSet onPress={() => {
              navigation.navigate('Category Single', { title: 'Salon',search:'Shopping' })
              dispatch(setLoader('Shopping'))
            }} name="Shopping" icon={Shopping} />
            <IconsSet onPress={() => {
              navigation.navigate('Category Single', { title: 'Salon',search:'Villas' })
              dispatch(setLoader('Villas'))
            }} name="Villas" icon={Villas} />
            <IconsSet onPress={() => {
               navigation.navigate('Category Single', { title: 'Salon',search:'Camping' })
              dispatch(setLoader('Camping'))
            }} name="Camping" icon={Camping} />
            <IconsSet onPress={() => {
              navigation.navigate('Category Single', { title: 'Salon',search:'Travel' })
              dispatch(setLoader('Travel'))
            }} name="Travel" icon={Travel} />
            {
              More ? (
                <IconsSet onPress={() => {
                 navigation.navigate('Category Single', { title: 'Salon',search:'Health' })
                 dispatch(setLoader('Health'))
                }} name="Health" icon={Health} />
              ) : (<></>)
            }
            {
              More ? (
                <IconsSet onPress={() => {
                navigation.navigate('Category Single', { title: 'Salon',search:'Spa & Salons' })
                 dispatch(setLoader('Spa & Salons'))
                }} name="Spa & Salons" icon={Spa_Salons} />
              ) : (<></>)
            }
            {
              More ? (
                <IconsSet onPress={() => {
                 navigation.navigate('Category Single', { title: 'Salon',search:'Services' })
                }} name="Services" icon={Services} />
              ) : (<></>)
            }

            <TouchableOpacity onPress={() => {
              setMore(!More)
            }} style={{
              borderWidth: 1, borderColor: 'rgb(220,220,220)', height: 75,
              width: window.width / 4 - 20, borderRadius: 10, margin: 5,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: darkMode ? 'rgb(220,220,220)' : 'transparent'
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
                fontSize: 11,
                fontFamily: 'PlusJakartaSans',
                lineHeight: 14,
                color: '#000000',
                fontWeight: '500',
                margin: 5,
                marginTop: 10
              }}>{More ? "Less" : "More"}</Text>
            </TouchableOpacity>


          </View>
        </View>
        <TopBrands navigation={navigation}/>
        <DestinationToGo navigation={navigation}/>
        <PopularDeals navigation={navigation}/>
        <PopularOnlineRestaurants navigation={navigation}/>
        <View style={{
          width: '100%',
          paddingTop: 10, paddingBottom: 10,
          backgroundColor: 'white',
          marginTop: 10
        }}>
         <Text style={{
                fontFamily: 'PlusJakartaSansBold',
                fontSize: 16,
                paddingHorizontal: 5,
                paddingVertical: 15,
                paddingLeft: 16,
                color: textColor(darkMode)
              }}>Adventure Special Offers</Text>
          {
            First ? (
              <Banner onPress={()=>{
                navigation.navigate('Category Single', { title: 'Salon',search:First.brands })
                        dispatch(setLoader('Salon'))
              }} data={First}/>
            ) : (
              <View></View>
            )
          }
        </View>
        <ActivitiesNearYou navigation={navigation}/>
        { 
          ////  
        }
        
        {
          /*
          <ScrollView style={{ paddingBottom: 10 }} showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false} horizontal={true}>
          {

            Item.map((d, i) => (
              <View key={i} style={{
                width: window.width,
                paddingBottom: 10,
                backgroundColor: 'white',
                marginTop: 10,
                paddingTop: 10,
                flexDirection: 'row',
                flexWrap: 'wrap'
              }}>
                {
                  NewData.map((doc, j) => (
                    (i + 1) * 4 > j && j>=(i*4) && NewData.length-1!=j ? (
                      <ItemCart onPress={() => {
                        navigation.navigate('Category Single', { title: 'Salon',search:'Restaurant' })
                        dispatch(setLoader('Salon'))
                      }} key={j + i} name={doc} item='11' img='https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?b=1&k=20&m=938742222&s=170667a&w=0&h=HyfY78AeiQM8vZbIea-iiGmNxHHuHD-PVVuHRvrCIj4=' />
                    ) : (
                      <View key={j + i}></View>
                    )
                  ))
                }
                <View style={{ width: 10, }}></View>
              </View>
            ))
          }
        </ScrollView>
          */
        }

        <View style={{
          width: '100%',
          paddingBottom: 10,
          backgroundColor: 'white',
          marginTop: 10, paddingTop: 10,
           }}>
           <Text style={{
                fontFamily: 'PlusJakartaSansBold',
                fontSize: 16,
                paddingHorizontal: 5,
                paddingVertical: 15,
                paddingLeft: 16,
                color: textColor(darkMode)
              }}>One Day Picnic Deals</Text>
          {
            secondBanner ? (
              <Banner onPress={()=>{
                navigation.navigate('Category Single', { title: 'Salon',search:secondBanner.brands })
                        dispatch(setLoader('Salon'))
              }} data={secondBanner}/>
            ) : (
              <></>
            )
          }
        </View>
        <FeaturedHotel navigation={navigation}/>
        <View style={{ height: 100 }}></View>
        <FamilyCode />
        <Modal visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
        <DetailsCart setModalVisible={setModalVisible} data={brands &&
         SliderData?brands.filter(d=>d.id==SliderData.brand_id)[0]:{}} />
        </Modal>
        
      </ScrollView>
      <View style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}>
        <Bottom navigation={navigation} />
      </View>
      
    </View>
  )
}

export default Home

export const IconsSet = (props) => {
  const darkMode = useSelector(state => state.pageSettings.darkMode)
  const width = window.width
  return (
    <TouchableOpacity onPress={props.onPress} style={[{
      borderWidth: 1,
      borderColor: 'rgb(220,220,220)', height: 75,
      width: width / 4 - 20, borderRadius: 10, margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      backgroundColor: darkMode ? 'rgb(220,220,220)' : 'white'
    }, props.style]}>
      <SvgXml height="39" width="43" style={{ margin: 5 }} xml={props.icon} />
      <Text style={{
        fontSize: 9,
        fontFamily: 'PlusJakartaSans',
        lineHeight: 14,
        color: 'black',
      }}>{props.name}</Text>
    </TouchableOpacity>
  );
}
const style = StyleSheet.create({
  outline: {
    borderRadius: 15,
    height: 28, width: 28,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D8D8D8'
  },
  modalView: {
    height:'100%',
    backgroundColor:'rgba(0, 0, 0, 0.74)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width:'90%',
    height:'70%',
    backgroundColor:'#f5f5f5'
  },
  modalButton:{
    position: 'absolute',
    bottom:'5%'
  }
})
