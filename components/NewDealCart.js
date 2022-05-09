import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const NewDealCart = (props) => {
    return (
        <TouchableOpacity style={{
            height: 230,
            width:200,
            borderRadius:10,
            overflow: 'hidden',
            marginRight:10,
            borderColor:'#D8D8D8',
            borderWidth: 2,
        }}>
            <Image style={{
                width: '100%',
                height: '100%',
            }} source={{ uri: "https://4.imimg.com/data4/YD/NN/ANDROID-52189106/product-500x500.jpeg" }} />
            <LinearGradient style={{
                width: '100%',
                height: '100%',
                justifyContent: 'flex-end',
                position: 'absolute',
                top:0,
                borderRadius: 10,
            }} colors={['rgba(0, 0, 0, 0.183)', '#000']}>
                <View style={{
                    margin: 20,
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems: 'center'
                }}>
                    <View>
                        <Text style={{
                            color:'#ffff',
                            fontFamily:'PlusJakartaSansBold',
                            fontSize:20
                        }}>Haircuts</Text>
                        <Text style={{
                            color:'#ffff',
                            fontSize:14,
                            fontFamily:'PlusJakartaSans',
                            marginTop:0
                        }}>Under ₹1999</Text>
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default NewDealCart;