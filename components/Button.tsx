import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Button: React.FC<{
  onPress?: () => void;
  btnText?: string;
}> = ({ btnText, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="mt-8 w-full items-center justify-center rounded-full bg-primary px-3 py-3">
      <Text className="font-montserrat-bold text-2xl text-background">{btnText}</Text>
    </TouchableOpacity>
  );
};

export default Button;
