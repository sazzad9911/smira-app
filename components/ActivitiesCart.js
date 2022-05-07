import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

const ActivitiesCart = () => {
    return (
        <View style={{
            height: 300,
            width: 280,
            margin: 10,
            borderRadius: 10,
            overflow: 'hidden',
            marginRight:0
        }}>
            <Image style={{
                height: '100%',
                width: '100%',
                borderRadius: 10,
            }} source={{ uri: 'https://youimg1.tripcdn.com/target/100e10000000olev97C00.png?proc=source%2Ftrip' }} />
            <LinearGradient style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                justifyContent:'flex-end',
                padding:20,
            }} colors={['rgba(0, 0, 0, 0.183)', '#000']}>
                <View>
                <Text style={{
                    color:'white',
                    fontFamily:'PlusJakartaSansBold',
                    fontSize:20
                }}>Imagica</Text>
                <View style={{
                    backgroundColor:'#FC444B',
                    height:2,
                    width:40,
                    marginTop:10
                }}></View>
                <Text style={{
                    color:'white',
                    fontFamily:'PlusJakartaSans',
                    fontSize:14,
                    marginTop:5
                }}>Full Day Pass</Text>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop:5,
                }}>
                    <Text style={{
                        color:'#FC444B',
                        fontFamily:'PlusJakartaSansBold',
                        fontSize:14,
                        marginRight:10
                    }}>View Details</Text>
                    <AntDesign style={{
                        marginTop:5
                    }} name="rightcircleo" size={14} color="#FC444B" />
                </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    );
};

export default ActivitiesCart;