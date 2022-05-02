import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './../screens/Onboarding';
import SignUp from './../screens/SignUp';
import SignIn from './../screens/SignIn';
import DrawerApp from './Drawer';
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import AnimatedLoader from 'react-native-animated-loader'
import { useSelector, useDispatch } from 'react-redux'
const Stack = createStackNavigator();
import { getData, storeData } from '../screens/WishList'
const window = Dimensions.get('window')
import { setPageSettings } from '../action';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import SettingsHeader from '../components/SettingsHeader';
import ForgetPassword from "../screens/ForgetPassword";

const StackNavigation = () => {
    const pageSettings = useSelector(state => state.pageSettings)
    const dispatch = useDispatch()
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
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Onboarding" component={Onboarding} />
                <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
                <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
                <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={Dashboard} />
                <Stack.Screen options={{ header: (props) => <SettingsHeader {...props} /> }} name="Forget Password" component={ForgetPassword} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigation;
import { setBottomSheet } from '../action'
import BottomDrawer from './BottomDrawer';
import { backgroundColor, subTextColor } from './../assets/color';

const Dashboard = ({ navigation }) => {
    const bottomSheetRef = React.useRef();
    const bottomSheet = useSelector(state => state.pageSettings.bottomSheet)
    const loader = useSelector(state => state.pageSettings.loader)
    const dispatch = useDispatch()
    const pageSettings = useSelector(state => state.pageSettings)

    // variables
    const calender = React.useMemo(() => ['10%', '95%'], []);
    const category = React.useMemo(() => ['10%', '45%'], []);
    const filter = React.useMemo(() => ['10%', '60%'], []);
    const shortBy = React.useMemo(() => ['10%', '30%'], []);
    const [open, setOpen] = React.useState(1)

    // callbacks
   
    return (
        <View style={{
            width: window.width, height: window.height,
            backgroundColor: backgroundColor(pageSettings.darkMode)
        }}>
            <DrawerApp />
            {
                bottomSheet=='calendar'?(
                    <BottomDrawer snapPoints={calender} navigation={navigation}/>
                ): bottomSheet == 'category'?(
                    <BottomDrawer snapPoints={category} navigation={navigation}/>
                ):bottomSheet == 'filter' ?(
                    <BottomDrawer snapPoints={filter} navigation={navigation}/>
                ):bottomSheet == 'shortBy' ?(
                    <BottomDrawer snapPoints={shortBy} navigation={navigation}/>
                ):
                (
                    <View></View>
                )
            }
            <AnimatedLoader
                visible={loader}
                overlayColor="rgba(255,255,255,0.75)"
                source={require("../assets/9997-infinity-loader.json")}
                animationStyle={{
                    height: 100, width: 100,
                }}
                speed={1}
            >
                <Text>Loading...</Text>
            </AnimatedLoader>
        </View>
    )
}