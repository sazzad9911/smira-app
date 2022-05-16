import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, Modal } from 'react-native'
import { AntDesign,MaterialCommunityIcons,Ionicons } from '@expo/vector-icons'
import DealCoupon from '../screens/DealCoupon';
import { Rect } from 'react-native-svg';
import {getData, storeData} from '../screens/WishList'
import{useSelector,useDispatch} from 'react-redux'
import {setAction} from '../action'
import { backgroundColor, textColor } from './../assets/color';
const window = Dimensions.get('window')

const DealCart = (props) => {
    const [modalVisible, setmodalVisible] = React.useState(false)
    const navigation = props.navigation;
    const [Favor,setFavor]=React.useState(false)
    const [Deals,setDeals]=React.useState(null);
    const dispatch = useDispatch()
    const action= useSelector(state => state.pageSettings.action)
    const darkMode= useSelector(state => state.pageSettings.darkMode)

    React.useEffect(() => {
        getData('deals').then((data) => {
            if(data) {
                setDeals(data)
                if(data.find(element=>element.id==props.data.id)){
                    setFavor(true);
                }
            }else{
                storeData('deals',[])
                setDeals([])
            }
        })
    },[action])

    return (
        <TouchableOpacity onPress={() => setmodalVisible(true)} style={{
            width: window.width - 30,
            margin: 10,
            backgroundColor: backgroundColor(darkMode),
            borderRadius: 10
        }}> 
            <Image style={{
                width: '100%',
                borderRadius: 10, 
                height: 200,
            }} source={{ uri: props.img }} />
            <TouchableOpacity disabled={Deals?false : true} style={{
                position:'absolute',
                top:5,
                right:0
            }} onPress={() => {
                setFavor(!Favor)
                if(!Favor){
                    let arr =Deals
                    arr.push(props.data)
                    setDeals(arr)
                    //console.log(Deals)
                    storeData('deals',Deals).then(() =>{
                        dispatch(setAction(!action))
                    })
                }else{
                    let arr=Deals.filter(element=>element.id!=props.data.id);
                    storeData('deals',arr).then(() =>{
                        dispatch(setAction(!action))
                    })
                    //console.log(arr);
                }
            }}>
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
                alignItems: 'center'
            }}>
                <View style={{
                    flex: 4,
                    margin: 10
                }}>
                    <Text style={{
                        fontFamily: 'PlusJakartaSansBold',
                        fontSize: 18,
                        marginBottom: 5,
                        color:textColor(darkMode)
                    }}>{props.headLine}</Text>
                    <Text style={{
                        color:'#808080',
                        fontFamily: 'PlusJakartaSans',
                        fontSize:14,
                        fontWeight:'400'
                    }}>{props.category}</Text>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(216, 216, 216, 1)',
                    height: 40,
                    width: 40,
                    borderRadius: 25,
                    margin: 5
                }}>
                    <AntDesign name="right" size={24} color="black" />
                </View>
            </View>
            <Modal visible={modalVisible} onPress={() => setmodalVisible(!modalVisible)}>
                <DealCoupon navigation={navigation} data={props.data} close={setmodalVisible} />
            </Modal>
        </TouchableOpacity>
    );
};

export default DealCart; 