import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, Modal } from 'react-native'
import { AntDesign,MaterialCommunityIcons,Ionicons } from '@expo/vector-icons'
import DealCoupon from '../screens/DealCoupon';
import { Rect } from 'react-native-svg';
const window = Dimensions.get('window')

const DealCart = (props) => {
    const [modalVisible, setmodalVisible] = React.useState(false)
    const navigation = props.navigation;
    const [Favor,setFavor]=React.useState(false)

    return (
        <View style={{
            width: window.width - 30,
            margin: 10,
            backgroundColor: 'white',
            borderRadius: 10
        }}>
            <Image style={{
                width: '100%',
                borderRadius: 10,
                height: 200,
            }} source={{ uri: props.img }} />
            <TouchableOpacity style={{
                position:'absolute',
                top:5,
                right:0
            }} onPress={() => setFavor(!Favor)}>
                {
                    Favor ? (
                        <MaterialCommunityIcons name='heart' size={30} style={{ color: 'red', margin: 15 }} />
                    ) : (
                        <Ionicons name="heart-outline" size={30} color="white" style={{ color: 'white', margin: 15 }} />

                    )
                }


            </TouchableOpacity>
            <View style={{
                flexDirection: 'row',
            }}>
                <View style={{
                    flex: 4,
                    margin: 10
                }}>
                    <Text style={{
                        fontFamily: 'PlusJakartaSansBold',
                        fontWeight:'700',
                        fontSize: 16,
                        marginBottom: 5
                    }}>{props.headLine}</Text>
                    <Text style={{
                        color:'#808080',
                        fontFamily: 'PlusJakartaSans',
                        fontSize:12,
                        fontWeight:'400'
                    }}>{props.category}</Text>
                </View>
                <TouchableOpacity onPress={() => setmodalVisible(true)} style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(216, 216, 216, 1)',
                    height: 40,
                    width: 40,
                    borderRadius: 25,
                    margin: 5
                }}>
                    <AntDesign name="right" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Modal visible={modalVisible} onPress={() => setmodalVisible(!modalVisible)}>
                <DealCoupon navigation={navigation} data={props.data} close={setmodalVisible} />
            </Modal>
        </View>
    );
};

export default DealCart; 