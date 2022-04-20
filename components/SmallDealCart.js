import React from 'react';
import {View,Image,Text} from 'react-native';
const SmallDealCart = (props) => {
   
    return (
        <View style={{
            height: 140, width: 230, backgroundColor: 'white', borderRadius: 10,
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
            <Image source={{ uri: props.img }} style={{ height: 80, width: 230, borderRadius: 10 }}/>
            <View style={{ height: 60, width: 200, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <Image source={{uri:props.icon}} style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: 'red' }} />
                <Text style={{ width: 110, fontWeight: 'bold',fontFamily:'PlusJakartaSans' }}>{props.title}</Text>
            </View>
        </View>
    );
};

export default SmallDealCart;