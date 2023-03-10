import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'
import React from 'react';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import ShopNavigator from './src/navigators/ShopNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {  
  
  const [loaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  React.useEffect(() => {
    if (loaded){
      SplashScreen.hideAsync();
    }
  }, [loaded])
  
  if (!loaded){
    return null;
  }
  
  return (
    <ShopNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
