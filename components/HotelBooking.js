import React, { useState } from 'react';
import {
    View, StyleSheet,
    Dimensions, ScrollView, Text,
    TouchableOpacity, TextInput, Alert
} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import { postData, url } from '../action'
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { getAuth } from 'firebase/auth'
import app from '../firebase';
import AnimatedLoader from "react-native-animated-loader";
import { useSelector } from 'react-redux';
import { textColor, subTextColor, backgroundColor } from './../assets/color';

const HotelBooking = (props) => {
    const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const [CheckIn, setCheckIn] = React.useState(null)
    const [CheckOut, setCheckOut] = React.useState(null)
    const [In, setIn] = React.useState(null);
    const [Out, setOut] = React.useState(null)
    const [count, setCount] = React.useState(0)
    const [count1, setCount1] = React.useState(0)
    const [count2, setCount2] = React.useState(0)
    const [selectedItem, setSelectedItem] = useState(null)
    const [data, setData] = useState(null)
    const auth = getAuth(app);
    const [loader, setLoader] = React.useState(false)
    const navigation = props.navigation;
    const [submit, setSubmit] = React.useState(false)
    const [text, setText] = React.useState(null);

    const convertDate = (date) => {
        let data = '';
        return data = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate())
    }
    const Confirm = () => {
        setLoader(true)
        postData(url + '/setData', {
            auth: auth.currentUser,
            tableName: 'hotel_booking',
            columns: ['check_in', 'check_out', 'adult', 'children', 'room', 'date', 'user_id', 'hotel_id'],
            values: [convertDate(CheckIn), convertDate(CheckOut), count, count1, count2, convertDate(new Date()), auth.currentUser.uid, selectedItem]
        }).then(data => {
            if (data.insertId) {
                setLoader(false)
                props.close(false)
                setSubmit(!submit)
                return navigation.navigate('Confirm Message', {
                    text1: 'You have successfully booked.',
                    text2: 'Please check for confirmation email.'
                })
            }
            setLoader(false)
            Alert.alert('Opps!', data.message)
        }).catch(err => {
            setLoader(false)
            Alert.alert('Error', err.code)
        })
    }
    const darkMode = useSelector(state => state.pageSettings.darkMode)
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
            marginTop: 20,
        },
        Text: {
            fontSize: 18,
            fontFamily: 'PlusJakartaSansBold',
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
        inputT: {
            height: 50,
            margin: 10,
            borderWidth: 1,
            borderColor: '#D8D8D8',
            padding: 5,
            borderRadius: 30,
            paddingLeft: 20,
            color: textColor(darkMode)
        },
        input: {
            height: 50,
            margin: 10,
            padding: 5,
            borderRadius: 30,
            paddingLeft: 20,
            backgroundColor: '#F5F5F5',
            borderWidth: 1,
            borderColor: '#D8D8D8',
        },
        inputAcctive: {
            height: 50,
            margin: 10,
            borderWidth: 1,
            borderColor: '#D8D8D8',
            padding: 5,
            borderRadius: 30,
            marginLeft: 30,
            paddingLeft: 20,
        },
        view4: {
            height: 50,
            width: 50,
            margin: 12,
            padding: 10,
            borderRadius: 30,
            backgroundColor: backgroundColor(darkMode),
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
            backgroundColor: '#FC444B'
        },
        viewtext: {
            color: 'white',
            fontSize: 20,
        },
        overRest: {
            height: 50,
            zIndex: 1,
            marginLeft: 25,
            backgroundColor: 'white',
            justifyContent: 'center',
            padding: 5,
            shadowOffset: {
                height: 2, width: 2
            },
            shadowColor: 'black',
            shadowOpacity: .3,
            shadowRadius: 5,
            elevation: 5
        }
    })
    const search = (val) => {
        //setText(val);
        postData(url + '/searchData', {
            tableName: 'hotels',
            searchColumn: 'address',
            searchData: val
        }).then(data => {
            if (Array.isArray(data)) {
                setData(data)
            }
        })
    }
    return (
        <View>
            <View style={style.view}>
                <Text style={[style.Text, { color: textColor(darkMode) }]}>Hotel Booking Enquiry</Text>
            </View>
            <View style={{
                height: 140
            }}>
                <Text style={{
                    fontSize: 14,
                    color: subTextColor(darkMode),
                    fontFamily: 'PlusJakartaSans',
                    marginTop: 50,
                    marginLeft: 40,
                }}>Where?</Text>
                
                <TextInput value={text} onChangeText={(val) => {
                    setText(val);
                    postData(url + '/searchData', {
                        tableName: 'hotels',
                        searchColumn: 'address',
                        searchData: val
                    }).then(data => {
                        if (Array.isArray(data)) {
                            setData(data)
                        }
                    })
                }} style={[style.inputT]} />
                {
                    data ? (
                        data.map((data, i) => (
                            <TouchableOpacity onPress={() => {
                                setSelectedItem(data.id)
                                setData(null)
                                setText(data.address)
                            }} key={i} style={style.overRest}>
                                <Text>{data.address}</Text>
                            </TouchableOpacity>
                        ))
                    ) : (
                        <View></View>
                    )
                }
            </View>
            <View>
                <Text style={{
                    fontSize: 14,
                    color: subTextColor(darkMode),
                    fontFamily: 'PlusJakartaSans',
                    marginTop: 20,
                    marginLeft: 40,
                }}>Check-in</Text>
                <TouchableOpacity onPress={() => {
                    setIn(true)
                }} style={[style.input, {
                    justifyContent: 'center',
                    backgroundColor: !CheckIn ? '#f5f5f5' : 'transparent'
                }]}>
                    {
                        In ? (
                            <RNDateTimePicker value={CheckIn ? CheckIn : new Date()}
                                onChange={(event, date) => {
                                    setIn(false)
                                    setCheckIn(date);

                                }} />
                        ) : (
                            <Text style={{ color: textColor(darkMode) }}>{CheckIn ? CheckIn.getDate() + " "
                                + Months[CheckIn.getMonth()] + " " + CheckIn.getFullYear() : ''}</Text>
                        )
                    }
                </TouchableOpacity>
            </View>
            <View >
                <Text style={{
                    fontSize: 14,
                    color: subTextColor(darkMode),
                    fontFamily: 'PlusJakartaSans',
                    marginTop: 20,
                    marginLeft: 40,
                }}>Check-out</Text>
                <TouchableOpacity onPress={() => {
                    setOut(true)
                }} style={[style.input, {
                    justifyContent: 'center',
                    backgroundColor: !CheckOut ? '#f5f5f5' : 'transparent'
                }]}>
                    {
                        Out ? (
                            <RNDateTimePicker value={CheckOut ? CheckOut : new Date()}
                                minimumDate={CheckIn ? CheckIn : new Date()}
                                onChange={(event, date) => {
                                    setOut(false)
                                    setCheckOut(date);

                                }} />
                        ) : (
                            <Text style={{ color: textColor(darkMode) }}>{CheckOut ? CheckOut.getDate() + " "
                                + Months[CheckOut.getMonth()] + " " + CheckOut.getFullYear() : ''}</Text>
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
                    <View style={{ flex: 2, }}>
                        <Text style={{ fontSize: 18, color: subTextColor(darkMode) }}>Adults</Text>
                        <Text style={{
                            fontSize: 12,
                            color: '#808080',
                            fontFamily: 'PlusJakartaSans',
                        }}>Older 12 years</Text>
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
                            borderRadius: 25,
                            backgroundColor: '#F5F5F5',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <AntDesign name="minus" size={24} color="black" />
                        </TouchableOpacity>
                        <View style={{
                            height: 50,
                            width: 50,
                            borderRadius: 25,
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
                            borderRadius: 25,
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
                        <Text style={{ fontSize: 18, color: subTextColor(darkMode) }}>Children</Text>
                        <Text style={{
                            fontSize: 12,
                            color: '#808080',
                            fontFamily: 'PlusJakartaSans',
                        }}>5-12 years old</Text>
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
                            borderRadius: 25,
                            backgroundColor: '#F5F5F5',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <AntDesign name="minus" size={24} color="black" />
                        </TouchableOpacity>
                        <View style={{
                            height: 50,
                            width: 50,
                            borderRadius: 25,
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
                            borderRadius: 25,
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
                        <Text style={{ fontSize: 18, color: subTextColor(darkMode) }}>Rooms</Text>
                        <Text style={{ fontSize: 15, color: 'rgb(100,100,100)', }}></Text>
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
                                borderRadius: 25,
                                backgroundColor: '#F5F5F5',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <AntDesign name="minus" size={24} color="black" />
                        </TouchableOpacity>
                        <View style={{
                            height: 50,
                            width: 50,
                            borderRadius: 25,
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
                                borderRadius: 25,
                                backgroundColor: '#FFE1E3',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <AntDesign name="plus" size={24} color="red" />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={Confirm} disabled={count > 0 && count2 > 0 && text ? false : submit}
                    style={[style.viewEnd, {
                        backgroundColor: count > 0 && count2 > 0 && text ? '#FC444B' : backgroundColor(darkMode),
                        borderWidth: count > 0 && count2 > 0 && text ? 0 : 1,
                        borderColor: '#FC444B'
                    }]}>
                    <Text style={[style.viewtext, {
                        color: count > 0 && count2 > 0 && text ? '#ffff' : textColor(darkMode)
                    }]}>{submit ? 'DONE' : 'SUBMIT'}</Text>
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
        </View>
    );
};

export default HotelBooking;

