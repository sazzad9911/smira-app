import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons';

const ShortBy = () => {
    const [Check, setCheck] = React.useState('')
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
                    flex:5,
                }}>Sort By</Text>
                <Text style={{
                    fontSize: 15,
                    flex:1,
                    color: 'rgb(100,100,100)',
                }}>Clear All</Text>
            </View>

            <List value={Check}
                onChange={(val) => setCheck(val)}
                title='Popularity'
            />
            <List value={Check}
                onChange={(val) => setCheck(val)}
                title='Discounts'
            />


        </ScrollView>
    );
};

export default ShortBy;
const List = (props) => {
    return (
        <TouchableOpacity onPress={() => {
            props.onChange(props.title)
        }} style={{ flexDirection: 'row', marginVertical: 15,marginTop:20 }}>
            <View style={{ flex: 5 }}>
                <Text style={{ fontSize: 20, color: props.title == props.value ? 'red' : 'black', marginLeft: 50 }}>{props.title}</Text>
            </View>
            <View style={{ flex: 1 }}>
                {
                    props.title == props.value ?
                        (
                            <View style={{
                                height:20,
                                width:20,
                                borderRadius:10,
                                backgroundColor:'red'
                                
                            }} />
                        ) : (
                            <View></View>
                        )
                }
            </View>
        </TouchableOpacity>
    )
}