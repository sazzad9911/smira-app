import React from 'react';
import {
    View, StyleSheet,
    Dimensions, ScrollView, Text,
    TouchableOpacity, TextInput, Alert
} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { postData, url } from '../action';
import { getAuth } from 'firebase/auth';
import AnimatedLoader from "react-native-animated-loader";
import app from '../firebase'

const Booking = (props) => {
    const [CheckIn, setCheckIn] = React.useState(new Date());
    const [CheckOut, setCheckOut] = React.useState(new Date());
    const [count, setCount] = React.useState(0)
    const [count1, setCount1] = React.useState(0)
    const [count2, setCount2] = React.useState(0)
    const navigation = props.navigation
    const params = props.route.params
    const [In, setIn] = React.useState(null); 
    const [Out, setOut] = React.useState(null)
    const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const auth = getAuth(app);
    const [loader,setLoader] =React.useState(false)


    const Confirm = () => {
        setLoader(true)
        postData(url + '/setData', {
            auth: auth.currentUser,
            tableName: 'hotel_booking',
            columns: ['check_in', 'check_out', 'adult', 'children', 'room', 'date', 'user_id','hotel_id'],
            values: [CheckIn, CheckOut, count, count1, count2, new Date(), auth.currentUser.uid,params.id]
        }).then(data => {
            if (data.insertId) {
                setLoader(false)
                return navigation.navigate('Confirm Message',{
                    text1:'You have successfully booked.',
                    text2:'Please check for confirmation email.'
                })
            }
            setLoader(false)
            Alert.alert('Opps!', data.message)
        }).catch(err => {
            setLoader(false)
            Alert.alert('Error', err.code)
        })
    }

    return ( 
        <View style={{
            paddingLeft: 10, paddingRight: 10
        }}>
            <ScrollView>
                <View style={style.view}>
                    <Text style={style.Text}>{params.name}</Text>
                    <Text style={style.Text1}>{params.address}</Text>
                </View>
                <View style={style.view1}>
                    <View style={style.view3}>
                        <Text style={{
                            fontSize: 15,
                            color: 'rgb(100,100,100)',
                        }}>Check-in</Text>
                        <Text style={{
                            fontSize: 25,
                        }}>{params.check_in}</Text>
                    </View>
                    <View style={style.view2}></View>
                    <View style={style.view3}>
                        <Text style={{
                            fontSize: 15,
                            color: 'rgb(100,100,100)',
                        }}>Check-out</Text>
                        <Text style={{
                            fontSize: 25,
                        }}>{params.check_out}</Text>
                    </View>
                </View>
                <View >
                    <Text style={{
                        fontSize: 15,
                        color: 'rgb(100,100,100)',
                        marginTop: 50,
                        marginLeft: 40,
                    }}>Check-in</Text>
                    <TouchableOpacity onPress={() => {
                        setIn(true)
                    }} style={style.input}>
                        {
                            In ? (
                                <RNDateTimePicker value={CheckIn}
                                    onChange={(event, date) => {
                                        setIn(false)
                                        setCheckIn(date);

                                    }} />
                            ) : (
                                <Text>{CheckIn.getDate() + " "
                                    + Months[CheckIn.getMonth()] + " " + CheckIn.getFullYear()}</Text>
                            )
                        }
                    </TouchableOpacity>
                </View>

                <View >
                    <Text style={{
                        fontSize: 15,
                        color: 'rgb(100,100,100)',
                        marginTop: 20,
                        marginLeft: 40,
                    }}>Check-out</Text>
                    <TouchableOpacity onPress={() => {
                        setOut(true)
                    }} style={style.input}>
                        {
                            Out ? (
                                <RNDateTimePicker value={CheckOut}
                                    onChange={(event, date) => {
                                        setOut(false)
                                        setCheckOut(date);

                                    }} />
                            ) : (
                                <Text>{CheckOut.getDate() + " "
                                    + Months[CheckOut.getMonth()] + " " + CheckOut.getFullYear()}</Text>
                            )
                        }
                    </TouchableOpacity>
                </View>

                <View style={{
                    margin: 20
                }}>
                    <View style={{
                        alignItems: 'center', flexDirection: 'row',
                        marginLeft: 20, marginTop: 20
                    }}>
                        <View style={{ flex: 2 }}>
                            <Text style={{ fontSize: 18 }}>Adults</Text>
                            <Text style={{ fontSize: 15, color: 'rgb(100,100,100)', }}>Older 12 years</Text>
                        </View>
                        <View style={{
                            justifyContent: 'center',
                            flexDirection: 'row',
                        }}>
                            <TouchableOpacity onPress={() => {
                                if (count > 0) {
                                    setCount(count - 1)
                                }
                            }} style={{
                                height: 50,
                                width: 50,
                                borderRadius: 30,
                                backgroundColor: '#FFFF',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <AntDesign name="minus" size={24} color="black" />
                            </TouchableOpacity>
                            <View style={{
                                height: 50,
                                width: 50,
                                borderRadius: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                }}>{count}</Text>
                            </View>
                            <TouchableOpacity onPress={() => {
                                setCount(count + 1)
                            }} style={{
                                height: 50,
                                width: 50,
                                borderRadius: 30,
                                backgroundColor: '#FFE1E3',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <AntDesign name="plus" size={24} color="red" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{
                        alignItems: 'center', flexDirection: 'row',
                        marginLeft: 20, marginTop: 20
                    }}>
                        <View style={{ flex: 2 }}>
                            <Text style={{ fontSize: 18 }}>Children</Text>
                            <Text style={{ fontSize: 15, color: 'rgb(100,100,100)', }}>5-12 years old</Text>
                        </View>
                        <View style={{
                            justifyContent: 'center',
                            flexDirection: 'row',
                        }}>
                            <TouchableOpacity onPress={() => {
                                if (count1 > 0) {
                                    setCount1(count1 - 1);
                                }
                            }} style={{
                                height: 50,
                                width: 50,
                                borderRadius: 30,
                                backgroundColor: '#FFFF',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <AntDesign name="minus" size={24} color="black" />
                            </TouchableOpacity>
                            <View style={{
                                height: 50,
                                width: 50,
                                borderRadius: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                }}>{count1}</Text>
                            </View>
                            <TouchableOpacity onPress={() => {
                                setCount1(count1 + 1);
                            }} style={{
                                height: 50,
                                width: 50,
                                borderRadius: 30,
                                backgroundColor: '#FFE1E3',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <AntDesign name="plus" size={24} color="red" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{
                        alignItems: 'center', flexDirection: 'row',
                        marginLeft: 20, marginTop: 20
                    }}>
                        <View style={{ flex: 2 }}>
                            <Text style={{ fontSize: 18 }}>Rooms</Text>
                            <Text style={{ fontSize: 18, color: 'rgb(100,100,100)', }}></Text>
                        </View>
                        <View style={{
                            justifyContent: 'center',
                            flexDirection: 'row',
                        }}>
                            <TouchableOpacity onPress={() => {
                                if (count2 > 0) {
                                    setCount2(count2 - 1);
                                }
                            }}
                                style={{
                                    height: 50,
                                    width: 50,
                                    borderRadius: 30,
                                    backgroundColor: '#FFFF',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <AntDesign name="minus" size={24} color="black" />
                            </TouchableOpacity>
                            <View style={{
                                height: 50,
                                width: 50,
                                borderRadius: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                }}>{count2}</Text>
                            </View>
                            <TouchableOpacity onPress={() => {
                                setCount2(count2 + 1)
                            }}
                                style={{
                                    height: 50,
                                    width: 50,
                                    borderRadius: 30,
                                    backgroundColor: '#FFE1E3',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <AntDesign name="plus" size={24} color="red" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity disabled={count2 != 0 && count != 0 ? false : true} onPress={Confirm}>
                        <View style={[style.viewEnd, {
                            backgroundColor: count2 != 0 && count != 0 ? '#FC444B' : '#f5f5f5'
                        }]}>
                            <Text style={[style.viewtext, {
                                color: count2 != 0 && count != 0 ? '#FFFF' : '#FC444B'
                            }]}>CONFIRM BOOKING</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <AnimatedLoader
                    visible={loader}
                    overlayColor="rgba(255,255,255,0.75)"
                    source={require("../assets/9997-infinity-loader.json")}
                    animationStyle={{
                        height: 100, width: 100,
                    }}
                    speed={1}
                >
                    <Text>Loading...</Text>
                </AnimatedLoader>
            </ScrollView>
        </View>
    );
};

export default Booking;
const style = StyleSheet.create({
    container: {
        width: window.width - 10,
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
        justifyContent: 'center',
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
        borderWidth: 1,
        borderColor: '#FC444B',
        borderRadius: 30,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewtext: {
        color: 'red',
        fontSize: 20,
    },

})
