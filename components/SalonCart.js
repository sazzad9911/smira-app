import React from 'react';
import {
    View, TouchableOpacity, Image, Text,
    StyleSheet, Modal, ScrollView, Platform
} from 'react-native'
import { useSelector } from 'react-redux'
import { textColor, backgroundColor } from './../assets/color';
import { AntDesign } from '@expo/vector-icons';

const SalonCart = () => {
    const darkMode = useSelector(state => state.pageSettings.darkMode)
    const [ModalVisible, setModalVisible] = React.useState(false)
    const [Confirm, setConfirm] = React.useState(false);
    return (
        <View style={{ backgroundColor: textColor(!darkMode), padding: 10, marginTop: 10 }}>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={{
                flexDirection: 'row',
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#D8D8D8'
            }}>
                <Image style={{
                    height: 70,
                    width: 70,
                    margin: 20,
                }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5309/5309779.png' }} />
                <View style={{
                    marginVertical: 20
                }}>
                    <Text numberOfLines={1} style={{
                        fontSize: 18,
                        fontFamily: 'PlusJakartaSansBold'
                    }}>Kapil’s Salon & Academy</Text>
                    <Text style={style.subText} numberOfLines={1}>Poisar, Kandivali West - 0.7 km</Text>
                    <Text style={style.subText} numberOfLines={1}>12 Offers</Text>
                </View>
                <AntDesign style={{
                    alignSelf: 'flex-end',
                    margin: 20
                }} name="rightcircleo" size={24} color="#FC444B" />
            </TouchableOpacity>
            <Modal visible={ModalVisible} onRequestClose={() => setModalVisible(!ModalVisible)}>
                <View style={{ backgroundColor: backgroundColor(darkMode), height: '100%' }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 10,
                        paddingVertical: 15,
                    }}>
                        <TouchableOpacity onPress={() => {
                            setModalVisible(false);
                        }} style={{
                            backgroundColor: '#808080',
                            padding: 7,
                            borderRadius: 20
                        }}>
                            <AntDesign name="left" size={20} color="#ffff" />
                        </TouchableOpacity>
                    </View>
                    {
                        Confirm ? (
                            <View style={{
                                backgroundColor: backgroundColor(darkMode),
                                justifyContent: 'center',
                                height:'75%',
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <AntDesign name="checkcircle" size={60} color="#FC444B" />
                                    <Text style={{
                                        fontSize: 20,
                                        fontWeight: "bold",
                                        marginTop: 20,
                                        fontFamily: 'PlusJakartaSansBold'
                                    }}>Congratulations!</Text>
                                    <Text style={{
                                        fontSize: 14,
                                        color: '#585858',
                                        fontFamily: 'PlusJakartaSans'
                                    }}>You have successfully booked. </Text>
                                    <Text style={{
                                        fontSize: 14,
                                        color: '#585858',
                                        fontFamily: 'PlusJakartaSans'
                                    }}>Please check for confirmation email.</Text>
                                </View>
                            </View>
                        ) : (
                            <View>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    backgroundColor: '#fff'
                                }}>
                                    <View style={{
                                        flex: 3
                                    }}>
                                        <Image style={{
                                            height: 70,
                                            width: 70,
                                            margin: 20,
                                        }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5309/5309779.png' }} />
                                    </View>
                                    <View style={{
                                        flex: 5
                                    }}>
                                        <Text numberOfLines={1} style={{
                                            fontSize: 18,
                                            fontFamily: 'PlusJakartaSansBold'
                                        }}>Kapil’s Salon & Academy</Text>
                                        <Text style={style.subText} numberOfLines={1}>Poisar, Kandivali West - 0.7 km</Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        flex: 3,
                                    }}>
                                        <AntDesign style={{ marginLeft: 20 }} name="phone" size={24} color="#FC444B" />
                                        <AntDesign style={{ marginLeft: 10 }} name="enviromento" size={24} color="#FC444B" />
                                    </View>
                                </View>
                                <View style={{
                                    backgroundColor: '#ffff',
                                    marginVertical: 10,
                                    height: 40,
                                    justifyContent: 'center',
                                    paddingHorizontal: 20
                                }}>
                                    <Text style={{
                                        color: '#000000',
                                        fontFamily: 'PlusJakartaSans',
                                        fontSize: 14,
                                    }}>12 Offers</Text>
                                </View>
                                <ScrollView style={{ backgroundColor: backgroundColor(darkMode) }}>
                                    <Cart book={()=>setConfirm(true)} user={true} />
                                    <Cart book={()=>setConfirm(true)} user={false} />
                                    <Cart book={()=>setConfirm(true)} user={false} />
                                </ScrollView>
                            </View>
                        )
                    }
                </View>
            </Modal>
        </View>
    );
};

