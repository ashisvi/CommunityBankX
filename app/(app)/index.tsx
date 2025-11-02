import { View, Text } from 'react-native';
import React from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import Button from '@/components/Button';

const App = () => {
  const { signOut, user } = useAuthStore();

  // console.log(user)

  return (
    <View>
      <Text>App</Text>
      <Button btnText="Sign Out" onPress={signOut} />
    </View>
  );
};

export default App;
