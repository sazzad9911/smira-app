import React from 'react';
import { View, Text, Image, ScrollView, Button, TouchableOpacity, Switch, TextInput, StyleSheet } from 'react-native'
import RedeemHistory from './RedeemHistory';

const ForgetPassword = () => {
    const [text, onChangeText] = React.useState(null);

    return (
        <ScrollView>
            <View style={styles.text}>
                <Text style={{ fontSize: 20 }}>Enter the email associated with your account{'\n'}
                    and we'll send an email with instructions to {'\n'}
                    reset your password</Text>
            </View>
            <View >
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Your email address"
                />
            </View>


            <View style={styles.cartText}>
            <Cart title='Email address does not exist.'></Cart>
            </View>


            <TouchableOpacity>
                <View style={styles.view}>
                    <Text style={styles.viewtext}>SEND INSTRUCTIONS</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 30,
        marginTop: 50,
        backgroundColor: '#ECE6E6'
    },
    text: {
        marginTop: 50,
        marginLeft: 20,
    },

    view: {
        height: 50,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 30,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewtext: {
        color: 'red',
        fontSize: 20,
    },
    cartText:{
        marginLeft:30,
    }

});
export default ForgetPassword;

const Cart = (props) => {

    return (
        <Text style={{
            fontSize: 15,
            color: 'red',
        }}>{props.title}</Text>
    )
}