import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Container } from '@/components/Container';
import Input from '@/components/Input';
import { Link, router } from 'expo-router';
import Button from '@/components/Button';

const Register = () => {
  return (
    <Container className="bg-background">
      <View className="mt-6 items-center justify-center p-6">
        <Image source={require('@/assets/icon.png')} className="h-32 w-32" />

        <Text className="mt-8 px-4 text-center font-montserrat-extrabold text-3xl color-primary">
          Welcome {'\n'} to {'\n'} CommunityBankX!
        </Text>

        {/* Inputs */}
        <Input placeholder="Email" />

        <Input placeholder='Create password' isPassword />

        <Button btnText="Register" onPress={() => router.push("/(auth)/register/details")} />

        <Link href={'/login'} className="mt-3 font-inter-semibold text-secondary">
          Already registered? Log In
        </Link>
      </View>
    </Container>
  );
};

export default Register;
