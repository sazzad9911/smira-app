import React from 'react';
import { View, Image, Text, TouchableOpacity, Modal } from 'react-native';
import DealCoupon from '../screens/DealCoupon';
import {useSelector} from 'react-redux'

const SmallDealCart = (props) => {
    const [modalVisible, setModalVisible] = React.useState(false)
    const navigation = props.navigation;
    const brands = useSelector(state => state.brands)
    const [Brand,setBrand]= React.useState(null)
    //console.log(Brand)
    React.useEffect(() => {
        if(brands && props.data){
            brands.forEach(doc=>{
                if(doc.id==props.data.brand_id){
                    setBrand(doc)
                }
            })
        }
    },[brands+props.data]);

    return (
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{
            height: 140, width: 200, backgroundColor: 'white', borderRadius: 10,
            shadowColor: 'gray',
            shadowOffset: {
                width: 2,
                height: 2
            },
            shadowOpacity: 0.5,
            shadowRadius: 5,
            elevation: 10,
            marginBottom: 15,
            marginTop: 5,
            marginLeft: 3,
            marginRight: 3
        }}>
            <Image source={{ uri: props.img }} style={{ height: 80, width: 200, borderRadius: 10 }} />
            <View style={{ height: 60, width: 200, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                {
                    Brand ? (
                        <Image source={{ uri: Brand.image }} style={{ height: 40, width: 40, borderRadius: 25, backgroundColor: 'red' }} />
                    ):(
                        <View style={{ height: 40, width: 40, borderRadius: 25, backgroundColor: 'red' }} />
                    )
                }
                <Text style={{ width: 140, fontFamily: 'PlusJakartaSansBold', fontSize: 13, lineHeight: 16, alignItems: 'center', color: '#000000', fontWeight: '700' }}>{props.title}</Text>
            </View>
            <Modal onRequestClose={() => setModalVisible(!modalVisible)} visible={modalVisible}>
                <DealCoupon navigation={navigation} data={props.data} close={setModalVisible} />
            </Modal>
        </TouchableOpacity>
    );
};

export default SmallDealCart;