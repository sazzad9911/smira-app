import React,{ useState} from 'react';
import { View, TouchableOpacity,Dimensions, Text } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'

const NotificationBar = (props) => {
    const [Notifications, setNotifications] = useState([

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
                    paddingLeft: 10, paddingRight: 10, alignItems: 'center'
                }}>
                    <Text style={{ margin: 10, fontSize: 18, fontWeight: 'bold' }}>Notifications</Text>
                    <TouchableOpacity><Text style={{ margin: 10, fontSize: 12, color: 'red' }}>Mark as all read</Text></TouchableOpacity>
                </View>
                <View style={{ borderWidth: 0.5, borderColor: 'rgb(220,220,220)', width: '90%' }}></View>
            </View>
            {
                Notifications.length > 0 &&
                <ScrollView>
                    {
                        Notifications.map(notification => {
                            return (
                                <View style={{ padding: 10, alignItems: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', margin: 2, width: '100%' }}>{notification.title()}</Text>
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
                    <FontAwesome5 name="smile" size={35} color="rgb(200,200,200)" />
                    <Text style={{ color: 'rgb(200,200,200)', marginTop: 10 }}>No Notifications</Text>
                </View>
            }

        </View>
    );
};

export default NotificationBar;