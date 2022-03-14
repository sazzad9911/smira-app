import React from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';


const Membership = () => {
    return (
        <View style={style.body}>
            <Text style={{
                fontSize: 20,
                marginTop: 15,
                marginBottom:10
            }}>Claim Your <Text style={{
                color: '#FA454B'
            }}>Free Month</Text></Text>
            <ScrollView>
                <View>
                    <MembershipSlide></MembershipSlide>
                    <MembershipSlide></MembershipSlide>
                    <MembershipSlide></MembershipSlide>
                </View>
            </ScrollView>

            <Text style={{
                marginTop: 10
            }}>Have a family code?</Text>
            <Text style={{
                color: 'red',
                marginBottom: 10
            }}>Apply it here</Text>

        </View>
    );
};

export default Membership;

const MembershipSlide = () => {
    const { height, width } = Dimensions.get('screen');
    return (
        <View style={style.slideView}>
            <View style={style.slideContent}>
                <Text style={style.slideContentHead}>Silver Membership</Text>
                <Text style={style.textMargin}>Hotel stays of up to 40 nights</Text>
                <Text style={style.textMargin}>Valid on any 5 hotels</Text>
                <Text style={style.textMargin}>Family access upto 3 accounts</Text>
                <Text style={style.textMargin}>Benefits worth of ₹50000</Text>

                <TouchableOpacity>
                    <View style={style.bottomButton}>
                        <Text style={{
                            color: 'white',
                            fontSize: 20,
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

    },
    textMargin: {
        marginBottom: 15,
    },
    slideView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 20,
        shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowOpacity:0.3,
          shadowRadius:5,
    },
    slideContent:{
        padding: '5%',
        alignItems: 'center',
    },
    slideContentHead:{
        fontSize: 25,
        marginBottom: 10
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    bottomButton:{
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