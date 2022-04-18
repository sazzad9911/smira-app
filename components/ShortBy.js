import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons';
import {setShortBy} from '../action'
import { useDispatch, useSelector } from 'react-redux';

const ShortBy = () => {
    const [Check, setCheck] = React.useState('')
    const dispatch = useDispatch()
    
    return (
        <ScrollView>
            <View style={{
                width: 350,
                marginTop: 30,
                marginLeft: 50,
                flexDirection: 'row',
            }}>
                <Text style={{
                    fontSize: 20,
                    flex: 5,
                }}>Sort By</Text>
                <TouchableOpacity onPress={() => {
                    dispatch(setShortBy(null))
                }} style={{
                    margin:5
                }}>
                    <Text style={{
                        fontSize: 15,
                        flex: 1,
                        color: 'rgb(100,100,100)',
                    }}>Clear All</Text>
                </TouchableOpacity>
            </View>

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
                    dispatch(setShortBy('discount'))
                }}
                title='Discount'
            />


        </ScrollView>
    );
};

export default ShortBy;
const List = (props) => {
    const recentSearch=useSelector(state => state.recentSearch)
    return (
        <TouchableOpacity onPress={() => {
            props.onChange(props.title)
        }} style={{ flexDirection: 'row', marginVertical: 15, marginTop: 20 }}>
            <View style={{ flex: 5 }}>
                <Text style={{ fontSize: 18, color: props.title.toLowerCase() == recentSearch.shortBy ? 'red' : 'black', marginLeft: 50 }}>{props.title}</Text>
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