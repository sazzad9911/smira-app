import React from 'react';
import { View, ScrollView, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const ConfirmMessage = (props) => {
    const params = props.route.params;
    return (
        <View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                backgroundColor: 'white'
            }}>
                <AntDesign name="checkcircle" size={50} color="red" />
                <Text style={{
                    fontSize: 20,
                    fontWeight: '700',
                    marginTop: 20
                }}>Confirmation!</Text>
                <Text style={{
                    fontSize: 14,
                    fontWeight: '500',
                    color: 'rgb(100,100,100)',
                }}>{params && params.text1?params.text1:'Action successful.'}</Text>
                <Text style={{
                    fontSize: 14,
                    fontWeight: '500',
                    color: 'rgb(100,100,100)',
                }}>{params && params.text2?params.text2:'Please check for confirmation email.'}</Text>
            </View>
        </View>
    );
};

export default ConfirmMessage;