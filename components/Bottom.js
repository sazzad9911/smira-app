import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Dimensions, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import Booking from '../screens/Booking'
import explore from '../assets/TabIcon/active/explore.png'
import Explore from '../assets/TabIcon/inactive/Explore.png'

const window = Dimensions.get('window')
const Bottom = (props) => {
    const [active, setActive] = React.useState('explore')
    const navigation = props.navigation;
    const [modalVisible, setModalVisible] = React.useState(false)

    return (
        <View style={styles.view}>
            <View style={styles.center_view}>
            </View>
            <TouchableOpacity onPress={() => {
                    setActive('calendar')
                    setModalVisible(true)
                }} style={styles.center}>
                    <Feather name="calendar" size={24} color="#ffff" />
                </TouchableOpacity>
            <View style={{ flex: 1, flexDirection: 'row', marginRight: 40 }}>
                <TouchableOpacity onPress={() => {
                    setActive('explore')
                    navigation.navigate('Home')
                }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialIcons name="explore" size={24} color={active == 'explore' ? 'black' : '#D8D8D8'} />
                    <Text style={{ color: active == 'explore' ? 'black' : '#D8D8D8', fontSize: 12 }}>Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setActive('category')
                    setModalVisible(true)
                }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialIcons name="category" size={24} color={active == 'category' ? 'black' : '#D8D8D8'} />
                    <Text style={{ color: active == 'category' ? 'black' : '#D8D8D8', fontSize: 12 }}>Category</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10 }}>
                <TouchableOpacity onPress={() => {
                    setActive('membership')
                    navigation.navigate('MemberShipInfo')
                }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialIcons name="card-membership" size={24} color={active == 'membership' ? 'black' : '#D8D8D8'} />
                    <Text style={{ color: active == 'membership' ? 'black' : '#D8D8D8', fontSize: 12 }}>Membership</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActive('call')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialIcons name="call" size={24} color={active == 'call' ? 'black' : '#D8D8D8'} />
                    <Text style={{ color: active == 'call' ? 'black' : '#D8D8D8', fontSize: 12 }}>Call</Text>
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
        height: 43, width: 91,
        left: '37%',
        alignItems: 'center',
        bottom: 18,
        backgroundColor:'#f5f5f5',
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    },
    center: {
        backgroundColor: '#FC444B',
        height: 70, width: 70,
        justifyContent: 'center',
        borderRadius: 35,
        alignItems: 'center',
        position:'absolute',
        bottom: 25,
        left: '40%',
        shadowOffset: {
            height: 2, width: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation:5,
        shadowColor:'black'
    }
})
import { IconsSet } from '../screens/Home'
import Hotels from '../assets/svgtopng/Hotels.png'
import Restaurant from '../assets/svgtopng/Restaurant.png'
import Games from '../assets/svgtopng/Games.png'
import Shopping from '../assets/svgtopng/Shopping.png'
import Villas from '../assets/svgtopng/Villas.png'
import Camping from '../assets/svgtopng/Camping.png'
import Travel from '../assets/svgtopng/Travel.png'
import Health from '../assets/svgtopng/Health.png'
import Spa from '../assets/svgtopng/Spa.png'
import Services from '../assets/svgtopng/Services.png'
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
                }} name='Spa & Salons' icon={Spa} />
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
                    margin: 12,
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