import React from 'react';
import { View, Modal, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
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
                </View>





                <Modal animationType="fade"
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}>
                    <View>
                        <SignUpWithOtp />
                    </View>
                </Modal>
            </ScrollView>
        </View>
    );
};

export default SignUp;
const SignUpWithOtp = () => {
    return (
        <View style={{
            marginTop: 40,
        }}>
            <ScrollView>
                <Text>bsdhsdh</Text>
            </ScrollView>
        </View>
    )
}