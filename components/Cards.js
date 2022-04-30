import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons'
import { getData, storeData } from '../screens/WishList'
import { useSelector, useDispatch } from 'react-redux'
import { setAction } from '../action'
import { textColor } from './../assets/color';

const Cards = (props) => {
    const navigation = props.navigation;
    const [Favor, setFavor] = React.useState(false)
    const [Hotels, setHotels] = React.useState(null)
    const dispatch = useDispatch()
    const action = useSelector(state => state.pageSettings.action)
    const darkMode = useSelector(state => state.pageSettings.darkMode)

    React.useEffect(() => {
        getData('hotels').then((data) => {
            if (data) {
                setHotels(data)
                if (data.find(element => element.id == props.doc.id)) {
                    setFavor(true);
                }
            } else {
                storeData('hotels', [])
                setHotels([])
            }
        })
    }, [action])

    return (
        <View style={{
            alignItems: 'center',
            paddingLeft: 10,
            paddingRight: 10,
            marginBottom: 10
        }}>
            <ImageBackground source={props.img} imageStyle={{
                borderRadius: 10
            }} style={{
                width: '100%',
                height: 170,
                borderRadius: 10,
                justifyContent: 'space-between',
                alignItems: 'flex-end'
            }} >

                <TouchableOpacity disabled={Hotels ? false : true} onPress={() => {
                    setFavor(!Favor)
                    if (!Favor) {
                        let arr = Hotels
                        arr.push(props.doc)
                        setHotels(arr)
                        //console.log(Deals)
                        storeData('hotels', Hotels).then(() => {
                            dispatch(setAction(!action))
                        })
                    } else {
                        let arr = Hotels.filter(element => element.id != props.doc.id);
                        storeData('hotels', arr).then(() => {
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
                    flexDirection: 'row', alignItems: 'center', backgroundColor: '#64B657', padding: 10,
                    justifyContent: 'space-between', borderRadius: 20, width: 70, margin: 10
                }}>
                    <MaterialCommunityIcons size={20} style={{ color: 'white' }} name="star" />
                    <Text style={{ color: 'white', marginLeft: 10 }}>{props.rating}</Text>
                </View>

            </ImageBackground>

            <View style={{ width: '100%', padding: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{
                    marginLeft: 8
                }}>
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 18,
                        marginVertical: 5,
                        fontFamily: 'PlusJakartaSansBold',
                        color:textColor(darkMode)
                    }}>{props.title}</Text>
                    <Text style={{
                        fontWeight: '400', fontSize: 12, color: '#808080',
                        fontFamily: 'PlusJakartaSans'
                    }}>{props.address}</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Hotel', {
                    id: props.doc.id, like: Favor
                })} style={{
                    backgroundColor: 'rgb(220,220,220)',
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <MaterialIcons name='navigate-next' size={22} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cards;