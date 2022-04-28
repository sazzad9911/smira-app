import {
    ScrollView, StyleSheet, Text, View,
    TouchableOpacity, Platform, ActivityIndicator, Image
} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { HotelMemberCart } from './Hotel'
import Brands from '../components/Brands'
import { useSelector, useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { setFamilyCode } from '../action'
import Background from '../assets/Background.png'
import { backgroundColor, textColor } from './../assets/color';

const MembershipOnboarding = ({ navigation }) => {
    const brands = useSelector(state => state.brands)
    const hotels = useSelector(state => state.hotels)
    const darkMode = useSelector(state => state.pageSettings.darkMode)
    const length = brands ? brands.length : 0
    const dispatch = useDispatch()

    return (
        <ScrollView showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false} style={{ backgroundColor: backgroundColor(darkMode) }}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Home')
            }} style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end', marginTop: Platform.OS == 'ios' ? 40 : 0
            }}>
                <AntDesign name='close' size={24} style={{
                    flex: 1,
                    margin: 15,
                    color: textColor(darkMode)
                }} />
            </TouchableOpacity>

            <View style={{ marginBottom: 15 }}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 14, marginBottom: 7,
                    fontFamily: 'PlusJakartaSans',
                    lineHeight: 20, color: textColor(darkMode)
                }}>You’re invited to become</Text>
                <Text style={{
                    textAlign: 'center', fontSize: 24,
                    fontFamily: 'PlusJakartaSansBold',
                    color: textColor(darkMode)
                }}><Text style={{ color: '#F33B41', fontWeight: '600' }}>SmiraClub</Text> Member</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={{ height: 250, width: '90%', borderRadius: 10 }}>
                    <Image source={Background} style={{
                        height: '100%', width: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        borderRadius: 10
                    }} />
                    <View style={{
                        borderRadius: 10, width: '100%', height: '100%',
                        flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between',
                        paddingTop: 10, paddingBottom: 20, shadowOffset: {
                            width: 5,
                            height: 5
                        },
                        shadowColor: 'gray',
                        shadowOpacity: 0.5,
                        shadowRadius: 5,
                        elevation: 10
                    }}>

                        <View style={{ flex: 0.5 }}></View>
                        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                            <Text style={{ fontFamily: 'PlusJakartaSansBold', color: 'white', fontSize: 32, }}>Worth of ₹ 1 lakh</Text>
                            <View style={{ width: '80%', borderColor: 'rgba(255, 255, 255, 0.3)', borderWidth: 0.5, marginBottom: 10, marginTop: 10 }}></View>
                            <Text style={{
                                color: 'white',
                                fontFamily: 'PlusJakartaSans',
                                fontSize: 14,
                            }}>Unlimited enjoyment • Unlimited savings!</Text>
                        </View>
                        <View style={{ flex: 1 }}></View>
                        <TouchableOpacity style={{
                            backgroundColor: 'white', width: '90%', flex: 1, borderRadius: 7,
                            justifyContent: 'center', alignItems: 'center'
                        }} onPress={() => {
                            navigation.navigate('Choose Your Membership')
                        }}>
                            <Text style={{
                                fontSize: 16,
                                fontFamily: 'PlusJakartaSans',
                            }}>Claim your free month</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 15, }}>
                    <Text style={{
                        marginBottom: 5,
                        fontFamily: 'PlusJakartaSans',
                        color: '#585858',
                        fontSize: 14,
                    }}>Have a family code?</Text>
                    <Text style={{
                        color: '#FC444B',
                        fontFamily: 'PlusJakartaSans',
                        fontSize: 14,
                    }} onPress={() => {
                        dispatch(setFamilyCode(true))
                    }}>Apply it here</Text>
                    <View style={{ backgroundColor: '#FC444B', height: 1, width: 80, marginTop: 2 }}></View>
                </View>
                <View style={{
                    marginTop: 25,
                    marginBottom: 5,
                    borderWidth: 0.5,
                    borderColor: 'rgb(220,220,220)',
                    width: '90%'
                }}></View>
                <View style={{
                    justifyContent: 'flex-start',
                    width: '100%',
                    padding: 15
                }}>
                    <Text style={{
                        fontFamily: 'PlusJakartaSansBold',
                        fontSize: 18,
                        color: textColor(darkMode)
                    }}>Save on top brands</Text>
                    <Text style={{
                        fontSize: 14,
                        fontFamily: 'PlusJakartaSans',
                        color: textColor(darkMode)
                    }}>Save big on most popular brands with us</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false} horizontal={true} style={{ width: '100%', paddingLeft: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        {
                            brands ? (
                                brands.map((doc, i) => (
                                    <View key={i}>
                                        <View style={{ margin: 5 }}>
                                            <Brands key={i} img={doc.image} />
                                        </View>
                                        <View style={{ width: 20 }}></View>
                                        <View style={{ margin: 5 }}>
                                            <Brands key={i} img={brands[1].image} />
                                        </View>
                                    </View>
                                ))
                            ) : (
                                <ActivityIndicator size="large" color="#FA454B" />
                            )
                        }
                    </View>

                    <View style={{ flexDirection: 'row' }}>

                    </View>
                </ScrollView>
                <View style={{ width: '100%', backgroundColor: backgroundColor(darkMode), paddingTop: 25, paddingBottom: 20 }}>

                    <View style={{ width: '100%', }}>
                        <Text style={{
                            fontSize: 16,
                            fontFamily: 'PlusJakartaSansBold',
                            fontWeight: '700',
                            paddingLeft: 10,
                            color: textColor(darkMode)
                        }}>Free Stays at Executive Hotels</Text>
                        <Text style={{
                            paddingLeft: 10,
                            fontSize: 11,
                            fontFamily: 'PlusJakartaSans',
                            fontWeight: '500',
                            color: textColor(darkMode)
                        }}>Save big on most luxury hotels with us</Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false} horizontal={true} style={{ width: '100%', margin: 15 }}>
                        {
                            hotels ? (
                                hotels.map((doc, i) => (
                                    <HotelMemberCart key={i} data={doc} />
                                ))
                            ) : (
                                <ActivityIndicator size="large" color="#FA454B" />
                            )
                        }
                        <View style={{ width: 20 }}></View>
                    </ScrollView>
                </View>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ height: 40 }}></View>
                    <Text style={{
                        marginTop: 30,
                        marginBottom: 35,
                        fontSize: 18,
                        fontFamily: 'PlusJakartaSansBold',
                        fontWeight: '700',
                        color: textColor(darkMode)
                    }}>FAQs</Text>

                    <Quiz />
                    <Quiz />
                    <Quiz />
                    <View style={{ flex: 1 }}></View>
                    <View style={{ marginTop: 30, marginBottom: 50 }}>
                        <Text style={{ fontSize: 14, fontFamily: 'PlusJakartaSansBold', color: '#585858', fontWeight: '500' }}>
                            Still have questions?
                        </Text>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Talk To Us')
                        }}>
                            <Text style={{ textAlign: 'center', color: '#FC444B', fontSize: 14, fontWeight: '500', fontFamily: 'PlusJakartaSansBold', textDecorationLine: 'underline', }}>
                                Talk to Us
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

