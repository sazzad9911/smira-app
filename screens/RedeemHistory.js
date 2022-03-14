import React from 'react';
import { View, Text, Image, ScrollView, Button, TouchableOpacity, Switch } from 'react-native'
import Picture from '../assets/10.jpg'
import { AntDesign } from '@expo/vector-icons';

const RedeemHistory = () => {
    return (
        <ScrollView>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                <Image
                    style={{
                        height: 150,
                        width: 150,
                        borderRadius: 100,
                    }}
                    source={Picture}
                />
                <Text
                    style={{
                        fontSize: 25,
                    }}>Nirmiti Gaitonde</Text>
                <Text
                    style={{
                        fontSize: 15,
                        color: '#FF9E00'
                    }}>Gold <Text
                        style={{ color: 'black' }}>Member</Text></Text>
            </View>
            <View style={{ borderWidth: 0.5, margin: 15, borderColor: 'rgb(220,220,220)' }}>
            </View>
            <Cart title='Flat 35% OFF On All Orders'
                date='24 Febroary 2022' img={Picture} />
            <View style={{ borderWidth: 0.5, margin: 15, borderColor: 'rgb(220,220,220)' }}>
            </View>
            <Cart title='Any 2 Or More Pizza For ₹199*'
                date='24 Febroary 2022' img={Picture} />
            <View style={{ borderWidth: 0.5, margin: 15, borderColor: 'rgb(220,220,220)' }}>
            </View>
            <Cart title='On The Go'
                date='21 Febroary 2022' img={Picture} />
            <View style={{ borderWidth: 0.5, margin: 15, borderColor: 'rgb(220,220,220)' }}>
            </View>
            <Cart title='Special Offer @Just ₹199'
                date='16 Febroary 2022' img={Picture} />
            <View style={{ borderWidth: 0.5, margin: 15, borderColor: 'rgb(220,220,220)' }}>
            </View>
        </ScrollView>
    );
};

export default RedeemHistory;
const Cart = (props) => {

    return (
        <View style={{ marginLeft: 20 }}>
            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 5, }}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={{
                            height: 70,
                            width: 70,
                            borderRadius: 50,
                        }}
                        source={props.img}
                    />
                </View>
                <View style={{ flex: 3, marginTop: 10 }}>
                    <Text style={{ fontSize: 15, color: 'black' }}>{props.title}</Text>
                    <Text
                        style={{
                            fontSize: 15,
                            color: 'rgb(100,100,100)',
                            marginTop: 10
                        }}>{props.date}</Text>
                </View>
                <View style={{ flex: 1, marginTop: 20 }}>
                    <AntDesign name="right" size={20} color="black"
                        style={{
                            marginLeft: 30,
                            color: 'rgb(200,200,200)'
                        }} />
                </View>
            </TouchableOpacity>
        </View>
    )
}