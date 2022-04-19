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
        brands.forEach(brand => {
            if (brand.id === data.brand_id) {
                setBrand(brand)
            }
        })
    }, [])
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
                            source={{ uri: data.image }} style={{ width: '100%', height: 300 }} />

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
                            <View>
                                <Text style={styles.headingText}>
                                    {data.name}
                                </Text>
                                <Text style={styles.subText}>
                                    {data.brand}
                                </Text>
                                <View style={styles.input}>
                                    <Text style={{ textAlign: 'center', fontSize: 20 }}>
                                        {data.code ? data.code : 'NO PROMO CODE'}
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
                                                        data.code ? 'COPY CODE' : 'BOOK APPOINTMENT'
                                                    }</Text>
                                            )
                                        }
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <Text style={{ fontSize: 20, }}>
                            Terms {'&'} Conditions
                        </Text>
                        <Text style={[styles.textDescrp, {
                            height: Read ? 'auto' : 100, overflow: 'hidden'
                        }]}>
                            {data.conditions}
                        </Text>
                        <TouchableOpacity onPress={() => {
                            setRead(!Read)
                        }}>
                            <Text style={{ color: 'red' }}>
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
        fontSize: 25,
        marginTop: 30,
    },
    subText: {
        color: 'rgb(100,100,100)',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 40
    },
    input: {
        height: 70,
        margin: 12,
        padding: 20,
        borderRadius: 30,
        backgroundColor: '#ECE6E6'
    },
    textDescrp: {
        color: 'rgb(100,100,100)',
        marginTop: 20,
        marginBottom: 10,
        fontSize: 20
    },
    view: {
        height: 50,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 30,
        marginTop: 30,
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewtext: {
        color: 'red',
        fontSize: 20,
    },
    bottom: {
        margin: 20,
    }
})