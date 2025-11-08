import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';

import { Stack, useRouter } from 'expo-router';
import colors from '@/constants/colors';

import { useAuthStore } from '@/store/useAuthStore';
import { Button } from '@/components';

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const Tr: React.FC<{
  icon: string;
  title: string;
  value: string;
}> = ({ icon, title, value }) => {
  return (
    <View className="w-full flex-row items-center gap-3">
      <Ionicons name={icon} size={34} color={colors.secondary} />
      <View className="w-full items-start justify-start">
        <Text className="font-montserrat-semibold text-lg text-secondary">{title}</Text>
        <Text className="font-inter-regular text-lg text-neutral/80">{value}</Text>
      </View>
    </View>
  );
};

const Profile = () => {
  const { user, signOut } = useAuthStore();
  const router = useRouter();

  return (
    <>
      {/* Profile header */}
      <Stack.Screen
        options={{
          headerTintColor: colors.surface,
          headerRight: () => (
            <View className="p-2 pt-3">
              <Button
                btnText="Edit"
                btnType="secondary"
                size="small"
                onPress={() => router.navigate('/register/details')}
              />
            </View>
          ),
          headerBackground: () => (
            <LinearGradient colors={[colors.primary, colors.secondary]} className="-z-10 h-44" />
          ),
        }}
      />

      <View className="flex-1 bg-background px-5">
        {/* ToDo: Make status bar content visible */}

        <View className="z-10 -mt-3 items-center justify-center">
          <Image src={user?.profileUrl} height={130} width={130} className="my-5 rounded-xl" />

          <View>
            <Text className="text-center font-montserrat-bold text-2xl text-secondary">
              {user?.fullName}
            </Text>
            <Text className="text-center font-inter-regular text-lg text-neutral">
              {user?.email}
            </Text>
          </View>

          {/* User details */}
          <View className="my-5 w-full gap-4">
            <Tr icon="call-sharp" title="Phone" value={'+91 9977258377'} />
            {user?.phone && <Tr icon="call-sharp" title="Phone" value={user?.phone} />}
            <Tr icon="location-sharp" title="Address" value={user?.address} />
            {/*<Tr icon="profile-sharp" title="Current Community" value={user?.community?.name} />*/}
          </View>

          {/* Settings */}
          <View className="mb-5 mt-2 w-full gap-4">
            <Text className="font-inter-bold text-xl text-primary">Settings</Text>

            <TouchableOpacity className="flex-row gap-3">
              <Ionicons name="notifications" size={24} color={colors.neutral} />
              <Text className="font-inter-semibold text-xl text-neutral">Notifications</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row gap-3">
              <Ionicons name="shield-half-sharp" size={24} color={colors.neutral} />
              <Text className="font-inter-semibold text-xl text-neutral">Security</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row gap-3">
              <Ionicons name="help-circle-sharp" size={24} color={colors.neutral} />
              <Text className="font-inter-semibold text-xl text-neutral">Help & Support</Text>
            </TouchableOpacity>
          </View>

          {/* Logout button */}
          <View className="mt-5 w-full">
            <Button btnText="Logout" onPress={signOut} btnType="secondary" size="large" />
          </View>
        </View>
      </View>
    </>
  );
};

export default Profile;
