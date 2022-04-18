import React from 'react';
import { Ionicons, Entypo } from '@expo/vector-icons';
import Cards from '../components/Cards'
import { View, Text, StyleSheet, Dimensions, ScrollView, Platform, ActivityIndicator } from 'react-native'
import picture from '../assets/tub.png'
import DealCart from '../components/DealCart'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { postData, url } from '../action';

const CategorySingle = (props) => {
    const title = props.route.params.title;
    const [DealData, setDealData] = React.useState(null)
    const [Hotels, setHotels] = React.useState(null)
    const navigation = props.navigation
    //console.log(title)
    React.useEffect(() => {
        postData(url + "/getData", {
            tableName: 'deals',
            orderColumn: 'popularity'
        }).then(data => {
            if (Array.isArray(data)) {
                return setDealData(data)
            }
            console.log('CategorySingle.js->' + data.message)
        })
    }, [])
    React.useEffect(() => {
        postData(url + "/getData", {
            tableName: 'hotels',
            orderColumn: 'popularity'
        }).then(data => {
            if (Array.isArray(data)) {
                return setHotels(data)
            }
            console.log('CategorySingle.js->' + data.message)
        })
    }, [])
    if (title == 'Popular Hotel') {
        return (
            <View style={styles.body}>

                <View style={{
                    flexDirection: 'row',
                    marginTop: Platform.OS == 'ios' ? 50 : 5,
                    alignItems: 'center'
                }}>
                    <View style={{
                        width: Dimensions.get('screen').width - 60
                    }}>
                        <Text style={{
                            color: 'black',
                            fontSize: 24,
                            fontWeight: '800'
                        }}> {title}</Text>
                    </View>

                    <TouchableOpacity onPress={props.navigation.goBack}>
                        <Entypo name="cross" size={40} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <Ionicons name="md-checkmark-done-circle-outline" size={20} color='rgba(100, 182, 87, 1)' />
                    <Text style={{
                        fontSize: 14,
                        color: '#000000',
                        fontWeight: '500',
                    }}>
                        Free for Members
                    </Text>
                </View>
                <ScrollView>
                    <View >
                        {
                            Hotels ? (
                                Hotels.map(doc => (
                                    <Cards key={doc.id} doc={doc} navigation={navigation}
                                        img={{ uri: doc.image }} title={doc.name}
                                        address={doc.address} rating={doc.ratings} />
                                ))
                            ) : (
                                <ActivityIndicator size="large" color="#FA454B" />
                            )
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
    else if (title == 'Restaurant' || title == 'Deals Near You') {
        return (
            <View style={styles.body}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: Platform.OS == 'ios' ? 50 : 5,
                    alignItems: 'center'
                }}>
                    <View style={{
                        width: Dimensions.get('screen').width - 60
                    }}>
                        <Text style={{
                            color: 'black',
                            fontSize: 24,
                            fontWeight: '800'
                        }}> {title}</Text>
                    </View>

                    <TouchableOpacity onPress={props.navigation.goBack}>
                        <Entypo name="cross" size={40} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <Ionicons name="md-checkmark-done-circle-outline" size={20} color='rgba(100, 182, 87, 1)' />
                    <Text style={{
                        fontSize: 14,
                        color: '#000000',
                        fontWeight: '500',
                    }}>
                        Free for Members
                    </Text>
                </View>
                <ScrollView>
                    <View >
                        {
                            DealData ? (
                                DealData.map(doc => (
                                    <DealCart data={doc} key={doc.id} headLine={doc.name}
                                        category={doc.brand} img={doc.image} navigation={navigation}
                                    />
                                ))
                            ) : (
                                <ActivityIndicator size="large" color="#FA454B" />
                            )
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
    else {
        return (
            <View></View>
        );
    };
};

export default CategorySingle;

const styles = StyleSheet.create({
    body: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,

    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 30
    }
})