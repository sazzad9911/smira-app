// import { createDrawerNavigator } from "react-navigation-drawer";
// import { createAppContainer } from "react-navigation";

import DrawerMenu from "../components/DrawerMenu";
import Account from "../screens/Account";
import Rooms from "../screens/Rooms";
import PlansList from "../screens/PlansList";
import { Dimensions } from "react-native";
import RoomDetail from "../screens/RoomDetail";
import WishList from "../screens/WishList";
import MemberShipInfo from "../screens/MemberShipInfo";
import PopularHotels from "../screens/PopularHotels";
import MemberShipOnboarding from "../screens/MembershipOnboarding";
import Search from "../screens/Search";
import Home from "../screens/Home";
import Coupons from "../screens/Coupons";
import Settings from "../screens/Settings"
import SettingsHeader from '../components/SettingsHeader';
import Membership from "../screens/Membership";
import CheckOut from "../screens/CheckOut";

// const Drawer =
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Hotel from './../screens/Hotel';
import RedeemHistory from "../screens/RedeemHistory";
import ForgetPassword from "../screens/ForgetPassword";
import Language from './../screens/Language';
import TellToUs from "../screens/TellToUs";
import HomeHeader from "../components/HomeHeader";
import ConfirmMessage from "../screens/ConfirmMessage";


const Drawer = createDrawerNavigator();
export default function DrawerApp() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            width: '90%',
          },
          drawerType: 'slide'
        }}
        drawerContent={({ navigation }) => <DrawerMenu navigation={navigation} />}>
        <Drawer.Screen options={{ header:(props)=><HomeHeader {...props}/> }} name="Home" component={Home} />
        <Drawer.Screen options={{ headerShown: false }} name="Search" component={Search} />
        <Drawer.Screen options={{ headerShown: false }} name="PopularHotels" component={PopularHotels} />
        <Drawer.Screen options={{ headerShown: false }} name="Coupons" component={Coupons} />
        <Drawer.Screen options={{ headerShown: false }} name="Account" component={Account} />
        <Drawer.Screen options={{ headerShown: false }} name="MemberShipOnboarding" component={MemberShipOnboarding} />
        <Drawer.Screen options={{ headerShown: false }} name="MemberShipInfo" component={MemberShipInfo} />
        <Drawer.Screen options={{ headerShown: false }} name="PlansList" component={PlansList} />
        <Drawer.Screen options={{ headerShown: false }} name="RoomDetail" component={RoomDetail} />
        <Drawer.Screen options={{ headerShown: false }} name="WishList" component={WishList} />
        <Drawer.Screen options={{ headerShown: false }} name="Rooms" component={Rooms} />
        <Drawer.Screen options={{ header: (props) => <SettingsHeader {...props} /> }} name="Settings" component={Settings} />
        <Drawer.Screen options={{ header: (props) => <SettingsHeader {...props} /> }} name="Choose Your Membership" component={Membership}/>
        <Drawer.Screen options={{ header: (props) => <SettingsHeader {...props} /> }} name="Checkout" component={CheckOut}/>
        <Drawer.Screen options={{ header: (props) => <SettingsHeader {...props} /> }} name="Redeem History" component={RedeemHistory}/>
        <Drawer.Screen options={{ header: (props) => <SettingsHeader {...props} /> }} name="Forget Password" component={ForgetPassword}/>
        <Drawer.Screen options={{ header: (props) => <SettingsHeader {...props} /> }} name="Language" component={Language}/>
        <Drawer.Screen options={{ header: (props) => <SettingsHeader {...props} /> }} name="Talk To Us" component={TellToUs}/>
        <Drawer.Screen options={{ header: (props) => <SettingsHeader {...props} /> }} name="Confirm Message" component={ConfirmMessage}/>
        <Drawer.Screen options={{headerShown: false }} name="Hotel" component={Hotel}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
