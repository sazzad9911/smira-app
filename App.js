
import { SafeAreaView, StyleSheet, Dimensions, StatusBar } from 'react-native';
import React from 'react';
import DrawerApp from './routes/Drawer';
import StackNavigation from './routes/StackNavigation';
import 'react-native-gesture-handler';
const App = () => {
  const window = Dimensions.get('window')
  return (
   <StackNavigation/>
  );
};

export default App;

const styles = StyleSheet.create({
  AppContainer: {
    height: '100%',
    width: '100%',
    paddingTop: 25
  },
  SafeAppContainer: {
    height: '100%',
    width: '100%',
  },
})