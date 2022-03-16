import React from 'react';
import {
    View, Modal, Text, ScrollView, Image,
    TouchableOpacity, TextInput, Dimensions
} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const SignIn = ({navigation}) => {
    return (
        <View style={{
            marginTop: 40,
        }}>
            <ScrollView>
                <View style={{
                    marginTop: '15%',
                    marginLeft: '85%'
                }}>
                    <TouchableOpacity onPress={() =>navigation.goBack()}>
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
                    }}>Welcome Back</Text>
                    <Text style={{
                        fontSize: 15,
                        marginTop: 20,
                    }}>Login to your existing account</Text>
                </View>

                <View >
                    <TextInput
                        style={{
                            height: 60,
                            margin: 20,
                            padding: 10,
                            borderRadius: 40,
                            marginTop: 100,
                            backgroundColor: '#F5F5F5',
                            fontSize: 18,

                        }}
                        placeholder="Email Address"
                    />

                    <TextInput
                        style={{
                            height: 60,
                            margin: 20,
                            padding: 10,
                            borderRadius: 40,
                            backgroundColor: '#F5F5F1',
                            fontSize: 18,

                        }}
                        placeholder="Password"
                    />

                    <TouchableOpacity onPress={() =>navigation.navigate('Home')}>
                        <View style={{
                            height: 60,
                            margin: 20,
                            padding: 10,
                            borderRadius: 40,
                            marginTop: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            backgroundColor: '#FC444B',
                            shadowColor: 'black',
                            shadowOpacity: .3,
                            shadowRadius: 10,
                            elevation: 4,

                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 30,
                            }}>LogIn</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 20,
                    }}>Forgot Password?</Text>
                </TouchableOpacity>
                <View style={{
                    borderWidth: 0.5,
                    margin: 15,
                    borderColor: 'rgb(220,220,220)'
                }}>
                </View>
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
                    }}>New to Smira Club?</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                        <Text style={{
                            fontSize: 20,
                            color: 'red',
                        }}>SignUp</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    height: 100,
                }}></View>
            </ScrollView>
        </View>
    );
};

export default SignIn;