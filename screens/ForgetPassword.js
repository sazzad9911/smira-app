import React from 'react';
import { View, Text, Image, ScrollView, Button, TouchableOpacity, Switch, TextInput, StyleSheet } from 'react-native'
import RedeemHistory from './RedeemHistory';
import { AntDesign } from '@expo/vector-icons';

const ForgetPassword = (props) => {
    const [text, onChangeText] = React.useState(null);
    const [Confirm, setConfirm] = React.useState(false);

    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            {
                Confirm ? (
                    <ConfirmMessage navigation={props.navigation} />
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
        padding: 10,
        borderRadius: 30,
        marginTop: 50,
        backgroundColor: '#F5F5F5',
        paddingHorizontal:20,
        fontFamily: 'PlusJakartaSans',
    },
    text: {
        marginTop: 50,
        marginLeft: 20,
        fontFamily: 'PlusJakartaSans',
    },

    view: {
        height: 50,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: '#FC444B',
        borderRadius: 30,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewtext: {
        color: '#FC444B',
        fontSize: 14,
        fontFamily: 'PlusJakartaSans',
    },
    cartText: {
        marginLeft: 30,
    }

});
export default ForgetPassword;
const GetInstruction = (props) => {
    const [focus,setFocus] = React.useState(false)
    return (
        <View>
            <View style={styles.text}>
                <Text style={{ fontSize: 14,fontFamily: 'PlusJakartaSans', color:'#585858' }}>Enter the email associated with your account{'\n'}
                    and we'll send an email with instructions to {'\n'}
                    reset your password.</Text>
            </View>
            <View >
                <TextInput
                    style={[styles.input,{
                        borderColor: '#D8D8D8',
                        borderWidth:focus?1:0,
                    }]}
                    onChangeText={(val)=>{
                        props.onChange(val);
                    }}
                    onEndEditing={()=>{
                        setFocus(false);
                    }}
                    onFocus={()=>{
                        setFocus(true);
                    }}
                    value={props.value}
                    placeholder="Your email address"
                />
            </View>

            <View style={styles.cartText}>
                <Text style={{
                    fontSize: 15,
                    color: '#FC444B',
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

const ConfirmMessage = ({ navigation }) => {
    return (
        <View>
            <ScrollView>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 100,
                }}>
                    <AntDesign name="checkcircle" size={100} color="#FC444B" />
                    <Text style={{
                        fontSize: 30,
                        fontWeight: "bold",
                        marginTop: 20
                    }}>Check your mail</Text>
                    <Text style={{
                        fontSize: 20,
                        color: '#585858',
                    }}>We have sent a password recover</Text>
                    <Text style={{
                        fontSize: 20,
                        color: '#585858',
                    }}>instructions to your email.</Text>
                </View>

                <View style={{
                    marginTop: '80%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 20,
                    }}>Did not receive the email?</Text>
                    <TouchableOpacity onPress={() =>navigation.navigate('Reset Password')}>
                        <Text style={{
                            fontSize: 20,
                            color: '#FC444B',
                        }}>Check your spam folder.</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    )
}