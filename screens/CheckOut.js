import React from 'react';
import {
    Text, View, StyleSheet, ScrollView,
    Dimensions, Button, TouchableOpacity, TextInput, Alert
} from 'react-native'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { backgroundColor, textColor } from './../assets/color';
const window = Dimensions.get('window')
import { useSelector, useDispatch } from 'react-redux';
import {
    isValid,
    isExpirationDateValid,
    isSecurityCodeValid,
    getCreditCardNameByNumber,
} from 'creditcard.js';
import { postData, url, setUser, setAnimatedLoader } from '../action';
import { getAuth } from 'firebase/auth';
import app from '../firebase';
import RadioButtonRN from 'radio-buttons-react-native';


const CheckOut = (props) => {
    const params = props.route.params
    const darkMode = useSelector(state => state.pageSettings.darkMode)
    const membership = useSelector(state => state.membership)
    const [Membership, setMemberships] = React.useState(null)
    const [CardNumber, setCardNumber] = React.useState(null)
    const [Expiry, setExpiry] = React.useState(null)
    const [CVV, setCVV] = React.useState(null)
    const [PromoCode, setPromoCode] = React.useState(null)
    const [Access, setAccess] = React.useState(false)
    const auth = getAuth(app);
    const dispatch = useDispatch()
    const navigation = props.navigation
    const date = new Date()
    const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const user = useSelector(state => state.user)
    const [Plans,setPlans]=React.useState([])

    React.useEffect(() => {
        if (membership) {
            membership.forEach(member => {
                if (member.id == params.id) {
                    setMemberships(member)
                    let arr=member.plans.split(',')
                    setPlans(arr)
                }
            })
        }
    }, [membership])

    const checkCard = () => {
        if (user && user[0].membership_type) {
            Alert.alert('Opps!', 'You have already started your trial.')
            return
        }
        let date = Expiry.split('/')
        // returns true
        if (isValid(CardNumber)) {
            Alert.alert('Opps!', 'Invalid Card Number')
            return
        }
        if (!isExpirationDateValid(date[0], date[1])) {
            Alert.alert('Opps!', 'Invalid expiry date');
            return
        }
        if (!isSecurityCodeValid(CardNumber, CVV)) {
            Alert.alert('Opps!', 'Invalid Card number and CVV')
            return
        }
        dispatch(setAnimatedLoader(true))
        let newDate = new Date()
        newDate = newDate.getFullYear() + '-' + (newDate.getMonth() + 2) + '-' + newDate.getDate()
        postData(url + '/updateData', {
            tableName: 'user',
            columns: ['membership_type', 'starting_date', 'ending_date'],
            values: [params.type, convertDate(new Date()), newDate],
            condition: "uid=" + "'" + auth.currentUser.uid + "'"
        }).then(response => {
            postData(url + '/getData', {
                tableName: 'user',
                condition: "uid=" + "'" + auth.currentUser.uid + "'"
            }).then(response => {
                if (Array.isArray(response)) {
                    dispatch(setUser(response))
                    dispatch(setAnimatedLoader(false))
                    return navigation.navigate('Confirm Message', {
                        text1: 'You have successfully parched.',
                        text2: 'We make charge from next month.'
                    })
                }
                dispatch(setAnimatedLoader(false))
            })
        })
    }
    const convertDate = (date) => {
        let data = '';
        return data = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate())
    }
    const data = [
        {
            label: 'Pay now with UPI, Netbanking & Wallet',
            accessibilityLabel: 'Your label'
        },
        {
            label: 'Pay later with credit or debit card',
            accessibilityLabel: 'Your label'
        }
    ];
    return (
        <View style={{ alignItems: 'center' }}>
            <ScrollView showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <View style={[styles.main, { backgroundColor: backgroundColor(darkMode) }]}>
                    <View>
                        <Text style={[styles.text1, {
                            color: textColor(darkMode)
                        }]}>Start your 30-days trial now!</Text>
                        <Text style={styles.text2}>We won't charge you today.Your payment day will be on{" "}
                            <Text style={[styles.text3, { color: params.color }]}>
                                {Months[date.getMonth() + 1] + ' ' + date.getDate() + ' ' + date.getFullYear()}.</Text>
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.logo1}>
                            <FontAwesome name="rupee" size={24} color={textColor(darkMode)} /><Text>
                                <Text style={[styles.rupee, { color: textColor(darkMode) }]}>
                                    {Membership ? Membership.price : ""}</Text>
                                <Text style={{ color: '#585858' }}>/2 years</Text></Text>
                        </View>

                        {
                            Plans.map((doc, i)=>(
                                <View key={i} style={styles.logo1}>
                            <AntDesign name="checkcircle" size={24} color={params.color} />
                            <Text style={[styles.underrupee,{marginTop:i!=0?-18:0}]}>{doc}</Text>
                        </View>
                            ))
                        }
                        
                    </View>
                    <View style={{ width: window.width }}>
                        <Text style={styles.underboxtext}>Payment Method</Text>
                        <RadioButtonRN style={{
                            marginLeft: 10
                        }}
                            activeColor={params.color}
                            box={false}
                            data={data}
                            selectedBtn={(e) => console.log(e)}
                        />
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.text2}>Card Number</Text>
                        <TextInput keyboardType='number-pad' onChangeText={setCardNumber}
                            style={styles.input} placeholder='0000 0000 0000 0000' />
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Text style={styles.text2}>Expiry Date</Text>
                                <TextInput onChangeText={setExpiry}
                                    style={styles.input} placeholder='MM/YYYY' />
                            </View>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={styles.text2}>CVV</Text>
                                <TextInput onChangeText={setCVV}
                                    style={styles.input} placeholder='....' />
                            </View>
                        </View>
                    </View>
                    <View style={{ marginBottom: 50 }}>
                        <TextInput style={styles.input1} placeholder='Promo Code' />
                    </View>
                </View>
                <View style={{ height: 40 }}></View>
            </ScrollView>
            <TouchableOpacity style={{
                position: 'absolute',
                bottom: 30,
                zIndex: 1
            }} disabled={CardNumber && Expiry && CVV ? false : true} onPress={() => {
                checkCard()
            }}>
                <View style={[styles.button1, {
                    backgroundColor: CardNumber && Expiry && CVV ? params.color : 'white',
                    borderWidth: 1,
                    borderColor: params.color
                }]}>
                    <Text style={[styles.button1text, {
                        color: CardNumber && Expiry && CVV ? 'white' : 'black',
                    }]}>TRY IT FOR 30 DAYS</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    main: {
        padding: 5,
        alignItems: "center",
        width: window.width,
        backgroundColor: '#ffffff'
    },


    text1: {
        fontSize: 20,
        fontFamily: 'PlusJakartaSansBold',
        fontWeight: '500',
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    text2: {
        fontSize: 14,
        fontWeight: '500',
        margin: 10,
        color: '#585858',
        fontFamily: 'PlusJakartaSans',
    },

    text3: {
        color: '#FC444B',
        fontSize: 14,
        fontWeight: '500',
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
        marginTop: 10,
        marginBottom: 5,
    },

    rupee: {
        fontSize: 30,
        fontFamily: 'PlusJakartaSansBold',
        fontWeight: '500'
    },

    underrupee: {
        fontSize: 14,
        fontFamily: 'PlusJakartaSans',
        fontWeight: '500',
        marginLeft: 15,
        color: '#585858',
    },

    underboxtext: {
        fontSize: 14,
        fontFamily: 'PlusJakartaSansBold',
        fontWeight: '500',
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
        fontWeight: '500',
        color: `#ffffff`,
        textAlign: "center"
    },

    card: {
        width: window.width - 30,
        marginTop: 25,
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        borderColor: '#D8D8D8'
    },
    input: {
        fontSize: 14,
        fontFamily: 'PlusJakartaSans',
        fontWeight: '500',
        height: 50,
        backgroundColor: '#f5f5f5',
        borderRadius: 30,
        padding: 10,
    },
    input1: {

        fontFamily: 'PlusJakartaSans',
        fontWeight: '500',
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