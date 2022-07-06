import React from 'react';
import {
    View, Text, Image, ScrollView, Button,
    TouchableOpacity, Switch, TextInput, StyleSheet, Dimensions, Linking, Platform, NativeModules
} from 'react-native'
import RedeemHistory from './RedeemHistory';
import { AntDesign } from '@expo/vector-icons';
const window = Dimensions.get('window')
import { SvgXml } from 'react-native-svg';
import { tick } from '../components/Icon'
import AnimatedLoader from "react-native-animated-loader";

const ForgetPassword = (props) => {
    const [text, onChangeText] = React.useState(null);
    const [Confirm, setConfirm] = React.useState(false);

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
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
        paddingHorizontal: 20,
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
        marginTop: 10,
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
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import app from '../firebase';
import { useDispatch } from 'react-redux';
import { setAnimatedLoader } from '../action';
const GetInstruction = (props) => {
    const [focus, setFocus] = React.useState(false)
    const [Email, setEmail] = React.useState(null)
    const [text, setText] = React.useState('')
    const auth = getAuth(app);
    const dispatch = useDispatch()
    const [visibility, setVisibility]= React.useState(false);

    const send = () => {
        if (!Email) {
            setText("!Invalid Email")
            return
        }
        setVisibility(true)
        sendPasswordResetEmail(auth, Email).then(() => {
            setVisibility(false)
            props.setConfirm(true)
        }).catch(err => {
            setVisibility(false)
            if (err.code == 'auth/user-not-found') {
                setText('Email address doesn’t exist.')
            } else {
                setText(err.code)
            }
        })
    }

    return (
        <View>
            <View style={styles.text}>
                <Text style={{
                    fontSize: 15,
                    fontFamily: 'PlusJakartaSans',
                    color: '#585858',
                    lineHeight: 20,
                }}>Enter the email associated with your account{'\n'}
                    and we'll send an email with instructions to {'\n'}
                    reset your password.</Text>
            </View>
            <View>
                <TextInput
                    style={[styles.input, {
                        borderColor: '#D8D8D8',
                        borderWidth: focus ? 1 : 0,
                    }]}
                    onChangeText={(val) => {
                        setEmail(val);
                    }}
                    onEndEditing={() => {
                        setFocus(false);
                    }}
                    onFocus={() => {
                        setFocus(true);
                    }}
                    value={Email}
                    placeholder="Your email address"
                />
            </View>

            <View style={styles.cartText}>
                <Text style={{
                    fontSize: 15,
                    color: '#FC444B',
                }}>{text}</Text>
            </View>


            <TouchableOpacity onPress={send}>
                <View style={[styles.view, { backgroundColor: Email ? '#FC444B' : 'white' }]}>
                    <Text style={[styles.viewtext,
                    { color: Email ? '#FFFF' : '#FC444B' }]}>SEND INSTRUCTIONS</Text>
                </View>
            </TouchableOpacity>
            <AnimatedLoader
                    visible={visibility}
                    overlayColor="rgba(255,255,255,0.75)"
                    source={require("../assets/Loading.json")}
                    animationStyle={{
                        width: 100,
                        height: 100
                    }}
                    speed={1}
                >
                    <Text>Loading...</Text>
            </AnimatedLoader>
        </View>
    )
}

const ConfirmMessage = ({ navigation }) => {
    const openMail = () => {
        if (Platform.OS === 'android') {

            return;
        }
        Linking.openURL('message:0'); // iOS
        return;
    }
    return (
        <View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '60%',
            }}>
                <SvgXml xml={tick} height="70" width="70" />
                <Text style={{
                    fontSize: 20,
                    marginTop: 20,
                    fontFamily: 'PlusJakartaSansBold'
                }}>Check your mail</Text>
                <Text style={{
                    fontSize: 14,
                    color: '#585858',
                    fontFamily: 'PlusJakartaSans',
                    marginTop: 10
                }}>We have sent a password recover</Text>
                <Text style={{
                    fontSize: 14,
                    color: '#585858',
                    fontFamily: 'PlusJakartaSans'
                }}>instructions to your email.</Text>
            </View>

            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '80%',
            }}>
                <Text style={{
                    fontSize: 13,
                    fontFamily: 'PlusJakartaSans'
                }}>Did not receive the email?</Text>
                <TouchableOpacity onPress={openMail}>
                    <Text style={{
                        fontSize: 13,
                        color: '#FC444B',
                        fontFamily: 'PlusJakartaSans',
                        marginTop: 0
                    }}>Check your spam folder.</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}