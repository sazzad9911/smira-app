import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Dimensions, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import Booking from '../screens/Booking'

const window = Dimensions.get('window')
const Bottom = (props) => {
    const [active, setActive] = React.useState('explore')
    const navigation = props.navigation;
    const [modalVisible, setModalVisible] = React.useState(false)
    
    return (
        <View style={styles.view}>
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
                    <Text style={{ color: active == 'explore' ? 'black' : '#D8D8D8' }}>Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setActive('category')
                    setModalVisible(true)
                }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialIcons name="category" size={24} color={active == 'category' ? 'black' : '#D8D8D8'} />
                    <Text style={{ color: active == 'category' ? 'black' : '#D8D8D8' }}>Category</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10 }}>
                <TouchableOpacity onPress={() => {
                    setActive('membership')
                    navigation.navigate('MemberShipInfo')
                    }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialIcons name="card-membership" size={24} color={active == 'membership' ? 'black' : '#D8D8D8'} />
                    <Text style={{ color: active == 'membership' ? 'black' : '#D8D8D8' }}>Membership</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActive('call')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialIcons name="call" size={24} color={active == 'call' ? 'black' : '#D8D8D8'} />
                    <Text style={{ color: active == 'call' ? 'black' : '#D8D8D8' }}>Call</Text>
                </TouchableOpacity>
            </View>
            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
                <View style={{
                    width: window.width,
                    height: window.height - 200,
                    backgroundColor: '#ffff',
                    marginTop: 200,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    shadowOffset: {
                        height: 2, width: 2
                    }, shadowOpacity: .4,
                    shadowRadius: 5,
                    elevation: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{
                        width: window.width,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    }}>
                        <AntDesign name="caretdown" size={30} color="black" />
                    </TouchableOpacity>
                    <ScrollView style={{width:'100%'}}>
                        {
                            active == 'calendar' ?
                                (
                                    <HotelBooking navigation={navigation}/>
                                ) :
                                (
                                    <Category close={setModalVisible} navigation={navigation}/>
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
        height: 70,
        borderRadius: 30,
        shadowOffset: {
            height: 2, width: 2
        }, shadowOpacity: .4,
        shadowRadius: 5,
        elevation: 5,
        marginVertical: 5,
        flexDirection: 'row'
    },
    center: {
        backgroundColor: '#FC444B',
        height: 80, width: 80,
        position: 'absolute',
        justifyContent: 'center',
        borderWidth: 8,
        borderColor: '#f5f5f5',
        bottom: 25,
        borderRadius: 40,
        alignItems: 'center',
        left: '40%',
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

    return (
        <View style={{
            width: '100%',
            padding: 20,
        }}>
            <Text style={{
                fontSize: 20,
                marginVertical: 20,
                fontWeight: '500'
            }}>Categories</Text>
            <View style={{
                flexDirection:'row',
                flexWrap:'wrap'
            }}>
                <IconsSet onPress={()=>{
                    if(props.close){
                        props.close(false)
                    }
                    navigation.navigate('Category Single',{title:'Popular Hotel'})
                }} name='Hotels' icon={Hotels} />
                <IconsSet onPress={()=>{
                    if(props.close){
                        props.close(false)
                    }
                    navigation.navigate('Category Single',{title:'Restaurant'})
                }} name='Restaurants' icon={Restaurant} />
                <IconsSet onPress={()=>{
                    if(props.close){
                        props.close(false)
                    }
                    navigation.navigate('Category Single',{title:''})
                }} name='Games' icon={Games} />
                <IconsSet onPress={()=>{
                    if(props.close){
                        props.close(false)
                    }
                    navigation.navigate('Category Single',{title:''})
                }} name='Shopping' icon={Shopping} />
                <IconsSet onPress={()=>{
                    if(props.close){
                        props.close(false)
                    }
                    navigation.navigate('Category Single',{title:''})
                }} name='Villas' icon={Villas} />
                <IconsSet onPress={()=>{
                    if(props.close){
                        props.close(false)
                    }
                    navigation.navigate('Category Single',{title:''})
                }} name='Camping' icon={Camping} />
                <IconsSet onPress={()=>{
                    if(props.close){
                        props.close(false)
                    }
                    navigation.navigate('Category Single',{title:''})
                }} name='Travel' icon={Travel} />
                <IconsSet onPress={()=>{
                    if(props.close){
                        props.close(false)
                    }
                    navigation.navigate('Category Single',{title:''})
                }} name='Health' icon={Health} />
                <IconsSet onPress={()=>{
                    if(props.close){
                        props.close(false)
                    }
                    navigation.navigate('Category Single',{title:''})
                }} name='Spa & Salons' icon={Spa} />
                <IconsSet onPress={()=>{
                    if(props.close){
                        props.close(false)
                    }
                    navigation.navigate('Category Single',{title:''})
                }} name='Services' icon={Services} />
            </View>
        </View>
    )
}