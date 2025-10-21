import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import React from 'react';
import { Container } from '@/components/Container';
import * as ImagePicker from 'expo-image-picker';
import Input from '@/components/Input';
import Button from '@/components/Button';

const details = () => {
  const [image, setImage] = React.useState<string | null>(null);
  const numberOfLines = 3;

  // Select image from gallery
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images',
      allowsEditing: true,
    });

    if (!result?.canceled) {
      setImage((prev) => result?.assets[0]?.uri);
    }
  };

  return (
    <Container className="bg-background">
      <Text className="m-3 text-center font-inter-bold text-2xl text-primary">
        Complete Your Profile
      </Text>

      <View className="items-center justify-center">
        <View className="relative h-32 w-32 rounded-full bg-neutral/20">
          {/* Show image if image is available */}
          {image && <Image src={image} className="absolute inset-0 h-full w-full rounded-full" />}
          <TouchableOpacity
            className="absolute bottom-0 left-1/2 -translate-x-1/2 items-center justify-center rounded-xl bg-primary px-3 py-1"
            onPress={pickImage}>
            <Text className="font-inter-semibold text-xs text-background">Choose Picture</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mx-5 gap-1">
        <Input placeholder="Full Name" />
        <Input
          placeholder="Address"
          className="h-24"
        />
        <Input placeholder="Phone Number" />

        <Button btnText='Save Profile' />
      </View>
    </Container>
  );
};

export default details;
