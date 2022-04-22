import React, { useState } from 'react';
import { View, TouchableOpacity, Dimensions, Text, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'
import { SvgXml,Svg,Polygon } from 'react-native-svg'
import { NoNotification } from '../components/Icon'

const NotificationBar = (props) => {
    const [Notifications, setNotifications] = useState([
        {
            title: 'Merry Christmas! Get 50% Off on Pizza',
            visibleText: 'Oven Story is offering discount on all ranges of pizza.',
            read: false,
        },
        {
            title: 'Merry Christmas! Get 50% Off on Pizza',
            visibleText: 'Oven Story is offering discount on all ranges of pizza.',
            read: true
        }
    ])
    const { height, width } = Dimensions.get('screen');
    return (
        <View style={{
            height: height / 2.3, padding: 20, backgroundColor: 'white', marginTop: 120,
            marginLeft: 15, marginRight: 15, borderRadius: 20, shadowColor: 'gray', shadowOffset: {
                height: 3, width: 0
            }, shadowOpacity: '0.5', shadowRadius: 50, elevation: 40,
        }}>
            
            <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity onPress={() => {
                    props.close(false)
                }}>
                    <MaterialIcons name='close' size={24} />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', }}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', width: '100%',
                    paddingLeft: 5, paddingRight: 5, alignItems: 'center'
                }}>
                    <Text style={{ margin: 10, fontSize: 18, fontFamily: 'PlusJakartaSans', fontWeight: 'bold' }}>Notifications</Text>
                    <TouchableOpacity><Text style={{ margin: 10, fontSize: 12, color: 'red' }}>Mark as all read</Text></TouchableOpacity>
                </View>
                <View style={{ borderWidth: 0.5, borderColor: 'rgb(220,220,220)', width: '90%' }}></View>
            </View>
            {
                Notifications.length > 0 &&
                <ScrollView>
                    {
                        Notifications.map((notification,i) => {
                            return (
                                <View key={i} style={{ padding: 10, alignItems: 'center', paddingHorizontal: 20, opacity: notification.read ? .3 : 1 }}>
                                    <Text style={{ fontWeight: 'bold', margin: 2, width: '100%' }}>{notification.title}</Text>
                                    <Text style={{ color: 'gray', margin: 2, width: '100%' }}>{notification.visibleText}</Text>
                                    <View style={{ borderWidth: 0.5, width: '100%', borderColor: 'rgb(220,220,220)', marginTop: 10 }}></View>
                                </View>
                            );
                        })
                    }
                </ScrollView>
            }
            {
                Notifications.length <= 0 &&
                <View style={{ justifyContent: 'center', alignItems: 'center', height: '70%' }}>
                    <SvgXml xml={NoNotification} height="40" width="40" />
                    <Text style={{
                        color: 'rgb(200,200,200)',
                        marginTop: 10,
                        fontFamily: 'PlusJakartaSans'
                    }}>No Notifications</Text>
                </View>
            }

        </View>
    );
};

export default NotificationBar;