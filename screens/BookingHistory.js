import React from 'react';
<<<<<<< Updated upstream
import { View, StyleSheet, 
    Dimensions, ScrollView,Text,TouchableOpacity, Platform } from 'react-native';
=======
import {
    View, StyleSheet,
    Dimensions, ScrollView, Text,
    TouchableOpacity, TextInput
} from 'react-native';
>>>>>>> Stashed changes
import { AntDesign } from '@expo/vector-icons';
const window = Dimensions.get('window')

const BookingHistory = (props) => {

    return (
<<<<<<< Updated upstream
        <ScrollView>
            <View style={[style.container,{
                marginTop: Platform.OS == 'ios' ? 45 :5
            }]}>
                <TouchableOpacity onPress={() =>props.close(false)} style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
=======
        <View style={{
            marginTop: 40
        }}>
            <View style={style.container}>
                <TouchableOpacity onPress={() => props.close(false)} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
>>>>>>> Stashed changes
                    <AntDesign name="left" size={24} color="black" />
                </TouchableOpacity>
                <View style={{ flex: 6, alignItems: 'center' }}>
                    <Text style={style.font}>Booking History</Text>
                </View>
            </View>
            <ScrollView>
                <View style={style.view}>
                    <Text style={style.Text}>Shradha Saburi Palace</Text>
                    <Text style={style.Text1}>Shirdi,Maharashtra</Text>
                </View>
                <View style={style.view1}>
                    <View style={style.view3}>
                        <Text style={{
                            fontSize: 15,
                            color: 'rgb(100,100,100)',
                        }}>Check-in</Text>
                        <Text style={{
                            fontSize: 25,
                        }}>12:00 PM</Text>
                    </View>
                    <View style={style.view2}></View>
                    <View style={style.view3}>
                        <Text style={{
                            fontSize: 15,
                            color: 'rgb(100,100,100)',
                        }}>Check-out</Text>
                        <Text style={{
                            fontSize: 25,
                        }}>10:00 AM</Text>
                    </View>
                </View>
                <View >
                    <Text style={{
                        fontSize: 15,
                        color: 'rgb(100,100,100)',
                        marginTop:50,
                        marginLeft:40,
                    }}>Check-in</Text>
                    <TextInput
                        style={style.input}
                        value={Text}
                    />
                </View>

                <View >
                    <Text style={{
                        fontSize: 15,
                        color: 'rgb(100,100,100)',
                        marginTop:20,
                        marginLeft:40,
                    }}>Check-out</Text>
                    <TextInput
                        style={style.input}
                        value={Text}
                    />
                </View>

            </ScrollView>
        </View>
    );
};

export default BookingHistory;
const style = StyleSheet.create({
    container: {
        width: window.width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50
    },
    font: {
        fontSize: 20,
        fontWeight: '600',
        marginLeft: -50
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    Text: {
        fontSize: 30,
    },
    Text1: {
        fontSize: 20,
        color: 'rgb(100,100,100)',
    },
    view1: {
        borderWidth: .5,
        height: 130,
        marginTop: 50,
        margin: 12,
        padding: 10,
        borderRadius: 15,
        flexDirection: 'row',
        alignContent: 'center',
        color: 'rgb(100,100,100)',
    },
    view2: {
        borderWidth: .5,
        height: 100,
        width: 1,
        marginLeft: 35,

    },
    view3: {
        marginTop: 20,
        marginLeft: 40,
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 30,
    },
})