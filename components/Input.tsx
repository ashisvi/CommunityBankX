import { Text, TextInput, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Input: React.FC<{
  value?: string;
  onChange?: () => {};
  className?: string;
  placeholder?: string;
  isPassword?: boolean;
}> = ({ value, onChange, className, placeholder, isPassword = false }) => {
  return (
    <View
      className={`flex-row justify-between items-end mt-8 w-full rounded-[26px] border border-neutral bg-surface px-5 py-2 ${className}`}>
      <TextInput
        placeholder={placeholder}
        className={'flex-1 font-inter-medium text-xl color-primary'}
        value={value}
        onChange={onChange}
        secureTextEntry={isPassword}
      />
      {isPassword && <Link href={"./forget-password"} className="font-inter-semibold text-[15px] text-secondary mb-2">Forgot password?</Link>}
    </View>
  );
};

export default Input;
