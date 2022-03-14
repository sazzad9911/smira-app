import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Button, TouchableOpacity, Switch } from 'react-native';
import Picture from '../assets/10.jpg'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Settings = ({navigation}) => {
    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);

    return (
        <ScrollView>
            <View style={{ marginLeft: 20 }}>
                <Text style={{ fontSize: 25, }}>Account</Text>
                <TouchableOpacity style={{ marginTop: 20 }}>
                    <View style={{ marginTop: 10, flexDirection: 'row' }}>
                        <Image style={{ height: 70, width: 70, borderRadius: 50, }}
                            source={Picture}
                        />
                        <View style={{ marginLeft: 20, marginTop: 15, flex: 4 }}>
                            <Text style={{ fontSize: 20 }}>Nirmiti Gaitonde</Text>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <Text style={{ fontSize: 15, color: '#FF9E00' }}>Gold <Text style={{ color: 'black' }}>Member</Text></Text>

                            </View>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <AntDesign name="right" size={20} color="black" style={{ marginLeft: 30, color: 'rgb(200,200,200)' }} />
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{ borderWidth: 0.5, margin: 15, borderColor: 'rgb(220,220,220)' }}>
                </View>

                <TouchableOpacity onPress={() =>{
                    navigation.navigate('Redeem History')
                }} style={{ flexDirection: 'row', marginTop: 25 }}>
                    <View style={{ flex: 1 }}>
                        <MaterialIcons name="redeem" size={24} color="black" style={{ color: 'rgb(200,200,200)' }} />
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text style={{ fontSize: 20 }}>Redeem History</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <AntDesign name="right" size={20} color="black" style={{ marginLeft: 30, color: 'rgb(200,200,200)' }} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 25 }}>
                    <View style={{ flex: 1 }}>
                        <MaterialIcons name="redeem" size={24} color="black" style={{ color: 'rgb(200,200,200)' }} />
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text style={{ fontSize: 20 }}>Forgot Password</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <AntDesign name="right" size={20} color="black" style={{ marginLeft: 30, color: 'rgb(200,200,200)' }} />
                    </View>
                </TouchableOpacity>
                <View style={{ borderWidth: 0.5, margin: 15, borderColor: 'rgb(220,220,220)', marginTop: 40 }}>
                </View>

                <View>
                    <Text style={{ fontSize: 25, }}>Settings</Text>
                </View>

                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 25 }}>
                    <View style={{ flex: 1 }}>
                        <Entypo name="language" size={24} color="black" style={{ color: 'rgb(200,200,200)' }} />
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text style={{ fontSize: 20 }}>Language</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <AntDesign name="right" size={20} color="black" style={{ marginLeft: 30, color: 'rgb(200,200,200)' }} />
                    </View>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', marginTop: 25 }}>
                    <View style={{ flex: 1 }}>
                        <Ionicons name="notifications-outline" size={24} color="black" style={{ color: 'rgb(200,200,200)' }} />
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text style={{ fontSize: 20 }}>Notification</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Switch
                            value={checked}
                            onValueChange={(value) => setChecked(value)}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 25 }}>
                    <View style={{ flex: 1 }}>
                        <FontAwesome name="moon-o" size={24} color="black" style={{ color: 'rgb(200,200,200)' }} />
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text style={{ fontSize: 20 }}>Dark Mode</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Switch
                            value={checked1}
                            onValueChange={(value1) => setChecked1(value1)}
                        />
                    </View>
                </View>

                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 25 }}>
                    <View style={{ flex: 1 }}>
                        <Feather name="phone" size={24} color="black" style={{ color: 'rgb(200,200,200)' }} />
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text style={{ fontSize: 20 }}>Talk to Us</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <AntDesign name="right" size={20} color="black" 
                        style={{ marginLeft: 30, 
                        color: 'rgb(200,200,200)' }} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 25 }}>
                    <View style={{ flex: 1 }}>
                        <AntDesign name="login"
                            size={24} color="black"
                            style={{ color: 'rgb(200,200,200)' }} />
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text style={{ fontSize: 20 }}>Log out</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <AntDesign name="right" size={20} color="black"
                            style={{
                                marginLeft: 30,
                                color: 'rgb(200,200,200)'
                            }} />
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};



export default Settings;