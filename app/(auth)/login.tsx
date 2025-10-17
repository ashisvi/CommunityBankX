import { View, Image, Text, TextInput } from 'react-native';
import React from 'react';
import { Container } from '@/components/Container';

const Login = () => {
  return (
    <Container className="bg-background">
      <View className="items-center justify-center p-6">
        <Image source={require('@/assets/icon.png')} className="h-32 w-32" />
        <Text className="font-montserrat-bold mt-4 text-xl color-primary">CommunityBankX</Text>

        <Text className="font-montserrat-extrabold mt-12 px-4 text-center text-4xl color-primary">
          Welcome Back!
        </Text>

        <TextInput
          placeholder="Email or mobile number"
          className="font-inter-regular mt-8 w-full rounded-full border border-neutral bg-surface px-8 py-5 text-xl color-primary"
        />
        <TextInput
          placeholder="Password"
          className="font-inter-semibold mt-8 w-full rounded-full border border-neutral bg-surface px-8 py-5 text-xl color-primary"
        />
      </View>
    </Container>
  );
};

export default Login;
