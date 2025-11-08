import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

const sizeClasses = {
  small: 'px-5 py-1',
  medium: 'px-4 py-2 border-2',
  large: 'px-6 py-3 border-2',
};

const textSizeClasses = {
  small: 'text-sm',
  medium: 'text-xl font-montserrat-bold',
  large: 'text-2xl font-montserrat-bold',
};

const Button: React.FC<{
  onPress?: () => void;
  btnText?: string;
  btnType?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}> = ({ btnText, onPress, btnType = 'primary', size = 'medium' }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full items-center justify-center rounded-full border ${sizeClasses[size]} ${btnType === 'secondary' ? 'border-secondary/50 bg-transparent' : 'bg-primary'}`}>
      <Text
        className={`font-montserrat-semibold text-background ${textSizeClasses[size]} ${btnType === 'secondary' ? 'text-secondary' : ''}`}>
        {btnText}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
