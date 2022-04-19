import React from 'react';
import {
    View, Modal, Text, ScrollView, Image,
    TouchableOpacity, TextInput, Dimensions, Platform, StyleSheet, Alert
} from 'react-native';
import Screen from '../assets/Screen.png'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import app from '../firebase'
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import {
    PhoneAuthProvider, signInWithCredential, getAuth,
    createUserWithEmailAndPassword, updateProfile, getRedirectResult, GoogleAuthProvider
} from 'firebase/auth';
import AnimatedLoader from "react-native-animated-loader";
import { postData, url } from '../action'
import CreateUser from './CreateUser';
import { SvgXml } from 'react-native-svg'
//import * as Google from 'expo-google-app-auth';
const auth = getAuth(app);
const window = Dimensions.get('window')

const SignUp = (props) => {
    const navigation = props.navigation
    const [modalVisible, setModalVisible] = React.useState(false);
    const [isOTP, setOTP] = React.useState(false);
    const auth = getAuth();
    const [visibility, setVisibility] = React.useState(false);

    const phone = `
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 0.153687C16.02 0.153687 20.5 4.63369 20.5 10.1537C20.5 15.6837 16.02 20.1537 10.5 20.1537C4.97 20.1537 0.5 15.6837 0.5 10.1537C0.5 4.63369 4.97 0.153687 10.5 0.153687ZM14.35 6.86369C14.46 6.51369 14.14 6.18369 13.79 6.29369L8.67 7.89369C8.46 7.96369 8.29 8.12369 8.23 8.33369L6.63 13.4637C6.52 13.8037 6.85 14.1337 7.19 14.0237L12.29 12.4237C12.5 12.3637 12.67 12.1937 12.73 11.9837L14.35 6.86369Z" fill="#292929"/>
    </svg>  
    `;

    return (
        <ScrollView>
            <View style={{
                marginTop: Platform.OS == 'ios' ? 40 : 0,
            }}>
                <View>
                    <Image
                        style={{
                            height: 450,
                            width: window.width,
                        }}
                        source={Screen}
                    />
                </View>
                <View>
                    <TouchableOpacity onPress={() => {
                        setOTP(true);
                        setModalVisible(true)
                    }} style={{
                        height: 60,
                        margin: 20,
                        marginTop: '10%',
                        padding: 10,
                        borderRadius: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        borderColor:'#E8E8E8',
                        borderWidth:2
                        
                    }}>

                        <FontAwesome name="phone-square" size={30} color="red" />
                        <Text style={{
                            color: 'black',
                            fontSize: 18,
                            marginLeft: 20
                        }}>SignUp with OTP</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setOTP(false);
                        setModalVisible(true)
                    }} style={{
                        height: 60,
                        margin: 20,
                        borderRadius: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        borderColor:'#E8E8E8',
                        borderWidth:2
                    }}>
                        <MaterialIcons name="email" size={30} color="red" />
                        <Text style={{
                            color: 'black',
                            fontSize: 18,
                            marginLeft: 20
                        }}>SignUp with Email</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {

                    }} style={{
                        height: 60,
                        margin: 20,
                        padding: 10,
                        borderRadius: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        color: 'rgb(100,100,100)',
                        borderColor:'#E8E8E8',
                        borderWidth:2
                    }}>

                        <Fontisto name="google" size={30} color="red" />
                        <Text style={{
                            color: 'black',
                            fontSize: 18,
                            marginLeft: 20
                        }}>SignUp with Google</Text>
                    </TouchableOpacity>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            fontSize: 20
                        }}>Already a Member?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text style={{
                                fontSize: 20,
                                color: 'red',
                            }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <Modal animationType="fade"
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}>
                    <View>
                        {
                            isOTP ?
                                (
                                    <SignUpWithOtp navigation={navigation} close={setModalVisible} />
                                ) : (
                                    <CreateUser navigation={navigation} close={setModalVisible} />
                                )
                        }
                    </View>
                </Modal>

            </View>
            <AnimatedLoader
                visible={visibility}
                overlayColor="rgba(255,255,255,0.75)"
                source={require("../assets/9997-infinity-loader.json")}
                animationStyle={styles.lottie}
                speed={1}
            >
                <Text>Loading...</Text>
            </AnimatedLoader>
        </ScrollView>
    );
};

