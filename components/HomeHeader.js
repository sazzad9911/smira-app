import React,{ useState} from 'react';
import { View, TouchableOpacity, Modal,Platform,Image} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons'
import NotificationBar from './NotificationBar';
import logo from '../assets/logo.png'

const HomeHeader = (props) => {
    const [ShowNotifications, setShowNotifications] = useState(false);

    const navigation = props.navigation;
   
    return (
        <View style={{
             backgroundColor: '#FA454B', justifyContent: 'space-between',
            flexDirection: 'row', alignItems: 'center', paddingLeft: 15, paddingRight: 15,
            height:Platform.OS=='ios'? 100: 50,paddingTop:Platform.OS=='ios'?30:0
        }}>
            <TouchableOpacity onPress={() => {
                navigation.openDrawer()
            }}>
                <Feather name="menu" size={24} color="white" />
            </TouchableOpacity>
            <Image style={{
                width:25,
                height:25,
            }} source={logo}/>
            <TouchableOpacity onPress={() => {
                setShowNotifications(true)
            }}>
                <Ionicons name="ios-notifications-outline" size={24} color="white" />
            </TouchableOpacity>
            <Modal
                animationType='fade'
                transparent={true}
                visible={ShowNotifications}
                onRequestClose={() => {
                    setShowNotifications(false)
                }}
            >
                <NotificationBar close={setShowNotifications}/>
            </Modal>
        </View>
    );
};

export default HomeHeader;