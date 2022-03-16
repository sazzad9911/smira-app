import React from 'react';
import { Ionicons, Entypo } from '@expo/vector-icons';
import Cards from '../components/Cards'
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import picture from '../assets/tub.png'
import DealCart from '../components/DealCart'
import { TouchableOpacity } from 'react-native-gesture-handler';

const CategorySingle = (props) => {
    const title = props.route.params.title;
    //console.log(title)

    if (title == 'Popular Hotel') {
        return (
            <View style={styles.body}>

                <View style={{
                    marginTop: 50,
                    marginLeft: 360
                }}>
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
                        <Cards navigation={props.navigation} img={picture} title="On the go"
                            address="Alibaug, Maharashtra" />
                        <Cards navigation={props.navigation} img={picture} title="On the go"
                            address="Alibaug, Maharashtra" />
                    </View>
                </ScrollView>
            </View>
        );
    }
    else if (title == 'Restuarant') {
        return (
            <View style={styles.body}>
                <View style={{
                    marginTop: 50,
                    marginLeft: 360
                }}>
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
                        <DealCart headLine='Flat 35% OFF On All Order'
                            category='Ovenstory' img='https://www.daily-sun.com/assets/news_images/2019/09/23/Dailysun-2019-04-22-14.jpg'
                        />
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
        marginLeft: 30,
        marginTop: 10,
        marginBottom: 30
    }
})