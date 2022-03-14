import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import roomImage from '../assets/tub.png'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const RoomDetail = () => {
  return (
    <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
      <View style={{ alignItems: 'center' }}>
        <Image source={roomImage} style={[styles.roomImage]} />
      </View>
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, alignItems: "center" }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontWeight: '600', fontSize: 22 }}>Shradha Saburi Palace</Text>
            <Text style={{ color: 'rgb(100,100,100)', fontSize: 17 }}>Shirdi, Maharashtra</Text>
          </View>
         
        </View>

        <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 20 }}>
          <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: 'rgb(230,230,230)', margin: 2 }}></View>
          <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: 'rgb(230,230,230)', margin: 2 }}></View>
          <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: 'rgb(230,230,230)', margin: 2 }}></View>
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 15, marginBottom: 15 }}>Description</Text>
        <Text style={{ fontSize: 16, color: 'gray' }}>Shradha Saburi Palace is a budget hotel that provides a comfortable
          stay for a nominal price. The hotel is located close to a few attractions
          in Shirdi including Sai Baba Mandir and more.</Text>
        <Text style={{ color: 'red' }}>Read More</Text>
        <View style={{
          borderWidth: 1, borderColor: 'rgb(200,200,200)', minHeight: 50, borderRadius: 10,
          width: '85%', marginTop: 20, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: "center"
        }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10, marginBottom: 10 }}>
            12:00PM
          </Text>
          <View style={{ borderWidth: 0.5, height: 30, width: 1, borderColor: 'rgb(200,200,200)' }}></View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10, marginBottom: 10 }}>
            10:00AM
          </Text>
        </View>

        <View style={{
          minHeight: 100, width: '100%', borderWidth: 1, borderRadius: 15, borderColor: 'rgb(200,200,200)',
          justifyContent: 'center', alignItems: "center", marginTop: 20, marginBottom: 20
        }}>
          <Text>MAP HERE</Text>
        </View>

        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 15, marginBottom: 15, marginLeft: 5 }}>What's nearby</Text>
        <Text style={{ color: 'gray', fontSize: 17, margin: 3 }}>- 500m away from Sai baba mandir</Text>
        <Text style={{ color: 'gray', fontSize: 17, margin: 3 }}>- 500m away from Sai baba mandir</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, marginBottom: 5,alignItems:'center' }}>
          <Text style={{ fontWeight: '600', fontSize: 22 }}>Reviews</Text>
          <View style={{
            flexDirection: 'row', alignItems: 'center', backgroundColor: '#64B657', padding: 10,
            justifyContent: 'space-between', borderRadius: 20
          }}>
            <MaterialCommunityIcons size={20} style={{ color: 'white' }} name="star" />
            <Text style={{ color: 'white', marginLeft: 5 }}>4.3</Text>
          </View>
        </View>

        <View>
          <View style={{ minHeight: 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={roomImage} style={{ height: 60, width: 60, borderRadius: 30, marginRight: 15 }} />
              <View style={{ flexDirection: 'column', }}>
                <Text style={{fontWeight:'700',fontSize:16}}>Rahul Jadhav</Text>
                <Text style={{fontSize:16}}><Text style={{color:'silver',fontWeight:'700'}}>Platinum</Text> Member</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons size={20} style={{color:'#FB444B'}} name="star" />
              <MaterialCommunityIcons size={20} style={{color:'#FB444B'}} name="star" />
              <MaterialCommunityIcons size={20} style={{color:'#FB444B'}} name="star" />
              <MaterialCommunityIcons size={20} style={{color:'#FB444B'}} name="star" />
              <MaterialCommunityIcons size={20} style={{color:'#FB444B'}} name="star" />
            </View>
          </View>
          <View>
            <Text style={{color:'gray',fontSize:16}}>Lorem Ipsim sit amed Lorem Ipsim sit amed Lorem Ipsim sit amed Lorem Ipsim sit
              amed Lorem Ipsim sit amed Lorem Ipsim sit amed Lorem Ipsim sit amet</Text>
          </View>
        </View>

        <View style={{ width: "100%", alignItems: 'center', justifyContent: 'center', padding: 15, marginTop: 10, marginBottom: 10 }}>
          <TouchableOpacity style={{
            borderRadius: 20, borderWidth: 1, paddingLeft: 20, paddingRight: 20, paddingTop: 5, paddingBottom: 5,
            borderColor: 'rgb(200,200,200)'
          }}>
            <Text style={{ color: 'rgb(150,150,150)' }}>Show More</Text>
          </TouchableOpacity>
        </View>
        <Text>Other hotels nearby</Text>
        <ScrollView horizontal={true}>
          <Image source={roomImage} style={{ height: 200, width: 200, backgroundColor: 'gray', borderRadius: 10, margin: 15 }} />

          <Image source={roomImage} style={{ height: 200, width: 200, backgroundColor: 'gray', borderRadius: 10, margin: 15 }} />

        </ScrollView>


        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flex: 1, minHeight: 65, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ borderColor: 'rgb(220,220,220)', borderWidth: 1, borderRadius: 30, height: 50, width: '95%' }}>

            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 3, minHeight: 15, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{
              borderRadius: 30, height: 50,
              width: '95%', backgroundColor: '#64B657', justifyContent: 'center', alignItems: 'center'
            }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Book Now</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default RoomDetail

const styles = StyleSheet.create({
  roomImage: {
    height: 400,
    width: '100%',
    borderRadius: 10,
    marginTop: 5
  }
});