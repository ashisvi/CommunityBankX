import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

const TabBarIcon: React.FC<{
  name: string;
  label: string;
  color: string;
  focused: boolean;
  size: number;
}> = ({ name, label, color, focused, size }) => (
  <View className="">
    <View
      className={`h-[38px] w-[70px] items-center justify-center rounded-full px-3 py-2 ${focused && 'bg-secondary/15'}`}>
      <Ionicons name={name} size={size} color={color} />
    </View>
    <Text
      className={`text-center font-inter-semibold text-[0.95rem] ${focused ? 'text-secondary' : 'text-neutral'}`}>
      {label}
    </Text>
  </View>
);

export default TabBarIcon;
