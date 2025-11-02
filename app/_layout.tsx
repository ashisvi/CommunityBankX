import '../global.css';
import { Redirect, SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';

import { useEffect } from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const { fetchProfile, user, loading, signOut } = useAuthStore();

  const [fontsLoaded] = useFonts({
    Montserrat_Regular: require('@/assets/fonts/Montserrat-Regular.ttf'),
    Montserrat_SemiBold: require('@/assets/fonts/Montserrat-SemiBold.ttf'),
    Montserrat_Bold: require('@/assets/fonts/Montserrat-Bold.ttf'),
    Montserrat_ExtraBold: require('@/assets/fonts/Montserrat-ExtraBold.ttf'),
    Inter_Regular: require('@/assets/fonts/Inter-Regular.ttf'),
    Inter_Medium: require('@/assets/fonts/Inter-Medium.ttf'),
    Inter_SemiBold: require('@/assets/fonts/Inter-SemiBold.ttf'),
    Inter_Bold: require('@/assets/fonts/Inter-Bold.ttf'),
  });

  useEffect(() => {
    fetchProfile();
    if (fontsLoaded && loading) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fetchProfile, loading]);

  return (
    <View className="h-full bg-primary">
      <Stack
        screenOptions={{
          statusBarStyle: 'dark',
          headerShown: false,
        }}>
        <Stack.Screen name="(auth)" options={{ gestureEnabled: false }} />
        <Stack.Screen name="(app)" options={{ gestureEnabled: false }} />
      </Stack>
      {user ? <Redirect href="/(tabs)" /> : <Redirect href="/(auth)/login" />}
    </View>
  );
}
