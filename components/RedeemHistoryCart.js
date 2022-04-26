import React from 'react';
import { View, TouchableOpacity, Image, Text, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DealCoupon from '../screens/DealCoupon';
import BookingHistory from '../screens/BookingHistory'
import {useSelector} from 'react-redux'

const RedeemHistoryCart = (props) => {
    const [modalVisible, setmodalVisible] = React.useState(false)
    const deals= useSelector(state => state.deals)
    const date=new Date(props.data.date)
    const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const [data,setData]= React.useState(null)
    const purches_id=props.data.purches_id

    React.useEffect(() => {
        
        if(deals){
            deals.forEach(doc=>{
                if(doc.deal.id == purches_id){
                    setData(doc.deal)
                }
            })
        }
    },[deals])

    return (
        <View style={{margin:10, marginLeft: 20 }}>
            <TouchableOpacity onPress={() =>setmodalVisible(!modalVisible)} style={{ flexDirection: 'row', marginTop: 5, }}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={{
                            height: 60,
                            width: 60,
                            borderRadius: 30,
                        }}
                        source={{ uri: props.data.image }}
                    />
                </View>
                <View style={{ flex: 3, marginTop: 5,marginLeft:10}}>
                    <Text style={{ fontSize: 15, color: '#585858',
                    fontFamily: 'PlusJakartaSansBold'}}>{props.data.name}</Text>
                    <Text
                        style={{
                            fontSize: 15,
                            color: '#808080',
                            marginTop: 3,
                            fontFamily:'PlusJakartaSans'
                        }}>{date.getDate()+' '+Months[date.getMonth()]+' '+date.getFullYear()}</Text>
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
                    <DealCoupon data={data} close={setmodalVisible}/>
                ):(
                    <BookingHistory data={props.data} close={setmodalVisible}/>
                )
            }
            </Modal>
        </View>
    )
}
export default RedeemHistoryCart;