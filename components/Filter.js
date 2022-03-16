import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity,ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const window = Dimensions.get('window')

const Filter = () => {
    return (
        <View style={{
            width: window.width - 30,
            margin: 15,
            justifyContent: 'center',
        }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
                <Text style={styles.text}>Filter</Text>
                <Text style={{ color: 'red' }}>Clerar All</Text>
            </View>
            <Text style={styles.headline}>Ratings</Text>
            <ScrollView horizontal={true}>
                <Ratings color='green' title='2-4' />
                <Ratings color='red' title='2-4' />
            </ScrollView>
            <Text style={styles.headline}>Categories</Text>
            <ScrollView horizontal={true}>
                <Category title='Deluxe'/>
                <Category title='Villas'/>
            </ScrollView>
            <TouchableOpacity style={styles.button}>
                <Text style={[styles.headline, { color: '#ffff' }]}>APPLY</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Filter;
const Ratings = (props) => {
    return (
        <TouchableOpacity style={{
            borderWidth: 1,
            borderRadius: 20,
            width: 100,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            margin:5
        }}>
            <AntDesign name="star" size={18} color={props.color} />
            <Text style={{marginLeft:5}}>{props.title}</Text>
        </TouchableOpacity>
    )
}
const Category = (props) => {
    return (
        <TouchableOpacity style={{
            borderWidth: 1,
            borderRadius: 20,
            width: 100,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            margin:5
        }}>
            <Text style={{marginLeft:5}}>{props.title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: '800',
        margin: 5,
    },
    headline: {
        fontSize: 16,
        margin: 5
    },
    button: {
        backgroundColor: '#FC444B',
        width: window.width - 30,
        height: 50,
        borderRadius: 30,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffff'
    }
})