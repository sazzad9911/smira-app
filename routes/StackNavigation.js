import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './../screens/Onboarding';
import SignUp from './../screens/SignUp';
import SignIn from './../screens/SignIn';
import DrawerApp from './Drawer';
import { View, Text, Dimensions, TouchableOpacity,
     ScrollView ,StyleSheet,Modal,Image,ActivityIndicator} from 'react-native'
import AnimatedLoader from 'react-native-animated-loader'
import { useSelector, useDispatch } from 'react-redux'
const Stack = createStackNavigator();
import { getData, storeData } from '../screens/WishList'
const window = Dimensions.get('window')
import { setPageSettings } from '../action';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import SettingsHeader from '../components/SettingsHeader';
import ForgetPassword from "../screens/ForgetPassword";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../firebase'
import Membership from '../screens/Membership';
import {Header} from '../screens/CategorySingleRoute';

const StackNavigation = () => {
    const pageSettings = useSelector(state => state.pageSettings)
    const dispatch = useDispatch()
    const [user, setUser] = React.useState(null)
    React.useEffect(() => {
        const auth = getAuth(app);
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                //navigation.navigate('Dashboard')
            } else {
                //navigation.navigate('Onboarding')
                setUser('ok')
            }
        })
    }, [])
    React.useEffect(() => {
        getData('pageSettings').then((data) => {
            if (!data) {
                storeData('pageSettings', pageSettings)
            } else {
                //console.log(data);
                //storeData('pageSettings', pageSettings)
                dispatch(setPageSettings(data));
            }
        })
    }, [])
    const theme = { //like this
        colors: {
            background: "transparent",
        },
    };
    if (!user) {
        return (
            <AnimatedLoader
                visible={true}
                overlayColor="rgba(255,255,255,0.75)"
                source={require("../assets/Loading.json")}
                animationStyle={{
                    height: 100, width: 100,
                }}
                speed={1}
            >
                <Text>Loading...</Text>
            </AnimatedLoader>
        )
    } else if (user == 'ok') {
        return (
            <NavigationContainer theme={theme}>
                <Stack.Navigator>
                    <Stack.Screen options={{ headerShown: false }} name="Onboarding" component={Onboarding} />
                    <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
                    <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
                    <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={Dashboard} />
                    <Stack.Screen options={{ header: (props) => <SettingsHeader {...props} /> }} name="Forget Password" component={ForgetPassword} />
                    <Stack.Screen options={{ header: (props) => <SettingsHeader {...props} /> }} name="Choose Your Membership" component={Membership} />
                    <Stack.Screen options={{ header: (props) => <SettingsHeader {...props} /> }} name="Checkout" component={CheckOut} />
                    <Stack.Screen options={{ header: (props) => <SettingsHeader {...props} /> }} name="Language" component={Language} />
                    <Stack.Screen options={{ header: (props) => <SettingsHeader {...props} /> }} name="Reset Password" component={ResetPassword} />
                    <Stack.Screen options={{ header: (props) => <SettingsHeader {...props} /> }} name="Redeem History" component={RedeemHistory} />
                    <Stack.Screen options={{header:(props)=><Header title='Our Brands' {...props}/>}} name='OurBrand' component={OurBrand} />
                </Stack.Navigator>
            </NavigationContainer>
        ) 
    } else if (user.uid) {
        return (
            <NavigationContainer theme={theme}>
                <Stack.Navigator>
                    <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={Dashboard} />
                    <Stack.Screen options={{ headerShown: false }} name="Onboarding" component={Onboarding} />
                    <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
                    <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
                    <Stack.Screen options={{ header: (props) => <SettingsHeader {...props} /> }} name="Forget Password" component={ForgetPassword} />
                    <Stack.Screen options={{ header: (props) => <SettingsHeader {...props} /> }} name="Choose Your Membership" component={Membership} />
                    <Stack.Screen options={{ header: (props) => <SettingsHeader {...props} /> }} name="Checkout" component={CheckOut} />
                    <Stack.Screen options={{ header: (props) => <SettingsHeader {...props} /> }} name="Language" component={Language} />
                    <Stack.Screen options={{ header: (props) => <SettingsHeader {...props} /> }} name="Reset Password" component={ResetPassword} />
                    <Stack.Screen options={{ header: (props) => <SettingsHeader {...props} /> }} name="Redeem History" component={RedeemHistory} />
                    <Stack.Screen options={{header:(props)=><Header title='Our Brands' {...props}/>}} name='OurBrand' component={OurBrand} />
                    <Stack.Screen options={{ header: (props) => <SettingsHeader {...props} /> }} name="Booking" component={Booking} />
                    <Stack.Screen options={{ headerShown: false }} name="Hotel" component={Hotel} />
                    <Stack.Screen options={{ header: (props) => <SettingsHeader {...props} /> }} name="Outlets" component={Outlets} />
                </Stack.Navigator>
            </NavigationContainer>
        ); 
    }
};

