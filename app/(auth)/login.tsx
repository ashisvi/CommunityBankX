import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Input from '@/components/Input';
import { Link, useRouter } from 'expo-router';
import Button from '@/components/Button';
import { useAuthStore } from '@/store/useAuthStore';

const Login = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const { user, loading, signIn } = useAuthStore();
  const router = useRouter();

  const login = async () => {
    await signIn(email, password);
    if (user && user?.fullName && user?.address) router.replace('/(app)');
    else router.replace('/(auth)/register/details');
  };

  return (
    <View className="mt-6 items-center justify-center p-6">
      <Image source={require('@/assets/icon.png')} className="h-32 w-32" />
      <Text className="mt-4 font-montserrat-bold text-xl color-primary">CommunityBankX</Text>

      <Text className="mt-16 px-4 text-center font-montserrat-extrabold text-4xl color-primary">
        Welcome Back!
      </Text>

      {/* Inputs */}
      <Input placeholder="Email or mobile number" value={email} onChangeText={setEmail} />
      <Input placeholder="Password" isPassword value={password} onChangeText={setPassword} />

      <Button btnText="Log In" onPress={login} />

      <Link href={'./register'} className="mt-3 font-inter-semibold text-secondary">
        Don't have an account? Sign Up
      </Link>
    </View>
  );
};

export default Login;
