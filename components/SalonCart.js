import React from 'react';
import {
    View, TouchableOpacity, Image, Text,
    StyleSheet, Modal, ScrollView, Platform, ActivityIndicator, Linking, Dimensions
} from 'react-native'
import { useSelector } from 'react-redux'
import { textColor, backgroundColor } from './../assets/color';
import { AntDesign } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import app from '../firebase';
import { getAuth } from 'firebase/auth';
import { postData, url,dateDifference } from '../action'
import { SvgXml } from 'react-native-svg';
import { call, location, leftArrow, upArrow, rightArrow } from './Icon';
import NewAlert from './NewAlert'
import { useNavigation } from '@react-navigation/native';


const SalonCart = (props) => {
    const darkMode = useSelector(state => state.pageSettings.darkMode)
    const [ModalVisible, setModalVisible] = React.useState(false)
    const data = props.data
    const deals = useSelector(state => state.deals)
    const [total, setTotal] = React.useState([])

    React.useEffect(() => {
        if (deals) {
            let arr = deals.filter(deals => deals.deal.brand_id == data.id)
            setTotal(arr)
        }

    }, [deals])
    return (
        <View style={{ backgroundColor: textColor(!darkMode), padding: 10, marginTop: 10 }}>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={{
                flexDirection: 'row',
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#D8D8D8'
            }}>
                <Image style={{
                    height: 70,
                    width: 70,
                    margin: 20,
                    borderRadius: 35
                }} source={{ uri: data ? data.image : '' }} />
                <View style={{
                    marginVertical: 20
                }}>
                    <Text numberOfLines={1} style={{
                        fontSize: 18,
                        fontFamily: 'PlusJakartaSansBold'
                    }}>{data ? data.name : ''}</Text>
                    <Text style={[style.subText, { width: 200 }]} numberOfLines={1}>{data ? data.address : ''}</Text>
                    <Text style={style.subText} numberOfLines={1}>{total.length} Offers</Text>
                </View>
                <SvgXml style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20
                }} xml={rightArrow} height="24" width="24" />
            </TouchableOpacity>
            <Modal visible={ModalVisible} onRequestClose={() => setModalVisible(!ModalVisible)}>
                <DetailsCart setModalVisible={setModalVisible} data={data} />
            </Modal>
        </View>
    );
};

export default SalonCart;

