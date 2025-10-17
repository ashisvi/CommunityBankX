import '../global.css';
import { SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';

import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { Text } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Montserrat_Regular: require('@/assets/fonts/Montserrat-Regular.ttf'),
    Montserrat_SemiBold: require('@/assets/fonts/Montserrat-SemiBold.ttf'),
    Montserrat_Bold: require('@/assets/fonts/Montserrat-Bold.ttf'),
    Montserrat_ExtraBold: require('@/assets/fonts/Montserrat-ExtraBold.ttf'),
    Inter_Regular: require('@/assets/fonts/Inter-Regular.ttf'),
    Inter_Semibold: require('@/assets/fonts/Inter-SemiBold.ttf'),
    Inter_Bold: require('@/assets/fonts/Inter-Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
