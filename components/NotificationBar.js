import React, { useState } from 'react';
import { View, TouchableOpacity, Dimensions, Text, ScrollView, ActivityIndicator } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'
import { SvgXml, Svg, Polygon } from 'react-native-svg'
import { NoNotification } from '../components/Icon'
import { postData, url,setNotifications } from '../action'
import { getAuth } from 'firebase/auth'
import app from '../firebase';
import { useSelector,useDispatch } from 'react-redux';

const NotificationBar = (props) => {
    const [Notifications, setNotification] = useState(null)
    const [action, setAction] = useState(false)
    const { height, width } = Dimensions.get('screen');
    const auth = getAuth(app);
    const notification= useSelector(state => state.notification)
    const dispatch = useDispatch()

    React.useEffect(() => {
        postData(url + '/getData', {
            tableName: 'notification',
            orderColumn: 'date',
        }).then(data => {
            if (Array.isArray(data)) {
                let arr =[]
                data.forEach(dataItem => {
                    if(dataItem.uid == auth.currentUser.uid){
                        arr.push(dataItem)
                    }
                })
                return setNotification(arr)
            }
            console.log(data.message);
        })
    }, [action])
    const readNotification = () => {
        postData(url + '/updateData', {
            "auth": auth.currentUser,
            "tableName": "notification",
            "columns": ['visible'],
            "values":['1'],
            "condition":`uid='${auth.currentUser.uid}'`
           }).then(res=>{
            console.log(res)
            setAction(!action)
            dispatch(setNotifications(!notification))
           })
    }
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
                    <TouchableOpacity onPress={() =>{
                        readNotification()
                    }}><Text style={{ margin: 10, fontSize: 12, color: 'red' }}>Mark as all read</Text></TouchableOpacity>
                </View>
                <View style={{ borderWidth: 0.5, borderColor: 'rgb(220,220,220)', width: '90%' }}></View>
            </View>
            {
                Notifications ? (
                    Notifications.length > 0 ? (
                        <ScrollView>
                            {
                                Notifications.map((notification, i) => {
                                    return (
                                        <View key={i} style={{ padding: 10, alignItems: 'center', paddingHorizontal: 20, opacity: notification.visible ? .3 : 1 }}>
                                            <Text style={{ fontWeight: 'bold', margin: 2, width: '100%' }}>{notification.name}</Text>
                                            <Text style={{ color: 'gray', margin: 2, width: '100%' }}>{notification.description}</Text>
                                            <View style={{ borderWidth: 0.5, width: '100%', borderColor: 'rgb(220,220,220)', marginTop: 10 }}></View>
                                        </View>
                                    );
                                })
                            }
                        </ScrollView>
                    ) : (
                        <View style={{ justifyContent: 'center', alignItems: 'center', height: '70%' }}>
                            <SvgXml xml={NoNotification} height="40" width="40" />
                            <Text style={{
                                color: 'rgb(200,200,200)',
                                marginTop: 10,
                                fontFamily: 'PlusJakartaSans'
                            }}>No Notifications</Text>
                        </View>
                    )

                ) : (
                    <ActivityIndicator size="large" color="#FA454B" />
                )
            }
        </View>
    );
};

export default NotificationBar;