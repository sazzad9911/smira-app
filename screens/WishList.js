import {
    Image, ImageBackground, ScrollView, StyleSheet, Text,
    TouchableOpacity, View, Platform, StatusBar
} from 'react-native'
import React from 'react'
import testImage from '../assets/favicon.png';
import tub from '../assets/tub.png';
import { Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'
import Cards from '../components/Cards'
import SmallDealCart from '../components/SmallDealCart';

const WishList = ({ navigation }) => {
    return (
        <ScrollView>
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
                    {
                        //repeat the deals slide here --------------
                    }
                    <SmallDealCart icon='https://www.kindpng.com/picc/m/310-3105450_special-offer-banner-png-transparent-png.png'
                        img='https://www.daily-sun.com/assets/news_images/2019/09/23/Dailysun-2019-04-22-14.jpg'
                        title='Flat 25% OFF on all orders'
                    />
                    <SmallDealCart icon='https://www.kindpng.com/picc/m/310-3105450_special-offer-banner-png-transparent-png.png'
                        img='https://www.daily-sun.com/assets/news_images/2019/09/23/Dailysun-2019-04-22-14.jpg'
                        title='Flat 25% OFF on all orders'
                    />
                    <SmallDealCart icon='https://www.kindpng.com/picc/m/310-3105450_special-offer-banner-png-transparent-png.png'
                        img='https://www.daily-sun.com/assets/news_images/2019/09/23/Dailysun-2019-04-22-14.jpg'
                        title='Flat 25% OFF on all orders'
                    />
                </ScrollView>
                <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 20 }}>Your Hotels</Text>
                <View>
                    {
                        //repeat the image card here -------------
                    }
                    <Cards navigation={navigation} img={tub} title="On the go"
                        address="Alibaug, Maharashtra" />
                    <Cards navigation={navigation} img={tub} title="On the go"
                        address="Alibaug, Maharashtra" />
                    <Cards navigation={navigation} img={tub} title="On the go"
                        address="Alibaug, Maharashtra" />
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
