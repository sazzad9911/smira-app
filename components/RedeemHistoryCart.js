import React from 'react';
import { View, TouchableOpacity, Image, Text, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DealCoupon from '../screens/DealCoupon';
import BookingHistory from '../screens/BookingHistory'
import {useSelector} from 'react-redux'

const RedeemHistoryCart = (props) => {
    const [modalVisible, setmodalVisible] = React.useState(false)
    const deals= useSelector(state => state.deals)


    return (
        <View style={{margin:10, marginLeft: 20 }}>
            <TouchableOpacity onPress={() =>setmodalVisible(!modalVisible)} style={{ flexDirection: 'row', marginTop: 5, }}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={{
                            height: 70,
                            width: 70,
                            borderRadius: 50,
                        }}
                        source={{ uri: props.img }}
                    />
                </View>
                <View style={{ flex: 3, marginTop: 10 }}>
                    <Text style={{ fontSize: 15, color: '#585858',
                    fontFamily: 'PlusJakartaSansBold'}}>{props.title}</Text>
                    <Text
                        style={{
                            fontSize: 15,
                            color: '#808080',
                            marginTop: 10,
                            fontFamily:'PlusJakartaSans'
                        }}>{props.date}</Text>
                </View>
                <View style={{ flex: 1, marginTop: 20 }}>
                    <AntDesign name="right" size={20} color="black"
                        style={{
                            marginLeft: 30,
                            color: 'rgb(200,200,200)'
                        }} />
                </View>
            </TouchableOpacity>
            <Modal animated={true} 
            visible={modalVisible} 
            animationType='fade'
            onRequestClose={() => setmodalVisible(!modalVisible)}>
            {
                props.type=='coupon'?
                (
                    <DealCoupon close={setmodalVisible}/>
                ):(
                    <BookingHistory close={setmodalVisible}/>
                )
            }
            </Modal>
        </View>
    )
}
export default RedeemHistoryCart;