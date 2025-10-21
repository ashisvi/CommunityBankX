import { Text, TextInput, TextInputProps, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { theme } from '@/tailwind.config';

interface InputProps {
  value?: string;
  onChange?: () => {};
  className?: string;
  placeholder?: string;
  isPassword?: boolean;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  className,
  placeholder,
  isPassword = false,
  ...props
}) => {
  const [passwordHidden, setPasswordHidden] = React.useState<boolean>(false);

  return (
    <View
      className={`mt-8 w-full flex-row items-center justify-between rounded-[26px] border border-neutral/30 bg-surface px-4 py-1 ${className}`}>
      <TextInput
        placeholder={placeholder}
        className={'flex-1 font-inter-medium text-lg color-primary'}
        value={value}
        onChange={onChange}
        secureTextEntry={isPassword && passwordHidden}
        {...props}
      />
      {/* {isPassword && <Link href={"./forget-password"} className="font-inter-semibold text-sm text-secondary mb-2">Forgot password?</Link>} */}

      {isPassword && (
        <Ionicons
          name={passwordHidden ? 'eye-off-outline' : 'eye-outline'}
          size={24}
          className="mr-2"
          color={theme?.extend?.colors?.secondary}
          onPress={() => setPasswordHidden(!passwordHidden)}
        />
      )}
    </View>
  );
};

export default Input;
