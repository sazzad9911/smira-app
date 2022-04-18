import React from 'react';
import {
    View, Modal, Text, ScrollView, Image,
    TouchableOpacity, TextInput, Dimensions, Platform, StyleSheet, Alert
} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
import AnimatedLoader from "react-native-animated-loader";
import { postData, url } from '../action'
import app from '../firebase'
//import * as Google from 'expo-google-app-auth';
const auth = getAuth(app);
const window = Dimensions.get('window')

const CreateUser = (props) => {
    const navigation = props.navigation
    const [Email, setEmail] = React.useState()
    const [Password, setPassword] = React.useState()
    const [Name, setName] = React.useState()
    const [visibility, setVisibility] = React.useState(false);
    return (
        <ScrollView>
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
                    }}>Hello, New Member!</Text>
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
                                width: window.width - 50

                            }}
                        />
                        <TextInput onChangeText={setPassword} placeholder='Password'
                            style={{
                                height: 60,
                                marginHorizontal: 25,
                                padding: 15,
                                borderRadius: 50,
                                marginTop: 10,
                                backgroundColor: '#F5F5F5',
                                fontSize: 18,
                                width: window.width - 50

                            }}
                        />

                    </View>

                    <TouchableOpacity onPress={() => {
                        if (!Email || !Password || !Name) {
                            Alert.alert("Opps!", "Please fill all the fields")
                            return
                        }
                        setVisibility(true)
                        
                        createUserWithEmailAndPassword(auth,Email, Password)
                            .then(userCredentials => {
                                postData(url +'/setData', {
                                    auth:userCredentials.user,
                                    tableName: 'user',
                                    columns: ['name', 'email','uid'],
                                    values:[Name,Email,userCredentials.user.uid]
                                }).then(data => {
                                    Alert.alert('Success!', 'Successfully sign up completed')
                                    setVisibility(false)
                                    navigation.navigate('Dashboard')
                                })
                            }).catch(err => {
                                Alert.alert('Error', err.code) 
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
                            shadowOffset: {
                                height: 2, width: 2,
                            },
                            shadowColor: 'black',
                            shadowOpacity: .3,
                            shadowRadius: 10,
                            elevation: 4,
                            width: window.width - 50,
                            marginVertical: 10
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 18,
                            }}>SIGNUP</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{
                        width: window.width - 40, height: 2,
                        backgroundColor: '#0000008e', marginLeft: 20
                    }}></View>
                    <TouchableOpacity >
                        <View style={{
                            height: 60,
                            margin: 20,
                            padding: 10,
                            borderRadius: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            shadowOffset: {
                                height: 2, width: 2,
                            },
                            shadowColor: 'black',
                            shadowOpacity: .3,
                            shadowRadius: 10,
                            elevation: 4,
                            backgroundColor: '#FFFFF3',
                        }}>
                            <AntDesign name="google" size={30} color="black" />
                            <Text style={{
                                color: '#000000',
                                fontSize: 18,
                                marginLeft: 30
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