export const DetailsCart = (props) => {
    const [Confirm, setConfirm] = React.useState(false);
    const user = useSelector(state => state.user)
    const [total, setTotal] = React.useState([])
    const deals = useSelector(state => state.deals)
    const darkMode = useSelector(state => state.pageSettings.darkMode)
    const data = props.data
    const window = Dimensions.get('window')

    React.useEffect(() => {
        if (deals) {
            let arr = deals.filter(deals => deals.deal.brand_id == data.id)
            setTotal(arr)
        }

    }, [deals])

    return (
        <View style={{ backgroundColor: backgroundColor(darkMode), height: '100%' }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
                paddingVertical: 15,
            }}>
                <TouchableOpacity onPress={() => {
                    props.setModalVisible(false);
                }} style={{
                    backgroundColor: '#808080',
                    padding: 7,
                    borderRadius: 20
                }}>
                    <AntDesign name="left" size={20} color="#ffff" />
                </TouchableOpacity>
            </View>
            {
                Confirm ? (
                    <View style={{
                        backgroundColor: backgroundColor(darkMode),
                        justifyContent: 'center',
                        height: '75%',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <AntDesign name="checkcircle" size={60} color="#FC444B" />
                            <Text style={{
                                fontSize: 20,
                                fontWeight: "bold",
                                marginTop: 20,
                                fontFamily: 'PlusJakartaSansBold'
                            }}>Congratulations!</Text>
                            <Text style={{
                                fontSize: 14,
                                color: '#585858',
                                fontFamily: 'PlusJakartaSans'
                            }}>You have successfully booked. </Text>
                            <Text style={{
                                fontSize: 14,
                                color: '#585858',
                                fontFamily: 'PlusJakartaSans'
                            }}>Please check for confirmation email.</Text>
                        </View>
                    </View>
                ) : (
                    <View style={{ height: window.height - 60 }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#fff'
                        }}>
                            <View style={{
                                flex: 3
                            }}>
                                <Image style={{
                                    height: 70,
                                    width: 70,
                                    margin: 20,
                                    borderRadius: 35
                                }} source={{ uri: data.image }} />
                            </View>
                            <View style={{
                                flex: 5
                            }}>
                                <Text numberOfLines={1} style={{
                                    fontSize: 18,
                                    fontFamily: 'PlusJakartaSansBold'
                                }}>{data.name}</Text>
                                <Text style={style.subText} numberOfLines={1}>{data.address}</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                flex: 2,
                            }}>
                                <TouchableOpacity onPress={() => Linking.openURL(`tel:+91` + data.phone)}>
                                    <SvgXml xml={call} height="30" width="30" />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => Linking.openURL(data.location ? data.location : 'https://goo.gl/maps/9qdMw2BYBYTb8GL2A')}>
                                    <SvgXml xml={location} height="30" width="30" />
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={{
                            backgroundColor: '#ffff',
                            marginVertical: 10,
                            height: 40,
                            justifyContent: 'center',
                            paddingHorizontal: 20
                        }}>
                            <Text style={{
                                color: '#000000',
                                fontFamily: 'PlusJakartaSans',
                                fontSize: 14,
                            }}>{total.length} Offers</Text>
                        </View>
                        <ScrollView style={{ backgroundColor: backgroundColor(darkMode) }}>
                            {
                                total.map((item, i) => (
                                    <Cart data={item} key={i} book={() => setConfirm(true)}
                                        user={user && user[0].membership_type && 
                                        dateDifference(new Date(),user[0].ending_date)>0 || user[0].link? true : false} />
                                ))
                            }
                        </ScrollView>
                    </View>
                )
            }
        </View>
    )
}

