import React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    Modal, Dimensions, ScrollView, Linking
} from 'react-native'
import { Feather } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';
import {
    activeExplore, inactiveExplore, activeCategory,
    inactiveCategory,
    activeMembership,
    inactiveMembership, activeCall, inactiveCall, calender,heart,fullHeart
} from './Icon'
import { useSelector, useDispatch } from 'react-redux';
import { setBottomSheet, setLoader } from '../action'
import { textColor } from '../assets/color';

const window = Dimensions.get('window')
const Bottom = (props) => {
    const [active, setActive] = React.useState('explore')
    const navigation = props.navigation;
    const [modalVisible, setModalVisible] = React.useState(false)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const darkMode = useSelector(state => state.pageSettings.darkMode)

    return (
        <View style={[styles.view]}>
            <View style={[styles.center_view]}>
            </View>
            <TouchableOpacity onPress={() => {
                //setActive('calendar') 
                dispatch(setBottomSheet('calendar'))
            }} style={styles.center}>
                <SvgXml xml={active == 'category' ? calender : calender} height="30" width="30" />
            </TouchableOpacity>
            <View style={{ flex: 1, flexDirection: 'row', marginRight: 30 }}>
                <TouchableOpacity onPress={() => {
                    setActive('explore')
                    navigation.navigate('Home')
                    dispatch(setBottomSheet('explore'))
                }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                    <SvgXml xml={active == 'explore' ? activeExplore : inactiveExplore} height="25" width="25" />
                    <Text style={{ color: active == 'explore' ? textColor(darkMode) : '#D8D8D8', fontSize: 12 }}>Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //setActive('category')
                   // dispatch(setBottomSheet('category'))
                   navigation.navigate('WishList')
                }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginRight: 20 }}>
                    <SvgXml xml={active == 'category' ? fullHeart : fullHeart} height="25" width="25" />
                    <Text style={{ color: active == 'category' ? textColor(darkMode) : '#808080', fontSize: 12 }}>Wishlist</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10 }}>
                <TouchableOpacity onPress={() => {
                    //setActive('membership')
                    if (user && user[0].starting_date) {
                        navigation.navigate('MemberShipInfo')
                    } else {
                        navigation.navigate('MemberShipOnboarding')
                    }
                }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                    <SvgXml xml={active == 'membership' ? activeMembership : inactiveMembership} height="25" width="25" />
                    <Text style={{ color: active == 'membership' ? textColor(darkMode) : '#808080', fontSize: 12 }}>Membership</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //setActive('call')
                    Linking.openURL(`tel:+919821116669`)
                }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <SvgXml xml={active == 'call' ? activeCall : inactiveCall} height="25" width="25" />
                    <Text style={{ color: active == 'call' ? textColor(darkMode) : '#808080', fontSize: 12 }}>Call Us</Text>
                </TouchableOpacity>
            </View>
        </View>
    ); 
};

export default Bottom;
const styles = StyleSheet.create({
    view: {
        backgroundColor: 'white',
        marginHorizontal: '4%',
        width: '92%',
        height: 60,
        borderRadius: 30,
        shadowOffset: {
            height: 2, width: 2
        }, shadowOpacity: .4,
        shadowRadius: 5,
        elevation: 5,
        marginVertical: 5,
        flexDirection: 'row',
        marginBottom: 10
    },
    center_view: {
        position: 'absolute',
        height: 43, width: 74,
        left: '40%',
        alignItems: 'center',
        bottom: 18,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    center: {
        backgroundColor: '#FC444B',
        height: 60, width: 60,
        justifyContent: 'center',
        borderRadius: 30,
        alignItems: 'center',
        position: 'absolute',
        bottom: 25,
        left: '42%',
        shadowOffset: {
            height: 2, width: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        shadowColor: 'black'
    }
})
import { IconsSet } from '../screens/Home'
import {
    Hotels, Health, Camping, Games,
    Restaurant, Services, Shopping, Spa_Salons, Travel, Villas
} from './Icon';
import HotelBooking from './HotelBooking';
import { backgroundColor } from './../assets/color';

export const Category = (props) => {
    const navigation = props.navigation;
    const [tab, setTab] = React.useState(null)
    const dispatch = useDispatch()
    const navigate = (n) => {
        navigation.navigate(n, { title: tab })
        props.close(false)
        dispatch(setLoader(''))
    }
    return (
        <View style={{
            width: '100%',
            padding: 20,
        }}>
            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                <IconsSet style={{
                    backgroundColor: tab == 'Popular Hotel' ? '#D8D8D8' : '#FFFF'
                }} onPress={() => {
                  //  navigation.navigate('Category Single', { title: 'Hotels' })
                  //  dispatch(setLoader('SearchHotel'))
                  //  dispatch(setBottomSheet(null))
                }} name='Hotels' icon={Hotels} />
                <IconsSet style={{
                    backgroundColor: tab == 'Restaurant' ? '#D8D8D8' : '#FFFF'
                }} onPress={() => {
                   // navigation.navigate('Category Single', { title: 'Restaurants' })
                   // //dispatch(setLoader('SearchDeal'))
                  //  dispatch(setBottomSheet(null))
                }} name='Restaurants' icon={Restaurant} />
                <IconsSet style={{
                    backgroundColor: tab == 'Games' ? '#D8D8D8' : '#FFFF'
                }} onPress={() => {
                    //setTab('Games')
                    //navigate()
                }} name='Games' icon={Games} />
                <IconsSet style={{
                    backgroundColor: tab == 'Shopping' ? '#D8D8D8' : '#FFFF'
                }} onPress={() => {
                    //setTab('Shopping')
                    // navigate()
                }} name='Shopping' icon={Shopping} />
                <IconsSet style={{
                    backgroundColor: tab == 'Villas' ? '#D8D8D8' : '#FFFF'
                }} onPress={() => {
                    //setTab('Villas')
                    //navigate()
                }} name='Villas' icon={Villas} />
                <IconsSet style={{
                    backgroundColor: tab == 'Camping' ? '#D8D8D8' : '#FFFF'
                }} onPress={() => {
                    //setTab('Camping')
                    // navigate()
                }} name='Camping' icon={Camping} />
                <IconsSet style={{
                    backgroundColor: tab == 'Travel' ? '#D8D8D8' : '#FFFF'
                }} onPress={() => {
                    //setTab('Travel')
                    // navigate()
                }} name='Travel' icon={Travel} />
                <IconsSet style={{
                    backgroundColor: tab == 'Health' ? '#D8D8D8' : '#FFFF'
                }} onPress={() => {
                    // setTab('Health')
                    // navigate()
                }} name='Health' icon={Health} />
                <IconsSet style={{
                    backgroundColor: tab == 'Spa & Salons' ? '#D8D8D8' : '#FFFF'
                }} onPress={() => {
                    //navigation.navigate('Category Single', { title: 'Salon' })
                   // dispatch(setLoader('Salon'))
                   // dispatch(setBottomSheet(null))
                }} name='Spa & Salons' icon={Spa_Salons} />
                <IconsSet style={{
                    backgroundColor: tab == 'Services' ? '#D8D8D8' : '#FFFF'
                }} onPress={() => {
                    // setTab('Services')
                    //  navigate()
                }} name='Services' icon={Services} />
            </View>
        </View>
    )
} 