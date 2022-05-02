import {
    Image, ImageBackground, ScrollView, StyleSheet, Text,
    TouchableOpacity, View, Platform, StatusBar, ActivityIndicator
} from 'react-native'
import React from 'react'
import testImage from '../assets/favicon.png';
import tub from '../assets/tub.png';
import { Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'
import Cards from '../components/Cards'
import SmallDealCart from '../components/SmallDealCart';
import DealCart from '../components/DealCart'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { setAction } from '../action'
import { SvgXml } from 'react-native-svg';
import { emptyWishlist } from '../components/Icon'

const WishList = ({ navigation }) => {
    const [Deals, setDeals] = React.useState(null)
    const [Hotels, setHotels] = React.useState(null)
    const brands = useSelector(state => state.brands)
    const [Route, setRoute] = React.useState('all')
    const action = useSelector(state => state.pageSettings.action)
    const dispatch = useDispatch()

    React.useEffect(() => {
        getData('deals').then((data) => {
            if (data) {
                setDeals(data)
            } else {
                setDeals([])
            }
        })
        getData('hotels').then((data) => {
            if (data) {
                setHotels(data)
            } else {
                setHotels([])
            }
        })
    }, [action])

    return (
        <ScrollView showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <StatusBar barStyle='light-content' />
            <View style={{
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: Platform.OS == 'ios' ? 60 : 10,
            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack();
                    }}>
                        <Ionicons name='chevron-back-sharp' size={24} style={{ color: 'rgb(100,100,100)' }} />
                    </TouchableOpacity>
                    <Text style={{ fontFamily:'PlusJakartaSansBold', fontSize: 17, marginLeft: 10 }}>Wishlist</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    if (Route == 'all') {
                        storeData('hotels', []);
                        storeData('deals', []).then(() => {
                            dispatch(setAction(!action))
                        })
                    } else if (Route == 'hotels') {
                        setHotels('hotels', []).then(() => {
                            dispatch(setAction(!action))
                        })
                    } else {
                        setDeals('deals', []).then(() => {
                            dispatch(setAction(!action))
                        })
                    }
                }}>
                    <SimpleLineIcons name='trash' size={24} style={{ color: 'rgb(200,200,200)', margin: 10 }} />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false} horizontal={true}>
                <View style={{ width: 20 }}></View>
                <TouchableOpacity onPress={() => {
                    setRoute('all')
                }} style={[styles.category,
                Route == 'all' ? styles.categoryActive : styles.category]}>
                    <Text style={[styles.categoryText,
                    Route == 'all' ? styles.categoryTextActive : styles.categoryText]}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setRoute('hotels')
                }} style={[styles.category,
                Route == 'hotels' ? styles.categoryActive : styles.category]}>
                    <Text style={[styles.categoryText,
                    Route == 'hotels' ? styles.categoryTextActive : styles.categoryText]}>Hotels</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setRoute('deals')
                }} style={[styles.category,
                Route == 'deals' ? styles.categoryActive : styles.category]}>
                    <Text style={[styles.categoryText,
                    Route == 'deals' ? styles.categoryTextActive : styles.categoryText]}>Deals</Text>
                </TouchableOpacity>
            </ScrollView>
            {
                Route == 'all' ? (
                    Hotels && Hotels.length == 0 && Deals && Deals.length == 0 ? (
                        <ScrollView>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: '60%'
                            }}>
                                <SvgXml xml={emptyWishlist} height="70" width="70" />
                                <Text style={{
                                    fontFamily: 'PlusJakartaSansBold',
                                    fontSize: 20,
                                    marginTop: 10
                                }}>Your wishlist is empty</Text>
                                <Text style={{
                                    marginTop: 8,
                                    color: '#585858',
                                    fontFamily: 'PlusJakartaSans',
                                }}>Tap <Text style={{ color: 'red' }}>heart</Text> button to start saving</Text>
                                <Text style={{
                                    color: '#585858',
                                    fontFamily: 'PlusJakartaSans',
                                }}>your favorite deals</Text>
                            </View>
                        </ScrollView>
                    ) : (
                        <View style={{ marginTop: 15 }}>
                            {Deals && Deals.length == 0 ? (<View></View>) : (
                                <Text style={{ fontFamily: 'PlusJakartaSansBold', fontSize: 18, margin: 20,
                                marginBottom:10 }}>Your deals</Text>
                            )}
                            <ScrollView showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false} horizontal={true} >
                                <View style={{ width: 10 }}></View>
                                {
                                    //repeat the deals slide here --------------
                                    Deals ? (
                                        Deals.length > 0 ? (
                                            Deals.map((doc, i) => (
                                                <SmallDealCart key={doc.id}
                                                    img={doc.image}
                                                    title={doc.name}
                                                    navigation={navigation}
                                                    data={doc}
                                                />
                                            ))
                                        ) : (
                                            <View></View>
                                        )
                                    ) : (
                                        <ActivityIndicator size="large" color="#FA454B" />
                                    )
                                }
                            </ScrollView>
                            <View style={{
                                height:1,
                                backgroundColor:'#F5F5F5',
                                marginLeft:10,
                                marginRight:10,
                                marginTop:10,
                                marginBottom:10
                            }}></View>
                            <Text style={{ fontFamily: 'PlusJakartaSansBold', fontSize: 18, 
                            margin: 20,marginBottom:10 }}>{Hotels && Hotels.length == 0 ? '' : 'Your hotels'}</Text>
                            <View>
                                {
                                    //repeat the image card here -------------
                                    Hotels ? (
                                        Hotels.length > 0 ? (
                                            Hotels.map(doc => (
                                                <Cards key={doc.id} doc={doc} navigation={navigation}
                                                    img={{ uri: doc.image }} title={doc.name}
                                                    address={doc.address} rating={doc.ratings} />
                                            ))
                                        ) : (
                                            <View></View>
                                        )
                                    ) : (
                                        <ActivityIndicator size="large" color="#FA454B" />
                                    )
                                }
                            </View>
                        </View>
                    )
                ) : Route == 'hotels' ? (
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 20 }}>Your Hotels</Text>
                        <View>
                            {
                                //repeat the image card here -------------
                                Hotels ? (
                                    Hotels.length > 0 ? (
                                        Hotels.map(doc => (
                                            <Cards key={doc.id} doc={doc} navigation={navigation}
                                                img={{ uri: doc.image }} title={doc.name}
                                                address={doc.address} rating={doc.ratings} />
                                        ))
                                    ) : (
                                        <Text style={{
                                            marginLeft: 20,
                                            color: '#808080',
                                            fontFamily: 'PlusJakartaSans',
                                            fontSize: 15
                                        }}>Empty List</Text>
                                    )
                                ) : (
                                    <ActivityIndicator size="large" color="#FA454B" />
                                )
                            }
                        </View>
                    </View>
                ) : (
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 20 }}>Your Deals</Text>
                        <View style={{
                            alignItems: 'center'
                        }} >
                            {
                                //repeat the deals slide here --------------
                                Deals ? (
                                    Deals.length > 0 ? (
                                        Deals.map((doc, i) => (
                                            <DealCart data={doc} key={doc.id} headLine={doc.name}
                                                category={doc.brand} img={doc.image} navigation={navigation}
                                            />
                                        ))
                                    ) : (
                                        <Text style={{
                                            marginLeft: 20,
                                            color: '#808080',
                                            fontFamily: 'PlusJakartaSans',
                                            fontSize: 15
                                        }}>Empty List</Text>
                                    )
                                ) : (
                                    <ActivityIndicator size="large" color="#FA454B" />
                                )
                            }
                        </View>
                    </View>
                )
            }
        </ScrollView>
    )
}

export default WishList

const styles = StyleSheet.create({
    category: {
        marginLeft: 3,
        marginRight: 3,
        padding: 10,
        borderWidth: 1,
        borderColor: 'rgb(180,180,180)',
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    categoryText: {
        color: 'rgb(150,150,150)',
        fontFamily: 'PlusJakartaSans',
    },

    categoryActive: {
        marginLeft: 3,
        marginRight: 3,
        padding: 10,
        borderWidth: 1,
        borderColor: '#FB444B',
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    categoryTextActive: {
        color: '#FB444B',
    }
})
export const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        // saving error
    }
}
export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}
