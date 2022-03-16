import React from 'react';
import {
    View, Modal, Text, ScrollView, Image,
    TouchableOpacity, TextInput
} from 'react-native';
import Screen from '../assets/Screen.png'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const SignUp = () => {
    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <View style={{
            marginTop: 40,
        }}>
            <ScrollView>
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
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <View style={{
                            height: 75,
                            margin: 20,
                            marginTop: '10%',
                            padding: 10,
                            borderWidth: 1,
                            borderRadius: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}>
                            <View style={{ flex: 2, marginLeft: 20, }}>
                                <FontAwesome name="phone-square" size={45} color="red" />
                            </View>
                            <View style={{ flex: 3 }}>
                                <Text style={{
                                    color: 'black',
                                    fontSize: 20,
                                }}>SignUp with OTP</Text>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <View style={{
                            height: 75,
                            margin: 20,
                            padding: 10,
                            borderWidth: 1,
                            borderRadius: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}>
                            <View style={{ flex: 2, marginLeft: 20, }}>
                                <MaterialIcons name="email" size={44} color="red" />
                            </View>
                            <View style={{ flex: 3 }}>
                                <Text style={{
                                    color: 'black',
                                    fontSize: 20,
                                }}>SignUp with Email</Text>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <View style={{
                            height: 75,
                            margin: 12,
                            padding: 10,
                            borderWidth: 1,
                            borderRadius: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            color: 'rgb(100,100,100)'
                        }}>
                            <View style={{ flex: 2, marginLeft: 20, }}>
                                <Fontisto name="google" size={44} color="red" />
                            </View>
                            <View style={{ flex: 3 }}>
                                <Text style={{
                                    color: 'black',
                                    fontSize: 20,
                                }}>SignUp with Google</Text>
                            </View>

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
                        <TouchableOpacity >
                            <Text style={{
                                fontSize: 20,
                                color: 'red',
                            }}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        height:150,
                    }}></View>

                </View>





                <Modal animationType="fade"
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}>
                    <View>
                        <SignUpWithOtp close={setModalVisible} />
                    </View>
                </Modal>
            </ScrollView>
        </View>
    );
};

export default SignUp;
const SignUpWithOtp = (props) => {
    const [next, setNext] = React.useState(false)

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
                        marginTop:20,
                    }}>Register your new account</Text>
                </View>

                <View >
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>
                    
                        <TextInput keyboardType='numeric'
                            style={{
                                height: 75,
                                margin: 12,
                                padding: 10,
                                width: 75,
                                borderRadius: 50,
                                marginTop: 50,
                                backgroundColor: '#F5F5F5',
                                fontSize: 20,
                                
                            }}
                        />


                        <TextInput keyboardType='numeric'
                            style={{
                                height: 75,
                                margin: 12,
                                padding: 10,
                                width: 75,
                                borderRadius: 50,
                                marginTop: 50,
                                backgroundColor: '#F5F5F5',
                                fontSize: 20,
                            }}
                        />


                        <TextInput keyboardType='numeric'
                            style={{
                                height: 75,
                                margin: 12,
                                padding: 10,
                                width: 75,
                                borderRadius: 50,
                                marginTop: 50,
                                backgroundColor: '#F5F5F5',
                                fontSize: 20,
                            }}
                        />


                        <TextInput keyboardType='numeric'
                            style={{
                                height: 75,
                                margin: 12,
                                padding: 10,
                                width: 75,
                                borderRadius: 50,
                                marginTop: 50,
                                backgroundColor: '#F5F5F5',
                                fontSize: 20,
                                justifyContent: 'center',
                            alignItems: 'center',
                            }}
                        />
                    </View>


                    <TouchableOpacity >
                        <View style={{
                            height: 75,
                            margin: 12,
                            padding: 10,
                            borderRadius: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            backgroundColor: '#FC444B'
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 30,
                            }}>SUBMIT</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    } else {
        return (
            <View style={{
                marginTop: 40,
            }}>
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
                        marginTop:20,
                    }}>Register your new account</Text>
                </View>

                <View >
                    <TextInput keyboardType='numeric'
                        style={{
                            height: 75,
                            margin: 12,
                            padding: 10,
                            borderRadius: 50,
                            marginTop: 50,
                            backgroundColor: '#F5F5F5',
                            fontSize: 20
                        }}
                        placeholder="Mobile Number"
                    />

                    <TouchableOpacity onPress={() => {
                        setNext(true)
                    }}>
                        <View style={{
                            height: 75,
                            margin: 12,
                            padding: 10,
                            borderRadius: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            backgroundColor: '#FC444B'
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 30,
                            }}>NEXT</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}



