import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { setShortBy } from '../action'
import { useDispatch, useSelector } from 'react-redux';

const ShortBy = () => {
    const [Check, setCheck] = React.useState('')
    const dispatch = useDispatch()
    const loader = useSelector(state => state.loader)
    const recentSearch= useSelector(state => state.recentSearch)

    return (
        <ScrollView>
            <View style={{
                marginTop: 30,
                marginLeft: 50,
                flexDirection: 'row',
            }}>
                <Text style={{
                    fontSize: 20,
                    flex: 5,
                    fontFamily: 'PlusJakartaSansBold'
                }}>Sort By</Text>
                <TouchableOpacity onPress={() => {
                    dispatch(setShortBy(null))
                }} style={{
                    margin: 5,
                    marginRight:50
                }}>
                    <Text style={{
                        fontSize: 15,
                        flex: 1,
                        color: 'red',
                        fontFamily: 'PlusJakartaSans'
                    }}>Clear All</Text>
                </TouchableOpacity>
            </View>
            {
                loader == 'SearchHotel' ? (
                    <View>
                        <List value={Check}
                            onChange={(val) => {
                                //setCheck(val)
                                dispatch(setShortBy('popularity'));
                            }}
                            title='Popularity'
                        />
                        <List value={Check}
                            onChange={(val) => {
                                //setCheck(val)
                                dispatch(setShortBy('ratings'));
                            }}
                            title='Ratings'
                        />
                        <List value={Check}
                            onChange={(val) => {
                                //setCheck(val)
                                dispatch(setShortBy('more amenities'));
                            }}
                            title='More Amenities'
                        />
                    </View>
                ) : loader == 'SearchDeal' ? (
                    <View>
                        <List value={Check}
                            onChange={(val) => {
                                //setCheck(val)
                                dispatch(setShortBy('popularity'))
                            }}
                            title='Popularity'
                        />
                        <List value={Check}
                            onChange={(val) => {
                                //setCheck(val)
                                dispatch(setShortBy('discount'))
                            }}
                            title='Discount'
                        />
                    </View>
                ) : loader == 'Salon' ? (
                    <View>
                        <List value={Check}
                            onChange={(val) => {
                                //setCheck(val)
                                dispatch(setShortBy('near me'))
                            }}
                            title='Near me'
                        />
                        <List value={Check}
                            onChange={(val) => {
                                //setCheck(val)
                                dispatch(setShortBy('discount'))
                            }}
                            title='Discount'
                        />
                    </View>
                ) : (
                    <View>
                        <List value={Check}
                            onChange={(val) => {
                                //setCheck(val)
                                dispatch(setShortBy('popularity'));
                            }}
                            title='Popularity'
                        />
                        <List value={Check}
                            onChange={(val) => {
                                //setCheck(val)
                                dispatch(setShortBy('ratings'));
                            }}
                            title='Ratings'
                        />
                        <List value={Check}
                            onChange={(val) => {
                                //setCheck(val)
                                dispatch(setShortBy('more amenities'));
                            }}
                            title='More Amenities'
                        />
                    </View>
                )
            }
            <View style={{ height: 20 }} />

        </ScrollView>
    );
};

export default ShortBy;
const List = (props) => {
    const recentSearch = useSelector(state => state.recentSearch)
    return (
        <TouchableOpacity onPress={() => {
            props.onChange(props.title)
        }} style={{ flexDirection: 'row', marginVertical: 5, marginTop: 20 }}>
            <View style={{ flex: 5 }}>
                <Text style={{
                    fontSize: 18, fontFamily: 'PlusJakartaSans',
                    color: props.title.toLowerCase() == recentSearch.shortBy ? 'red' : '#808080', marginLeft: 50
                }}>{props.title}</Text>
            </View>
            <View style={{ flex: 1 }}>
                {
                    props.title.toLowerCase() == recentSearch.shortBy ?
                        (
                            <View style={{
                                height: 15,
                                width: 15,
                                borderRadius: 10,
                                backgroundColor: 'red'
                            }} />
                        ) : (
                            <View></View>
                        )
                }
            </View>
        </TouchableOpacity>
    )
}