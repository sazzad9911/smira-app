import { SafeAreaView, StyleSheet, Dimensions, StatusBar,View,Text } from 'react-native';
import React from 'react';
import DrawerApp from './routes/Drawer';
import StackNavigation from './routes/StackNavigation';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux'
import store from './store';
import {useFonts } from '@expo-google-fonts/inter';

const App = () => {
  const window = Dimensions.get('window')
  let [fontsLoaded] = useFonts({
    'PlusJakartaSans':require('./assets/fonts/PlusJakartaSans.ttf'),
    'PlusJakartaSansBold':require('./assets/fonts/PlusJakartaSansBold.ttf')
  });

  if (!fontsLoaded) {
    return <Text>Loading..</Text>;
  }

  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
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