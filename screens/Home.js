import {
  Image, ScrollView, StyleSheet, Text,
  TouchableOpacity, View, StatusBar, Dimensions, ActivityIndicator, Modal, Alert, BackHandler
} from 'react-native'
import React, { useState, useCallback, useMemo, useRef } from 'react'
import { AntDesign } from '@expo/vector-icons'
import testImage from '../assets/favicon.png';
import { LinearGradient } from 'expo-linear-gradient';
import { SliderBox } from "react-native-image-slider-box";
//------------------------------------------------------------------------------
import arrow from '../assets/svgtopng/arrow.png'
import { HotelMemberCart } from './Hotel'
import Brands from '../components/Brands'
import SmallDealCart from './../components/SmallDealCart';
import { postData, url } from '../action';
import { useDispatch } from 'react-redux';
import { setDeals, setBrands, setHotels, setUser,setBottomSheet } from '../action'
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


const window = Dimensions.get('window')
const auth = getAuth(app);
const Home = ({ navigation }) => {

  const [More, setMore] = React.useState(false)
  const [slider, setSlider] = React.useState(null)
  const [image, setImage] = React.useState(null)
  const [Brand, setBrand] = React.useState(null)
  const [BrandDeal, setBrandDeal] = React.useState(null)
  const [Deals, storeDeals] = React.useState(null)
  const [Hotel, setHotel] = React.useState(null)
  const dispatch = useDispatch()
  const darkMode = useSelector(state => state.pageSettings.darkMode)
  const [modalVisible, setModalVisible] = React.useState(false)
  const [SliderData, setSliderData] = React.useState(null)
  const [First, setFirst] = React.useState(null)
  const [Second, setSecond] = React.useState(null)
  const [Item, setItem] = React.useState([])
  const [NewData, setNewData] = React.useState(null)
  const [hasUnsavedChanges, setHasUnsavedChanges] = React.useState(null)
  const route = useRoute();
  const loader= useSelector(state => state.loader)
  const bottomSheet = useSelector(state => state.pageSettings.bottomSheet)

  React.useEffect(() => {
    let data = postData(url + "/getData", {
      tableName: 'user',
      condition: "uid=" + "'" + auth.currentUser.uid + "'"
    }).then(data => {
      if (Array.isArray(data)) {
        return dispatch(setUser(data))
      }
      console.log('Home.js->' + data.message)
      return data
    }).catch(err => {
      console.log('Home.js->' + err.code)
      return data
    })
  }, [Brand])
  React.useEffect(() => {
    let data = postData(url + "/getData", {
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
      return data
    }).catch(err => {
      console.log(err.message);
      return data
    })
  }, [])
  React.useEffect(() => {
    let post = postData(url + "/getData", {
      tableName: "brands",
      orderColumn: "popularity",
    }).then(data => {
      if (Array.isArray(data)) {
        setBrand(data);
        return dispatch(setBrands(data));
      }
      console.log(data.message)
      return post
    }).catch(err => {
      console.log(err.message);
      return post
    })
  }, [])

  React.useEffect(() => {
    if (!Brand) {
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
          Brand.map(b => {
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
        if (newData.length > 5) {
          z.push(newData.length)
        } if (newData.length > 9) {
          z.push(newData.length)
        } if (newData.length > 13) {
          z.push(newData.length)
        }
        setNewData(newData)
        setItem(z)
        setBrandDeal(arr)
        let first = arr.filter(e => e.brand.type != 'Restaurant')
        setFirst(first)
        return dispatch(setDeals(arr));
      }
      return data
    }).catch(err => {
      console.log(err)
      return data
    })
  }, [Brand])
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
    let data = postData(url + "/getData", {
      tableName: 'hotels',
      orderColumn: 'popularity'
    }).then(data => {
      if (Array.isArray(data)) {
        dispatch(setHotels(data));
        return setHotel(data)
      }
      return data
    }).catch(err => {
      console.log(err);
      return data
    })
  }, [])
  React.useEffect(() => {
    postData(url + '/getData', {
      tableName: 'addresses',
    }).then(data => {
      if (Array.isArray(data)) {
        return setSecond(data)
      }
      console.log(data.message)
    })
  }, [])
  //console.log(NewData)

  React.useEffect(() => {
    console.log(route.name)
    const backAction = () => {
      if(!route.name){
        return true
      }
      
      if(route.name!='UserHome' && bottomSheet) {
        
        return true
      }
      dispatch(setBottomSheet(null))
      Alert.alert("Exit App!", "Are you sure you want to exit app?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => 
        {BackHandler.exitApp()} }
      ]);
      return true;
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
                    setModalVisible(true)
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
              navigation.navigate('Category Single', { title: 'Hotels' })
              dispatch(setLoader('SearchHotel'))
            }} name="Hotels" icon={Hotels} />
            <IconsSet onPress={() => {
              navigation.navigate('Category Single', { title: 'Restaurants' })
              dispatch(setLoader('SearchDeal'))
            }} name="Restaurant" icon={Restaurant} />
            <IconsSet onPress={() => {
              //navigation.navigate('Category Single', { title: 'Games' })
            }} name="Games" icon={Games} />
            <IconsSet onPress={() => {
              //navigation.navigate('Category Single', { title: 'Shopping' })
            }} name="Shopping" icon={Shopping} />
            <IconsSet onPress={() => {
              //navigation.navigate('Category Single', { title: 'Villas' })
            }} name="Villas" icon={Villas} />
            <IconsSet onPress={() => {
              //navigation.navigate('Category Single', { title: 'Camping' })
            }} name="Camping" icon={Camping} />
            <IconsSet onPress={() => {
              //navigation.navigate('Category Single', { title: 'Travel' })
            }} name="Travel" icon={Travel} />
            {
              More ? (
                <IconsSet onPress={() => {
                  //navigation.navigate('Category Single', { title: 'Health' })
                }} name="Health" icon={Health} />
              ) : (<></>)
            }
            {
              More ? (
                <IconsSet onPress={() => {

                }} name="Spa & Salons" icon={Spa_Salons} />
              ) : (<></>)
            }
            {
              More ? (
                <IconsSet onPress={() => {
                  //navigation.navigate('Category Single', { title: 'Services' })
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

        <View style={{ backgroundColor: 'white', paddingBottom: 20 }}>
          <View style={{
            width: '95%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Text style={{
              fontFamily: 'PlusJakartaSansBold',
              fontSize: 16,
              paddingHorizontal: 5,
              paddingVertical: 15,
              paddingLeft: 18,
              color: textColor(darkMode)
            }}>Deals Near You</Text>

          </View>
          <ScrollView showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false} horizontal={true} >
            <View style={{ width: 10 }}></View>
            {
              BrandDeal ? (
                BrandDeal.map((doc, i) => (
                  <NewDealCart key={i} onPress={() => {
                    navigation.navigate('Category Single', { title: 'Salon',search:doc.brand.type })
                    dispatch(setLoader('Salon'))
                  }} data={doc} />
                ))
              ) : (<ActivityIndicator size="large" color="#FA454B" />)
            }
            <View style={{ width: 10 }}></View>
          </ScrollView>
        </View>

        <LinearGradient style={{ width: '100%', marginTop: 15, flexDirection: 'column' }}
          colors={['#E00006', '#FB8B97']}
          start={[0, 1]} end={[1, 0]}
        >
          <View style={{
            flex: 1, justifyContent: 'center',
            paddingLeft: 20, paddingTop: 20, paddingBottom: 8
          }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingRight: 23,
            }}>
              <View>
                <Text style={{ color: 'white', fontSize: 18, fontFamily: 'PlusJakartaSansBold' }}>Save on Top Brands</Text>
                <Text style={{
                  color: 'white', marginBottom: 4,
                  fontFamily: 'PlusJakartaSans', fontSize: 12
                }}>Save big on most popular brands with us</Text>
              </View>

              <TouchableOpacity style={style.outline} onPress={() => {
                navigation.navigate('OurBrand')
              }}>
                <AntDesign name="right" size={20} color="black" />
              </TouchableOpacity>

            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false} style={{
              flex: 3,
              marginBottom: 10, marginTop: 5
            }} horizontal={true}>
            <View style={{ width: 4 }}></View>
            {
              Brand ? (
                Brand.map(d => (
                  <View key={d.id} style={{
                    marginLeft:-6
                  }}>
                  <Brands  data={d} img={d.image} />
                  </View>
                ))
              ) : (
                <ActivityIndicator size="large" color="#FA454B" />
              )
            }
          </ScrollView>
          <View style={{ height: 0 }}></View>
        </LinearGradient>
        <View style={{
          width: '100%',
          marginTop: 15, paddingBottom: 10,
          backgroundColor: 'white'
        }}>
          <View style={{
            width: '95%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Text style={{
              fontFamily: 'PlusJakartaSansBold',
              fontSize: 16,
              paddingHorizontal: 5,
              paddingVertical: 15,
              paddingLeft: 16,
              color: textColor(darkMode)
            }}>Activities Near You</Text>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Category Single', { title: 'Salon' })
              dispatch(setLoader('Salon'))

            }}>
              <Text style={{
                fontFamily: 'PlusJakartaSans',
                color: '#FC444B',
                fontSize: 14
              }}>See more</Text>
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false} horizontal={true}>
            {
              BrandDeal ? (
                BrandDeal.map((doc, i) => (
                  doc.brand.type != 'Restaurant' ? (
                    <ActivitiesCart key={i} onPress={() => {
                      navigation.navigate('Category Single', { title: 'Salon' })
                      dispatch(setLoader('Salon'))
                    }} data={doc} />
                  ) : (<View key={i}></View>)
                ))
              ) : (<ActivityIndicator size="large" color="#FA454B" />)
            }
            <View style={{ width: 10 }}></View>
          </ScrollView>
        </View>

        {
          ////
        }
        <View style={{
          width: '100%',
          paddingTop: 10, paddingBottom: 10,
          backgroundColor: 'white',
          marginTop: 10
        }}>
          {
            First ? (
              <Banner data={First[0]} />
            ) : (
              <ActivityIndicator size="large" color="#FA454B" />
            )
          }
        </View>
        <View style={{
          width: '100%',
          marginTop: 10, paddingBottom: 10,
          backgroundColor: 'white'
        }}>
          <View style={{
            width: '95%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Text style={{
              fontFamily: 'PlusJakartaSansBold',
              fontSize: 16,
              paddingHorizontal: 5,
              paddingVertical: 15,
              paddingLeft: 16,
              color: textColor(darkMode)
            }}>Destinations To Go</Text>

          </View>
          <View style={{ height: 10 }}></View>
          <ScrollView showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false} horizontal={true}>
            {
              Second ? (
                Second.map((doc, i) => (
                  <DestinationCart navigation={navigation} data={doc} key={i} />
                ))
              ) : (
                <ActivityIndicator size="large" color="#FA454B" />
              )
            }
            <View style={{ width: 10, }}></View>
          </ScrollView>
          <View style={{ height: 10 }} />
        </View>
        <View style={{
          width: '100%',
          paddingBottom: 10,
          backgroundColor: 'white',
          marginTop: 10
        }}>
          <View style={{
            width: '95%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Text style={{
              fontFamily: 'PlusJakartaSansBold',
              fontSize: 16,
              paddingHorizontal: 5,
              paddingVertical: 15,
              paddingLeft: 16,
              color: textColor(darkMode)
            }}>Featured Hotels</Text>
            {
              /*
             <TouchableOpacity style={style.outline} onPress={() => {
              navigation.navigate('Category Single', { title: 'Popular Hotels' })
              dispatch(setLoader('SearchHotel'))
  
            }}>
              <AntDesign name="right" size={20} color="black" />
            </TouchableOpacity>
              */
            }
          </View>
          <ScrollView showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={{ width: 10, }}></View>
            {
              Hotel ? (
                Hotel.map(d => (
                  <HotelMemberCart key={d.id} data={d} navigation={navigation} />
                ))
              ) : (
                <ActivityIndicator size="large" color="#FA454B" />
              )
            }
          </ScrollView>
        </View>
        <View style={{
          width: '100%',
          paddingBottom: 10,
          backgroundColor: 'white',
          marginTop: 10
        }}>
          <View style={{
            width: '95%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Text style={{
              fontFamily: 'PlusJakartaSansBold',
              fontSize: 16,
              paddingHorizontal: 5,
              paddingVertical: 15,
              paddingLeft: 16,
              color: textColor(darkMode)
            }}>Popular Online Restaurants</Text>

          </View>
          <ScrollView style={{ paddingBottom: 10 }} showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false} horizontal={true}>
            {
              BrandDeal ? (
                BrandDeal.map((doc, i) => (
                  doc.brand.type == 'Restaurant' ? (
                    <ImageBanner key={i} onPress={() => {
                      navigation.navigate('Category Single', { title: 'Salon' })
                      dispatch(setLoader('Salon'))
                    }} data={doc} />
                  ) : (<View key={i}></View>)
                ))
              ) : (<ActivityIndicator size="large" color="#FA454B" />)
            }
            <View style={{ width: 10, }}></View>
          </ScrollView>
        </View>
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
                    (i + 1) * 4 > j ? (
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

        <View style={{
          width: '100%',
          paddingBottom: 10,
          backgroundColor: 'white',
          marginTop: 10, paddingTop: 10,
        }}>
          {
            First ? (
              <Banner data={First[First.length - 1]} />
            ) : (
              <ActivityIndicator size="large" color="#FA454B" />
            )
          }
        </View>
        <View style={{ height: 100 }}></View>
        <FamilyCode />
        <Modal visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
          <SliderCoupon navigation={navigation} data={SliderData} close={setModalVisible} />
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
})