import React, { useRef, useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import Button from '@/components/Button';

const INPUT_COUNT = 6;

const OTPScreen = () => {
  const inputsRef = useRef<Array<TextInput | null>>([]);
  const [code, setCode] = useState<string[]>(Array(INPUT_COUNT).fill(''));

  const focusInput = (index: number) => {
    if (index >= 0 && index < INPUT_COUNT) inputsRef.current[index]?.focus();
  };

  const handleChangeText = (text: string, index: number) => {
    // allow only digits
    const digits = text.replace(/\D/g, '');

    // If user pasted multiple digits, spread them across inputs starting at index
    if (digits.length > 1) {
      const newCode = [...code];
      for (let i = 0; i < digits.length && index + i < INPUT_COUNT; i++) {
        newCode[index + i] = digits[i];
      }
      setCode(newCode);

      const nextIndex = Math.min(INPUT_COUNT - 1, index + digits.length);
      // if we've filled all, focus last; else focus the next empty slot
      const firstEmpty = newCode.findIndex((c, i) => i > index && c === '');
      if (firstEmpty !== -1) focusInput(firstEmpty);
      else if (index + digits.length < INPUT_COUNT) focusInput(index + digits.length);
      else inputsRef.current[INPUT_COUNT - 1]?.blur();
      return;
    }

    // Single character entry (normal typing)
    const newCode = [...code];
    newCode[index] = digits; // digits is '' or single digit
    setCode(newCode);

    if (digits && index < INPUT_COUNT - 1) {
      // move to next input
      focusInput(index + 1);
    }
  };

  const handleKeyPress = ({ nativeEvent }: { nativeEvent: { key: string } }, index: number) => {
    if (nativeEvent.key === 'Backspace') {
      // If current box has a value, clear it (and stay)
      if (code[index]) {
        const newCode = [...code];
        newCode[index] = '';
        setCode(newCode);
        return;
      }

      // If current is empty, move focus to previous and clear it
      const prev = index - 1;
      if (prev >= 0) {
        const newCode = [...code];
        newCode[prev] = '';
        setCode(newCode);
        focusInput(prev);
      }
    }
  };

  const combinedCode = code.join('');

  return (
    <View className="bg-background">
      <View className="-mt-28 flex-1 justify-center p-6">
        <View className="mb-12 items-center">
          <Image source={require('@/assets/icon.png')} className="h-32 w-32" />
        </View>

        <View className="mb-8">
          <Text className="mb-2 font-montserrat-extrabold text-3xl color-primary">Verify OTP</Text>
          <Text className="text-sm text-neutral">
            Enter the 6-digit code sent to your phone number
          </Text>
        </View>

        <View className="mb-6 flex-row justify-between">
          {Array.from({ length: INPUT_COUNT }).map((_, i) => (
            <TextInput
              key={i}
              ref={(ref) => (inputsRef.current[i] = ref)}
              value={code[i]}
              onChangeText={(text) => handleChangeText(text, i)}
              onKeyPress={(e) => handleKeyPress(e, i)}
              keyboardType="number-pad"
              maxLength={1}
              caretHidden
              placeholder="•"
              clearTextOnFocus
              className="h-14 w-12 rounded-lg border border-neutral/20 bg-surface text-center font-montserrat-bold text-xl placeholder:text-primary"
              importantForAutofill="no"
              autoCorrect={false}
              autoCapitalize="none"
            />
          ))}
        </View>

        <View className="mb-6 items-center">
          <Text className="text-sm text-neutral">
            Didn't receive a code?{' '}
            <Text className="font-inter-semibold text-secondary">Resend</Text>
          </Text>
        </View>

        <Button
          btnText="Verify"
          onPress={() => {
            // Example: you can access the full code via `combinedCode`
            // Wire navigation/verification here
            console.log('Verify code:', combinedCode);
          }}
        />

        <View className="mt-4 items-center">
          <Text className="text-center text-xs text-neutral">
            By verifying you accept our <Text className="text-secondary">Terms</Text> and{' '}
            <Text className="text-secondary">Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OTPScreen;
