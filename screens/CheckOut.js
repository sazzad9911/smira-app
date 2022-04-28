import React from 'react';
import { Text, View, StyleSheet, ScrollView,
     Dimensions, Button, TouchableOpacity, TextInput } from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { backgroundColor, textColor } from './../assets/color';
const window = Dimensions.get('window')
import { useSelector } from 'react-redux';


const CheckOut = (props) => {
    const params = props.route.params
    const darkMode = useSelector(state => state.pageSettings.darkMode)
    const membership= useSelector(state => state.membership)
    const [Membership,setMemberships] =React.useState(null)

    React.useEffect(() => {
        if (membership) {
            membership.forEach(member=>{
                if(member.id==params.id){
                    setMemberships(member)
                }
            })
        }
    },[membership])

    return (
        <ScrollView showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
            <View style={[styles.main,{ backgroundColor:backgroundColor(darkMode)}]}>
                <View>
                    <Text style={[styles.text1,{
                        color:textColor(darkMode)
                    }]}>Start your 30-days trial now!</Text>
                    <Text style={styles.text2}>We won't charge you today.Your payment day will be on{" "}
                        <Text style={[styles.text3, { color: params.color }]}>April 5,2022.</Text>
                    </Text>
                </View>
                <View style={styles.box}>
                    <View style={styles.logo1}>
                        <FontAwesome name="rupee" size={24} color={textColor(darkMode)} /><Text>
                        <Text style={[styles.rupee,{ color:textColor(darkMode)}]}>
                        {Membership?Membership.price:""}</Text><Text style={{color:'#585858'}}>/2 years</Text></Text>
                    </View>
                    <View style={styles.logo1}>
                        <AntDesign name="checkcircle" size={24} color={params.color} /><Text style={styles.underrupee}>Stays upto 40 nights</Text>
                    </View>
                    <View style={styles.logo1}>
                        <AntDesign name="checkcircle" size={24} color={params.color} /><Text style={styles.underrupee}>Valid on any 5 hotels</Text>
                    </View>
                    <View style={styles.logo1}>
                        <AntDesign name="checkcircle" size={24} color={params.color} /><Text style={styles.underrupee}>Family access upto 3 accounts</Text>
                    </View>
                    <View style={styles.logo1}>
                        <AntDesign name="checkcircle" size={24} color={params.color} /><Text style={styles.underrupee}>10 days prior to reservation</Text>
                    </View>
                    <View style={styles.logo1}>
                        <AntDesign name="checkcircle" size={24} color={params.color} /><Text style={styles.underrupee}>Weekends booking</Text>
                    </View>
                    <View style={styles.logo1}>
                        <AntDesign name="checkcircle" size={24} color={params.color} /><Text style={styles.underrupee}>Peak days booking</Text>
                    </View>
                </View>
                <View style={{ width: window.width }}>
                    <Text style={styles.underboxtext}>Payment Method</Text>
                </View>
                <TouchableOpacity>
                    <View style={[styles.button1, { backgroundColor: params.color }]}>
                        <Text style={styles.button1text}>TRY IT FOR 30 DAYS</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.card}>
                    <Text style={styles.text2}>Card Number</Text>
                    <TextInput style={styles.input} placeholder='0000 0000 0000 0000' />
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <Text style={styles.text2}>Expiry Date</Text>
                            <TextInput style={styles.input} placeholder='MM/YY' />
                        </View>
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={styles.text2}>CVV</Text>
                            <TextInput style={styles.input} placeholder='....' />
                        </View>
                    </View>
                </View>
                <View style={{marginBottom:50}}>
                    <TextInput style={styles.input1} placeholder='Promo Code' />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    main: {
        padding: 5,
        alignItems: "center",
        width: window.width,
        backgroundColor:'#ffffff'
    },


    text1: {
        fontSize: 20,
        fontFamily: 'PlusJakartaSansBold',
        fontWeight:'500',
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    text2: {
        fontSize: 14,
        fontWeight:'500',
        margin: 10,
        color: '#585858',
        fontFamily: 'PlusJakartaSans',
    },

    text3: {
        color: '#FC444B',
        fontSize: 14,
        fontWeight:'500',
        fontFamily: 'PlusJakartaSans',
    },

    box: {
        marginTop: 25,
        borderRadius: 15,
        justifyContent: "center",
        borderWidth: 1,
        width: window.width - 30,
        padding: 30,
        borderColor: '#D8D8D8'
    },

    logo1: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 5
    },

    rupee: {
        fontSize: 30,
        fontFamily: 'PlusJakartaSansBold',
        fontWeight:'500'
    },

    underrupee: {
        fontSize: 14,
        fontFamily: 'PlusJakartaSans',
        fontWeight:'500',
        marginLeft: 15,
        color: '#585858'
    },

    underboxtext: {
        fontSize: 14,
        fontFamily: 'PlusJakartaSansBold',
        fontWeight:'500',
        margin: 25,
        color: '#585858'
    },

    button1: {
        height: 60,
        width: window.width - 30,
        backgroundColor: '#FA454B',
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center"
    },

    button1text: {
        fontSize: 13,
        fontFamily: 'PlusJakartaSans',
        fontWeight:'500',
        color: `#ffffff`,
        textAlign: "center"
    },

    card: {
        width: window.width - 30,
        marginTop: 25,
        borderRadius: 10,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        padding: 10,
        borderColor: '#D8D8D8'
    },
    input: {
        fontSize: 14,
        fontFamily: 'PlusJakartaSans',
        fontWeight:'500',
        height: 50,
        backgroundColor: '#f5f5f5',
        borderRadius: 30,
        padding: 10,
    },
    input1: {
        
        fontFamily: 'PlusJakartaSans',
        fontWeight:'500',
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        fontSize: 14,
        borderWidth: 1,
        width: window.width - 30,
        marginVertical: 10,
        borderColor: '#D8D8D8',
    }


});

export default CheckOut;