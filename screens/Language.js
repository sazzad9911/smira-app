import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

const Language = () => {
    const [Check, setCheck] = React.useState('English (Default)')
    return (
        <ScrollView style={{backgroundColor: 'white',height: '100%'}}>
            <List value={Check}
                onChange={(val) => setCheck(val)}
                title='English (Default)'
            />
            <List value={Check}
                onChange={(val) => setCheck(val)}
                title='Hindi'
            />
            <List value={Check}
                onChange={(val) => setCheck(val)}
                title='Marathi'
            />
            <TouchableOpacity style={{
               marginTop:'135%'
            }}>
                <View style={{
                    height: 50,
                    margin: 20,
                    padding: 10,
                    borderWidth: 1,
                    borderColor: '#FC444B',
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        color: '#FC444B',
                        fontSize: 13,
                        fontFamily: 'PlusJakartaSans'
                    }}>OKAY</Text>
                </View>
            </TouchableOpacity>
            </ScrollView>

    );
};

export default Language;
const List = (props) => {
    return (
        <TouchableOpacity onPress={() => {
            props.onChange(props.title)
        }} style={{ flexDirection: 'row', marginVertical: 15 }}>
            <View style={{ flex: 5 }}>
                <Text style={{ fontSize: 14,fontFamily: 'PlusJakartaSans', color: props.title == props.value ? '#FC444B' : '#585858', marginLeft: 50 }}>{props.title}</Text>
            </View>
            <View style={{ flex: 1 }}>
                {
                    props.title == props.value ?
                        (
                            <Feather name="check" size={15} color="#FC444B" />
                        ) : (
                            <View></View>
                        )
                }
            </View>
        </TouchableOpacity>
    )
}