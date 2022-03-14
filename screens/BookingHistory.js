import React from 'react';
import { View, StyleSheet, 
    Dimensions, ScrollView,Text,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const window = Dimensions.get('window')

const BookingHistory = (props) => {

    return (
        <ScrollView>
            <View style={style.container}>
                <TouchableOpacity onPress={() =>props.close(false)} style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                    <AntDesign name="left" size={24} color="black" />
                </TouchableOpacity>
                <View style={{flex:6,alignItems: 'center'}}>
                    <Text style={style.font}>Booking History</Text>
                </View>
            </View>


        </ScrollView>
    );
};

export default BookingHistory;
const style = StyleSheet.create({
    container: {
        width: window.width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height:50
    },
    font:{
        fontSize: 20,
        fontWeight: '600',
        marginLeft:-50
    }
})