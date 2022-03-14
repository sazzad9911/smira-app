import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import testImage from '../assets/favicon.png';
import tub from '../assets/tub.png';
import { Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'

const WishList = () => {
    return (
        <ScrollView>
            <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <TouchableOpacity>
                        <Ionicons name='chevron-back-sharp' size={24} style={{ color: 'rgb(100,100,100)' }} />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', fontSize: 17, marginLeft: 10 }}>Wishlist</Text>
                </View>
                <TouchableOpacity>
                    <SimpleLineIcons name='trash' size={24} style={{ color: 'rgb(200,200,200)', margin: 10 }} />
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true}>
                <View style={{ width: 20 }}></View>
                <TouchableOpacity style={[styles.category, styles.categoryActive]}>
                    <Text style={[styles.categoryText, styles.categoryTextActive]}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.category]}>
                    <Text style={[styles.categoryText]}>Hotels</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.category]}>
                    <Text style={[styles.categoryText]}>Deals</Text>
                </TouchableOpacity>
            </ScrollView>
            <View style={{ marginTop: 15 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 20 }}>Your Deals</Text>
                <ScrollView horizontal={true} >
                    <View style={{ width: 10 }}></View>
                    <View style={{
                        height: 130, width: 200, backgroundColor: 'white', borderRadius: 10,
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
                        <View style={{ height: 70, width: 200, backgroundColor: 'red', borderRadius: 10 }}>

                        </View>
                        <View style={{ height: 60, width: 200, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image source={testImage} style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: 'red' }} />
                            <Text style={{ width: 100, fontWeight: 'bold' }}>Flat 35% OFF On All Orders</Text>
                        </View>
                    </View>
                    <View style={{
                        height: 130, width: 200, backgroundColor: 'white', borderRadius: 10,
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
                        <View style={{ height: 70, width: 200, backgroundColor: 'red', borderRadius: 10 }}>

                        </View>
                        <View style={{ height: 60, width: 200, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image source={testImage} style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: 'red' }} />
                            <Text style={{ width: 100, fontWeight: 'bold' }}>Flat 35% OFF On All Orders</Text>
                        </View>
                    </View>
                    <View style={{
                        height: 130, width: 200, backgroundColor: 'white', borderRadius: 10,
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
                        <View style={{ height: 70, width: 200, backgroundColor: 'red', borderRadius: 10 }}>

                        </View>
                        <View style={{ height: 60, width: 200, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image source={testImage} style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: 'red' }} />
                            <Text style={{ width: 100, fontWeight: 'bold' }}>Flat 35% OFF On All Orders</Text>
                        </View>
                    </View>
                </ScrollView>
                <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 20 }}>Your Hotels</Text>
                <View>
                    <View style={{ alignItems: 'center', paddingLeft: 10, paddingRight: 10, marginBottom: 10 }}>
                        <ImageBackground source={tub} imageStyle={{ borderRadius: 10 }} style={{ width: '100%', height: 170, borderRadius: 10, justifyContent: 'space-between', alignItems: 'flex-end' }} >

                            <MaterialCommunityIcons name='heart' size={24} style={{ color: 'red', margin: 15 }} />
                            <View style={{
                                flexDirection: 'row', alignItems: 'center', backgroundColor: '#64B657', padding: 10,
                                justifyContent: 'space-between', borderRadius: 20, width: 70, margin: 10
                            }}>
                                <MaterialCommunityIcons size={20} style={{ color: 'white' }} name="star" />
                                <Text style={{ color: 'white', marginLeft: 5 }}>4.3</Text>
                            </View>

                        </ImageBackground>

                        <View style={{ width: '93%', padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View>
                                <Text style={{ fontWeight: '600', fontSize: 17 }}>On the Go</Text>
                                <Text style={{ fontWeight: '400', fontSize: 15, color: 'gray', marginTop: 5 }}>Alibaug, Maharashtra</Text>
                            </View>
                            <TouchableOpacity style={{ backgroundColor: 'rgb(220,220,220)', height: 40, width: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                                <MaterialIcons name='navigate-next' size={22} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', paddingLeft: 10, paddingRight: 10, marginBottom: 10 }}>
                        <ImageBackground source={tub} imageStyle={{ borderRadius: 10 }} style={{ width: '100%', height: 170, borderRadius: 10, justifyContent: 'space-between', alignItems: 'flex-end' }} >

                            <MaterialCommunityIcons name='heart' size={24} style={{ color: 'red', margin: 15 }} />
                            <View style={{
                                flexDirection: 'row', alignItems: 'center', backgroundColor: '#64B657', padding: 10,
                                justifyContent: 'space-between', borderRadius: 20, width: 70, margin: 10
                            }}>
                                <MaterialCommunityIcons size={20} style={{ color: 'white' }} name="star" />
                                <Text style={{ color: 'white', marginLeft: 5 }}>4.3</Text>
                            </View>

                        </ImageBackground>

                        <View style={{ width: '93%', padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View>
                                <Text style={{ fontWeight: '600', fontSize: 17 }}>On the Go</Text>
                                <Text style={{ fontWeight: '400', fontSize: 15, color: 'gray', marginTop: 5 }}>Alibaug, Maharashtra</Text>
                            </View>
                            <TouchableOpacity style={{ backgroundColor: 'rgb(220,220,220)', height: 40, width: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                                <MaterialIcons name='navigate-next' size={22} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', paddingLeft: 10, paddingRight: 10, marginBottom: 10 }}>
                        <ImageBackground source={tub} imageStyle={{ borderRadius: 10 }} style={{ width: '100%', height: 170, borderRadius: 10, justifyContent: 'space-between', alignItems: 'flex-end' }} >

                            <MaterialCommunityIcons name='heart' size={24} style={{ color: 'red', margin: 15 }} />
                            <View style={{
                                flexDirection: 'row', alignItems: 'center', backgroundColor: '#64B657', padding: 10,
                                justifyContent: 'space-between', borderRadius: 20, width: 70, margin: 10
                            }}>
                                <MaterialCommunityIcons size={20} style={{ color: 'white' }} name="star" />
                                <Text style={{ color: 'white', marginLeft: 5 }}>4.3</Text>
                            </View>

                        </ImageBackground>

                        <View style={{ width: '93%', padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View>
                                <Text style={{ fontWeight: '600', fontSize: 17 }}>On the Go</Text>
                                <Text style={{ fontWeight: '400', fontSize: 15, color: 'gray', marginTop: 5 }}>Alibaug, Maharashtra</Text>
                            </View>
                            <TouchableOpacity style={{ backgroundColor: 'rgb(220,220,220)', height: 40, width: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                                <MaterialIcons name='navigate-next' size={22} />
                            </TouchableOpacity>
                        </View>
                    </View>





                </View>
            </View>
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