export default MembershipOnboarding

const styles = StyleSheet.create({})
const Quiz = () => {
    const [height, setHeight] = React.useState(0)
    return (
        <View style={{
            minHeight: 80,
            width: '90%',
            backgroundColor: '#F9F9F9',
            borderRadius: 10,
            flexDirection: 'row',
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 20,
            paddingBottom: 20,
            marginTop: 10
        }}>
            <View style={{
                flex: 9,
                flexDirection: 'column',
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: "space-between",
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 13,
                        fontWeight: '500',
                        color: '#393939',
                        fontFamily: 'PlusJakartaSansBold',
                    }}>What are the benefits of a SmiraClub membership?</Text>
                    <TouchableOpacity onPress={() => {
                        if (height == 0) {
                            setHeight('auto')
                        } else {
                            setHeight(0)
                        }
                    }}>
                        <MaterialIcons name={height ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <Text style={{
                    color: 'gray',
                    marginTop: 15,
                    fontSize: 12,
                    fontFamily: 'PlusJakartaSans',
                    height: height
                }}>SmiraClub Membership is an all-inclusive membership program that offers a variety of deals and hotel stays. Members receive substantial discounts on a variety of services provided by popular brands, as well as unlimited hotel stays in more than 30 cities across India. Members also receive priority assistance from us.
                </Text>
            </View>
            <View style={{ flex: 1 }}></View>
        </View>
    )
}