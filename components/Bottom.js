import React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    Modal, Dimensions, ScrollView, Linking
} from 'react-native'
import { Feather } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';
import {activeExplore,inactiveExplore,activeCategory,
    inactiveCategory,
    activeMembership,
    inactiveMembership,activeCall,inactiveCall} from './Icon'
import {useSelector, useDispatch} from 'react-redux';
import {setBottomSheet} from '../action'
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
        <View style={[styles.view,{ backgroundColor:backgroundColor(darkMode)}]}>
            <View style={[styles.center_view,{ backgroundColor:darkMode?'black':'#f5f5f5'}]}>
            </View>
            <TouchableOpacity onPress={() => {
                //setActive('calendar')
                dispatch(setBottomSheet('calendar'))
            }} style={styles.center}>
                <Feather name="calendar" size={27} color="#ffff" />
            </TouchableOpacity>
            <View style={{ flex: 1, flexDirection: 'row', marginRight: 40 }}>
                <TouchableOpacity onPress={() => {
                    setActive('explore')
                    navigation.navigate('Home')
                    dispatch(setBottomSheet('explore'))
                }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <SvgXml xml={active == 'explore' ? activeExplore : inactiveExplore} height="20" width="20" />
                    <Text style={{ color: active == 'explore' ? textColor(darkMode) : '#D8D8D8', fontSize: 12 }}>Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //setActive('category')
                    dispatch(setBottomSheet('category'))
                }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <SvgXml xml={active == 'category' ? activeCategory : inactiveCategory} height="20" width="20" />
                    <Text style={{ color: active == 'category' ? textColor(darkMode) : '#D8D8D8', fontSize: 12 }}>Category</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10 }}>
                <TouchableOpacity onPress={() => {
                    //setActive('membership')
                   if(user && user[0].starting_date){
                    navigation.navigate('MemberShipInfo')
                   }else{
                    navigation.navigate('MemberShipOnboarding')
                   }
                }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <SvgXml xml={active == 'membership' ? activeMembership : inactiveMembership} height="20" width="20" />
                    <Text style={{ color: active == 'membership' ? textColor(darkMode) : '#D8D8D8', fontSize: 12 }}>Membership</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    //setActive('call')
                    Linking.openURL(`tel:+8801761143991`)
                }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <SvgXml xml={active == 'call' ? activeCall : inactiveCall} height="20" width="20" />
                    <Text style={{ color: active == 'call' ? textColor(darkMode) : '#D8D8D8', fontSize: 12 }}>Call Us</Text>
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
        marginBottom:20
    },
    center_view: {
        position: 'absolute',
        height: 43, width: 74,
        left: '40%',
        alignItems: 'center',
        bottom: 18,
        backgroundColor: '#f5f5f5',
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
    const navigate = (n) => {
        navigation.navigate(n, { title: tab })
        props.close(false)
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
                    setTab('Popular Hotel')
                    navigate('Hotels')
                }} name='Hotels' icon={Hotels} />
                <IconsSet style={{
                    backgroundColor: tab == 'Restaurant' ? '#D8D8D8' : '#FFFF'
                }} onPress={() => {
                    setTab('Restaurant')
                    navigate('Restaurants')
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
                    //setTab('Spa & Salons')
                   // navigate()
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