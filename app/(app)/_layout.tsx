import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';

const AppLayout = () => {
  return (
    <GestureHandlerRootView className="flex-1">
      <Stack />
    </GestureHandlerRootView>
  );
};

export default AppLayout;
