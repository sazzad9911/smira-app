import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const MembershipOnboarding = ({navigation}) => {
    return (
        <ScrollView>
            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <AntDesign name='close' size={24} style={{
                    flex: 1,
                    margin: 15,
                }} />
            </View>

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
                    }} onPress={() =>{
                        navigation.navigate('Choose Your Membership')
                    }}>
                        <Text style={{ fontSize: 15 }}>Claim your free month</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 15, }}>
                    <Text style={{ marginBottom: 5 }}>Have a family code?</Text>
                    <Text style={{ textDecorationLine: 'underline', color: 'red' }} onPress={() => {
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
                    <View style={{
                        height: 80, width: 80, backgroundColor: 'red', borderRadius: 10, shadowColor: 'gray',
                        shadowOffset: { 
                            width: 5, 
                            height: 5 
                            }, 
                            shadowOpacity: 0.6, 
                            shadowRadius: 5, 
                            marginLeft: 5, 
                            marginRight: 5
                    }}>

                    </View>
                    <View style={{
                        height: 80, 
                        width: 80, 
                        backgroundColor: 'red', 
                        borderRadius: 10, 
                        shadowColor: 'gray',
                        shadowOffset: { 
                            width: 5, 
                            height: 5 
                            }, 
                        shadowOpacity: 0.6, 
                        shadowRadius: 5, 
                        marginLeft: 5, 
                        marginRight: 5
                    }}>

                    </View>
                    <View style={{
                        height: 80, 
                        width: 80, 
                        backgroundColor: 'red', 
                        borderRadius: 10, 
                        shadowColor: 'gray',
                        shadowOffset: { 
                            width: 5, 
                            height: 5 
                            }, 
                        shadowOpacity: 0.6, 
                        shadowRadius: 5, 
                        marginLeft: 5, 
                        marginRight: 5
                    }}>

                    </View>
                    <View style={{
                        height: 80, width: 80, backgroundColor: 'red', borderRadius: 10, shadowColor: 'gray',
                        shadowOffset: { width: 5, height: 5 }, shadowOpacity: 0.6, shadowRadius: 5, marginLeft: 5, marginRight: 5
                    }}>

                    </View>
                    <View style={{
                        height: 80, width: 80, backgroundColor: 'red', borderRadius: 10, shadowColor: 'gray',
                        shadowOffset: { width: 5, height: 5 }, shadowOpacity: 0.6, shadowRadius: 5, marginLeft: 5, marginRight: 5
                    }}>

                    </View>
                    <View style={{
                        height: 80, width: 80, backgroundColor: 'red', borderRadius: 10, shadowColor: 'gray',
                        shadowOffset: { width: 5, height: 5 }, shadowOpacity: 0.6, shadowRadius: 5, marginLeft: 5, marginRight: 5
                    }}>

                    </View>

                </ScrollView>
                <ScrollView horizontal={true} style={{ width: '100%', padding: 5 }}>
                    <View style={{
                        height: 80, width: 80, backgroundColor: 'red', borderRadius: 10, shadowColor: 'gray',
                        shadowOffset: { width: 5, height: 5 }, shadowOpacity: 0.6, shadowRadius: 5, marginLeft: 5, marginRight: 5
                    }}>

                    </View>
                    <View style={{
                        height: 80, width: 80, backgroundColor: 'red', borderRadius: 10, shadowColor: 'gray',
                        shadowOffset: { width: 5, height: 5 }, shadowOpacity: 0.6, shadowRadius: 5, marginLeft: 5, marginRight: 5
                    }}>

                    </View>
                    <View style={{
                        height: 80, width: 80, backgroundColor: 'red', borderRadius: 10, shadowColor: 'gray',
                        shadowOffset: { width: 5, height: 5 }, shadowOpacity: 0.6, shadowRadius: 5, marginLeft: 5, marginRight: 5
                    }}>

                    </View>
                    <View style={{
                        height: 80, width: 80, backgroundColor: 'red', borderRadius: 10, shadowColor: 'gray',
                        shadowOffset: { width: 5, height: 5 }, shadowOpacity: 0.6, shadowRadius: 5, marginLeft: 5, marginRight: 5
                    }}>

                    </View>
                    <View style={{
                        height: 80, width: 80, backgroundColor: 'red', borderRadius: 10, shadowColor: 'gray',
                        shadowOffset: { width: 5, height: 5 }, shadowOpacity: 0.6, shadowRadius: 5, marginLeft: 5, marginRight: 5
                    }}>

                    </View>
                    <View style={{
                        height: 80, width: 80, backgroundColor: 'red', borderRadius: 10, shadowColor: 'gray',
                        shadowOffset: { width: 5, height: 5 }, shadowOpacity: 0.6, shadowRadius: 5, marginLeft: 5, marginRight: 5
                    }}>

                    </View>
                    <View style={{
                        height: 80, width: 80, backgroundColor: 'red', borderRadius: 10, shadowColor: 'gray',
                        shadowOffset: { width: 5, height: 5 }, shadowOpacity: 0.6, shadowRadius: 5, marginLeft: 5, marginRight: 5
                    }}>

                    </View>

                </ScrollView>
                <View style={{ width: '100%', backgroundColor: 'rgb(245,245,245)', paddinTop: 15, paddingBottom: 15 }}>
                    <View style={{ marginTop: 25, marginBottom: 5, borderWidth: 0.5, borderColor: 'rgb(220,220,220)', width: '90%' }}></View>
                    <View style={{ width: '100%' }}>
                        <Text style={{ fontSize: 17, fontWeight: '600', padding: 10 }}>Free Stays at Executive Hotels</Text>
                        <Text style={{ paddingLeft: 10 }}>Save big on most luxury hotels with us</Text>
                    </View>
                    <ScrollView horizontal={true} style={{ width: '100%' }}>
                        <View style={{ height: 200, width: 200, backgroundColor: 'gray', borderRadius: 15, margin: 10 }}>

                        </View>
                        <View style={{ height: 200, width: 200, backgroundColor: 'gray', borderRadius: 15, margin: 10 }}>

                        </View>
                        <View style={{ height: 200, width: 200, backgroundColor: 'gray', borderRadius: 15, margin: 10 }}>

                        </View>
                        <View style={{ height: 200, width: 200, backgroundColor: 'gray', borderRadius: 15, margin: 10 }}>

                        </View>
                    </ScrollView>
                </View>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ marginTop: 50, marginBottom: 35,fontSize:18 }}>FAQs</Text>
                    <View style={{
                        minHeight: 80, width: '90%', backgroundColor: 'rgb(240,240,240)', borderRadius: 10,
                        flexDirection: 'row', paddingLeft: 15, paddingRight: 15, paddingTop: 20, paddingBottom: 20
                    }}>
                        <View style={{ flex: 9, flexDirection: 'column' }}>
                            <Text style={{marginBottom:15}}>What are the benefits of a SmiraClub membership?</Text>
                            <Text style={{ color: 'gray' }}>SmiraClub Membership is an all-inclusive membership program that offers a variety of deals and hotel stays. Members receive substantial discounts on a variety of services provided by popular brands, as well as unlimited hotel stays in more than 30 cities across India. Members also receive priority assistance from us.
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}></View>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

export default MembershipOnboarding

const styles = StyleSheet.create({})