import { Button, Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

import React from 'react';

import { AntDesign, EvilIcons, Feather, FontAwesome, FontAwesome5, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import profilePicture from '../assets/10.jpg'


const DrawerMenu = ({ navigation }) => {
    const onNavigate = (screen) => {
        navigation.navigate(screen)
    }
    return (
        <ScrollView>
            <View style={[styles.container]}>
                <TouchableOpacity style={[styles.metaContainer]} onPress={() => onNavigate('Account')}>
                    <Image source={profilePicture} style={[styles.profilePicture]} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '70%' }}>
                        <View style={[styles.horiContainer]}>
                            <Text style={{ fontWeight: '600', fontSize: 20 }}>Nirmiti Gaitonde</Text>
                            <Text style={[styles.membership]}><Text style={{ color: '#FFB92E' }}>Gold</Text> Member</Text>
                        </View>
                        <MaterialIcons style={[styles.tabIco3]} name='navigate-next' size={35} />
                    </View>
                </TouchableOpacity>
                <View style={{ borderBottomColor: 'rgb(230,230,230)', borderBottomWidth: 1, marginTop: 10, marginBottom: 10 }}></View>
                <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('MemberShipOnboarding')}>
                    <Feather style={[styles.tabIco]} name='pocket' size={22} />
                    <Text style={[styles.navTabText]}>Your Membership</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('WishList')}>
                    <EvilIcons style={[styles.tabIco]} name='heart' size={22} />
                    <Text style={[styles.navTabText]}>Your Wishlist</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('Home')}>
                    <AntDesign style={[styles.tabIco]} name='linechart' size={22} />
                    <Text style={[styles.navTabText]}>Redeem History</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('Home')}>
                    <MaterialIcons style={[styles.tabIco]} name='category' size={22} />
                    <Text style={[styles.navTabText]}>Category</Text>
                </TouchableOpacity>
                <View style={{ borderBottomColor: 'rgb(230,230,230)', borderBottomWidth: 1, marginTop: 10, marginBottom: 10 }}></View>
                <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('Home')}>
                    <Ionicons style={[styles.tabIco]} name='briefcase-outline' size={22} />
                    <Text style={[styles.navTabText]}>Business with us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('Settings')}>
                    <Ionicons style={[styles.tabIco]} name='settings-outline' size={22} />
                    <Text style={[styles.navTabText]}>Setting</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('Home')}>
                    <AntDesign style={[styles.tabIcoGold]} name='star' size={22} />
                    <Text style={[styles.navTabText]}>Rate us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('Home')}>
                    <AntDesign style={[styles.tabIco]} name='checksquareo' size={22} />
                    <Text style={[styles.navTabText]}>Privacy Policy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.navTab]} onPress={() => onNavigate('Home')}>
                    <Ionicons style={[styles.tabIco]} name='chatbubble-ellipses-outline' size={22} />
                    <Text style={[styles.navTabText]}>Talk to us</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onNavigate('MemberShipInfo')} style={{
                    backgroundColor: '#FF4449', minHeight: 40, width: '100%',
                    marginTop: 20, borderRadius: 10, padding: 20
                }}>
                    <Text style={{ color: 'white', fontWeight: '600', fontSize: 17 }}>Become a member and</Text>
                    <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>Save More</Text>
                    <View style={{ height: 20 }}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <View>
                            <Text style={{ color: 'white', fontWeight: '600', fontSize: 15 }}>Deals worth of</Text>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 23 }}>₹1 lakh</Text>
                        </View>
                        <MaterialIcons style={[styles.tabIco2]} name='navigate-next' size={30} />
                    </View>

                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default DrawerMenu;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom:50
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
        marginTop:30
    },
    horiContainer: {
        flexDirection: 'column',
    },
    membership: {
        fontSize: 15,
        color: 'rgb(90,90,90)',
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
