import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const index = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Link href="/register" className="m-3 text-xl text-secondary">
        Register
      </Link>
      <Link href="/login" className="m-3 text-xl text-secondary">
        Log In
      </Link>
    </View>
  );
};

export default index;
