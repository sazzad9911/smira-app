import { StyleSheet, Text, View, SafeAreaView,ScrollView,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const PlansList = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView>
                <View style={{ padding: 20, }}>
                    <Text style={{ fontSize: 15, textAlign: 'center' }}>Choose your membership</Text>
                </View>
                <View style={{ alignItems: 'center', }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                        Claim your <Text style={{ color: 'red' }}>Free Month</Text>
                    </Text>
                </View>
                <View>
                    <View style={{
                        justifyContent: 'center', alignItems: 'center',
                        padding: 20,
                        margin: 20, borderRadius: 10, paddingTop: 30,
                        shadowColor: 'gray',
                        shadowOffset: {
                            width: 2,
                            height: 2
                        },
                        shadowOpacity: 0.5,
                        shadowRadius: 5,
                        elevation: 10,
                        backgroundColor: 'white'
                    }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 20 }}>Silver Membership</Text>
                        <Text style={{ paddingTop: 5, paddingBottom: 5, }}>Hotel stays up tp 40 nights</Text>
                        <View style={{borderWidth:0.5,borderColor:'rgb(230,230,230)',width:'70%',margin:5}}></View>
                        <Text style={{ paddingTop: 5, paddingBottom: 5 }}>Valid on any 5 hotels</Text>
                        <View style={{borderWidth:0.5,borderColor:'rgb(230,230,230)',width:'70%',margin:5}}></View>
                        <Text style={{ paddingTop: 5, paddingBottom: 5 }}>Family access upto 3 accounts</Text>
                        <View style={{borderWidth:0.5,borderColor:'rgb(230,230,230)',width:'70%',margin:5}}></View>
                        <Text style={{ paddingTop: 5, paddingBottom: 5 }}>Benefits worth of ₹50000</Text>
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'rgb(255,72,72)',
                                width: '100%', borderRadius: 10, padding: 10,
                                alignItems: 'center', justifyContent: 'center',
                                marginTop: 10
                            }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', padding: 5 }}>Become a Member</Text>
                            <Text style={{ color: 'white', margin: 5 }}>at ₹2999 for 2 years</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        justifyContent: 'center', alignItems: 'center',
                        padding: 20,
                        margin: 20, borderRadius: 10, paddingTop: 30,
                        shadowColor: 'gray',
                        shadowOffset: {
                            width: 2,
                            height: 2
                        },
                        shadowOpacity: 0.5,
                        shadowRadius: 5,
                        elevation: 10,
                        backgroundColor: 'white'
                    }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 20 }}><Text style={{ color: 'rgb(216, 160, 7)' }}>Gold</Text> Membership</Text>
                        <Text style={{ paddingTop: 5, paddingBottom: 5 }}>Hotel stays up tp 40 nights</Text>
                        <View style={{borderWidth:0.5,borderColor:'rgb(230,230,230)',width:'70%',margin:5}}></View>
                        <Text style={{ paddingTop: 5, paddingBottom: 5 }}>Valid on any 5 hotels</Text>
                        <View style={{borderWidth:0.5,borderColor:'rgb(230,230,230)',width:'70%',margin:5}}></View>
                        <Text style={{ paddingTop: 5, paddingBottom: 5 }}>Family access upto 3 accounts</Text>
                        <View style={{borderWidth:0.5,borderColor:'rgb(230,230,230)',width:'70%',margin:5}}></View>
                        <Text style={{ paddingTop: 5, paddingBottom: 5 }}>Benefits worth of ₹50000</Text>
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'rgb(216, 160, 7)',
                                width: '100%', borderRadius: 10, padding: 10,
                                alignItems: 'center', justifyContent: 'center',
                                marginTop: 10
                            }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', padding: 5 }}>Become a Member</Text>
                            <Text style={{ color: 'white', margin: 5 }}>at ₹2999 for 2 years</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default PlansList

const styles = StyleSheet.create({})