import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { useSelector, useDispatch} from 'react-redux';
import { setLanguage } from './../action';

const Language = (props) => {
    const [Check, setCheck] = React.useState('English (Default)')
    const pageSettings= useSelector(state => state.pageSettings)
    const navigation = props.navigation
    const dispatch = useDispatch()
    //console.log(pageSettings)
    return (
        <ScrollView style={{backgroundColor: 'white',height: '100%'}}>
            <List value={pageSettings.language}
                onChange={(val) => dispatch(setLanguage('English (Default)'))}
                title='English (Default)'
            />
            <List value={pageSettings.language}
                onChange={(val) => dispatch(setLanguage('Hindi'))}
                title='Hindi'
            />
            <List value={pageSettings.language}
                onChange={(val) => dispatch(setLanguage('Marathi'))}
                title='Marathi'
            />
            <TouchableOpacity onPress={()=>{
                navigation.goBack();
            }} style={{
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