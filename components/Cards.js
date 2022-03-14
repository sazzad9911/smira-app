import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

const Cards = (props) => {
    const navigation = props.navigation;

    return (
        <View style={{
            alignItems: 'center',
            paddingLeft: 10,
            paddingRight: 10,
            marginBottom: 10
        }}>
            <ImageBackground source={props.img} imageStyle={{
                borderRadius: 10
            }} style={{
                width: '100%',
                height: 170,
                borderRadius: 10,
                justifyContent: 'space-between',
                alignItems: 'flex-end'
            }} >

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
                <View>
                    <Text style={{ fontWeight: '600', fontSize: 17 }}>{props.title}</Text>
                    <Text style={{ fontWeight: '400', fontSize: 15, color: 'gray', marginTop: 5 }}>{props.address}</Text>
                </View>
                <TouchableOpacity onPress={() =>navigation.navigate('Hotel',{
                    title: props.title
                })} style={{
                    backgroundColor: 'rgb(220,220,220)',
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <MaterialIcons name='navigate-next' size={22} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cards;