import React from 'react';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { DetailsCart } from './SalonCart';

const Banner = (props) => {
    const [ModalVisible, setModalVisible] = React.useState(false)
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
                }} source={{ uri: data.deal.image }} />
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
                            }}>{data.brand.type}</Text>
                            <Text style={{
                                color: '#ffff',
                                fontSize: 18,
                                fontFamily: 'PlusJakartaSans',
                                marginTop: 5
                            }}>Under ₹{data.deal.price}</Text>
                        </View>
                        <AntDesign style={{
                            marginTop: 20
                        }} name="rightcircleo" size={38} color="#ffff" />
                    </View>
                </LinearGradient>
            </TouchableOpacity>
            <Modal visible={ModalVisible} onRequestClose={() => setModalVisible(!ModalVisible)}>
                <DetailsCart setModalVisible={setModalVisible} data={data.brand} />
            </Modal>
        </View>
    );
};

export default Banner;