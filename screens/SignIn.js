import React from 'react';
import {
    View, Modal, Text, ScrollView, Image,
    TouchableOpacity, TextInput, Dimensions, Platform, Alert,NativeModules
} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const window = Dimensions.get('window')
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase'
import { SvgXml } from 'react-native-svg'
import {useDispatch} from 'react-redux'
import {setAnimatedLoader} from '../action'
import * as Google from 'expo-google-app-auth';
import { configAuth } from './../action';
import {SignUpWithOtp} from './SignUp'
import AnimatedLoader from "react-native-animated-loader";

const SignIn = ({ navigation }) => {
    const [email, setEmail] = React.useState(null)
    const [password, setPassword] = React.useState(null)
    const [text,setText] =React.useState('')
    const [modalVisible, setModalVisible]= React.useState(false)
    const [visible, setVisible] = React.useState(false)

    const auth = getAuth(app);
    const dispatch = useDispatch()
    const signIn = () => {
        if (!email || !password) {
            setText('Please fill all the fields')
            return 
        }
        setVisible(true)
        dispatch(setAnimatedLoader(true));
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                dispatch(setAnimatedLoader(false));
                NativeModules.DevSettings.reload();
                navigation.navigate('Dashboard');
                setVisible(false)
            }).catch((error) => {
                dispatch(setAnimatedLoader(false));
                setText('Invalid user information.')
                console.log('Error: SignIn.js->' + error.code)
                setVisible(false)
            })
    }
    const googleSignIn =async () => {
        try {
            const { type, accessToken, user } = await Google.logInAsync(configAuth);
            if (type === 'success') {
                console.log(user)
            }
        }catch(e){
            console.log(e.message)
        }
    }

    const googleIcon = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.2408 13.6111C25.2559 12.7518 25.1654 11.894 24.9714 11.056H13.002V15.6941H20.0279C19.7589 17.3374 18.8176 18.8019 17.4215 19.7489L17.397 19.9043L21.1818 22.7785L21.4438 22.8041C23.8518 20.6239 25.2403 17.4159 25.2403 13.6111" fill="#4285F4"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.998 25.8302C16.4412 25.8302 19.332 24.7194 21.4436 22.8035L17.4191 19.7489C16.3423 20.4849 14.8969 20.9987 12.998 20.9987C9.69043 20.9797 6.76705 18.8874 5.74269 15.8061L5.59322 15.8186L1.65649 18.8035L1.60503 18.9437C3.76741 23.1661 8.17682 25.8313 12.9985 25.8302" fill="#34A853"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.74066 15.804C5.46179 15.0082 5.31789 14.173 5.3147 13.3316C5.31984 12.4915 5.45842 11.6574 5.72547 10.8592L5.71836 10.6935L1.73454 7.65907L1.60422 7.71983C-0.208983 11.2497 -0.208983 15.4132 1.60422 18.9431L5.74066 15.804" fill="#FBBC05"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9942 5.6654C14.8214 5.63759 16.5885 6.30447 17.9247 7.52607L21.5235 4.08251C19.2154 1.96047 16.1588 0.796139 12.9942 0.833431C8.17037 0.833431 3.76232 3.49975 1.60124 7.72294L5.72588 10.8584C6.76 7.77784 9.68516 5.68788 12.9942 5.66539" fill="#EB4335"/>
    </svg>`
    const phoneIcon = `<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.743408 15.3311C0.743408 7.04678 7.45914 0.331055 15.7434 0.331055C24.0277 0.331055 30.7434 7.04678 30.7434 15.3311C30.7434 23.6153 24.0277 30.3311 15.7434 30.3311C7.45914 30.3311 0.743408 23.6153 0.743408 15.3311Z" fill="#4285F4"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3984 15.6791C18.3377 18.6176 19.0045 15.2181 20.876 17.0883C22.6802 18.892 23.7172 19.2534 21.4313 21.5387C21.1449 21.7689 19.3257 24.5373 12.9321 18.1455C6.5377 11.7529 9.30459 9.93179 9.53477 9.64553C11.8263 7.35387 12.1814 8.3969 13.9857 10.2007C15.8572 12.0716 12.4591 12.7406 15.3984 15.6791L15.3984 15.6791Z" fill="white"/>
    </svg>`
    return (
        <View style={{
            marginTop: Platform.OS == 'ios' ? 40 : 0,
            backgroundColor: '#ffff'
        }}>
            <ScrollView>
                <View style={{
                    marginTop: '15%',
                    marginLeft: '85%'
                }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
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
                    }}>Welcome Back</Text>
                    <Text style={{
                        fontSize: 12,
                        marginTop: 20,
                        color: '#A7A7A7',
                        fontWeight: '400',
                        lineHeight: 19,
                        fontFamily: 'PlusJakartaSans',
                    }}>Login to your existing account</Text>
                </View>

                <View style={{justifyContent: 'center',alignItems: 'center'}}>
                    <TextInput onChangeText={setEmail}
                        style={{
                            height: 60,
                            marginHorizontal: 25,
                            padding: 10,
                            borderRadius: 40,
                            marginTop: 50,
                            backgroundColor: '#F5F5F5',
                            width: window.width - 50,
                            paddingLeft: 30,
                            paddingRight: 30,
                            fontSize: 14,
                        }}
                        placeholder="Email Address"
                    />

                    <TextInput secureTextEntry={true} onChangeText={setPassword}
                        style={{
                            height: 60,
                            marginHorizontal: 20,
                            padding: 10,
                            borderRadius: 40,
                            backgroundColor: '#F5F5F1',
                            width: window.width - 50,
                            marginTop: 20,
                            paddingLeft: 30,
                            paddingRight: 30,
                            fontSize: 14,

                        }}
                        placeholder="Password"
                    />
                    <Text style={{
                        color:'red',
                        fontFamily:'PlusJakartaSans',
                        fontSize:14
                    }}>{text}</Text>
                    <TouchableOpacity onPress={signIn}>

                        <View style={{
                            height: 60,
                            marginHorizontal: 25,
                            padding: 10,
                            borderRadius: 40,
                            marginTop: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            backgroundColor: '#FC444B',

                            shadowRadius: 10,
                            elevation: 4,
                            width: window.width - 50

                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 14,

                                fontWeight: '500',
                                lineHeight: 18,
                                fontFamily: 'PlusJakartaSans',
                            }}>Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() =>navigation.navigate('Forget Password')} style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '500',
                        lineHeight: 18,
                        marginTop: 20
                    }}>Forgot Password?</Text>
                </TouchableOpacity>
                <View style={{
                    borderWidth: 0.5,
                    margin: 15,
                    borderColor: 'rgb(220,220,220)',
                    marginTop: 30,
                }}>
                </View>
                {/* <TouchableOpacity onPress={() =>googleSignIn()}>
                    <View style={{
                        height: 60,
                        marginHorizontal: 25,
                        padding: 10,
                        borderRadius: 40,
                        alignItems: 'center',
                        flexDirection: 'row',
                        borderWidth: 2,
                        borderColor: '#E8E8E8',
                        marginTop: 30,
                    }}>
                        <SvgXml xml={googleIcon} height="30" width="30" style={{ marginLeft: 30, color: '#D8D8D8', }} />
                        <Text style={{
                            color: '#000000',
                            fontSize: 14,
                            fontWeight: '500',
                            lineHeight: 18,
                            fontFamily: 'PlusJakartaSans',
                            marginLeft: 50,
                        }}>Continue with Google</Text>
                    </View>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => {
                        //setOTP(true);
                        setModalVisible(true)
                    }} style={{
                        height: 60,
                        marginHorizontal: 25,
                        padding: 10,
                        borderRadius: 40,
                        alignItems: 'center',
                        flexDirection: 'row',
                        borderWidth: 2,
                        borderColor: '#E8E8E8',
                        marginTop: 20,

                    }}>

                        <SvgXml xml={phoneIcon} height="35" width="35" style={{ marginLeft: 30, color: '#D8D8D8', }} />
                        <Text style={{
                            color: 'black',
                            fontSize: 14,
                            marginLeft: 50,
                            fontWeight: '500',
                            lineHeight: 18,
                            fontFamily: 'PlusJakartaSans',
                        }}>Continue with OTP</Text>
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
                    }}>New to Smira Club?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '500',
                            lineHeight: 18,
                            fontFamily: 'PlusJakartaSans',
                            color: 'red',
                            marginLeft:5
                        }}>Signup</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    height: 100,
                }}></View>
            </ScrollView>
            <Modal visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
            <SignUpWithOtp login={true} navigation={navigation} close={setModalVisible} />
            </Modal>
            <AnimatedLoader
                    visible={visible}
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
    );
};

export default SignIn;