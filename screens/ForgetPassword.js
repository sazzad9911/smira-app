import React from 'react';
import { View, Text, Image, ScrollView, Button, TouchableOpacity, Switch, TextInput, StyleSheet } from 'react-native'
import RedeemHistory from './RedeemHistory';
import { AntDesign } from '@expo/vector-icons';

const ForgetPassword = () => {
    const [text, onChangeText] = React.useState(null);
    const [Confirm, setConfirm] = React.useState(false);

    return (
        <ScrollView>
            {
                Confirm ? (
                    <ConfirmMessage />
                ) : (
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


            <TouchableOpacity onPress={() => props.setConfirm(true)}>
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
            <ScrollView>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 100,
                }}>
                    <AntDesign name="checkcircle" size={100} color="red" />
                    <Text style={{
                        fontSize: 30,
                        fontWeight: "bold",
                        marginTop: 20
                    }}>Check your mail</Text>
                    <Text style={{
                        fontSize: 20,
                        color: 'rgb(100,100,100)',
                    }}>We have sent a password recover</Text>
                    <Text style={{
                        fontSize: 20,
                        color: 'rgb(100,100,100)',
                    }}>instructions to your email.</Text>
                </View>

                <View style={{
                    marginTop: 180,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                        <Text style={{
                            fontSize:20,
                        }}>Did not receive the email?</Text>
                        <Text style={{
                            fontSize:20,
                            color:'red',
                        }}>Check your spam folder.</Text>
                </View>
            </ScrollView>

        </View>
    )
}