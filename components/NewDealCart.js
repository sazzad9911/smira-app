import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const NewDealCart = (props) => {
    const data=props.data
    return (
        <TouchableOpacity onPress={props.onPress} style={{
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
            }} source={{ uri: data.deal.image }} />
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
                        }}>{data.brand.type}</Text>
                        <Text style={{
                            color:'#ffff',
                            fontSize:14,
                            fontFamily:'PlusJakartaSans',
                            marginTop:0
                        }}>Under   ₹{data.deal.price}</Text>
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default NewDealCart;