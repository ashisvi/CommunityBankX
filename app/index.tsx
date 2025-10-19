import { View, Text } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';
import { Container } from '@/components/Container';

const index = () => {
  const router = useRouter();

  return (
    <Container className='flex-1 justify-center items-center'>
      <Link href="/register" className='text-secondary text-xl m-3'>Register</Link>
      <Link href="/login" className='text-secondary text-xl m-3'>Log In</Link>
    </Container>
  );
};

export default index;
