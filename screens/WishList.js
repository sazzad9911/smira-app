import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import testImage from '../assets/favicon.png';
import tub from '../assets/tub.png';
import { Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'
import Cards from '../components/Cards'

const WishList = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
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
                    <Deals title="Flat 35% OFF On All Orders" />
                    <Deals title="Flat 35% OFF On All Orders" />
                    <Deals title="Flat 35% OFF On All Orders" />
                    <Deals title="Flat 35% OFF On All Orders" />
                </ScrollView>
                <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 20 }}>Your Hotels</Text>
                <View>
                    {
                        //repeat the image card here -------------
                    }
                    <Cards img={tub} title="On the go" address="Alibaug, Maharashtra" />
                    <Cards img={tub} title="On the go" address="Alibaug, Maharashtra" />
                    <Cards img={tub} title="On the go" address="Alibaug, Maharashtra" />
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
const Deals = (props) => {
    return (
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
                <Text style={{ width: 100, fontWeight: 'bold' }}>{props.title}</Text>
            </View>
        </View>
    )
}
