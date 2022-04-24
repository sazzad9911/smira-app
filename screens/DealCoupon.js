import React from 'react';
import {
    View, Text, ScrollView, StyleSheet, Image, TouchableOpacity,
    ActivityIndicator, Alert
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { useSelector } from 'react-redux'
import * as Clipboard from 'expo-clipboard';
import AnimatedLoader from 'react-native-animated-loader';
import { getAuth } from 'firebase/auth'
import { postData, url } from '../action'
import app from '../firebase'

const DealCoupon = (props) => {
    const data = props.data;
    const brands = useSelector(state => state.brands)
    const [Brand, setBrand] = React.useState(null)
    const [Read, setRead] = React.useState(false)
    const [Code, setCode] = React.useState(false)
    const auth = getAuth(app);
    const navigation = props.navigation
    const [loader, setLoader] = React.useState(false)

    React.useEffect(() => {
        if(!data) {
            return
        }
        brands.forEach(brand => {
            if (brand.id === data.brand_id) {
                setBrand(brand)
            }
        })
    }, [brands+data])
    const copyToClipboard = (code) => {
        try {
            Clipboard.setString(code)
            setCode(!Code)
        } catch (e) {
            console.log(e.message)
        }
    };
    return (
        <View>
            <TouchableOpacity style={[styles.icon, {
                top: Platform.OS == 'ios' ? 60 : 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                height: 40,
                width: 40,
                borderRadius: 25,
                margin: 5
            }]} onPress={() => props.close(false)}>
                <AntDesign name="left" size={30} color="white" />
            </TouchableOpacity>
            <View style={styles.body}>
                <ScrollView>
                    <View>
                        <Image
                            source={{ uri: data&&data.image?data.image:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-offer-banner-design-template-855e1f46293f2f2af6edec050a679d39_screen.jpg?ts=1625718620' }} style={{ width: '100%', height: 300 }} />

                        <View style={styles.content}>
                            <View style={styles.logo}>
                                {
                                    Brand ? (
                                        <Image borderRadius={60}
                                            source={{ uri: Brand.image }} style={{ width: 100, height: 100 }} />
                                    ) : (
                                        <ActivityIndicator size="large" color="#FA454B" />
                                    )
                                }
                            </View>
                            <View style={{alignItems: "center"}}>
                                <Text style={styles.headingText}>
                                    {data&&data.name?data.name:'Flat 45 % OFF On All Orders'}
                                </Text>
                                <Text style={styles.subText}>
                                    {data&&data.brand?data.brand:'We are happy to serve you special offers with the following terms and conditions.It is the responsibility of a customer to read, understand and remain knowledgeable of the '}
                                </Text>
                                <View style={styles.input}>
                                    <Text style={{ textAlign: 'center', fontSize: 18 }}>
                                        {data&&data.code ? data.code : 'NO PROMO CODE'}
                                    </Text>
                                </View>
                                <TouchableOpacity disabled={Code ? true : false} onPress={() => {
                                    if (data.code) {
                                        copyToClipboard(data.code)
                                    } else {
                                        setLoader(true);
                                        postData(url + '/setData', {
                                            auth: auth.currentUser,
                                            tableName: 'book_appointment',
                                            columns: ['uid', 'deal_id', 'date'],
                                            values: [auth.currentUser.uid, data.id, new Date()]
                                        }).then(data => {
                                            if (data && data.insertId) {
                                                setLoader(false);
                                                return navigation.navigate('Confirm Message', {
                                                    text1: 'We book a appointment for you.',
                                                    text2: 'You will receive an confirmation email very soon.'
                                                });
                                            }
                                            setLoader(false);
                                            Alert.alert('Opps!', data.message)
                                        }).catch(err => {
                                            setLoader(false);
                                            Alert.alert('Error', err.code)
                                        })
                                    }
                                }}>
                                    <View style={styles.view}>
                                        {
                                            Code ? (
                                                <Text style={styles.viewtext}>DONE</Text>
                                            ) : (
                                                <Text style={styles.viewtext}>
                                                    {
                                                        data&&data.code ? 'COPY CODE' : 'BOOK APPOINTMENT'
                                                    }</Text>
                                            )
                                        }
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <Text style={{
                            fontSize: 14,
                            fontFamily: 'PlusJakartaSans',
                        }}>
                            Terms {'&'} Conditions
                        </Text>
                        <Text style={[styles.textDescrp, {
                            height: Read ? 'auto' : 97, overflow: 'hidden', fontSize: 14,
                            fontFamily: 'PlusJakartaSans',
                        }]}>
                            {data&&data.conditions?data.conditions:'We are happy to serve you special offers with the foll owing terms and cond itions. It is the responsibility of a customer to read, unde rstand and remain know ledg ea ble of the understand and remain knowle dgea bled gea bledgeable thn owle dge able of t and remainn knowledg eable of the unde rstand and remain knowle dgeable of the f sdk warwaf a sfasfsdf asfsf '}
                        </Text>
                        <TouchableOpacity onPress={() => {
                            setRead(!Read)
                        }}>
                            <Text style={{
                                color: '#FC444B',
                                fontSize: 14,
                                fontFamily: 'PlusJakartaSans',
                            }}>
                                {Read ? 'Read Less' : 'Read More'}
                            </Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
            <AnimatedLoader
                visible={loader}
                overlayColor="rgba(255,255,255,0.75)"
                source={require("../assets/9997-infinity-loader.json")}
                animationStyle={{
                    height: 100, width: 100,
                }}
                speed={1}
            >
                <Text>Loading...</Text>
            </AnimatedLoader>
        </View>
    );
};

export default DealCoupon;
const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        top: 60,
        left: 20,
        zIndex: 1
    },
    body: {
        height: '100%',
    },
    content: {
        alignItems: 'center',
    },
    logo: {
        marginTop: 30,
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 1
    },
    headingText: {
        fontSize: 18,
        fontFamily: 'PlusJakartaSans',
        marginTop: 30,
        margin: 30, 
        textAlign: 'center',
    },
    subText: {
        color: 'rgb(100,100,100)',
        fontSize: 14,
        textAlign: 'center',
        marginTop: -20,
        marginBottom: 40,
        fontFamily: 'PlusJakartaSans',
    },
    input: {
        height: 60,
        width: 270,
        margin: 12,
        padding: 20,
        borderRadius: 30,
        backgroundColor: '#F5F5F5'
    },
    textDescrp: {
        color: 'rgb(100,100,100)',
        marginTop: 20,
        marginBottom: 10,
        fontSize: 20
    },
    view: {
        height: 60,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: '#FC444B',
        borderRadius: 30,
        marginTop: 30,
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: 270,
    },
    viewtext: {
        color: 'red',
        fontSize: 20,
    },
    bottom: {
        margin: 20,
    }
})