import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ResetPassword = () => {
    const [Confirm, setConfirm] = React.useState(true);
    return (
        <ScrollView>
            {
                Confirm ?
                    (
                        <ConfirmMessage />
                    ) : (
                        <GetInstruction />
                    )
            }
        </ScrollView>
    );
};

export default ResetPassword;

const GetInstruction = () => {
    return (
        <View>
            <ScrollView>
                <Text style={{
                    fontSize: 17,
                    marginLeft: '5%'

                }}>Your new password must be different from
                    {"\n"} previous used passwords.</Text>
                <View >
                    <Text style={{
                        marginTop: '10%',
                        marginLeft: '10%',
                        fontSize: 20,
                        color: 'rgb(100,100,100)',
                    }}>Password</Text>
                    <TextInput
                        style={{
                            height: 50,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                            borderRadius: 30,
                        }}
                        placeholder=""
                        secureTextEntry={true}
                    />
                    <Text style={{
                        fontSize: 15,
                        color: 'rgb(100,100,100)',
                        marginLeft: '10%'
                    }}>Must be atleast 8 characters.</Text>
                </View>

                <View >
                    <Text style={{
                        marginTop: '10%',
                        marginLeft: '10%',
                        fontSize: 20,
                        color: 'rgb(100,100,100)',
                    }}>Confirm Password</Text>
                    <View>
                        <TextInput
                            style={{
                                height: 50,
                                margin: 12,
                                borderWidth: 1,
                                padding: 10,
                                borderRadius: 30,
                            }}
                            placeholder=""
                            secureTextEntry={true}

                        />

                    </View>
                    <Text style={{
                        fontSize: 15,
                        color: 'rgb(100,100,100)',
                        marginLeft: '10%'
                    }}>Both passwords must match.</Text>
                </View>

                <TouchableOpacity >
                    <View style={{
                        height: 50,
                        margin: 12,
                        padding: 10,
                        borderWidth: 1,
                        borderColor: 'red',
                        borderRadius: 30,
                        marginTop: '30%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            color: 'red',
                            fontSize: 20,
                        }}>RESET PASSWORD</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
const ConfirmMessage = () => {
    return (
        <View>
            <ScrollView>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 100,
                }}>
                    <AntDesign name="checkcircle" size={100} color="red" />
                    <Text style={{
                        fontSize: 30,
                        fontWeight: "bold",
                        marginTop: 20
                    }}>That's It!</Text>
                    <Text style={{
                        fontSize: 20,
                        color: 'rgb(100,100,100)',
                    }}>Your password has been</Text>
                    <Text style={{
                        fontSize: 20,
                        color: 'rgb(100,100,100)',
                    }}>Reset successfully.</Text>
                </View>

                
            </ScrollView>
        </View>
    )
}