import React,{ useState} from 'react';
import { View, TouchableOpacity, Modal,Platform,Image} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons'
import NotificationBar from './NotificationBar';
import logo from '../assets/logo.png'
import {Notification,Icon} from '../components/Icon'
import {SvgXml} from 'react-native-svg'

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
            <SvgXml xml={Icon} width="63"/>
            {/* <TouchableOpacity onPress={() => {
                setShowNotifications(true)
            }}>
                <SvgXml xml={Notification} height="25" width="25"/>
            </TouchableOpacity> */}
            <View style={{width:22}}></View>
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