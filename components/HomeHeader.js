import React,{ useState} from 'react';
import { View, TouchableOpacity, Modal,Platform,Image,Text} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons'
import NotificationBar from './NotificationBar';
import logo from '../assets/logo.png'
import {Notification,Icon} from '../components/Icon'
import {SvgXml} from 'react-native-svg'
import {appIcon} from './Icon'
import { useSelector } from 'react-redux';
import {postData, url} from '../action'
import { getAuth } from 'firebase/auth';
import app from './../firebase';

const HomeHeader = (props) => {
    const [ShowNotifications, setShowNotifications] = useState(false);
    const notification= useSelector(state => state.notification)
    const auth = getAuth(app);
    const [AllMessages,setAllMessages] = useState();

    const navigation = props.navigation;
    React.useEffect(() => {
        setAllMessages(null)
        postData(url + '/getData',{ 
            tableName: 'notification',
            condition:`uid='${auth.currentUser.uid}' AND visible IS NULL`
        }).then((res) => {
            console.log(notification); 
            if(Array.isArray(res)&& res.length > 0){
              return  setAllMessages(res)
            }
            console.log(res.message)
        })
    },[notification])
   
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
            <SvgXml  xml={appIcon}/> 
            <TouchableOpacity  onPress={() => {
                setShowNotifications(true)
            }}>
                <SvgXml xml={Notification} height="25" width="25"/>
                {
                    AllMessages?(
                        <View style={{
                    backgroundColor:'white',
                    borderRadius:10,
                    top:-10,
                    right:5,
                    position: 'absolute',
                    height:20, width:20,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{
                    color:'black'
                }}>{AllMessages.length}</Text>
                </View>
                    ):(<></>)
                }
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