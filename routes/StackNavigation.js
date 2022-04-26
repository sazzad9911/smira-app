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

    return (
        <NavigationContainer theme={pageSettings.darkMode ? DarkTheme : DefaultTheme}>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Onboarding" component={Onboarding} />
                <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
                <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
                <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={Dashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigation;
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { setBottomSheet } from '../action'
import { Category } from '../components/Bottom';
import HotelBooking from '../components/HotelBooking';
import ShortBy from '../components/ShortBy';
import Filter from '../components/Filter';
import { backgroundColor,subTextColor } from './../assets/color';

const Dashboard = ({ navigation }) => {
    const bottomSheetRef = React.useRef();
    const bottomSheet = useSelector(state => state.pageSettings.bottomSheet)
    const loader = useSelector(state => state.pageSettings.loader)
    const dispatch = useDispatch()
    const pageSettings = useSelector(state => state.pageSettings)

    // variables
    const snapPoints = React.useMemo(() => ['30%', '30%', '50%', '50%', '80%', '95%'], []);
    const [open, setOpen] = React.useState(1)

    // callbacks
    const handleSheetChanges = React.useCallback((index) => {
        if (index === -1 || index == false) {
            dispatch(setBottomSheet(null))
        }
    }, []);
    return (
        <View style={{
            width: window.width, height: window.height,
            backgroundColor: backgroundColor(pageSettings.darkMode)
        }}>
            <DrawerApp />
            <BottomSheet backgroundStyle={{ backgroundColor: backgroundColor(pageSettings.darkMode) }}
                handleIndicatorStyle={{backgroundColor: subTextColor(pageSettings.darkMode)}}
                ref={bottomSheetRef}
                index={bottomSheet == 'filter' ? 2 : bottomSheet == 'category' ?
                    3 : bottomSheet == 'calendar' ? 5 : bottomSheet == 'shortBy' ? 1 : -1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                enableHandlePanningGesture={true}
                enablePanDownToClose={true}
            >
                <BottomSheetScrollView style={{ backgroundColor: backgroundColor(pageSettings.darkMode) }}>
                    {
                        bottomSheet == 'category' ? (
                            <Category navigation={navigation}
                                close={handleSheetChanges} />
                        ) : bottomSheet == 'calendar' ? (
                            <HotelBooking navigation={navigation} />
                        ) : bottomSheet == 'filter' ? (
                            <Filter close={handleSheetChanges} />
                        ) : bottomSheet == 'shortBy' ? (
                            <ShortBy />
                        ) : (
                            <Text style={{ textAlign: 'center' }}>Nothing</Text>
                        )
                    }
                </BottomSheetScrollView>
            </BottomSheet>
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