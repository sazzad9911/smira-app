import React from 'react';
import {
    View, Modal, Text, ScrollView, Image,
    TouchableOpacity, TextInput, Dimensions, Platform, StyleSheet, Alert
} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import AnimatedLoader from "react-native-animated-loader";
import { postData, url } from '../action'
import app from '../firebase'
import { SvgXml } from 'react-native-svg'
//import * as Google from 'expo-google-app-auth';
const auth = getAuth(app);
const window = Dimensions.get('window')

const CreateUser = (props) => {
    const navigation = props.navigation
    const [Email, setEmail] = React.useState()
    const [Password, setPassword] = React.useState()
    const [Name, setName] = React.useState()
    const [visibility, setVisibility] = React.useState(false);
    const [text, setText] =React.useState('')

    const googleIcon = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.2408 13.6111C25.2559 12.7518 25.1654 11.894 24.9714 11.056H13.002V15.6941H20.0279C19.7589 17.3374 18.8176 18.8019 17.4215 19.7489L17.397 19.9043L21.1818 22.7785L21.4438 22.8041C23.8518 20.6239 25.2403 17.4159 25.2403 13.6111" fill="#4285F4"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.998 25.8302C16.4412 25.8302 19.332 24.7194 21.4436 22.8035L17.4191 19.7489C16.3423 20.4849 14.8969 20.9987 12.998 20.9987C9.69043 20.9797 6.76705 18.8874 5.74269 15.8061L5.59322 15.8186L1.65649 18.8035L1.60503 18.9437C3.76741 23.1661 8.17682 25.8313 12.9985 25.8302" fill="#34A853"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.74066 15.804C5.46179 15.0082 5.31789 14.173 5.3147 13.3316C5.31984 12.4915 5.45842 11.6574 5.72547 10.8592L5.71836 10.6935L1.73454 7.65907L1.60422 7.71983C-0.208983 11.2497 -0.208983 15.4132 1.60422 18.9431L5.74066 15.804" fill="#FBBC05"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9942 5.6654C14.8214 5.63759 16.5885 6.30447 17.9247 7.52607L21.5235 4.08251C19.2154 1.96047 16.1588 0.796139 12.9942 0.833431C8.17037 0.833431 3.76232 3.49975 1.60124 7.72294L5.72588 10.8584C6.76 7.77784 9.68516 5.68788 12.9942 5.66539" fill="#EB4335"/>
    </svg>`

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
                        <TextInput secureTextEntry={true} onChangeText={setPassword} placeholder='Password'
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
                        marginTop:10
                    }}>{text}</Text>
                    <TouchableOpacity onPress={() => {
                        if (!Email || !Password || !Name) {
                            setText('Please fill all the fields.')
                            return
                        }
                        setVisibility(true)

                        createUserWithEmailAndPassword(auth, Email, Password)
                            .then(userCredentials => {
                                postData(url + '/setData', {
                                    auth: userCredentials.user,
                                    tableName: 'user',
                                    columns: ['name', 'email', 'uid'],
                                    values: [Name, Email, userCredentials.user.uid]
                                }).then(data => {
                                    Alert.alert('Success!', 'Successfully sign up completed')
                                    setVisibility(false)
                                    navigation.navigate('Dashboard')
                                })
                            }).catch(err => {
                                setText('Email address is invalid.')
                                setVisibility(false)
                                //console.log(err.message)
                            })
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
            </View>
            <AnimatedLoader
                visible={visibility}
                overlayColor="rgba(255,255,255,0.75)"
                source={require("../assets/9997-infinity-loader.json")}
                animationStyle={{
                    height: 100,
                    width: 100
                }}
                speed={1}
            >
                <Text>Loading...</Text>
            </AnimatedLoader>
        </ScrollView>
    )
}
export default CreateUser