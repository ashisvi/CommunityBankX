import { Tabs } from 'expo-router';
import React from 'react';

import colors from '@/constants/colors';
import { TabBarIcon } from '@/components';
import { SafeAreaView } from 'react-native-safe-area-context';

const TabsLayout = () => {
  return (
    <SafeAreaView className="flex-1" edges={['left', 'right', 'bottom']}>
      <Tabs
        screenOptions={{
          headerStatusBarHeight: 25,
          headerStyle: {
            height: 90,
            backgroundColor: colors.background,
          },
          tabBarActiveTintColor: colors.secondary,
          tabBarInactiveTintColor: colors.neutral,
          tabBarShowLabel: false,
          headerTintColor: colors.primary,
          tabBarStyle: {
            backgroundColor: colors.background,
            borderTopWidth: 0,
            paddingTop: 22,
            height: 70,
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: (props) => <TabBarIcon name="home" label="Home" {...props} />,
          }}
        />
        <Tabs.Screen
          name="members"
          options={{
            title: 'Members',
            tabBarIcon: (props) => <TabBarIcon name="people" label="Members" {...props} />,
          }}
        />
        <Tabs.Screen
          name="wallet"
          options={{
            title: 'Wallet',
            tabBarIcon: (props) => <TabBarIcon name="wallet" label="Wallet" {...props} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: (props) => <TabBarIcon name="person" label="Profile" {...props} />,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;
