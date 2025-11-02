import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import React, { useCallback, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useAuthStore } from '@/store/useAuthStore';
import { uploadImage } from '@/utils/uploadImage';

const Details = () => {
  const [formData, setFormData] = useState<{
    fullName?: string;
    address?: string;
    phone?: string;
    profileUrl?: string;
  }>({});

  const { user, updateProfile } = useAuthStore();

  useCallback(() => {
    if (user) {
      setFormData({ ...user });
    }
  }, [user]);

  console.log('(auth)/register/details.tsx ~ user', user);

  // Select image from gallery
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images',
      allowsEditing: true,
    });

    if (!result?.canceled) {
      const profileUrl = await uploadImage(user.id, result.assets[0]?.uri);
      console.log(profileUrl);
      setFormData((prev) => ({ ...prev, profileUrl }));
    }
  };

  const handleChange = (name: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const saveProfile = () => {
    if (formData.fullName && formData.address) {
      updateProfile(formData);
    }
  };

  return (
    <View>
      <Text className="m-3 text-center font-inter-bold text-2xl text-primary">
        Complete Your Profile
      </Text>

      <View className="items-center justify-center">
        <View className="relative h-32 w-32 rounded-full bg-neutral/20">
          {/* Show image if image is available */}
          {formData.profileUrl && (
            <Image
              src={formData.profileUrl}
              className="absolute inset-0 h-full w-full rounded-full"
            />
          )}
          <TouchableOpacity
            className="absolute bottom-0 left-1/2 -translate-x-1/2 items-center justify-center rounded-xl bg-primary px-3 py-1"
            onPress={pickImage}>
            <Text className="font-inter-semibold text-xs text-background">Choose Picture</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mx-5 gap-1">
        <Input
          placeholder="Full Name"
          value={formData.fullName}
          onChangeText={(text) => handleChange('fullName', text)}
        />
        <Input
          placeholder="Address"
          value={formData.address}
          className="h-24"
          onChangeText={(text) => handleChange('address', text)}
        />
        <Input
          placeholder="Phone Number"
          value={formData.phone}
          onChangeText={(text) => handleChange('phone', text)}
        />

        <Button btnText="Save Profile" onPress={saveProfile} />
      </View>
    </View>
  );
};

export default Details;