export const Cart = (props) => {
    const darkMode = useSelector(state => state.pageSettings.darkMode)
    const [Open, setOpen] = React.useState(false)
    const [ModalVisible, setModalVisible] = React.useState(false)
    const [Confirm, setConfirm] = React.useState(false);
    const data = props.data
    const [day, setDay] = React.useState([])
    const [times, setTimes] = React.useState([])
    const [discount, setDiscount] = React.useState(0)
    const [Code, setCode] = React.useState(null)
    const [Loader, setLoader] = React.useState(false)
    const auth = getAuth(app);
    const user = useSelector(state => state.user)
    const navigation=useNavigation()

    React.useEffect(() => {
        let newDay = data.deal.days.split(',')
        setDay(newDay)
        let newTimes = data.deal.time.split(',')
        setTimes(newTimes)

        let prices = data.deal.price - ((data.deal.price * data.deal.discount) / 100)
        setDiscount(prices)

    }, [data]);
    const copyToClipboard = (code) => {
        try {
            Clipboard.setString(code)
            setCode(!Code)
        } catch (e) {
            console.log(e.message)
        }
    };
    const convertDate = (date) => {
        let data = '';
        return data = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate())
    }
    return (
        <View style={{ backgroundColor: '#FFFF', marginBottom: 10, padding: 10 }}>
            <TouchableOpacity onPress={() => {
                if(props.user){
                setOpen(!Open)
                }else{
                    setModalVisible(true)
                }
            }} style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#D8D8D8',
                minHeight: 200,
                padding: 20
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text numberOfLines={2} style={{
                        fontSize: 16,
                        fontFamily: 'PlusJakartaSansBold',
                        width: '75%',
                        color: 'black'
                    }}>{data.deal.name}</Text>
                    {
                        Open ? (
                            <SvgXml xml={upArrow} height="23" width="23" />
                        ) : (
                            <SvgXml xml={leftArrow} height="23" width="23" />
                        )
                    }
                </View>
                <View style={{ marginTop: 5 }}>
                    <View style={style.cartContainer}>
                        <Text style={style.cartText}>Valid on</Text>
                        <Text numberOfLines={1} style={style.cartHead}>{day.length == 7 ? 'All Days' : day[0] + "-" + day[day.length - 1]}</Text>
                    </View>
                    <View style={style.cartContainer}>
                        <Text style={style.cartText}>Timings</Text>
                        <Text numberOfLines={1} style={style.cartHead}>{times.length > 0 ? times[0] : 'Off'}</Text>
                    </View>
                    <View style={style.cartContainer}>
                        <Text style={style.cartText}>Valid for</Text>
                        <Text numberOfLines={1} style={style.cartHead}>{data.deal.forr?data.deal.forr:''}</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems:'flex-end'
                }}>
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 15,
                    }}>
                        <Text style={{
                            fontSize: 14,
                            fontFamily: 'PlusJakartaSansBold',
                            color: '#FC444B'
                        }}>Details</Text>
                        <SvgXml style={{
                           marginLeft:5,marginTop:3
                        }} xml={rightArrow} height="15" width="15" />
                    </TouchableOpacity>
                    <View style={{
                        alignItems:'flex-end'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            width: 200,
                            flexWrap: 'wrap',
                            justifyContent: 'flex-end'
                        }}>
                            <Text style={{
                                fontSize: 18,
                                fontFamily: 'PlusJakartaSans',
                                color: '#808080',
                                textDecorationLine: 'line-through',
                            }}>{data.deal.price?'₹'+data.deal.price:''}</Text>
                            <Text  style={{
                                fontSize: 20,
                                fontFamily: 'PlusJakartaSansBold',
                                marginLeft: 5,
                            }}>{data.deal.discount}</Text>
                        </View>
                        <Text style={[style.cartText]}>Inc. of all taxes</Text>
                    </View>
                </View>
                {
                    Open && props.user ? (
                        <TouchableOpacity onPress={() => {
                            if (props.user && data.deal.code=='null') {
                                setLoader(true);
                                postData(url + '/setData', {
                                    auth: auth.currentUser,
                                    tableName: 'book_appointment',
                                    columns: ['uid', 'deal_id', 'date'],
                                    values: [auth.currentUser.uid, data.deal.id, convertDate(new Date())]
                                }).then(data => {
                                    if (data && data.insertId) {
                                        setLoader(false);
                                        return props.book(true)
                                    }
                                    setLoader(false);
                                    console.log(data.message)
                                }).catch(err => {
                                    setLoader(false);
                                    console.log(err.message)
                                })
                                postData(url +'/sendEmail',{
                                 from:'info@smira.club',
                                 to:auth.currentUser.email,
                                 subject:'Your Appointment Request has been received - Smira Club',
                                 text:"<p>Dear <strong>"+user[0].name.split(' ')[0]+"</strong>,</p><p>We have received your request for a appointment on <strong>"+convertDate(new Date())+"</strong> for "+data.deal.name+"<p>Smira Club</p><p>Ranjit Studio Compound,</p><p> Ground & 1st Floor, </p><p>C-Block, Plot No. 115, </p><p>Dada Saheb Phalke Marg, </p><p>Opp. Bharatkshetra, Hindmata, </p><p>Dadar East, Mumbai, </p><p>Maharashtra 400014 </p><p>Contact No. </p><p>9819812456</p><p>9833733477</p><p>9820342389</p><p> Email - support@smira.club</p>"
                             }).then(data=>{
                                console.log(data)
                            })

                            } else {
                                copyToClipboard(data.deal.code)
                            }
                        }}
                            style={{
                                backgroundColor: props.user && data.deal.code=='null' ? '#FC444B' : 'transparent',
                                justifyContent: 'center',
                                borderRadius: 30,
                                alignItems: 'center',
                                marginTop: 10,
                                borderColor: '#fc444b',
                                borderWidth: 1,
                                borderStyle: props.user ? 'solid' : 'dashed',
                                height: 60
                            }}>
                            {
                                Loader ? (
                                    <ActivityIndicator size="large" color="#FFFF" />
                                ) : (
                                    <Text style={{
                                        fontSize: 18,
                                        fontFamily: 'PlusJakartaSans',
                                        color: props.user && data.deal.code=='null' ? '#ffff' : '#fc444b',
                                        marginVertical: 15
                                    }}>{props.user && data.deal.code=='null' ? 'CONFIRM BOOKING' : Code ? 'COPIED' : data.deal.code}</Text>
                                )
                            }

                        </TouchableOpacity>
                    ) : (<View></View>)
                }
            </TouchableOpacity>
            <Modal transparent={true} visible={ModalVisible} onRequestClose={() => setModalVisible(!ModalVisible)}>
               
                {
                    props.user?(
                        <View style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: backgroundColor(darkMode)
                }}>
                    <View style={{
                        height: Platform.OS == 'ios' ? 120 : 50,
                        flexDirection: 'row',
                        backgroundColor: backgroundColor(darkMode)
                    }}>
                        <TouchableOpacity onPress={() => {
                            setModalVisible(false)
                        }} style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <AntDesign name="left" size={20} color="#808080" />
                        </TouchableOpacity>
                        <View style={{
                            flex: 8,
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <Text style={{
                                fontSize: 20,
                                marginLeft: -40,
                                fontSize: 16,
                                fontFamily: 'PlusJakartaSansBold',
                                color: textColor(darkMode)
                            }}>Details</Text>
                        </View>
                    </View>
                    <ScrollView style={{
                        padding: 20
                    }}>
                        <Text style={[style.headline, {
                            color: 'black',
                            marginVertical: 10
                        }]}>Use this within</Text>
                        <Text style={style.subText}>24 hours of booking</Text>
                        <Text style={[style.headline, {
                            color: 'black',
                            marginVertical: 10
                        }]}>Timings</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{
                                width: '40%'
                            }}>
                                {
                                    day.map((doc, i) => (
                                        <Text key={i} style={style.dateText}>{doc}</Text>
                                    ))
                                }

                            </View>
                            <View>

                                {
                                    times.map((time, i) => (
                                        <Text key={i} style={style.dateText}>{time}</Text>
                                    ))
                                }
                            </View>
                        </View>
                        <Text style={[style.headline, {
                            color: 'black',
                            marginVertical: 10
                        }]}>How to use</Text>
                        <Text style={[style.subText]}>1.Carry your email voucher on phone or access it under the 'purchases' section of the app.</Text>
                        <Text style={[style.subText]}>2. Make prior reservation before you visit the merchant.</Text>
                        <Text style={[style.subText]}>3. Merchant verifies the voucher or you can redeem it yourself using the app.</Text>
                        <Text style={[style.headline, {
                            color: 'black',
                            marginVertical: 10
                        }]}>Things to remember</Text>
                        <Text style={[style.subText]}>1. Prior reservation is mandatory</Text>
                        <Text style={[style.subText]}>2. All offers are inclusive of all applicable taxes and service charges</Text>
                        <Text style={[style.subText]}>3. It is highly recommended that the customer wear masks while visiting the outlet to prevent infection.</Text>
                        <Text style={[style.subText]}>4. Right of admission reserved</Text>
                    </ScrollView>
                </View>
                    ):(
                <NewAlert title={'Buy membership to unlock this offer'} 
                close={setModalVisible} onPress={() =>{
                    navigation.navigate('MemberShipOnboarding')
                }}/>
                    )
                }
            </Modal>
        </View>
    )
}
const style = StyleSheet.create({
    headline: {
        fontSize: 16,
        fontFamily: 'PlusJakartaSansBold',
    },
    subText: {
        fontSize: 14,
        fontFamily: 'PlusJakartaSans',
        color: '#585858',
        lineHeight: 22
    },
    cartContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    cartText: {
        fontSize: 12,
        fontFamily: 'PlusJakartaSans',
        color: '#808080'
    },
    cartHead: {
        color: '#585858',
        fontFamily: 'PlusJakartaSansBold',
        fontSize: 12,
        marginLeft: 20,
        marginRight:20,
        maxWidth:'80%'
    },
    dateText: {
        color: '#585858',
        fontFamily: 'PlusJakartaSansBold',
        fontSize: 14,
        marginVertical: 5
    }
})