import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { useFonts } from '@use-expo/font';
import AppLoading from 'expo-app-loading';
import { StatusBar, View } from 'react-native';
import AppNavigator from './src/AppNavigator';
import AppProvider from './src/store';


export default function App () {
  const [loaded] = useFonts({
    // WorkSans: require('./assets/fonts/Work-Sans.ttf'),
  })

  return !loaded ? (
    <AppLoading/>
  ) : (
    <AppProvider>
      <AppNavigator/>
    </AppProvider>
  )
}
