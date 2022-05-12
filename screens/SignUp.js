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
import LoginScreen from '../assets/LoginScreen.png'
//import * as Google from 'expo-google-app-auth';
const auth = getAuth(app);
const window = Dimensions.get('window')

const googleIcon = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.2408 13.6111C25.2559 12.7518 25.1654 11.894 24.9714 11.056H13.002V15.6941H20.0279C19.7589 17.3374 18.8176 18.8019 17.4215 19.7489L17.397 19.9043L21.1818 22.7785L21.4438 22.8041C23.8518 20.6239 25.2403 17.4159 25.2403 13.6111" fill="#4285F4"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.998 25.8302C16.4412 25.8302 19.332 24.7194 21.4436 22.8035L17.4191 19.7489C16.3423 20.4849 14.8969 20.9987 12.998 20.9987C9.69043 20.9797 6.76705 18.8874 5.74269 15.8061L5.59322 15.8186L1.65649 18.8035L1.60503 18.9437C3.76741 23.1661 8.17682 25.8313 12.9985 25.8302" fill="#34A853"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.74066 15.804C5.46179 15.0082 5.31789 14.173 5.3147 13.3316C5.31984 12.4915 5.45842 11.6574 5.72547 10.8592L5.71836 10.6935L1.73454 7.65907L1.60422 7.71983C-0.208983 11.2497 -0.208983 15.4132 1.60422 18.9431L5.74066 15.804" fill="#FBBC05"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9942 5.6654C14.8214 5.63759 16.5885 6.30447 17.9247 7.52607L21.5235 4.08251C19.2154 1.96047 16.1588 0.796139 12.9942 0.833431C8.17037 0.833431 3.76232 3.49975 1.60124 7.72294L5.72588 10.8584C6.76 7.77784 9.68516 5.68788 12.9942 5.66539" fill="#EB4335"/>
    </svg>`

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

    const phoneIcon = `<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.743408 15.3311C0.743408 7.04678 7.45914 0.331055 15.7434 0.331055C24.0277 0.331055 30.7434 7.04678 30.7434 15.3311C30.7434 23.6153 24.0277 30.3311 15.7434 30.3311C7.45914 30.3311 0.743408 23.6153 0.743408 15.3311Z" fill="#4285F4"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3984 15.6791C18.3377 18.6176 19.0045 15.2181 20.876 17.0883C22.6802 18.892 23.7172 19.2534 21.4313 21.5387C21.1449 21.7689 19.3257 24.5373 12.9321 18.1455C6.5377 11.7529 9.30459 9.93179 9.53477 9.64553C11.8263 7.35387 12.1814 8.3969 13.9857 10.2007C15.8572 12.0716 12.4591 12.7406 15.3984 15.6791L15.3984 15.6791Z" fill="white"/>
    </svg>`

    const emailIcon = `<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.743408 15.3311C0.743408 7.04678 7.45914 0.331055 15.7434 0.331055C24.0277 0.331055 30.7434 7.04678 30.7434 15.3311C30.7434 23.6153 24.0277 30.3311 15.7434 30.3311C7.45914 30.3311 0.743408 23.6153 0.743408 15.3311Z" fill="#EB4335"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9712 12.411C10.8067 12.411 10.6549 12.473 10.5437 12.5857C10.3279 12.7954 10.3035 13.1298 10.4868 13.3634L10.5919 13.4642L14.2315 16.2257C14.6839 16.5714 15.2234 16.7542 15.7918 16.7542C16.3569 16.7542 16.9134 16.5665 17.3585 16.2257L20.9679 13.418L21.032 13.3557C21.2246 13.1281 21.2207 12.801 21.0227 12.578C20.9133 12.4633 20.7631 12.3915 20.6 12.3757C20.5887 12.3751 20.5775 12.3749 20.5663 12.3749C20.4099 12.3749 20.2623 12.4303 20.1507 12.5311L16.5435 15.3311C16.3192 15.5119 16.0361 15.6114 15.7463 15.6114C15.4564 15.6114 15.1714 15.5119 14.9436 15.3311L11.3436 12.5311C11.2344 12.4525 11.1056 12.411 10.9712 12.411H10.9712ZM19.6948 22.3311H11.7913C9.55928 22.3311 7.74341 20.5691 7.74341 18.4034V12.2588C7.74341 10.093 9.55928 8.33105 11.7913 8.33105H19.6948C20.7633 8.33105 21.8073 8.75101 22.559 9.48325C23.3228 10.2251 23.7434 11.2108 23.7434 12.2588V18.4034C23.7434 20.5691 21.9272 22.3311 19.6948 22.3311Z" fill="white"/>
    </svg>
    `

    const googleIcon = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.2408 13.6111C25.2559 12.7518 25.1654 11.894 24.9714 11.056H13.002V15.6941H20.0279C19.7589 17.3374 18.8176 18.8019 17.4215 19.7489L17.397 19.9043L21.1818 22.7785L21.4438 22.8041C23.8518 20.6239 25.2403 17.4159 25.2403 13.6111" fill="#4285F4"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.998 25.8302C16.4412 25.8302 19.332 24.7194 21.4436 22.8035L17.4191 19.7489C16.3423 20.4849 14.8969 20.9987 12.998 20.9987C9.69043 20.9797 6.76705 18.8874 5.74269 15.8061L5.59322 15.8186L1.65649 18.8035L1.60503 18.9437C3.76741 23.1661 8.17682 25.8313 12.9985 25.8302" fill="#34A853"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.74066 15.804C5.46179 15.0082 5.31789 14.173 5.3147 13.3316C5.31984 12.4915 5.45842 11.6574 5.72547 10.8592L5.71836 10.6935L1.73454 7.65907L1.60422 7.71983C-0.208983 11.2497 -0.208983 15.4132 1.60422 18.9431L5.74066 15.804" fill="#FBBC05"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9942 5.6654C14.8214 5.63759 16.5885 6.30447 17.9247 7.52607L21.5235 4.08251C19.2154 1.96047 16.1588 0.796139 12.9942 0.833431C8.17037 0.833431 3.76232 3.49975 1.60124 7.72294L5.72588 10.8584C6.76 7.77784 9.68516 5.68788 12.9942 5.66539" fill="#EB4335"/>
    </svg>`

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
                        source={LoginScreen}
                    />
                </View>
                <View>
                    <TouchableOpacity onPress={() => {
                        setOTP(true);
                        setModalVisible(true)
                    }} style={{
                        height: 70,
                        margin: 8,
                        marginTop: '10%',
                        padding: 10,
                        borderRadius: 40,
                        alignItems: 'center',
                        flexDirection: 'row',
                        borderColor: '#E8E8E8',
                        borderWidth: 2,
                        marginHorizontal: 20,

                    }}>

                        <SvgXml xml={phoneIcon} height="35" width="35" style={{ marginLeft: 30, color: '#D8D8D8', }} />
                        <Text style={{
                            color: 'black',
                            fontSize: 14,
                            marginLeft: 70,
                            fontWeight: '500',
                            lineHeight: 18,
                            fontFamily: 'PlusJakartaSans',
                        }}>Signup with OTP</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setOTP(false);
                        setModalVisible(true)
                    }} style={{
                        height: 70,
                        margin: 8,
                        padding: 10,
                        borderRadius: 40,
                        alignItems: 'center',
                        flexDirection: 'row',
                        borderColor: '#E8E8E8',
                        borderWidth: 2,
                        marginHorizontal: 20,
                    }}>
                        <SvgXml xml={emailIcon} height="35" width="35" style={{ marginLeft: 30, color: '#D8D8D8', }} />
                        <Text style={{
                            color: 'black',
                            fontSize: 14,
                            marginLeft: 70,
                            fontWeight: '500',
                            fontFamily: 'PlusJakartaSans',
                            lineHeight: 18,
                        }}>Signup with Email</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {

                    }} style={{
                        height: 70,
                        margin: 8,
                        marginHorizontal: 20,
                        padding: 10,
                        borderRadius: 40,
                        alignItems: 'center',
                        flexDirection: 'row',
                        color: 'rgb(100,100,100)',
                        borderColor: '#E8E8E8',
                        borderWidth: 2
                    }}>

                        <SvgXml xml={googleIcon} height="30" width="30" style={{ marginLeft: 33, color: '#D8D8D8', }} />
                        <Text style={{
                            color: 'black',
                            fontSize: 14,
                            marginLeft: 70,
                            fontWeight: '500',
                            lineHeight: 18,
                            fontFamily: 'PlusJakartaSans',
                        }}>Signup with Google</Text>
                    </TouchableOpacity>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                    }}>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '500',
                            lineHeight: 18,
                            fontFamily: 'PlusJakartaSans',
                        }}>Already a Member?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                            <Text style={{
                                fontSize: 14,
                                color: '#FC444B',
                                fontWeight: '500',
                                lineHeight: 18,
                                fontFamily: 'PlusJakartaSans',
                                marginLeft: 5
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
    const [next, setNext] = React.useState(0)
    const recaptchaVerifier = React.useRef(null);
    const [phoneNumber, setPhoneNumber] = React.useState();
    const [verificationId, setVerificationId] = React.useState();
    const [verificationCode, setVerificationCode] = React.useState();
    const [message, showMessage] = React.useState();
    const attemptInvisibleVerification = false;
    const [visibility, setVisibility] = React.useState(false);
    const [text, setText] = React.useState('')
    const [Name, setName] = React.useState()
    const [Email, setEmail] = React.useState()
    const [Password, setPassword] = React.useState()

    const navigation = props.navigation
    const signUp = async () => {
        if (!verificationCode) {
            //Alert.alert('Error', 'Type verificationCode first');
            setText('Please enter verification code first')
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
                        columns: ['phone', 'uid', 'name', 'email'],
                        values: [userCredential.user.phoneNumber, userCredential.user.uid, Name, Email]
                    }).then(data => {
                        // Alert.alert('Success!', 'Sign Up completed successfully')
                        setVisibility(false)
                        navigation.navigate('Dashboard');
                    })
                })
        } catch (err) {
            //Alert.alert(err.code, err.message)
            setVisibility(false)
        }
    }

    if (next == 1) {
        return (
            <View style={{
                marginTop: 40,
            }}>
                <View style={{
                    marginTop: '5%',
                    marginLeft: '85%'
                }}>
                    <TouchableOpacity onPress={() => {
                        props.close(false)
                    }}>
                        <Fontisto name="close-a" size={15} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '20%',
                }}>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: '500',
                        lineHeight: 30,
                        fontFamily: 'PlusJakartaSans',
                    }}>Signup with OTP</Text>
                    <Text style={{
                        fontSize: 12,
                        fontWeight: '400',
                        lineHeight: 19,
                        marginTop: 20,
                        color: '#A7A7A7'
                    }}>Register your new account</Text>
                </View>

                <View>
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
                                paddingLeft: 30,
                                paddingRight: 30,
                                fontSize: 14,
                            }}
                        />
                    </View>


                    <TouchableOpacity onPress={
                        () => {setNext(2)
                        setText('')}
                    } style={{
                        height: 60,
                        margin: 25,
                        padding: 10,
                        borderRadius: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        backgroundColor: verificationCode && verificationCode.length == 6 ? '#FC444B' : '#ffff',
                        width: window.width - 50,
                        borderWidth: 1,
                        borderColor: '#fc444b'
                    }}>
                        <Text style={{
                            color: verificationCode && verificationCode.length == 6 ? '#ffff' : '#FC444B',
                            fontSize: 14,

                            fontWeight: '500',
                            lineHeight: 21,
                            fontFamily: 'PlusJakartaSans',

                        }}>SUBMIT</Text>
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
    } else if (next == 2) {
        return (
            <ScrollView>
                <View style={{
                    marginTop: 40,
                }}>
                    <View style={{
                        marginTop: '5%',
                        marginLeft: '85%'
                    }}>
                        <TouchableOpacity onPress={() => {
                            props.close(false)
                        }}>
                            <Fontisto name="close-a" size={15} color="black" />
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '20%',
                    }}>
                        <Text style={{
                            fontSize: 24,
                            fontWeight: '500',
                            lineHeight: 30,
                            fontFamily: 'PlusJakartaSans',
                        }}>Hello, New Member!</Text>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: '400',
                            lineHeight: 19,
                            fontFamily: 'PlusJakartaSans',
                            marginTop: 20,
                            color: '#A7A7A7'
                        }}>Register your new account</Text>
                    </View>

                    <View >
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                            <TextInput onChangeText={setName} placeholder='Name'
                                style={{
                                    height: 60,
                                    marginHorizontal: 25,
                                    padding: 15,
                                    borderRadius: 50,
                                    marginTop: 30,
                                    backgroundColor: '#F5F5F5',
                                    fontSize: 18,
                                    width: window.width - 50,

                                    paddingLeft: 30,
                                    paddingRight: 30,
                                    fontSize: 14,
                                }}
                            />

                            <TextInput onChangeText={setEmail} placeholder='Email'
                                style={{
                                    height: 60,
                                    marginHorizontal: 25,
                                    padding: 15,
                                    borderRadius: 50,
                                    marginTop: 10,
                                    backgroundColor: '#F5F5F5',
                                    fontSize: 18,
                                    width: window.width - 50,
                                    paddingLeft: 30,
                                    paddingRight: 30,
                                    fontSize: 14,

                                }}
                            />

                        </View>
                        <Text style={{
                            marginLeft: 55,
                            color: 'red',
                            fontFamily: 'PlusJakartaSans',
                            fontSize: 14,
                            marginTop: 10
                        }}>{text}</Text>
                        <TouchableOpacity onPress={() => {
                            if (!Email || !Name) {
                                setText('Please fill all the fields.')
                                return
                            }
                            signUp()
                        }}>
                            <View style={{
                                height: 60,
                                marginHorizontal: 25,
                                padding: 10,
                                borderRadius: 40,
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                                backgroundColor: '#FC444B',
                                marginTop: 30,
                            }}>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 14,
                                    fontWeight: '500',
                                    lineHeight: 21,
                                    fontFamily: 'PlusJakartaSans',
                                }}>SIGNUP</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{
                            width: window.width - 40, height: 1,
                            backgroundColor: '#E3E3E3',
                            marginLeft: 20,
                            marginTop: 30,
                        }}></View>
                        <TouchableOpacity >
                            <View style={{
                                height: 60,
                                margin: 20,
                                padding: 10,
                                borderRadius: 40,
                                alignItems: 'center',
                                flexDirection: 'row',
                                borderWidth: 2,
                                borderColor: '#E8E8E8',
                                marginTop: 30
                            }}>
                                <SvgXml xml={googleIcon} height="30" width="30" style={{ marginLeft: 30, color: '#D8D8D8', }} />
                                <Text style={{
                                    color: '#000000',
                                    fontSize: 14,
                                    marginLeft: 40,
                                    fontWeight: '500',
                                    lineHeight: 18,
                                    fontFamily: 'PlusJakartaSans',
                                }}>Continue with Google</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '10%'
                        }}>
                            <Text style={{
                                fontSize: 14,
                                fontWeight: '500',
                                lineHeight: 18,
                                fontFamily: 'PlusJakartaSans',
                            }}>Already a Member?</Text>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('SignIn')
                                props.close(false)
                            }}>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: '500',
                                    lineHeight: 18,
                                    fontFamily: 'PlusJakartaSans',
                                    color: 'red',
                                    marginLeft: 5
                                }}>Login</Text>
                            </TouchableOpacity>
                        </View>
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
            </ScrollView>
        )
    } else {
        return (
            <View style={{
                marginTop: 40,
            }}>
                <FirebaseRecaptchaVerifierModal
                    ref={recaptchaVerifier}
                    firebaseConfig={app.options}
                    attemptInvisibleVerification={true}
                />
                <View style={{
                    marginTop: '5%',
                    marginLeft: '85%'
                }}>
                    <TouchableOpacity onPress={() => props.close(false)}>
                        <Fontisto name="close-a" size={15} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '20%',
                }}>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: '500',
                        lineHeight: 30,
                        fontFamily: 'PlusJakartaSans',
                    }}>Signup with OTP</Text>
                    <Text style={{
                        fontSize: 12,
                        fontWeight: '400',
                        lineHeight: 19,
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
                            width: window.width - 50,
                            paddingLeft: 30,
                            paddingRight: 30,
                            fontSize: 14,
                            marginBottom: 10
                        }}
                        placeholder="Mobile Number"
                    />
                    <Text style={{
                        marginLeft: 55,
                        color: 'red',
                        fontFamily: 'PlusJakartaSans',
                        fontSize: 14
                    }}>{text}</Text>
                    <TouchableOpacity onPress={async () => {

                        //setVisibility(true)
                        if (!phoneNumber) {
                            setText('Mobile number is invalid.')
                            return;
                        }
                        if (phoneNumber.length != 10) {
                            setText('Mobile number is invalid.')
                            return;
                        }
                        setVisibility(true)
                        try {
                            const phoneProvider = new PhoneAuthProvider(auth);
                            const verificationId = await phoneProvider.verifyPhoneNumber(
                                '+91' + phoneNumber,
                                recaptchaVerifier.current
                            );
                            setNext(1)
                            setVerificationId(verificationId);
                            setText('We sent a verification code to your phone number')
                            setVisibility(false)
                        } catch (err) {
                            setText(err.code)
                            setVisibility(false)
                            console.log(err.message)
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
                                fontSize: 14,
                                fontWeight: '500',
                                lineHeight: 21,
                                fontFamily: 'PlusJakartaSans',
                            }}>NEXT</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                }}>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '500',
                        lineHeight: 18,
                        fontFamily: 'PlusJakartaSans',
                    }}>Already a Member?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <Text style={{
                            fontSize: 14,
                            color: '#FC444B',
                            fontWeight: '500',
                            lineHeight: 18,
                            fontFamily: 'PlusJakartaSans',
                            marginLeft: 5
                        }}>Login</Text>
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