export default SalonCart;

const Cart = (props) => {
    const darkMode = useSelector(state => state.pageSettings.darkMode)
    const [Open, setOpen] = React.useState(false)
    const [ModalVisible, setModalVisible] = React.useState(false)
    const [Confirm, setConfirm] = React.useState(false);
    return (
        <View style={{ backgroundColor: '#FFFF', marginBottom: 10, padding: 10 }}>
            <TouchableOpacity onPress={() => setOpen(!Open)} style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#D8D8D8',
                minHeight: 200,
                padding: 20
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text numberOfLines={2} style={{
                        fontSize: 16,
                        fontFamily: 'PlusJakartaSansBold',
                        width: '75%'
                    }}>Limited Period Offer: Any Haircut + Blow Dry</Text>
                    <AntDesign name={Open ? 'up' : "down"} size={24} color="#FC444B" />
                </View>
                <View style={{ marginTop: 5 }}>
                    <View style={style.cartContainer}>
                        <Text style={style.cartText}>Valid on</Text>
                        <Text style={style.cartHead}>All Days</Text>
                    </View>
                    <View style={style.cartContainer}>
                        <Text style={style.cartText}>Timings</Text>
                        <Text style={style.cartHead}>11:00 AM - 7:00 PM</Text>
                    </View>
                    <View style={style.cartContainer}>
                        <Text style={style.cartText}>Valid for</Text>
                        <Text style={style.cartHead}>1 Female</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 15
                    }}>
                        <Text style={{
                            fontSize: 14,
                            fontFamily: 'PlusJakartaSansBold',
                            color: '#FC444B'
                        }}>Details</Text>
                        <AntDesign style={{
                            marginLeft: 5,
                            marginTop: 5
                        }} name="rightcircleo" size={14} color="#FC444B" />
                    </TouchableOpacity>
                    <View>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <Text style={{
                                fontSize: 18,
                                fontFamily: 'PlusJakartaSans',
                                color: '#808080',
                                textDecorationLine: 'line-through'
                            }}>₹400</Text>
                            <Text style={{
                                fontSize: 20,
                                fontFamily: 'PlusJakartaSansBold',
                                marginLeft: 5
                            }}>₹199</Text>
                        </View>
                        <Text style={style.cartText}>Inc. of all taxes</Text>
                    </View>
                </View>
                {
                    Open ? (
                        <TouchableOpacity onPress={() =>props.book(true)} 
                        disabled={props.user?false:true} style={{
                            backgroundColor: !props.user ? 'transparent' : '#FC444B',
                            justifyContent: 'center',
                            borderRadius: 30,
                            alignItems: 'center',
                            marginTop: 10,
                            borderColor: '#fc444b',
                            borderWidth: 1,
                            borderStyle: props.user ? 'solid' : 'dashed'
                        }}>
                            <Text style={{
                                fontSize: 18,
                                fontFamily: 'PlusJakartaSans',
                                color: props.user ? '#ffff' : '#fc444b',
                                marginVertical: 15
                            }}>{props.user ? 'CONFIRM BOOKING' : 'PROMOCODE'}</Text>
                        </TouchableOpacity>
                    ) : (<View></View>)
                }
            </TouchableOpacity>
            <Modal visible={ModalVisible} onRequestClose={() => setModalVisible(!ModalVisible)}>
                <View style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: backgroundColor(darkMode)
                }}>
                    <View style={{
                        height: Platform.OS == 'ios' ? 120 : 50,
                        flexDirection: 'row',
                        backgroundColor: backgroundColor(darkMode)
                    }}>
                        <TouchableOpacity onPress={() => {
                            setModalVisible(false)
                        }} style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <AntDesign name="left" size={20} color="#808080" />
                        </TouchableOpacity>
                        <View style={{
                            flex: 8,
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}>
                            <Text style={{
                                fontSize: 20,
                                marginLeft: -40,
                                fontSize: 16,
                                fontFamily: 'PlusJakartaSansBold',
                                color: textColor(darkMode)
                            }}>Details</Text>
                        </View>
                    </View>
                    <ScrollView style={{
                        padding: 20
                    }}>
                        <Text style={[style.headline, {
                            color: 'black',
                            marginVertical: 10
                        }]}>Use this within</Text>
                        <Text style={style.subText}>24 hours of booking</Text>
                        <Text style={[style.headline, {
                            color: 'black',
                            marginVertical: 10
                        }]}>Timings</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{
                                width: '40%'
                            }}>
                                <Text style={style.dateText}>Monday</Text>
                                <Text style={style.dateText}>Tuesday</Text>
                                <Text style={style.dateText}>Wednesday</Text>
                                <Text style={style.dateText}>Thursday</Text>
                                <Text style={style.dateText}>Friday</Text>
                                <Text style={style.dateText}>Saturday</Text>
                                <Text style={style.dateText}>Sunday</Text>
                            </View>
                            <View>
                                <Text style={style.dateText}>10:00 AM - 06:00 PM</Text>
                                <Text style={style.dateText}>10:00 AM - 06:00 PM</Text>
                                <Text style={style.dateText}>10:00 AM - 06:00 PM</Text>
                                <Text style={style.dateText}>10:00 AM - 06:00 PM</Text>
                                <Text style={style.dateText}>10:00 AM - 06:00 PM</Text>
                                <Text style={style.dateText}>10:00 AM - 06:00 PM</Text>
                                <Text style={style.dateText}>10:00 AM - 06:00 PM</Text>
                            </View>
                        </View>
                        <Text style={[style.headline, {
                            color: 'black',
                            marginVertical: 10
                        }]}>How to use</Text>
                        <Text style={[style.subText]}>1.Carry your email voucher on phone or access it under the 'purchases' section of the app.</Text>
                        <Text style={[style.subText]}>2. Make prior reservation before you visit the merchant.</Text>
                        <Text style={[style.subText]}>3. Merchant verifies the voucher or you can redeem it yourself using the app.</Text>
                        <Text style={[style.headline, {
                            color: 'black',
                            marginVertical: 10
                        }]}>Things to remember</Text>
                        <Text style={[style.subText]}>1. Prior reservation is mandatory</Text>
                        <Text style={[style.subText]}>2. All offers are inclusive of all applicable taxes and service charges</Text>
                        <Text style={[style.subText]}>3. It is highly recommended that the customer wear masks while visiting the outlet to prevent infection.</Text>
                        <Text style={[style.subText]}>4. Right of admission reserved</Text>
                    </ScrollView>
                </View>
            </Modal>
        </View>
    )
}
const style = StyleSheet.create({
    headline: {
        fontSize: 16,
        fontFamily: 'PlusJakartaSansBold',
    },
    subText: {
        fontSize: 14,
        fontFamily: 'PlusJakartaSans',
        color: '#585858',
        lineHeight: 22
    },
    cartContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    cartText: {
        fontSize: 12,
        fontFamily: 'PlusJakartaSans',
        color: '#808080'
    },
    cartHead: {
        color: '#585858',
        fontFamily: 'PlusJakartaSansBold',
        fontSize: 12,
        marginLeft: 20,
    },
    dateText: {
        color: '#585858',
        fontFamily: 'PlusJakartaSansBold',
        fontSize: 14,
        marginVertical: 5
    }
})