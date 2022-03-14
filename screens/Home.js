import { Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Feather, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons'
import testImage from '../assets/favicon.png';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';

const Home = ({ navigation }) => {
  const [Options, setOptions] = useState([
    1, 2, 3, 4, 5, 6, 7, 8
  ]);
  const [TopBrands, setTopBrands] = useState([
    1, 2, 3, 4, 5
  ]);
  const [Notifications, setNotifications] = useState([
   
  ])
  /**
   *  {
      title: () => <Text>Merry Christmas! Get <Text style={{ color: 'red' }}>50% Off</Text> on Pizza</Text>,
      visibleText: 'Oven Story is offering discount on all ranges of pizza.'
    }
   */
  const [ShowNotifications, setShowNotifications] = useState(false);
  const { height, width } = Dimensions.get('screen');
  return (
    <ScrollView>
      <View style={{
        minHeight: 50, backgroundColor: '#FA454B', justifyContent: 'space-between',
        flexDirection: 'row', alignItems: 'center', paddingLeft: 15, paddingRight: 15
      }}>
        <TouchableOpacity onPress={() => {
          navigation.openDrawer()
        }}>
          <Feather name="menu" size={24} color="white" />
        </TouchableOpacity>
        <Ionicons name='logo-apple' size={25} color="white" />
        <TouchableOpacity onPress={() => {
          setShowNotifications(true)
        }}>
          <Ionicons name="ios-notifications-outline" size={24} color="white" />
        </TouchableOpacity>

      </View>
      <Modal
        animationType='fade'
        transparent={true}
        visible={ShowNotifications}
        onRequestClose={() => {
          setShowNotifications(false)
        }}
      >
        <View style={{
          height: height / 2.3, padding: 20, backgroundColor: 'white', marginTop: 120,
          marginLeft: 15, marginRight: 15, borderRadius: 20, shadowColor: 'gray', shadowOffset: {
            height: 3, width: 0
          }, shadowOpacity: '0.5', shadowRadius: 50, elevation: 40,
        }}>
          <View style={{ alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={() => {
              setShowNotifications(false)
            }}>
              <MaterialIcons name='close' size={24} />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', }}>
            <View style={{
              flexDirection: 'row', justifyContent: 'space-between', width: '100%',
              paddingLeft: 10, paddingRight: 10, alignItems: 'center'
            }}>
              <Text style={{ margin: 10, fontSize: 18, fontWeight: 'bold' }}>Notifications</Text>
              <TouchableOpacity><Text style={{ margin: 10, fontSize: 12, color: 'red' }}>Mark as all read</Text></TouchableOpacity>
            </View>
            <View style={{ borderWidth: 0.5, borderColor: 'rgb(220,220,220)', width: '90%' }}></View>
          </View>
          {
            Notifications.length > 0 &&
            <ScrollView>
              {
                Notifications.map(notification => {
                  return (
                    <View style={{ padding: 10, alignItems: 'center' }}>
                      <Text style={{ fontWeight: 'bold', margin: 2, width: '100%' }}>{notification.title()}</Text>
                      <Text style={{ color: 'gray', margin: 2, width: '100%' }}>{notification.visibleText}</Text>
                      <View style={{ borderWidth: 0.5, width: '100%', borderColor: 'rgb(220,220,220)', marginTop: 10 }}></View>
                    </View>
                  );
                })
              }
            </ScrollView>
          }
          {
            Notifications.length <= 0 &&
            <View style={{justifyContent:'center',alignItems:'center',height:'70%'}}>
              <FontAwesome5 name="smile" size={35} color="rgb(200,200,200)"/> 
              <Text style={{color:'rgb(200,200,200)',marginTop:10}}>No Notifications</Text>
            </View>
          }

        </View>
      </Modal>
      <TouchableOpacity style={{
        borderWidth: 1, borderColor: 'rgb(220,220,220)',
        justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',
        margin: 15, padding: 10, borderRadius: 100
      }} onPress={() => {
        navigation.navigate('Search')
      }}>
        <AntDesign name='search1' size={25} style={{ flex: 1 }} />
        <Text style={{ flex: 6,color:'rgb(130,130,130)' }} 
          placeholderTextColor={'rgb(130,130,130)'} >Hotels, Deals, Restaurants, etc</Text>
      </TouchableOpacity>
      <View style={{ width: '100%', paddingLeft: 15, paddingRight: 15 }}>
        <View style={{ minHeight: 200, backgroundColor: 'black', borderRadius: 10 }}>
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
                <View key={opt} style={{
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