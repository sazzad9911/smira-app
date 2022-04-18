import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, Modal } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import DealCoupon from '../screens/DealCoupon';
const window = Dimensions.get('window')

const DealCart = (props) => {
    const [modalVisible, setmodalVisible] = React.useState(false)
    const navigation = props.navigation;

    return (
        <View style={{
            width: window.width - 30,
            margin: 10,
            shadowOffset: {
                height: 2, width: 2
            },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 5,
            backgroundColor: 'white',
            borderRadius: 10
        }}>
            <Image style={{
                width: '100%',
                borderRadius: 10,
                height: 200,
            }} source={{ uri: props.img }} />
            <View style={{
                flexDirection: 'row',
            }}>
                <View style={{
                    flex: 4,
                    margin: 5
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                    }}>{props.headLine}</Text>
                    <Text>{props.category}</Text>
                </View>
                <TouchableOpacity onPress={()=>setmodalVisible(true)} style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <AntDesign name="rightcircle" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Modal visible={modalVisible} onPress={() => setmodalVisible(!modalVisible)}>
                <DealCoupon navigation={navigation} data={props.data} close={setmodalVisible}/>
            </Modal>
        </View>
    );
};

export default DealCart; 