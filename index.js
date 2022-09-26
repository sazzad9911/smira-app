import { registerRootComponent } from 'expo';
import {AppRegistry} from 'react-native'
import messaging from '@react-native-firebase/messaging';
import {postData,url} from './action'
import app from './firebase';
import { getAuth } from 'firebase/auth';
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
    // const auth= getAuth(app)
    // postData(url + '/setData',{
    //     auth: auth.currentUser,
    //     tableName:'notification',
    //     columns:['name','description','uid'],
    //     values: [remoteMessage.notification.title,remoteMessage.notification.body,auth.currentUser.uid]
    // }).then(response =>{
    //     console.log(response)
    // })
  });
  

import App from './App';



//AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
