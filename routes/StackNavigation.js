import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from './../screens/Onboarding';
import SignUp from './../screens/SignUp';
import SignIn from './../screens/SignIn';
import DrawerApp from './Drawer';
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import AnimatedLoader from 'react-native-animated-loader'
import { useSelector, useDispatch } from 'react-redux'
const Stack = createStackNavigator();
const window = Dimensions.get('window')

const StackNavigation = () => {


    return (
        <NavigationContainer>
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

const Dashboard = ({ navigation }) => {
    const bottomSheetRef = React.useRef();
    const bottomSheet = useSelector(state => state.pageSettings.bottomSheet)
    const loader=useSelector(state => state.pageSettings.loader)
    const dispatch = useDispatch()

    // variables
    const snapPoints = React.useMemo(() => ['10%', '30%', '60%', '80%', '95%'], []);
    const [open, setOpen] = React.useState(1)

    // callbacks
    const handleSheetChanges = React.useCallback((index) => {
        if (index === -1 || index == false) {
            dispatch(setBottomSheet(null))
        }
    }, []);
    return (
        <View style={{ width: window.width, height: window.height }}>
            <DrawerApp />
            <BottomSheet
                ref={bottomSheetRef}
                index={bottomSheet ? 1 : -1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                enableHandlePanningGesture={true}
                enablePanDownToClose={true}
            >
                <BottomSheetScrollView>
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