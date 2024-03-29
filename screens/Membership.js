import React from 'react';
import { View, Text, ScrollView, Dimensions, 
    TouchableOpacity, StyleSheet,ActivityIndicator } from 'react-native';
import {useDispatch,useSelector} from 'react-redux'
import {setFamilyCode} from '../action'
import { backgroundColor, textColor } from './../assets/color';
import {postData, url,setMembership} from '../action'


const Membership = ({ navigation }) => {
    const dispatch= useDispatch()
    const darkMode= useSelector(state => state.pageSettings.darkMode)
    const [Membership,setMemberships]= React.useState(null)

    React.useEffect(() => {
        postData(url +'/getData',{
            tableName: 'membership',
        }).then(membership =>{
            if(Array.isArray(membership)){
                setMemberships(membership)
                return dispatch(setMembership(membership))
            }
        })
    },[])
    return (
        <View style={[style.body,{backgroundColor:backgroundColor(darkMode)}]}>
            <ScrollView showsVerticalScrollIndicator={false}
                 showsHorizontalScrollIndicator={false} style={{ width: '100%' }}>
                {
                    /*
                    <Text style={[style.bodyHeaderText,{
                    color:textColor(darkMode)
                }]}>Claim Your <Text style={{
                    color: '#FA454B'
                }}>Free Month</Text></Text>
                    */
                }
                <View style={{ alignItems: 'center' }}>
                    {
                        Membership?(
                            Membership.map((member,i)=>(
                                <MembershipSlide key={i} data={member} navigation={navigation} 
                                headcolor={member.color=='#FC444B'?'black':member.color}
                                 night={member.night} hotel={member.hotel} account={member.account} 
                                 amount={member.price} Buttoncolor={member.color}></MembershipSlide>
                            ))
                        ):(
                            <ActivityIndicator size="large" color="#FA454B" />
                        )
                    }
                    
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
                <View style={{ height: 40}}></View>
            </ScrollView>
        </View>
    );
};

export default Membership;

const MembershipSlide = (props) => {
    const navigation = props.navigation
    const { height, width } = Dimensions.get('screen');
    const darkMode= useSelector(state => state.pageSettings.darkMode)
    const data=props.data
    return (
        <View style={[style.slideView,{
            backgroundColor:backgroundColor(darkMode)
        }]}>
            <View style={style.slideContent}>
                <Text style={[style.slideContentHead,{
                    color:textColor(darkMode)
                }]}><Text style={{ color: props.headcolor }}>{data.name}</Text> Membership</Text>
                <Text style={style.textMargin}>Hotel stays of up to {props.night} nights</Text>
                <Text style={style.textMargin}>Valid on any {props.hotel} hotels</Text>
                <Text style={style.textMargin}>Family access upto {props.account} accounts</Text>
                <Text style={style.textMargin}>Benefits worth of ₹{props.amount}</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Checkout', { color: props.headcolor,
                id:props.data.id,type:props.data.type })}>
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
                        >at ₹{data.price} for {data.time} year{data.price>1?'s':''}</Text>
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
        fontFamily: 'PlusJakartaSansBold',
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
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