export default SignUp;
const SignUpWithOtp = (props) => {
    const [next, setNext] = React.useState(false)
    const recaptchaVerifier = React.useRef(null);
    const [phoneNumber, setPhoneNumber] = React.useState();
    const [verificationId, setVerificationId] = React.useState();
    const [verificationCode, setVerificationCode] = React.useState();
    const [message, showMessage] = React.useState();
    const attemptInvisibleVerification = false;
    const [visibility, setVisibility] = React.useState(false);

    const navigation = props.navigation

    if (next) {
        return (
            <View style={{
                marginTop: 40,
            }}>
                <View style={{
                    marginTop: '15%',
                    marginLeft: '85%'
                }}>
                    <TouchableOpacity onPress={() => {
                        props.close(false)
                    }}>
                        <Fontisto name="close-a" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '20%',
                }}>
                    <Text style={{
                        fontSize: 35,
                    }}>SignUp with OTP</Text>
                    <Text style={{
                        fontSize: 15,
                        marginTop: 20,
                        color: '#A7A7A7'
                    }}>Register your new account</Text>
                </View>

                <View >
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>

                        <TextInput placeholder='6 digit verification code'
                            onChangeText={setVerificationCode}
                            keyboardType='numeric'
                            style={{
                                height: 60,
                                margin: 12,
                                padding: 10,
                                width: window.width - 50,
                                borderRadius: 50,
                                marginTop: 50,
                                backgroundColor: '#F5F5F5',
                                fontSize: 20,
                            }}
                        />
                    </View>


                    <TouchableOpacity onPress={
                        async () => {
                            if (!verificationCode) {
                                Alert.alert('Error', 'Type verificationCode first');
                                return;
                            }
                            setVisibility(true);
                            try {
                                const credential = PhoneAuthProvider.credential(
                                    verificationId,
                                    verificationCode
                                );
                                await signInWithCredential(auth, credential)
                                    .then(userCredential => {
                                        postData(url + '/setData', {
                                            auth: userCredential.user,
                                            tableName: 'user',
                                            columns: ['phone', 'uid'],
                                            values: [userCredential.user.phoneNumber, userCredential.user.uid]
                                        }).then(data => {
                                            Alert.alert('Success!', 'Sign Up completed successfully')
                                            setVisibility(false)
                                            navigation.navigate('Dashboard');
                                        })
                                    })
                            } catch (err) {
                                Alert.alert(err.code, err.message)
                                setVisibility(false)
                            }
                        }
                    } style={{
                        height: 60,
                        margin: 25,
                        padding: 10,
                        borderRadius: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        backgroundColor: '#FC444B',
                        width: window.width - 50
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 25,
                        }}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    } else {
        return (
            <View style={{
                marginTop: 40,
            }}>
                <FirebaseRecaptchaVerifierModal
                    ref={recaptchaVerifier}
                    firebaseConfig={app.options}
                // attemptInvisibleVerification
                />
                <View style={{
                    marginTop: '15%',
                    marginLeft: '85%'
                }}>
                    <TouchableOpacity onPress={() => props.close(false)}>
                        <Fontisto name="close-a" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '20%',
                }}>
                    <Text style={{
                        fontSize: 35,
                    }}>SignUp with OTP</Text>
                    <Text style={{
                        fontSize: 15,
                        marginTop: 20,
                        color: '#A7A7A7'
                    }}>Register your new account</Text>
                </View>

                <View >
                    <TextInput onChangeText={setPhoneNumber} keyboardType='numeric'
                        style={{
                            height: 60,
                            margin: 25,
                            padding: 10,
                            borderRadius: 50,
                            marginTop: 50,
                            backgroundColor: '#F5F5F5',
                            fontSize: 20,
                            width: window.width - 50
                        }}
                        placeholder="Mobile Number with country code"
                    />

                    <TouchableOpacity onPress={async () => {

                        //setVisibility(true)
                        if (!phoneNumber) {
                            Alert.alert('Error', 'It looks like you have a phone number')
                            return;
                        }
                        if (phoneNumber.length != 13) {
                            Alert.alert('Error', 'Invalid phone number');
                            return;
                        }
                        try {
                            const phoneProvider = new PhoneAuthProvider(auth);
                            const verificationId = await phoneProvider.verifyPhoneNumber(
                                phoneNumber,
                                recaptchaVerifier.current
                            );
                            setNext(true)
                            setVerificationId(verificationId);
                            Alert.alert('Success', 'We sent a verification code to your phone number')
                            setVisibility(false)
                        } catch (err) {
                            Alert.alert(err.message)
                            setVisibility(false)
                        }


                    }}>
                        <View style={{
                            height: 60,
                            margin: 25,
                            padding: 10,
                            borderRadius: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            backgroundColor: '#FC444B',
                            width: window.width - 50,
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 25,
                            }}>NEXT</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <AnimatedLoader
                    visible={visibility}
                    overlayColor="rgba(255,255,255,0.75)"
                    source={require("../assets/9997-infinity-loader.json")}
                    animationStyle={styles.lottie}
                    speed={1}
                >
                    <Text>Loading...</Text>
                </AnimatedLoader>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    lottie: {
        width: 100,
        height: 100
    }
});
