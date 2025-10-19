import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Container } from '@/components/Container';
import Input from '@/components/Input';
import { Link } from 'expo-router';
import Button from '@/components/Button';

const Login = () => {
  return (
    <Container className="bg-background">
      <View className="items-center justify-center p-6 mt-6">
        <Image source={require('@/assets/icon.png')} className="h-32 w-32" />
        <Text className="mt-4 font-montserrat-bold text-xl color-primary">CommunityBankX</Text>

        <Text className="mt-16 px-4 text-center font-montserrat-extrabold text-4xl color-primary">
          Welcome Back!
        </Text>

        {/* Inputs */}
        <Input placeholder="Email or mobile number" />
        <Input placeholder="Password" isPassword />

        <Button btnText="Log In" />

        <Link href={'./register'} className="font-inter-semibold text-secondary mt-3">
          Don't have an account? Sign Up
        </Link>
      </View>
    </Container>
  );
};

export default Login;
