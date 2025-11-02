import { View, Image, Text } from 'react-native';
import React from 'react';
import Input from '@/components/Input';
import { Link, router } from 'expo-router';
import Button from '@/components/Button';
import { useAuthStore } from '@/store/useAuthStore';

const Register = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const { signUp } = useAuthStore();

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      router.push('/(auth)/register/details');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View className="mt-6 items-center justify-center p-6">
      <Image source={require('@/assets/icon.png')} className="h-32 w-32" />

      <Text className="mt-8 px-4 text-center font-montserrat-extrabold text-3xl color-primary">
        Welcome {'\n'} to {'\n'} CommunityBankX!
      </Text>

      {/* Inputs */}
      <Input placeholder="Email" value={email} onChangeText={setEmail} />

      <Input placeholder="Create password" value={password} onChangeText={setPassword} isPassword />

      <Button btnText="Register" onPress={handleSignUp} />

      <Link href={'/login'} className="mt-3 font-inter-semibold text-secondary">
        Already registered? Log In
      </Link>
    </View>
  );
};

export default Register;
