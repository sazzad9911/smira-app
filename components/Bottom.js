import React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    Modal, Dimensions, ScrollView, Linking
} from 'react-native'
import { Feather } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg'

const window = Dimensions.get('window')
const Bottom = (props) => {
    const [active, setActive] = React.useState('explore')
    const navigation = props.navigation;
    const [modalVisible, setModalVisible] = React.useState(false)

    const activeExplore = `
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 0.153687C16.02 0.153687 20.5 4.63369 20.5 10.1537C20.5 15.6837 16.02 20.1537 10.5 20.1537C4.97 20.1537 0.5 15.6837 0.5 10.1537C0.5 4.63369 4.97 0.153687 10.5 0.153687ZM14.35 6.86369C14.46 6.51369 14.14 6.18369 13.79 6.29369L8.67 7.89369C8.46 7.96369 8.29 8.12369 8.23 8.33369L6.63 13.4637C6.52 13.8037 6.85 14.1337 7.19 14.0237L12.29 12.4237C12.5 12.3637 12.67 12.1937 12.73 11.9837L14.35 6.86369Z" fill="#292929"/>
    </svg>  
    `;
    const inactiveExplore = `
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 0.936768C16.02 0.936768 20.5 5.41677 20.5 10.9368C20.5 16.4668 16.02 20.9368 10.5 20.9368C4.97 20.9368 0.5 16.4668 0.5 10.9368C0.5 5.41677 4.97 0.936768 10.5 0.936768ZM14.35 7.64677C14.46 7.29677 14.14 6.96677 13.79 7.07677L8.67 8.67677C8.46 8.74677 8.29 8.90677 8.23 9.11677L6.63 14.2468C6.52 14.5868 6.85 14.9168 7.19 14.8068L12.29 13.2068C12.5 13.1468 12.67 12.9768 12.73 12.7668L14.35 7.64677Z" fill="#D8D8D8"/>
    </svg>
    `;
    const activeCategory = `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.03987 0.153687H6.41985C7.82985 0.153687 8.95984 1.3037 8.95984 2.71471V6.12373C8.95984 7.54375 7.82985 8.68375 6.41985 8.68375H3.03987C1.63987 8.68375 0.499878 7.54375 0.499878 6.12373V2.71471C0.499878 1.3037 1.63987 0.153687 3.03987 0.153687ZM3.03987 11.6236H6.41985C7.82985 11.6236 8.95984 12.7646 8.95984 14.1846V17.5937C8.95984 19.0037 7.82985 20.1537 6.41985 20.1537H3.03987C1.63987 20.1537 0.499878 19.0037 0.499878 17.5937V14.1846C0.499878 12.7646 1.63987 11.6236 3.03987 11.6236ZM17.9599 0.153687H14.5799C13.1699 0.153687 12.04 1.3037 12.04 2.71471V6.12373C12.04 7.54375 13.1699 8.68375 14.5799 8.68375H17.9599C19.3599 8.68375 20.4999 7.54375 20.4999 6.12373V2.71471C20.4999 1.3037 19.3599 0.153687 17.9599 0.153687ZM16.2699 11.6236H17.9599C19.3599 11.6236 20.4999 12.7646 20.4999 14.1846V15.8891V17.5937C20.4999 19.0037 19.3599 20.1537 17.9599 20.1537H16.2699H14.5799C13.1699 20.1537 12.04 19.0037 12.04 17.5937V15.8891V14.1846C12.04 12.7646 13.1699 11.6236 14.5799 11.6236H16.2699Z" fill="#292929"/>
    </svg>
    `;
    const inactiveCategory = `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.03987 0.936768H6.41985C7.82985 0.936768 8.95984 2.08678 8.95984 3.49779V6.90682C8.95984 8.32683 7.82985 9.46684 6.41985 9.46684H3.03987C1.63987 9.46684 0.499878 8.32683 0.499878 6.90682V3.49779C0.499878 2.08678 1.63987 0.936768 3.03987 0.936768ZM3.03987 12.4067H6.41985C7.82985 12.4067 8.95984 13.5477 8.95984 14.9677V18.3767C8.95984 19.7868 7.82985 20.9368 6.41985 20.9368H3.03987C1.63987 20.9368 0.499878 19.7868 0.499878 18.3767V14.9677C0.499878 13.5477 1.63987 12.4067 3.03987 12.4067ZM17.9599 0.936768H14.5799C13.1699 0.936768 12.04 2.08678 12.04 3.49779V6.90681C12.04 8.32683 13.1699 9.46684 14.5799 9.46684H17.9599C19.3599 9.46684 20.4999 8.32683 20.4999 6.90681V3.49779C20.4999 2.08678 19.3599 0.936768 17.9599 0.936768ZM16.2699 12.4067H17.9599C19.3599 12.4067 20.4999 13.5477 20.4999 14.9677V16.6722V18.3767C20.4999 19.7868 19.3599 20.9368 17.9599 20.9368H16.2699H14.5799C13.1699 20.9368 12.04 19.7868 12.04 18.3767V16.6722V14.9677C12.04 13.5477 13.1699 12.4067 14.5799 12.4067H16.2699Z" fill="#D8D8D8"/>
    </svg>
    `;
    const activeMembership = `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.5 10.2001C0.5 9.64779 0.947715 9.20007 1.5 9.20007H19.5C20.0523 9.20007 20.5 9.64779 20.5 10.2001V12.1536C20.5 16.5719 16.9183 20.1536 12.5 20.1536H8.5C4.08172 20.1536 0.5 16.5719 0.5 12.1536V10.2001Z" fill="#292929"/>
    <path d="M0.5 7.29913C0.5 3.35281 3.69912 0.153687 7.64544 0.153687H13.2549C17.2013 0.153687 20.4004 3.35281 20.4004 7.29913V7.29913C20.4004 7.79242 20.0005 8.19231 19.5072 8.19231H1.39318C0.899891 8.19231 0.5 7.79242 0.5 7.29913V7.29913Z" fill="#292929"/>
    </svg>
    `
    const inactiveMembership = `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.5 10.9832C0.5 10.4309 0.947715 9.98315 1.5 9.98315H19.5C20.0523 9.98315 20.5 10.4309 20.5 10.9832V12.9367C20.5 17.355 16.9183 20.9367 12.5 20.9367H8.5C4.08172 20.9367 0.5 17.355 0.5 12.9367V10.9832Z" fill="#D8D8D8"/>
    <path d="M0.5 8.08221C0.5 4.13589 3.69912 0.936768 7.64544 0.936768H13.2549C17.2013 0.936768 20.4004 4.13589 20.4004 8.08221V8.08221C20.4004 8.5755 20.0005 8.97539 19.5072 8.97539H1.39318C0.899891 8.97539 0.5 8.5755 0.5 8.08221V8.08221Z" fill="#D8D8D8"/>
    </svg>
    `
    const activeCall = `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0071 10.6509C14.2061 14.8488 15.1587 9.99234 17.8323 12.664C20.4098 15.2408 21.8912 15.7571 18.6255 19.0218C18.2165 19.3506 15.6175 23.3055 6.48379 14.1744C-2.65103 5.04211 1.30167 2.44047 1.63049 2.03153C4.90407 -1.24227 5.41143 0.247774 7.98894 2.82456C10.6625 5.49737 5.80806 6.45307 10.0071 10.6509Z" fill="#292929"/>
    </svg>
    `
    const inactiveCall = `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0071 11.434C14.2061 15.6319 15.1587 10.7754 17.8323 13.4471C20.4098 16.0239 21.8912 16.5401 18.6255 19.8049C18.2165 20.1336 15.6175 24.0886 6.48379 14.9575C-2.65103 5.82519 1.30167 3.22355 1.63049 2.81461C4.90407 -0.459184 5.41143 1.03085 7.98894 3.60764C10.6625 6.28045 5.80806 7.23615 10.0071 11.434Z" fill="#D8D8D8"/>
    </svg>
    `
    return (
        <View style={styles.view}>
            <View style={styles.center_view}>
            </View>
            <TouchableOpacity onPress={() => {
                setActive('calendar')
                setModalVisible(true)
            }} style={styles.center}>
                <Feather name="calendar" size={27} color="#ffff" />
            </TouchableOpacity>
            <View style={{ flex: 1, flexDirection: 'row', marginRight: 40 }}>
                <TouchableOpacity onPress={() => {
                    setActive('explore')
                    navigation.navigate('Home')
                }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <SvgXml xml={active == 'explore' ? activeExplore : inactiveExplore} height="20" width="20" />
                    <Text style={{ color: active == 'explore' ? 'black' : '#D8D8D8', fontSize: 12 }}>Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setActive('category')
                    setModalVisible(true)
                }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <SvgXml xml={active == 'category' ? activeCategory : inactiveCategory} height="20" width="20" />
                    <Text style={{ color: active == 'category' ? 'black' : '#D8D8D8', fontSize: 12 }}>Category</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10 }}>
                <TouchableOpacity onPress={() => {
                    setActive('membership')
                    navigation.navigate('MemberShipInfo')
                }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <SvgXml xml={active == 'membership' ? activeMembership : inactiveMembership} height="20" width="20" />
                    <Text style={{ color: active == 'membership' ? 'black' : '#D8D8D8', fontSize: 12 }}>Membership</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setActive('call')
                    Linking.openURL(`tel:+8801761143991`)
                }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <SvgXml xml={active == 'call' ? activeCall : inactiveCall} height="20" width="20" />
                    <Text style={{ color: active == 'call' ? 'black' : '#D8D8D8', fontSize: 12 }}>Call Us</Text>
                </TouchableOpacity>
            </View>
            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
                <View style={{
                    width: window.width,
                    maxHeight: window.height - 200,
                    backgroundColor: '#ffff',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    shadowOffset: {
                        height: 2, width: 2
                    }, shadowOpacity: .4,
                    shadowRadius: 5,
                    elevation: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: 0,
                }}>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{
                        width: window.width,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    }}>
                        <View style={{
                            width: 40,
                            height: 4,
                            margin: 15,
                            backgroundColor: '#D8D8D8'
                        }}></View>
                    </TouchableOpacity>
                    <ScrollView style={{ width: '100%' }}>
                        {
                            active == 'calendar' ?
                                (
                                    <HotelBooking navigation={navigation} />
                                ) :
                                (
                                    <Category close={setModalVisible} navigation={navigation} />
                                )
                        }
                    </ScrollView>
                </View>
            </Modal>
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
        flexDirection: 'row'
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

