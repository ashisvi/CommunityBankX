import '../global.css';
import { Redirect, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';

import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthStore } from '@/store/useAuthStore';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const { fetchUser, user, isLoading, signOut } = useAuthStore();

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
    fetchUser();
    if (fontsLoaded && isLoading) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <Stack
        screenOptions={{
          statusBarStyle: 'light',
          headerShown: false,
        }}>
        <Stack.Screen name="(auth)" options={{ gestureEnabled: false }} />
        <Stack.Screen name="(app)" options={{ gestureEnabled: false }} />
      </Stack>
      {user ? <Redirect href="/(app)/" /> : <Redirect href="/(auth)/login" />}
    </SafeAreaView>
  );
}
