import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { setRating, setCategory, setBrand } from '../action';
import { useDispatch, useSelector } from 'react-redux';

const window = Dimensions.get('window')

const Filter = (props) => {
    const dispatch = useDispatch()
    const route = useSelector(state => state.loader);
    const brands = useSelector(state => state.brands);

    return (
        <View style={{
            width: window.width - 30,
            margin: 15,
            justifyContent: 'center',
        }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
                <Text style={styles.text}>Filter</Text>
                <TouchableOpacity onPress={() => {
                    dispatch(setRating(null))
                    dispatch(setCategory(null))
                    dispatch(setBrand(null))
                }}>
                    <Text style={{ color: 'red' }}>Clerar All</Text>
                </TouchableOpacity>

            </View>
            {
                route == 'SearchHotel' ? (
                    <>
                        <Text style={styles.headline}>Ratings</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            <Ratings color='green' title='5-4' />
                            <Ratings color='blue' title='4-3' />
                            <Ratings color='yellow' title='3-2' />
                            <Ratings color='red' title='2-1' />
                        </View>
                        <Text style={styles.headline}>Categories</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            <Category title='Deluxe' />
                            <Category title='Villas' />
                            <Category title='Farm House' />
                        </View>
                    </>
                ) : (
                    <>
                        <Text style={styles.headline}>Brands</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {
                                brands ? (
                                    brands.map(b => (
                                        <Brands title={b.name} />
                                    ))
                                ) : (
                                    <View></View>
                                )
                            }
                        </View>
                    </>
                )
            }
            <TouchableOpacity onPress={() => {
                props.close(false)
            }} style={[styles.button,{
                marginTop:route == 'SearchHotel' ?'10%':'20%'
            }]}>
                <Text style={[styles.headline, { color: '#ffff' }]}>APPLY</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Filter;
const Ratings = (props) => {
    const ratings = useSelector(state => state.recentSearch.rating)
    const dispatch = useDispatch()

    return (
        <TouchableOpacity onPress={() => {
            dispatch(setRating(props.title[0]))
        }} style={{
            borderWidth: 1,
            borderRadius: 20,
            width: 100,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            margin: 5,
            backgroundColor: ratings == props.title[0] ? 'rgba(73, 246, 5, 0.269)' : '#ffff',
            borderColor:'#D8D8D8'
            
        }}>
            <AntDesign name="star" size={18} color={props.color} />
            <Text style={{ marginLeft: 5,fontFamily: 'PlusJakartaSans' }}>{props.title}</Text>
        </TouchableOpacity>
    )
}
const Category = (props) => {
    const category = useSelector(state => state.recentSearch.category)
    const dispatch = useDispatch()

    return (
        <TouchableOpacity onPress={() => {
            dispatch(setCategory(props.title));
        }} style={{
            borderWidth: 1,
            borderRadius: 20,
            width: 100,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            margin: 5,
            backgroundColor: category == props.title ? 'rgba(73, 246, 5, 0.269)' : '#ffff',
            borderColor:'#D8D8D8'
        }}>
            <Text style={{ marginLeft: 5,fontFamily: 'PlusJakartaSans' }}>{props.title}</Text>
        </TouchableOpacity>
    )
}
const Brands = (props) => {
    const brand = useSelector(state => state.recentSearch.brand)
    const dispatch = useDispatch()

    return (
        <TouchableOpacity onPress={() => {
            dispatch(setBrand(props.title));
        }} style={{
            borderWidth: 1,
            borderRadius: 20,
            width: 100,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            margin: 5,
            backgroundColor: brand == props.title ? 'rgba(73, 246, 5, 0.269)' : '#ffff'
        }}>
            <Text style={{ marginLeft: 5 }}>{props.title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: '800',
        margin: 5,
        fontFamily: 'PlusJakartaSansBold'
    },
    headline: {
        fontSize: 18,
        margin: 5,
        fontFamily: 'PlusJakartaSans'
    },
    button: {
        backgroundColor: '#FC444B',
        width: window.width - 30,
        height: 50,
        borderRadius: 30,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffff',
        marginTop: '10%'
    }
})