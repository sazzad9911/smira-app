import React from 'react';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { DetailsCart } from './SalonCart';
import { useSelector } from 'react-redux';

const Banner = (props) => {
    const [ModalVisible, setModalVisible] = React.useState(false)
    const brands = useSelector(state => state.brands)
    const data=props.data
    return (
        <View>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={{
                margin: 10,
                height: 230,
                borderRadius: 10,
                borderWidth: 5,
                borderColor: '#D8D8D8',
                overflow: 'hidden',
            }}>
                <Image style={{
                    width: '100%',
                    height: '100%',
                }} source={{ uri: data.image }} />
                <LinearGradient style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    top: 0,
                }} colors={['rgba(0, 0, 0, 0.183)', '#000']}>
                    <View style={{
                        margin: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <View>
                            <Text style={{
                                color: '#ffff',
                                fontFamily: 'PlusJakartaSansBold',
                                fontSize: 28
                            }}>{data.name!='null' ? data.name :''}</Text>
                            <Text style={{
                                color: '#ffff',
                                fontSize: 18,
                                fontFamily: 'PlusJakartaSans',
                                marginTop: 5
                            }}>{data.details!='null' ? data.details :''}</Text>
                        </View>
                        <AntDesign style={{
                            marginTop: 20
                        }} name="rightcircleo" size={38} color="#ffff" />
                    </View>
                </LinearGradient>
            </TouchableOpacity>
            <Modal visible={ModalVisible} onRequestClose={() => setModalVisible(!ModalVisible)}>
                <DetailsCart setModalVisible={setModalVisible} data={brands?brands.filter(d=>d.id==data.brand_id)[0]:{}} />
            </Modal>
        </View>
    );
};

export default Banner;