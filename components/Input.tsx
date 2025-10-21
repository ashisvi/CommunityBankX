import { Text, TextInput, TextInputProps, View, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { theme } from '@/tailwind.config';

interface InputProps {
  value?: string;
  className?: string;
  placeholder?: string;
  isPassword?: boolean;
  onChangeText?: (e: any) => void;
}

const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  className,
  placeholder,
  isPassword = false,
  ...props
}) => {
  const [passwordHidden, setPasswordHidden] = React.useState<boolean>(false);

  return (
    <KeyboardAvoidingView>
      <View
        className={`mt-8 w-full flex-row items-center justify-between rounded-[26px] border border-neutral/30 bg-surface px-4 py-1 ${className}`}>
        <TextInput
          placeholder={placeholder}
          className={'flex-1 font-inter-medium text-lg color-primary'}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !passwordHidden}
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
    </KeyboardAvoidingView>
  );
};

export default Input;
