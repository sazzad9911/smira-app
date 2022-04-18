import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

import { MaterialCommunityIcons, MaterialIcons, Ionicons, Octicons } from '@expo/vector-icons'
import tub from '../assets/tub.png';
import { ScrollView } from 'react-native-gesture-handler';
const PopularHotels = () => {
    return (
        <ScrollView>
            <Text style={{ margin: 10, fontWeight: 'bold', fontSize: 25, marginBottom: 5 }}>Popular Hotels</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 15 }}>
                <Octicons name='verified' size={15} style={{ color: '#64B657', marginRight: 10 }} />
                <Text>Free for members</Text>
            </View>
            <View>


                <HotelCart />
            </View>
            <View style={{ flexDirection: 'row', }}>
                <View style={{ flex: 1, padding: 10 }}>
                    <TouchableOpacity style={{
                        borderWidth: 1, borderRadius: 30, minHeight: 60, width: '100%',
                        borderColor: 'rgb(220,220,220)', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Ionicons name='ios-options-outline' size={30} color={"rgb(100,100,100)"} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 3, padding: 10 }}>
                    <View style={{
                        borderWidth: 1, borderRadius: 30, minHeight: 60, width: '100%',
                        borderColor: 'rgb(220,220,220)', flexDirection: 'row', alignItems: 'center'
                    }}>
                        <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                            <Text style={{ textAlign: 'center' }}>Category</Text>
                        </TouchableOpacity>
                        <View style={{ borderWidth: 0.5, height: '70%', borderColor: 'rgb(220,220,220)' }}></View>
                        <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                            <Text style={{ textAlign: 'center' }}>Filter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>

    )
}

export default PopularHotels
const HotelCart = () => {
    return (
        <View style={{ alignItems: 'center', paddingLeft: 10, paddingRight: 10, marginBottom: 10 }}>
            <ImageBackground source={tub} imageStyle={{ borderRadius: 10 }} style={{ width: '100%', height: 170, borderRadius: 10, justifyContent: 'space-between', alignItems: 'flex-end' }} >

                <MaterialCommunityIcons name='heart' size={24} style={{ color: 'red', margin: 15 }} />
                <View style={{
                    flexDirection: 'row', alignItems: 'center', backgroundColor: '#64B657', padding: 10,
                    justifyContent: 'space-between', borderRadius: 20, width: 70, margin: 10
                }}>
                    <MaterialCommunityIcons size={20} style={{ color: 'white' }} name="star" />
                    <Text style={{ color: 'white', marginLeft: 5 }}>4.3</Text>
                </View>

            </ImageBackground>

            <View style={{ width: '93%', padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View >
                    <Text style={{ fontWeight: '600', fontSize: 17 }}>On the Go</Text>
                    <Text style={{ fontWeight: '400', fontSize: 15, color: 'gray', marginTop: 5 }}>Alibaug, Maharashtra</Text>
                </View>
                <TouchableOpacity style={{ backgroundColor: 'rgb(220,220,220)', height: 40, width: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialIcons name='navigate-next' size={22} />
                </TouchableOpacity>
            </View>
        </View>

    )
}