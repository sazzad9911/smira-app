
import React from 'react';
import {
    View, StyleSheet,
    Dimensions, ScrollView, Text,
    TouchableOpacity, TextInput
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const window = Dimensions.get('window')

const BookingHistory = (props) => {
    const [CheckIn, setCheckIn] = React.useState('')
    const [CheckOut, setCheckOut] = React.useState('')

    return (

        <View>
            <View style={[style.container, {
                marginTop: Platform.OS == 'ios' ? 45 : 5
            }]}>
                <TouchableOpacity onPress={() => props.close(false)} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <AntDesign name="left" size={24} color="black" />
                </TouchableOpacity>
                <View style={{ flex: 6, alignItems: 'center' }}>
                    <Text style={style.font}>Booking History</Text>
                </View>
            </View>
            <ScrollView >
                <View style={style.view}>
                    <Text style={style.Text}>Shradha Saburi Palace</Text>
                    <Text style={style.Text1}>Shirdi,Maharashtra</Text>
                </View>
                <View style={style.view1}>
                    <View style={style.view3}>
                        <Text style={{
                            fontSize: 12,
                            color: 'rgb(100,100,100)',
                            fontFamily: 'PlusJakartaSans',
                        }}>Check-in</Text>
                        <Text style={{
                            fontSize: 18,
                            fontFamily: 'PlusJakartaSansBold',
                        }}>12:00 PM</Text>
                    </View>
                    <View style={style.view2}></View>
                    <View style={style.view3}>
                        <Text style={{
                            fontSize: 12,
                            color: 'rgb(100,100,100)',
                            fontFamily: 'PlusJakartaSans',
                        }}>Check-out</Text>
                        <Text style={{
                            fontSize: 18,
                            fontFamily: 'PlusJakartaSansBold',
                        }}>10:00 AM</Text>
                    </View>
                </View>
                <View >
                    <Text style={{
                        fontSize: 12,
                        color: 'rgb(100,100,100)',
                        marginTop: 50,
                        marginLeft: 40,
                        fontFamily: 'PlusJakartaSans',
                    }}>Check-in</Text>
                    <TextInput
                        style={style.input}
                        value={CheckIn}
                        onChangeText={(val) =>
                            setCheckIn(val)}
                    />
                </View>

                <View >
                    <Text style={{
                        fontSize: 12,
                        color: 'rgb(100,100,100)',
                        marginTop: 20,
                        marginLeft: 40,
                        fontFamily: 'PlusJakartaSans',
                    }}>Check-out</Text>
                    <TextInput
                        style={style.input}
                        value={CheckOut}
                        onChangeText={(val) =>
                            setCheckOut(val)}
                    />
                </View>

                <View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', marginLeft: 20, marginTop: 50 }}>
                        <View style={{ flex: 2 }}>
                            <Text style={{ fontSize: 14,fontFamily: 'PlusJakartaSans'}}>Aduits</Text>
                            <Text style={{ fontSize: 12,
                             color: 'rgb(100,100,100)',
                             fontFamily: 'PlusJakartaSans' }}>Older 12 years</Text>
                        </View>
                        <View style={style.view4}>
                            <Text style={{ fontSize: 14,
                            fontFamily: 'PlusJakartaSans' }}>2</Text>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', flexDirection: 'row', marginLeft: 20 }}>
                        <View style={{ flex: 2 }}>
                            <Text style={{ fontSize: 14,
                            fontFamily: 'PlusJakartaSans' }}>Children</Text>
                            <Text style={{ fontSize: 12, 
                            color: 'rgb(100,100,100)',
                            fontFamily: 'PlusJakartaSans'
                             }}>5-12 years old</Text>
                        </View>
                        <View style={style.view4}>
                            <Text style={{ fontSize: 14,
                            fontFamily: 'PlusJakartaSans' }}>1</Text>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', flexDirection: 'row', marginLeft: 20 }}>
                        <View style={{ flex: 2 }}>
                            <Text style={{ fontSize: 14,
                            fontFamily: 'PlusJakartaSans' }}>Rooms</Text>
                            <Text style={{ fontSize: 12,
                             color: 'rgb(100,100,100)',
                             fontFamily: 'PlusJakartaSans' }}></Text>
                        </View>
                        <View style={style.view4}>
                            <Text style={{ fontSize: 14,
                            fontFamily: 'PlusJakartaSans' }}>1</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <View style={style.viewEnd}>
                            <Text style={style.viewtext}>BOOKING ID #193265</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{
                        height: 175,
                    }}></View>
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
        fontSize: 16,
        fontWeight: '600',
        marginLeft: -50,
        fontFamily: 'PlusJakartaSansBold',
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    Text: {
        fontSize: 20,
        fontFamily: 'PlusJakartaSans',
    },
    Text1: {
        fontSize: 14,
        color: '#808080',
        fontFamily: 'PlusJakartaSans',
    },
    view1: {
        borderWidth: .5,
        height: 90,
        marginTop: 50,
        margin: 12,
        padding: 10,
        borderRadius: 15,
        flexDirection: 'row',
        alignContent: 'center',
        color: 'rgb(100,100,100)',
        borderColor: '#D8D8D8'
    },
    view2: {
        borderWidth: .5,
        height: 70,
        width: 1,
        borderColor: '#D8D8D8'

    },
    view3: {
        marginTop: 10,
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 30,
        borderColor: '#D8D8D8',
        fontFamily: 'PlusJakartaSans',
        fontSize:13,
    },
    view4: {
        height: 40,
        width: 40,
        margin: 12,
        padding: 5,
        borderRadius: 30,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',

    },
    viewEnd: {
        height: 50,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: '#FC444B',
        borderRadius: 30,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewtext: {
        color: '#FC444B',
        fontSize: 16,
        fontFamily: 'PlusJakartaSans'
    },

})
