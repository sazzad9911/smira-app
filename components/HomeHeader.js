import React,{ useState} from 'react';
import { View, TouchableOpacity, Modal} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons'
import NotificationBar from './NotificationBar';

const HomeHeader = (props) => {
    const [ShowNotifications, setShowNotifications] = useState(false);
    
    const navigation = props.navigation;
    return (
        <View style={{
            minHeight: 50, backgroundColor: '#FA454B', justifyContent: 'space-between',
            flexDirection: 'row', alignItems: 'center', paddingLeft: 15, paddingRight: 15
        }}>
            <TouchableOpacity onPress={() => {
                navigation.openDrawer()
            }}>
                <Feather name="menu" size={24} color="white" />
            </TouchableOpacity>
            <Ionicons name='logo-apple' size={25} color="white" />
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