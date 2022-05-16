import React from 'react';
import {View,Text,TouchableOpacity,Dimensions} from 'react-native';

const window = Dimensions.get('window')

const NewAlert = (props) => {
    return (
        <View style={{
            width: window.width,
            height: window.height,
            position: 'absolute',
            top: 0,
            left: 0,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <View style={{
                height:160,
                marginHorizontal: 25,
                backgroundColor: '#fff',
                shadowOffset: {
                    height:2, width: 2
                }, shadowOpacity:.5,
                shadowColor: '#000000',
                shadowRadius: 15,
                elevation:15,
                borderRadius:15,
                justifyContent: 'center',
                alignItems: 'center',
                padding:20
            }}>
                <Text style={{
                    fontFamily:'PlusJakartaSans',
                    fontSize: 18,
                }}>{props.title?props.title:'Confirm your booking?'}</Text>
                <View style={{flexDirection: 'row',marginTop:20}}>
                    <TouchableOpacity onPress={() =>props.close(false)} style={{
                        width: 100,
                        height: 40,
                        backgroundColor: '#D8D8D8',
                        borderRadius: 40,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={{
                        fontFamily:'PlusJakartaSans',
                        fontSize: 15,
                        color: '#FFFFFF',
                    }}>NO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        props.onPress()
                    }} style={{
                        width: 100,
                        height: 40,
                        backgroundColor: '#FC444B',
                        borderRadius: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft:10
                    }}>
                    <Text style={{
                        fontFamily:'PlusJakartaSans',
                        fontSize: 15,
                        color: '#FFFFFF',
                    }}>YES</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default NewAlert;