import React from 'react';
import { View, Image, Text, TouchableOpacity, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { DetailsCart } from './SalonCart';
import { rightArrow } from './Icon';
import { SvgXml } from 'react-native-svg';
import {useSelector} from 'react-redux'

const ActivitiesCart = (props) => {
    const data = props.data
    const brands=useSelector(state => state.brands)
    const [ModalVisible, setModalVisible] = React.useState(false)
    return (
        <TouchableOpacity onPress={() =>setModalVisible(true)} style={{
            height: 300,
            width: 280,
            margin: 10,
            borderRadius: 10,
            overflow: 'hidden',
            marginRight: 0
        }}>
            <Image style={{
                height: '100%',
                width: '100%',
                borderRadius: 10,
            }} source={{ uri: data.image }} />
            <LinearGradient style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                justifyContent: 'flex-end',
                padding: 20,
            }} colors={['rgba(0, 0, 0, 0.183)', '#000']}>
                <View>
                    <Text style={{
                        color: 'white',
                        fontFamily: 'PlusJakartaSansBold',
                        fontSize: 20
                    }}>{brands && brands.filter(brands=>brands.id==data.brand_id)?
                    brands.filter(brands=>brands.id==data.brand_id)[0].name:''}</Text>
                    <View style={{
                        backgroundColor: '#FC444B',
                        height: 2,
                        width: 40,
                        marginTop: 10
                    }}></View>
                    <Text style={{
                        color: 'white',
                        fontFamily: 'PlusJakartaSans',
                        fontSize: 14,
                        marginTop: 5
                    }}>Full Day Pass</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 5,
                    }}>
                        <Text style={{
                            color: '#FC444B',
                            fontFamily: 'PlusJakartaSansBold',
                            fontSize: 14,
                            marginRight: 10
                        }}>View Details</Text>
                        <SvgXml xml={rightArrow} height="15" width="15"/>
                    </View>
                </View>
            </LinearGradient>
            <Modal visible={ModalVisible} onRequestClose={() => setModalVisible(!ModalVisible)}>
                <DetailsCart setModalVisible={setModalVisible} data={brands?brands.filter(d=>d.id ==data.brand_id)[0]:{}} />
            </Modal>
        </TouchableOpacity>
    );
};

export default ActivitiesCart;