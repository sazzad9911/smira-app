import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

const Language = () => {
    const [Check,setCheck]=React.useState('')
    return (
        <View>
            <List value={Check}
                onChange={(val)=>setCheck(val)}
                title='English (Default)'
            />
            <List value={Check}
                onChange={(val)=>setCheck(val)}
                title='Hindi'
            />
            <List value={Check}
                onChange={(val)=>setCheck(val)}
                title='Marathi'
            />
        </View>
        
    );
};

export default Language;
const List = (props) => {
    return (
        <TouchableOpacity onPress={()=>{
            props.onChange(props.title)
        }} style={{ flexDirection: 'row',marginVertical:15 }}>
            <View style={{ flex: 5 }}>
                <Text style={{ fontSize: 25, color: props.title==props.value?'red':'black', marginLeft: 50 }}>{props.title}</Text>
            </View>
            <View style={{ flex: 1 }}>
                {
                    props.title==props.value?
                    (
                        <Feather name="check" size={30} color="red" />
                    ):(
                        <View></View>
                    )
                }
            </View>
        </TouchableOpacity>
    )
}