export const Category = (props) => {
    const navigation = props.navigation;
    const [tab, setTab] = React.useState(null)
    const navigate = () => {
        navigation.navigate('Category Single', { title: tab })
        props.close(false)
    }

    return (
        <View style={{
            width: '100%',
            padding: 20,
        }}>
            <Text style={{
                fontSize: 25,
                marginVertical: 15,
                fontWeight: 'bold'
            }}>Categories</Text>
            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                <IconsSet style={{
                    backgroundColor: tab == 'Popular Hotel' ? '#D8D8D8' : '#FFFF'
                }} onPress={() => {
                    setTab('Popular Hotel')
                }} name='Hotels' icon={Hotels} />
                <IconsSet style={{
                    backgroundColor: tab == 'Restaurant' ? '#D8D8D8' : '#FFFF'
                }} onPress={() => {
                    setTab('Restaurant')
                }} name='Restaurants' icon={Restaurant} />
                <IconsSet style={{
                    backgroundColor: tab == 'Games' ? '#D8D8D8' : '#FFFF'
                }} onPress={() => {
                    setTab('Games')
                }} name='Games' icon={Games} />
                <IconsSet style={{
                    backgroundColor: tab == 'Shopping' ? '#D8D8D8' : '#FFFF'
                }} onPress={() => {
                    setTab('Shopping')
                }} name='Shopping' icon={Shopping} />
                <IconsSet style={{
                    backgroundColor: tab == 'Villas' ? '#D8D8D8' : '#FFFF'
                }} onPress={() => {
                    setTab('Villas')
                }} name='Villas' icon={Villas} />
                <IconsSet style={{
                    backgroundColor: tab == 'Camping' ? '#D8D8D8' : '#FFFF'
                }} onPress={() => {
                    setTab('Camping')
                }} name='Camping' icon={Camping} />
                <IconsSet style={{
                    backgroundColor: tab == 'Travel' ? '#D8D8D8' : '#FFFF'
                }} onPress={() => {
                    setTab('Travel')
                }} name='Travel' icon={Travel} />
                <IconsSet style={{
                    backgroundColor: tab == 'Health' ? '#D8D8D8' : '#FFFF'
                }} onPress={() => {
                    setTab('Health')
                }} name='Health' icon={Health} />
                <IconsSet style={{
                    backgroundColor: tab == 'Spa & Salons' ? '#D8D8D8' : '#FFFF'
                }} onPress={() => {
                    setTab('Spa & Salons')
                }} name='Spa & Salons' icon={Spa_Salons} />
                <IconsSet style={{
                    backgroundColor: tab == 'Services' ? '#D8D8D8' : '#FFFF'
                }} onPress={() => {
                    setTab('Services')
                }} name='Services' icon={Services} />
            </View>
            <TouchableOpacity onPress={() => {
                navigate()
            }} disabled={tab ? false : true}
                style={{
                    borderColor: '#FC444B',
                    borderWidth: 1,
                    height: 50,
                    margin: 5,
                    padding: 10,
                    borderRadius: 30,
                    marginTop: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: tab ? '#FC444B' : '#FFFF'
                }}>
                <Text style={{
                    color: tab ? 'white' : 'black'
                }}>APPLY</Text>
            </TouchableOpacity>
        </View>
    )
} 