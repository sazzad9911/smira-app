import React from 'react';
import { View, Text, Image, ScrollView, Button, TouchableOpacity, Switch, TextInput, StyleSheet } from 'react-native'
import RedeemHistory from './RedeemHistory';

const ForgetPassword = () => {
    const [text, onChangeText] = React.useState(null);
    const [Confirm, setConfirm] = React.useState(false);

    return (
        <ScrollView>
        {
            Confirm? (
                <ConfirmMessage/>
            ):(
                <GetInstruction value={text} 
                onChange={onChangeText}
                    setConfirm={setConfirm}
                />
            )
        }
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
    cartText: {
        marginLeft: 30,
    }

});
export default ForgetPassword;
const GetInstruction = (props) => {
    return (
        <View>
            <View style={styles.text}>
                <Text style={{ fontSize: 20 }}>Enter the email associated with your account{'\n'}
                    and we'll send an email with instructions to {'\n'}
                    reset your password</Text>
            </View>
            <View >
                <TextInput
                    style={styles.input}
                    onChangeText={props.onChange}
                    value={props.value}
                    placeholder="Your email address"
                />
            </View>


            <View style={styles.cartText}>
                <Text style={{
                    fontSize: 15,
                    color: 'red',
                }}>Email address does not exist</Text>
            </View>


            <TouchableOpacity onPress={() =>props.setConfirm(true)}>
                <View style={styles.view}>
                    <Text style={styles.viewtext}>SEND INSTRUCTIONS</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const ConfirmMessage = () => {
    return (
        <View>
            <Text>Confirm Message</Text>
        </View>
    )
}