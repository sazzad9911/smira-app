import React from 'react';
import {
    View, StyleSheet,
    Dimensions, ScrollView, Text,
    TouchableOpacity, TextInput
} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const HotelBooking = () => {
    const [CheckIn, setCheckIn] = React.useState('')
    const [CheckOut, setCheckOut] = React.useState('')
    const [count,setCount]=React.useState(0)
    const [count1,setCount1]=React.useState(0)
    const [count2,setCount2]=React.useState(0)
    return (
        <ScrollView>
        <View style={style.view}>
                    <Text style={style.Text}>Hotel Booking Enquiry</Text>
                </View>
                
                


                <View >
                    <Text style={{
                        fontSize: 15,
                        color: 'rgb(100,100,100)',
                        marginTop: 50,
                        marginLeft: 40,
                    }}>Where?</Text>
                    <TextInput
                        style={style.input}
                        value={CheckIn}
                        onChangeText={(val) =>
                            setCheckIn(val)}
                    />
                </View>

                <View >
                    <Text style={{
                        fontSize: 15,
                        color: 'rgb(100,100,100)',
                        marginTop: 20,
                        marginLeft: 40,
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
                        fontSize: 15,
                        color: 'rgb(100,100,100)',
                        marginTop: 20,
                        marginLeft: 40,
                    }}>Check-out</Text>
                    <TextInput
                        style={style.input}
                        value={CheckOut}
                        onChangeText={(val) =>
                            setCheckOut(val)}
                    />
                </View>

                <View style={{
                    margin:20
                }}>
                    <View style={{ alignItems: 'center', flexDirection: 'row',
                     marginLeft: 20,marginTop: 20}}>
                        <View style={{ flex: 2 }}>
                            <Text style={{ fontSize: 20 }}>Aduits</Text>
                            <Text style={{ fontSize: 20, color: 'rgb(100,100,100)', }}>Older 12 years</Text>
                        </View>
                        <View style={{
                            justifyContent:'center',
                            flexDirection:'row',
                        }}>
                            <TouchableOpacity onPress={()=>{
                                if(count>0){
                                    setCount(count-1)
                                }
                            }} style={{
                                height:60,
                                width:60,
                                borderRadius:30,
                                backgroundColor:'#F5F5F5',
                                justifyContent:'center',
                                alignItems:'center',
                            }}>
                            <AntDesign name="minus" size={24} color="black" />
                            </TouchableOpacity>
                            <View style={{
                                height:60,
                                width:60,
                                borderRadius:30,
                                justifyContent:'center',
                                alignItems:'center',
                            }}>
                                <Text style={{
                                    fontSize:20,
                                }}>{count}</Text>
                            </View>
                            <TouchableOpacity onPress={()=>{
                                setCount(count+1)
                            }} style={{
                                height:60,
                                width:60,
                                borderRadius:30,
                                backgroundColor:'#FFE1E3',
                                justifyContent:'center',
                                alignItems:'center',
                            }}>
                            <AntDesign name="plus" size={24} color="red" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', flexDirection: 'row',
                     marginLeft: 20,marginTop: 20 }}>
                        <View style={{ flex: 2 }}>
                            <Text style={{ fontSize: 20 }}>Children</Text>
                            <Text style={{ fontSize: 20, color: 'rgb(100,100,100)', }}>5-12 years old</Text>
                        </View>
                        <View style={{
                            justifyContent:'center',
                            flexDirection:'row',
                        }}>
                            <TouchableOpacity onPress={()=>{
                                if(count1>0){
                                    setCount1(count1-1) ;
                                }
                            }} style={{
                                height:60,
                                width:60,
                                borderRadius:30,
                                backgroundColor:'#F5F5F5',
                                justifyContent:'center',
                                alignItems:'center',
                            }}>
                            <AntDesign name="minus" size={24} color="black" />
                            </TouchableOpacity>
                            <View style={{
                                height:60,
                                width:60,
                                borderRadius:30,
                                justifyContent:'center',
                                alignItems:'center',
                            }}>
                                <Text style={{
                                    fontSize:20,
                                }}>{count1}</Text>
                            </View>
                            <TouchableOpacity onPress={()=>{
                                setCount1(count1 +1);
                            }} style={{
                                height:60,
                                width:60,
                                borderRadius:30,
                                backgroundColor:'#FFE1E3',
                                justifyContent:'center',
                                alignItems:'center',
                            }}>
                            <AntDesign name="plus" size={24} color="red" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', flexDirection: 'row',
                     marginLeft: 20,marginTop: 20 }}>
                        <View style={{ flex: 2 }}>
                            <Text style={{ fontSize: 20 }}>Rooms</Text>
                            <Text style={{ fontSize: 20, color: 'rgb(100,100,100)', }}></Text>
                        </View>
                        <View style={{
                            justifyContent:'center',
                            flexDirection:'row',
                        }}>
                            <TouchableOpacity  onPress={()=>{
                                if(count2>0){
                                    setCount2(count2-1) ;
                                }}}
                                style={{
                                height:60,
                                width:60,
                                borderRadius:30,
                                backgroundColor:'#F5F5F5',
                                justifyContent:'center',
                                alignItems:'center',
                            }}>
                            <AntDesign name="minus" size={24} color="black" />
                            </TouchableOpacity>
                            <View style={{
                                height:60,
                                width:60,
                                borderRadius:30,
                                justifyContent:'center',
                                alignItems:'center',
                            }}>
                                <Text style={{
                                    fontSize:20,
                                }}>{count2}</Text>
                            </View>
                            <TouchableOpacity onPress={()=>{
                                setCount2(count2 +1)}}
                                 style={{
                                height:60,
                                width:60,
                                borderRadius:30,
                                backgroundColor:'#FFE1E3',
                                justifyContent:'center',
                                alignItems:'center',
                            }}>
                            <AntDesign name="plus" size={24} color="red" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <View style={style.viewEnd}>
                            <Text style={style.viewtext}>SUBMIT</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{
                        height: 175,
                    }}></View>
                </View>
        </ScrollView>
    );
};

export default HotelBooking;

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
        width:350,
    },
    view4: {
        height: 50,
        width: 50,
        margin: 12,
        padding: 10,
        borderRadius: 30,
        backgroundColor: '#F7F2F2',
        justifyContent: 'center',
        alignItems: 'center',

    },
    viewEnd: {
        height: 50,
        margin: 12,
        padding: 10,
        borderRadius: 30,
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'red'
    },
    viewtext: {
        color: 'white',
        fontSize: 20,
    },

})