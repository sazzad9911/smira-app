import React from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import {useDispatch} from 'react-redux'
import {setFamilyCode} from '../action'


const Membership = ({ navigation }) => {
    const dispatch= useDispatch()
    return (
        <View style={style.body}>
            <ScrollView showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false} style={{ width: '100%' }}>
                <Text style={style.bodyHeaderText}>Claim Your <Text style={{
                    color: '#FA454B'
                }}>Free Month</Text></Text>
                <View style={{ alignItems: 'center' }}>
                    <MembershipSlide navigation={navigation} headcolor='#FA454B' night='40' hotel='5' account='3' amount='50000' Buttoncolor='#FA454B'></MembershipSlide>
                    <MembershipSlide navigation={navigation} headcolor='#D4B931' night='50' hotel='6' account='4' amount='60000' Buttoncolor='#D4B931'></MembershipSlide>
                    <MembershipSlide navigation={navigation} headcolor='#31D485' night='60' hotel='7' account='5' amount='70000' Buttoncolor='#31D485'></MembershipSlide>
                </View>
                <Text style={{
                    marginTop: 10,
                    color: '#585858',
                    textAlign: 'center'
                }}>Have a family code?</Text>
                <TouchableOpacity onPress={() =>{
                    dispatch(setFamilyCode(true));
                }}>
                    <Text style={{
                        color: '#FC444B',
                        marginBottom: 30,
                        textAlign: 'center'
                    }}>Apply it here</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default Membership;

const MembershipSlide = (props) => {
    const navigation = props.navigation
    const { height, width } = Dimensions.get('screen');
    return (
        <View style={style.slideView}>
            <View style={style.slideContent}>
                <Text style={style.slideContentHead}><Text style={{ color: props.headcolor }}>Silver</Text> Membership</Text>
                <Text style={style.textMargin}>Hotel stays of up to {props.night} nights</Text>
                <Text style={style.textMargin}>Valid on any {props.hotel} hotels</Text>
                <Text style={style.textMargin}>Family access upto {props.account} accounts</Text>
                <Text style={style.textMargin}>Benefits worth of ₹{props.amount}</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Checkout', { color: props.headcolor })}>
                    <View style={[style.bottomButton, {
                        backgroundColor: props.Buttoncolor,
                    }]}>
                        <Text style={{
                            color: 'white',
                            fontSize: 18,
                            fontFamily: 'PlusJakartaSansBold',
                            textAlign: 'center'
                        }}>Become a Member</Text>
                        <Text style={style.text}
                        >at ₹2999 for 2 years</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );

};

const style = StyleSheet.create({

    text: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'PlusJakartaSans',
        textAlign: 'center'
    },
    textMargin: {
        marginBottom: 15,
        color: 'rgb(100,100,100)',
        fontFamily: 'PlusJakartaSans',
        fontSize: 14,
    },
    slideView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 20,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
        margin: 10
    },
    slideContent: {
        padding: '5%',
        alignItems: 'center',
    },
    slideContentHead: {
        fontSize: 21,
        marginBottom: 10,
        fontWeight: '700',
        fontFamily: 'PlusJakartaSansBold',
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
    },
    bodyHeaderText: {
        fontSize: 22,
        fontFamily: 'PlusJakartaSansBold',
        marginBottom: 10,
        fontWeight: '500',
        textAlign: 'center'
    },
    bottomButton: {
        backgroundColor: '#FA454B',
        alignItems: 'center',
        paddingLeft: '15%',
        paddingRight: '15%',
        paddingTop: '5%',
        paddingBottom: '5%',
        borderRadius: 10,
        margin: '5%'
    }
})