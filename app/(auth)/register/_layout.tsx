import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { Container } from '@/components/Container';

const RegisterLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default RegisterLayout;
