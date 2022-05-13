import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Button, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import Picture from '../assets/10.jpg'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg'
import { getAuth, signOut } from 'firebase/auth';
import app from './../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setAnimatedLoader, setNotification, setTheme } from '../action';
import { getData, storeData } from '../screens/WishList'
import { textColor, backgroundColor, subTextColor } from './../assets/color';
import {forgot} from '../components/Icon'

const Settings = ({ navigation }) => {
    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);
    const auth = getAuth(app)
    const dispatch = useDispatch()

    const pageSettings = useSelector(state => state.pageSettings)
    const darkMode = pageSettings.darkMode
    const user = useSelector(state => state.user)

    React.useEffect(() => {
        storeData('pageSettings', pageSettings)

    }, [pageSettings])

    const redeemHistory = `
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6698 1.30412C15.1064 1.30412 14.6476 1.76057 14.6476 2.3231C14.6476 2.88475 15.1064 3.34295 15.6698 3.34295C16.2331 3.34295 16.6919 2.88475 16.6919 2.3231C16.6919 1.76057 16.2331 1.30412 15.6698 1.30412ZM15.6697 4.64714C14.385 4.64714 13.3394 3.60468 13.3394 2.32313C13.3394 1.04158 14.385 0 15.6697 0C16.9552 0 18 1.04158 18 2.32313C18 3.60468 16.9552 4.64714 15.6697 4.64714ZM4.54917 12.1746C4.40963 12.1746 4.26922 12.1302 4.15061 12.0398C3.86455 11.8199 3.81048 11.4103 4.03113 11.1252L6.64138 7.74307C6.74777 7.60483 6.90563 7.51527 7.07831 7.49354C7.25447 7.47093 7.42715 7.51962 7.56408 7.6283L10.0234 9.5541L12.175 6.78668C12.3965 6.50064 12.8064 6.4476 13.0924 6.67018C13.3785 6.89102 13.4308 7.30052 13.2093 7.58483L10.654 10.8713C10.5476 11.0087 10.3906 11.0982 10.2179 11.1191C10.0435 11.1426 9.87083 11.0921 9.73303 10.9852L7.2754 9.06026L5.06808 11.9198C4.939 12.0868 4.74539 12.1746 4.54917 12.1746ZM4.90915 17.9999H12.4128C15.3493 17.9999 17.322 15.9437 17.322 12.8833V6.76335C17.322 6.4034 17.029 6.11127 16.6679 6.11127C16.3069 6.11127 16.0138 6.4034 16.0138 6.76335V12.8833C16.0138 15.1995 14.6001 16.6958 12.4128 16.6958H4.90915C2.68787 16.6958 1.30818 15.2351 1.30818 12.8833V5.85653C1.30818 3.53513 2.72188 2.03622 4.90915 2.03622H11.2477C11.6088 2.03622 11.9018 1.74409 11.9018 1.38415C11.9018 1.0242 11.6088 0.732068 11.2477 0.732068H4.90915C1.97273 0.732068 0 2.79176 0 5.85653V12.8833C0 15.9437 1.97273 17.9999 4.90915 17.9999Z" fill="#D8D8D8"/>
</svg>  
    `;

    const forgetPassword = `
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6698 1.30412C15.1064 1.30412 14.6476 1.76057 14.6476 2.3231C14.6476 2.88475 15.1064 3.34295 15.6698 3.34295C16.2331 3.34295 16.6919 2.88475 16.6919 2.3231C16.6919 1.76057 16.2331 1.30412 15.6698 1.30412ZM15.6697 4.64714C14.385 4.64714 13.3394 3.60468 13.3394 2.32313C13.3394 1.04158 14.385 0 15.6697 0C16.9552 0 18 1.04158 18 2.32313C18 3.60468 16.9552 4.64714 15.6697 4.64714ZM4.54917 12.1746C4.40963 12.1746 4.26922 12.1302 4.15061 12.0398C3.86455 11.8199 3.81048 11.4103 4.03113 11.1252L6.64138 7.74307C6.74777 7.60483 6.90563 7.51527 7.07831 7.49354C7.25447 7.47093 7.42715 7.51962 7.56408 7.6283L10.0234 9.5541L12.175 6.78668C12.3965 6.50064 12.8064 6.4476 13.0924 6.67018C13.3785 6.89102 13.4308 7.30052 13.2093 7.58483L10.654 10.8713C10.5476 11.0087 10.3906 11.0982 10.2179 11.1191C10.0435 11.1426 9.87083 11.0921 9.73303 10.9852L7.2754 9.06026L5.06808 11.9198C4.939 12.0868 4.74539 12.1746 4.54917 12.1746ZM4.90915 17.9999H12.4128C15.3493 17.9999 17.322 15.9437 17.322 12.8833V6.76335C17.322 6.4034 17.029 6.11127 16.6679 6.11127C16.3069 6.11127 16.0138 6.4034 16.0138 6.76335V12.8833C16.0138 15.1995 14.6001 16.6958 12.4128 16.6958H4.90915C2.68787 16.6958 1.30818 15.2351 1.30818 12.8833V5.85653C1.30818 3.53513 2.72188 2.03622 4.90915 2.03622H11.2477C11.6088 2.03622 11.9018 1.74409 11.9018 1.38415C11.9018 1.0242 11.6088 0.732068 11.2477 0.732068H4.90915C1.97273 0.732068 0 2.79176 0 5.85653V12.8833C0 15.9437 1.97273 17.9999 4.90915 17.9999Z" fill="#D8D8D8"/>
</svg>  
    `;
    const styles = StyleSheet.create({
        container: {
            padding: 20,
            paddingBottom: 50
        },
        profilePicture: {
            height: 65,
            width: 65,
            borderRadius: 32.5,
            marginRight: 13
        },
        metaContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 15,
            marginTop: 30
        },
        horiContainer: {
            flexDirection: 'column',
        },
        membership: {
            fontSize: 15,
            color: textColor(darkMode),
            marginTop: 5,
            fontWeight: '500'
        },
        navTab: {
            flexDirection: 'row',
            alignItems: "center",
        },
        tabIco: {
            margin: 15,
            color: 'rgb(170,170,170)'
        },
        tabIcoGold: {
            margin: 15,
            color: 'gold'
        },
        tabIco2: {
            color: 'rgb(255,255,255)'
        },
        tabIco3: {
            color: 'rgb(215,215,215)'
        },
        navTabText: {
            color: 'rgb(50,50,50)',
            fontSize: 16
        }
    });
    return (
        <ScrollView style={{ backgroundColor: backgroundColor(darkMode) }}>
            <View style={{ marginLeft: 20 }}>
                <Text style={{
                    fontSize: 16,
                    color: darkMode ? 'white' : 'black',
                    fontFamily: 'PlusJakartaSansBold'
                }}>Account</Text>
                <TouchableOpacity style={{ marginTop: 20 }}>
                    <View style={{ marginTop: 10, flexDirection: 'row' }}>
                        <Image style={{ height: 70, width: 70, borderRadius: 50, }}
                            source={{
                                uri: user && user[0].image ?
                                    user[0].image : 'https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png'
                            }}
                        />
                        <View style={{ marginLeft: 20, marginTop: 5, flex: 4 }}>
                            <Text style={{
                                fontSize: 16,
                                fontFamily: 'PlusJakartaSansBold',
                                color: darkMode ? 'white' : 'black',
                            }}>{user ? user[0].name : 'loading..'}</Text>
                            <View style={{ flexDirection: 'row' }}>

                                {
                                    user && user[0].membership_type == 'gold' ? (
                                        <Text style={[styles.membership]}>
                                            <Text style={{ color: '#FFB92E', fontFamily: 'PlusJakartaSansBold', }}>Gold </Text>
                                            Member</Text>
                                    ) : user && user[0].membership_type == 'platinum' ? (
                                        <Text style={[styles.membership]}>
                                            <Text style={{ color: '#A2B0CD', fontFamily: 'PlusJakartaSansBold', }}>Platinum </Text>
                                            Member</Text>
                                    ) : user && user[0].membership_type == 'diamond' ? (
                                        <Text style={[styles.membership]}>
                                            <Text style={{ color: '#48A6DB', fontFamily: 'PlusJakartaSansBold', }}>Diamond </Text>
                                            Member</Text>
                                    ) : user && user[0].membership_type == 'silver' ? (
                                        <Text style={[styles.membership]}>
                                            <Text style={{ color: '#FC444B', fontFamily: 'PlusJakartaSansBold', }}>Slider </Text>
                                            Member</Text>
                                    ) :
                                        (
                                            <Text style={[styles.membership]}>
                                                <Text style={{ color: textColor(darkMode), fontFamily: 'PlusJakartaSansBold', }}>Non </Text>
                                                Member</Text>
                                        )
                                }
                            </View>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <AntDesign name="right" size={20} color="#D8D8D8" style={{ marginLeft: 0, }} />
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{ borderWidth: 0.5, margin: 15, borderColor: '#F5F5F5' }}>
                </View>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('Redeem History')
                }} style={{ flexDirection: 'row', marginTop: 25 }}>
                    <View style={{ flex: 1 }}>
                        <SvgXml xml={redeemHistory} height="20" width="20" style={{ marginLeft: 30, color: '#D8D8D8', marginLeft: 0 }} />
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text style={{
                            fontSize: 14,
                            color: subTextColor(darkMode), fontFamily: 'PlusJakartaSans'
                        }}>Redeem History</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <AntDesign name="right" size={20}
                            color="black" style={{ marginLeft: 30, color: '#D8D8D8' }} />

                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('Forget Password');

                }} style={{ flexDirection: 'row', marginTop: 25 }}>
                    <View style={{ flex: 1 }}>
                        <SvgXml xml={forgot} height="20" width="20"
                            style={{ marginLeft: 30, color: '#D8D8D8', marginLeft: 0 }} />
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text style={{
                            fontSize: 14,
                            color: subTextColor(darkMode), fontFamily: 'PlusJakartaSans'
                        }}>Forgot Password</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <AntDesign name="right" size={20} color="black"
                            style={{ marginLeft: 30, color: '#D8D8D8' }} />
                    </View>
                </TouchableOpacity>
                <View style={{ borderWidth: 0.5, margin: 15, borderColor: '#F5F5F5', marginTop: 40 }}>
                </View>

                <View>
                    <Text style={{ fontSize: 16, fontFamily: 'PlusJakartaSansBold', color: textColor(darkMode) }}>Settings</Text>
                </View>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('Language');
                }} style={{ flexDirection: 'row', marginTop: 25 }}>
                    <View style={{ flex: 1 }}>
                        <Entypo name="language" size={24} color="black" style={{ color: '#D8D8D8' }} />
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text style={{
                            fontSize: 14,
                            color: subTextColor(darkMode), fontFamily: 'PlusJakartaSans',
                        }}>Language</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <AntDesign name="right" size={20} color="black" style={{ marginLeft: 30, color: '#D8D8D8' }} />
                    </View>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', marginTop: 25 }}>
                    <View style={{ flex: 1 }}>
                        <Ionicons name="notifications-outline" size={24} color="black" style={{ color: '#D8D8D8' }} />
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text style={{
                            fontSize: 14,
                            color: subTextColor(darkMode), fontFamily: 'PlusJakartaSans',
                        }}>Notification</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Switch
                            trackColor={{ true: '#FFE1E3', false: '#D8D8D8' }}
                            thumbColor={pageSettings.notification ? "#FC444B" : "#585858"}
                            value={pageSettings.notification}
                            onValueChange={(value) => dispatch(setNotification(!pageSettings.notification))}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <View style={{ flex: 1 }}>
                        <FontAwesome name="moon-o" size={24} color="black" style={{ color: '#D8D8D8' }} />
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text style={{
                            fontSize: 14,
                            color: subTextColor(darkMode), fontFamily: 'PlusJakartaSans',
                        }}>Dark Mode</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Switch
                            trackColor={{ true: '#FFE1E3', false: '#D8D8D8' }}
                            thumbColor={pageSettings.darkMode ? "#FC444B" : "#585858"}
                            value={pageSettings.darkMode}
                            onValueChange={(value1) => {
                                dispatch(setTheme(!pageSettings.darkMode))
                            }}
                        />
                    </View>
                </View>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('Talk To Us');
                }} style={{ flexDirection: 'row', marginTop: 10 }}>
                    <View style={{ flex: 1 }}>
                        <Feather name="phone" size={24} color="black" style={{ color: '#D8D8D8' }} />
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text style={{
                            fontSize: 14,
                            color: subTextColor(darkMode), fontFamily: 'PlusJakartaSans',
                        }}>Talk to Us</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <AntDesign name="right" size={20} color="black"
                            style={{
                                marginLeft: 30,
                                color: '#D8D8D8'
                            }} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    dispatch(setAnimatedLoader(true))
                    signOut(auth).then(() => {
                        navigation.navigate('SignIn')
                        dispatch(setAnimatedLoader(false))
                    })
                }} style={{ flexDirection: 'row', marginTop: 25 }}>
                    <View style={{ flex: 1 }}>
                        <AntDesign name="login"
                            size={24} color="black"
                            style={{ color: '#D8D8D8' }} />
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text style={{
                            fontSize: 14, color: subTextColor(darkMode),
                            fontFamily: 'PlusJakartaSans'
                        }}>Log out</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <AntDesign name="right" size={20} color='#000000'
                            style={{
                                marginLeft: 30,
                                color: '#D8D8D8'
                            }} />
                    </View>
                </TouchableOpacity>

                <View style={{
                    alignItems: 'center',
                    marginTop: '40%',
                }}>
                    <Text style={{
                        color: '#D8D8D8',
                        fontSize: 12,
                        fontFamily: 'PlusJakartaSans',
                    }}>SmiraClub v 2.0.1</Text>
                </View>
            </View>
        </ScrollView>
    );
};



export default Settings;
