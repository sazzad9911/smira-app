import React, { useState } from 'react';
import {
    View, StyleSheet,
    Dimensions, ScrollView, Text,
    TouchableOpacity, TextInput, Alert,Modal
} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import { postData, url,dateDifference } from '../action'
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { getAuth } from 'firebase/auth'
import app from '../firebase';
import AnimatedLoader from "react-native-animated-loader";
import { useSelector,useDispatch } from 'react-redux';
import { textColor, subTextColor, backgroundColor } from './../assets/color';
import { setBottomSheet } from './../action';
import NewAlert from './NewAlert';

const HotelBooking = (props) => {
    const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const [CheckIn, setCheckIn] = React.useState(null)
    const [CheckOut, setCheckOut] = React.useState(null)
    const [In, setIn] = React.useState(null);
    const [Out, setOut] = React.useState(null)
    const [count, setCount] = React.useState(0)
    const [count1, setCount1] = React.useState(0)
    const [count2, setCount2] = React.useState(0)
    const [selectedItem, setSelectedItem] = useState(22)
    const [data, setData] = useState(null)
    const auth = getAuth(app);
    const [loader, setLoader] = React.useState(false)
    const navigation = props.navigation;
    const [submit, setSubmit] = React.useState(false)
    const [text, setText] = React.useState(null);
    const dispatch = useDispatch()
    const [modalVisible, setModalVisible]= React.useState(false)
    const [Select,setSelect]= React.useState(null)
    const user= useSelector(state => state.user)
    const [HotelName, setHotelName]= React.useState(null)
    const [Error, setError]= React.useState()
    const [Note, setNote]= React.useState()
    const [Veg, setVeg]= React.useState(0)
    const [NonVeg,setNonVeg]= React.useState(0)

    const convertDate = (date) => {
        let data = '';
        return data = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate())
    }
    const Confirm = () => {
        if(user[0].link){
            console.log('Family access granted')
            postData(url + '/getData',{
                tableName: 'user',
                condition: "uid=" + "'" +user[0].link + "'"
            }).then(users=>{
                if(Array.isArray(users) && users.length>0){
                    getFamilyAccess(users[0])
                }else{
                    setError('Invalid family access')
                }
            })
            return
        }
        if(user && !user[0].membership_type || dateDifference(new Date(),user[0].ending_date)<0){
            navigation.navigate('Choose Your Membership')
            return
        }
        if(!CheckIn){
            return
        }
        if(!CheckOut){
            return
        }
        dispatch(setBottomSheet(null))
        setLoader(true)
        postData(url + '/setData', {
            auth: auth.currentUser,
            tableName: 'booking_enquiry',
            columns: ['check_in', 'check_out', 'adults', 'children', 'room', 'uid', 'hotel_id','type','veg','non_veg','note','address'],
            values: [convertDate(CheckIn), convertDate(CheckOut), count, count1, count2, auth.currentUser.uid, selectedItem,Select,Veg,NonVeg,Note?Note:'',text]
        }).then(data => {
            if (data.insertId) {
                setLoader(false)
                props.close(false)
                setSubmit(!submit)
                return navigation.navigate('Confirm Message', {
                    text1: 'You have successfully done the process.',
                    text2: 'Please wait for confirmation.'
                })
            }
            setLoader(false)
            Alert.alert('Opps!', data.message)
        }).catch(err => {
            setLoader(false)
            Alert.alert('Error', err.code)
        })
        // postData(url +'/sendEmail',{
        //     from:'info@smira.club',
        //     to:auth.currentUser.email,
        //     subject:'Your Booking Request has been received - Smira Club',
        //     text:"<p>Dear <strong>"+user[0].name.split(' ')[0]+"</strong>,</p><p>We have received your request for a booking on <strong>"+convertDate(new Date(CheckIn))+"</strong> for <strong>"+count2+"</strong> room at the "+HotelName+".Please wait for a booking confirmation email to know about your booking status.If you have any inquiries, please do not hesitate to contact us.</p><p>Best Regards</p><p>Smira Club</p><p>Ranjit Studio Compound,</p><p> Ground & 1st Floor, </p><p>C-Block, Plot No. 115, </p><p>Dada Saheb Phalke Marg, </p><p>Opp. Bharatkshetra, Hindmata, </p><p>Dadar East, Mumbai, </p><p>Maharashtra 400014 </p><p>Contact No. </p><p>9819812456</p><p>9833733477</p><p>9820342389</p><p> Email - support@smira.club</p>"
        // }).then(data=>{
        //     console.log(data)
        // })
    }
    const getFamilyAccess=(user) => {
        if(user && !user.membership_type || dateDifference(new Date(),user.ending_date)<0){
            navigation.navigate('Choose Your Membership')
            return
        }
        if(!CheckIn){
            return
        }
        if(!CheckOut){
            return
        }
        dispatch(setBottomSheet(null))
        setLoader(true)
        postData(url + '/setData', {
            auth: auth.currentUser,
            tableName: 'booking_enquiry',
            columns: ['check_in', 'check_out', 'adults', 'children', 'room', 'uid', 'hotel_id','type','veg','non_veg','note'],
            values: [convertDate(CheckIn), convertDate(CheckOut), count, count1, count2, auth.currentUser.uid, selectedItem,Select,Veg,NonVeg,Note?Note:'']
        }).then(data => {
            if (data.insertId) {
                setLoader(false)
                props.close(false)
                setSubmit(!submit)
                return navigation.navigate('Confirm Message', {
                    text1: 'You have successfully done the process.',
                    text2: 'Please wait for confirmation.'
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
            marginRight: 25,
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
    const checkHotelBooking= () =>{
        if(user[0].link){
            console.log('Family access granted')
            setLoader(true)
            postData(url + '/getData',{
                tableName: 'user',
                condition: "uid=" + "'" +user[0].link + "'"
            }).then(data=>{
                if(Array.isArray(data) && data.length == 0){
                    setError('Your linking account not found.');
                    setLoader(false);
                    return
                }
                if(Array.isArray(data) && data.length > 0){
                    getFamilyAccess(data[0])
                    setLoader(false)
                }
                setError(data.message)
                setLoader(false)
            })
            return
        }
        if(user && parseInt(dateDifference(new Date(), user[0].ending_date))<0 || !user[0].membership_type){
            setError('Your membership plan has expired. Please renew your membership plan.')
            return
        }
        setLoader(true)
        postData(url + '/getData',{
            tableName:'membership',
            condition: "type=" + "'"+user[0].membership_type+"'"
        }).then(membership=>{
            if(Array.isArray(membership) && membership.length > 0){
                let totalHotels =0;
                let totalNights =0;
                postData(url + '/getData',{
                tableName: 'hotel_booking',
                condition: "user_id=" +"'"+ auth.currentUser.uid + "'"
                }).then(data=>{
             if(Array.isArray(data) && data.length > 0){
                let id=data[0].hotel_id;
                totalHotels=1;
               data.forEach(doc=>{
               if(doc.visible){
                totalNights=totalNights+parseInt(dateDifference(doc.check_in, doc.check_out))
                if(id!=doc.hotel_id){
                    totalHotels=totalHotels+1;
                    id =doc.hotel_id;
                }
               }
             })
             if(membership[0].hotel!='all' && membership[0].hotel<totalHotels ){
                setError('Your hotel quota exceeded. Please renew your plan.')
                setLoader(false);
                return
             }
             if(membership[0].night!='unlimited' && membership[0].night<totalNights){
                setError('You extend maximum level of your night spend quota. Please renew your plan')
                setLoader(false);
                return
             }
             setLoader(false);
             setModalVisible(true)
            }else{
                setLoader(false);
                setModalVisible(true)
            }
        })
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
                    marginLeft: 20,
                }}>Where?</Text>

                <TextInput value={text} onChangeText={(val) => {
                    // if(!val) {
                    //     setData([])

                    // }
                    setText(val);
                    postData(url + '/getData', {
                        tableName: 'hotels',
                        condition:`address like '${val}%'`,
                        limit:10
                    }).then(data => {
                        if (Array.isArray(data)) {
                            setData(data)
                        }else{
                            setData([])
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
                                setHotelName(data.name)
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
                    marginLeft: 20,
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
                    marginLeft: 20,
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
                    marginLeft: 0, marginTop: 20
                }}>
                    <View style={{ flex: 2, }}>
                        <Text style={{ fontSize: 18, 
                        color: subTextColor(darkMode),
                        fontFamily: 'PlusJakartaSans'
                        }}>Adults</Text>
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
                    marginLeft: 0, marginTop: 20
                }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ fontSize: 18,
                         color: subTextColor(darkMode), 
                         fontFamily: 'PlusJakartaSans'
                         }}>Children</Text>
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
                    marginLeft: 0, marginTop: 20
                }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ fontSize: 18,
                         color: subTextColor(darkMode), 
                         fontFamily: 'PlusJakartaSans'
                         }}>Rooms</Text>
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
                <View style={{
                            alignItems: 'center', flexDirection: 'row',
                            marginLeft: 0, marginTop: 20
                           }}>
                            <View style={{ flex: 2 }}>
                                <Text style={{ fontSize: 18, color: '#585858',
                                fontFamily:'PlusJakartaSans' 
                                }}>Veg</Text>
                                <Text style={{ fontSize: 15,
                                 color: 'rgb(100,100,100)',
                                 fontFamily:'PlusJakartaSans' 
                                 }}>Breakfast+Dinner</Text>
                            </View>
                            <View style={{
                                justifyContent: 'center',
                                flexDirection: 'row',
                            }}>
                                <TouchableOpacity onPress={() => {
                                    if (Veg > 0) {
                                        setVeg(Veg - 1);
                                    }
                                }} style={{
                                    height: 50,
                                    width: 50,
                                    borderRadius: 30,
                                    backgroundColor: '#F5F5F5',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <AntDesign name="minus" size={24} color="#808080" />
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
                                    }}>{Veg}</Text>
                                </View>
                                <TouchableOpacity onPress={() => {
                                    setVeg(Veg + 1);
                                }} style={{
                                    height: 50,
                                    width: 50,
                                    borderRadius: 30,
                                    backgroundColor: '#FFE1E3',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <AntDesign name="plus" size={24} color="#FC444B" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{
                            alignItems: 'center', flexDirection: 'row',
                            marginLeft: 0, marginTop: 20
                           }}>
                            <View style={{ flex: 2 }}>
                                <Text style={{ fontSize: 18, color: '#585858',
                                fontFamily:'PlusJakartaSans' 
                                }}>Non-Veg</Text>
                                <Text style={{ fontSize: 15,
                                 color: 'rgb(100,100,100)',
                                 fontFamily:'PlusJakartaSans' 
                                 }}>Breakfast+Dinner</Text>
                            </View>
                            <View style={{
                                justifyContent: 'center',
                                flexDirection: 'row',
                            }}>
                                <TouchableOpacity onPress={() => {
                                    if (NonVeg > 0) {
                                        setNonVeg(NonVeg - 1);
                                    }
                                }} style={{
                                    height: 50,
                                    width: 50,
                                    borderRadius: 30,
                                    backgroundColor: '#F5F5F5',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <AntDesign name="minus" size={24} color="#808080" />
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
                                    }}>{NonVeg}</Text>
                                </View>
                                <TouchableOpacity onPress={() => {
                                    setNonVeg(NonVeg + 1);
                                }} style={{
                                    height: 50,
                                    width: 50,
                                    borderRadius: 30,
                                    backgroundColor: '#FFE1E3',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <AntDesign name="plus" size={24} color="#FC444B" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{
                            marginLeft: 0, marginTop: 20
                          }}>
                           <Text style={{
                            fontSize: 18, color: '#585858',
                                fontFamily:'PlusJakartaSans' 
                            }}>Additional Note</Text>
                           <TextInput value={Note} onChangeText={setNote} multiline={true} numberOfLines={5} style={{
                            borderWidth:1,
                            borderColor: '#D3D3D3',
                            marginTop: 10,
                            marginBottom: 20,
                            borderRadius: 10,
                            padding: 10,
                        }} placeholderTextColor="#585858" placeholder=""/>
                        </View>
                        {Error?(<Text style={{
                            color:'red',
                            fontFamily:'PlusJakartaSans',
                            textAlign:'center',
                        }}>{Error}</Text>):(<></>)}
                <TouchableOpacity onPress={() => {
                   setModalVisible(true)
                }} disabled={count > 0 && count2 > 0 && text ? false : true}
                    style={[style.viewEnd, {
                        backgroundColor: count > 0 && count2 > 0 && text ? '#FC444B' : textColor(!darkMode),
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
                source={require("../assets/Loading.json")}
                animationStyle={{
                    height: 100, width: 100,
                }}
                speed={1}
            >
                <Text>Loading...</Text>
            </AnimatedLoader>
            <Modal transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
                <NewAlert title={user && user[0].membership_type || user[0].link?'Confirm your booking enquiry?':'Buy membership to unlock this offer'} 
                close={setModalVisible} onPress={() =>{
                    Confirm()
                }}/>
            </Modal>
        </View>
    );
};

export default HotelBooking;

