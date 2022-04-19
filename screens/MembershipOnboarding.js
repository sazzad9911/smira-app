import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Platform, ActivityIndicator } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { HotelMemberCart } from './Hotel'
import Brands from '../components/Brands'
import { useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

const MembershipOnboarding = ({ navigation }) => {
    const brands = useSelector(state => state.brands)
    const hotels = useSelector(state => state.hotels)

    return (
        <ScrollView>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Home')
            }} style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end', marginTop: Platform.OS == 'ios' ? 40 : 0
            }}>
                <AntDesign name='close' size={24} style={{
                    flex: 1,
                    margin: 15,
                }} />
            </TouchableOpacity>

            <View style={{ marginBottom: 15 }}>
                <Text style={{ textAlign: 'center', fontSize: 16, marginBottom: 7 }}>You’re invited to become</Text>
                <Text style={{ textAlign: 'center', fontSize: 25 }}><Text style={{ color: '#F33B41', fontWeight: '600' }}>SmiraClub</Text> Member</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={{
                    backgroundColor: '#F33B41', borderRadius: 10, height: 250, width: '90%',
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
                        <Text style={{ fontWeight: '600', color: 'white', fontSize: 35, }}>Worth of ₹ 1 lakh</Text>
                        <View style={{ width: '80%', borderColor: 'white', borderWidth: 0.5, marginBottom: 10, marginTop: 10 }}></View>
                        <Text style={{ color: 'white' }}>Unlimited enjoyment • Unlimited savings!</Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                    <TouchableOpacity style={{
                        backgroundColor: 'white', width: '90%', flex: 1, borderRadius: 7,
                        justifyContent: 'center', alignItems: 'center'
                    }} onPress={() => {
                        navigation.navigate('Choose Your Membership')
                    }}>
                        <Text style={{ fontSize: 15 }}>Claim your free month</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 15, }}>
                    <Text style={{ marginBottom: 5 }}>Have a family code?</Text>
                    <Text style={{ textDecorationLine: 'underline', color: '#FC444B' }} onPress={() => {
                        navigation.navigate('MemberShipInfo')
                    }}>Apply it there</Text>
                </View>
                <View style={{
                    marginTop: 15,
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
                        fontWeight: '500',
                        fontSize: 17,
                        marginBottom: 5
                    }}>Save on top brands</Text>
                    <Text style={{ fontSize: 13 }}>Save big on most popular brands with us</Text>
                </View>
                <ScrollView horizontal={true} style={{ width: '100%', padding: 5 }}>
                    {
                        brands ? (
                            brands.map((doc, i) => (
                                <Brands key={i} img={doc.image} />
                            ))
                        ) : (
                            <ActivityIndicator size="large" color="#FA454B" />
                        )
                    }
                </ScrollView>
                <ScrollView horizontal={true} style={{ width: '100%', padding: 5 }}>
                    {
                        brands ? (
                            brands.reverse().map((doc, i) => (
                                <Brands key={i} img={doc.image} />
                            ))
                        ) : (
                            <ActivityIndicator size="large" color="#FA454B" />
                        )
                    }
                </ScrollView>
                <View style={{ width: '100%', backgroundColor: 'rgb(245,245,245)', paddinTop: 15, paddingBottom: 15 }}>
                    <View style={{ marginTop: 25, marginBottom: 5, borderWidth: 0.5, borderColor: 'rgb(220,220,220)', width: '90%' }}></View>
                    <View style={{ width: '100%' }}>
                        <Text style={{ fontSize: 17, fontWeight: '600', padding: 10 }}>Free Stays at Executive Hotels</Text>
                        <Text style={{ paddingLeft: 10 }}>Save big on most luxury hotels with us</Text>
                    </View>
                    <ScrollView horizontal={true} style={{ width: '100%', margin: 10 }}>
                        {
                            hotels ? (
                                hotels.map((doc, i) => (
                                    <HotelMemberCart key={i} data={doc} />
                                ))
                            ) : (
                                <ActivityIndicator size="large" color="#FA454B" />
                            )
                        }
                    </ScrollView>
                </View>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ marginTop: 40, marginBottom: 35, fontSize: 18, fontWeight: '600' }}>FAQs</Text>
                    <View style={{
                        minHeight: 80, width: '90%', backgroundColor: '#F9F9F9', borderRadius: 10,
                        flexDirection: 'row', paddingLeft: 15, paddingRight: 15, paddingTop: 20, paddingBottom: 20
                    }}>
                        <View style={{ flex: 9, flexDirection: 'column', }}>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', }}>
                                <Text style={{ fontSize: 16, fontWeight: '500',color:'#393939' }}>What are the benefits of a SmiraClub membership?</Text>
                                <MaterialIcons name="keyboard-arrow-down" size={30} color="black" />
                            </View>
                            <Text style={{ color: 'gray', marginTop: 15 }}>SmiraClub Membership is an all-inclusive membership program that offers a variety of deals and hotel stays. Members receive substantial discounts on a variety of services provided by popular brands, as well as unlimited hotel stays in more than 30 cities across India. Members also receive priority assistance from us.
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}></View>
                    </View>


                    <View style={{
                        marginTop: 15,
                        minHeight: 80, width: '90%', backgroundColor: '#F9F9F9', borderRadius: 10,
                        flexDirection: 'row', paddingLeft: 15, paddingRight: 15, paddingTop: 20, paddingBottom: 20
                    }}>
                        <View style={{ flex: 9, flexDirection: 'column', }}>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', }}>
                                <Text style={{ fontSize: 16, fontWeight: '500',color:'#393939' }}>What are the benefits of Family Code Access feature?</Text>
                                <MaterialIcons name="keyboard-arrow-down" size={30} color="black" />
                            </View>

                        </View>
                        <View style={{ flex: 1 }}></View>
                    </View>


                    <View style={{
                        marginTop: 15,
                        minHeight: 80, width: '90%', backgroundColor: '#F9F9F9', borderRadius: 10,
                        flexDirection: 'row', paddingLeft: 15, paddingRight: 15, paddingTop: 20, paddingBottom: 20
                    }}>
                        <View style={{ flex: 9, flexDirection: 'column', }}>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', }}>
                                <Text style={{ fontSize: 16, fontWeight: '500' ,color:'#393939'}}>Are there any restrictions on the free hotel stays?</Text>
                                <MaterialIcons name="keyboard-arrow-down" size={30} color="black" />
                            </View>

                        </View>
                        <View style={{ flex: 1 }}></View>
                    </View>
                    <View style={{marginTop:30,marginBottom:50}}>
                        <Text style={{fontSize:17,color:'#585858',fontWeight:'500'}}>
                            Still have questions?
                        </Text>
                        <TouchableOpacity>
                        <Text style={{textAlign:'center',color:'#FC444B',fontSize:17,fontWeight:'400',textDecorationLine: 'underline',}}>
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