export default StackNavigation;
import { setBottomSheet } from '../action'
import BottomDrawer from './BottomDrawer';
import { backgroundColor, subTextColor } from './../assets/color';
import CheckOut from './../screens/CheckOut';
import Language from './../screens/Language';
import ResetPassword from './../screens/ResetPassword';
import RedeemHistory from '../screens/RedeemHistory';
import OurBrand from '../screens/OurBrand';
import Search from './../screens/Search';
import Booking from './../screens/Booking';
import Hotel from './../screens/Hotel';
import Outlets from './../screens/Outlets';
import { AntDesign } from '@expo/vector-icons';
import {postData, url,dateDifference} from '../action'

const Dashboard = ({ navigation }) => {
    const bottomSheetRef = React.useRef();
    const bottomSheet = useSelector(state => state.pageSettings.bottomSheet)
    const loader = useSelector(state => state.pageSettings.loader)
    const dispatch = useDispatch()
    const pageSettings = useSelector(state => state.pageSettings)
    const [FlashVisible, setFlashVisible]= React.useState(false)
    const [FlashImage,setFlashImage]= React.useState(null)
    const [FlashUser,setFlashUser]= React.useState()
    const [FlashBanner,setFlashBanner]= React.useState(null)
    const [NewAction,setNewAction]= React.useState(false)
    const auth = getAuth(app);

    React.useEffect(() => {
        postData(url +'/getData',{
          tableName: 'flash_banner',
          orderColumn:'date'
        }).then(res => {
          if(Array.isArray(res) && res.length > 0){
           setFlashBanner(res[0])
          }
        })
      },[NewAction])  
      React.useEffect(() => {
        if(FlashBanner){
            postData(url + '/getData', {
                tableName: 'flash_user',
                condition:`uid='${auth.currentUser.uid}' AND flash_id=${FlashBanner.id}`
              }).then(res => {
                if(Array.isArray(res) && res.length >0){
                    setFlashVisible(false)
                }else{
                    if(FlashBanner.validity && dateDifference(new Date(),FlashBanner.validity)>0){
                        setFlashVisible(true)
                    }else{
                        setFlashVisible(false) 
                    }
                }
              })
        }
      },[FlashBanner])

    // variables
    const calender = React.useMemo(() => ['10%', '93%'], []);
    const category = React.useMemo(() => ['10%', '45%'], []);
    const filter = React.useMemo(() => ['10%', '60%'], []);
    const shortBy = React.useMemo(() => ['10%', '30%'], []);
    const [open, setOpen] = React.useState(1)

    // callbacks

    return (
        <View style={{
            width: window.width, height: '100%',
            backgroundColor: backgroundColor(pageSettings.darkMode)
        }}>
            <DrawerApp />
            {
                bottomSheet == 'calendar' ? (
                    <BottomDrawer snapPoints={calender} navigation={navigation} />
                ) : bottomSheet == 'category' ? (
                    <BottomDrawer snapPoints={category} navigation={navigation} />
                ) : bottomSheet == 'filter' ? (
                    <BottomDrawer snapPoints={filter} navigation={navigation} />
                ) : bottomSheet == 'shortBy' ? (
                    <BottomDrawer snapPoints={shortBy} navigation={navigation} />
                ) :
                    (
                        <View></View>
                    )
            }
            <AnimatedLoader
                visible={loader}
                overlayColor="rgba(255,255,255,0.75)"
                source={require("../assets/Loading.json")}
                animationStyle={{
                    height: 100, width: 100,
                }}
                speed={1}
            >
                <Text>Loading...</Text>
            </AnimatedLoader>
            <Modal animationStyle="fade" transparent={true}
         visible={FlashVisible} onRequestClose={()=>setFlashVisible(!FlashVisible)}>
         <ImageView FlashVisible={FlashVisible} setFlashVisible={setFlashVisible}/>
        </Modal>
        </View>
    )
}
const style = StyleSheet.create({
    outline: {
      borderRadius: 15,
      height: 28, width: 28,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#D8D8D8'
    },
    modalView: {
      height:'100%',
      backgroundColor:'rgba(0, 0, 0, 0.74)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalImage: {
      width:'90%',
      height:'70%',
      backgroundColor:'#f5f5f5'
    },
    modalButton:{
      position: 'absolute',
      bottom:'5%'
    }
})

const ImageView=(props)=>{
    const [image,setImage]= React.useState(null)
    const auth = getAuth(app);
    React.useEffect(() => {
        postData(url + '/getData', {
            tableName: 'flash_banner',
            orderColumn:'date'
        }).then(data =>{
            if(Array.isArray(data) && data.length>0){
               setImage(data[0])
               return
            }
            console.log(data)
        })
    },[])

    return(
      <View style={style.modalView}>
      {
        image?(
            <Image style={style.modalImage} source={{ uri:image.image}}/>
        ):(<ActivityIndicator size="large" color="#FA454B" />)
      }
         <TouchableOpacity style={style.modalButton} onPress={() =>{
            props.setFlashVisible(!props.FlashVisible)
          postData(url + '/setData', {
            auth: auth.currentUser,
            tableName: 'flash_user',
            columns: ['uid','flash_id'],
            values: [auth.currentUser.uid,image.id]
          }).then(data =>{
            console.log(data)
            //setNewAction(!NewAction)
          })
         }}>
         <AntDesign name="closecircleo" size={64} color="white" />
         </TouchableOpacity>
    </View>
    )
}