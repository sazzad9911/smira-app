import React from 'react';
import { View, ScrollView, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const ConfirmMessage = () => {
    return (
        <View>
            <ScrollView>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 100,
                }}>
                    <AntDesign name="checkcircle" size={100} color="red" />
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '700',
                        marginTop: 20
                    }}>Congratulations!</Text>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '500',
                        color: 'rgb(100,100,100)',
                    }}>You have successfully booked.</Text>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '500',
                        color: 'rgb(100,100,100)',
                    }}>Please check for confirmation email.</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default ConfirmMessage;