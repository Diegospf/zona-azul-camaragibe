import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import colors from '@/assets/colors';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            backgroundColor: colors.primary,
            borderTopWidth: 0,

          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          href: null,
          //title: 'Home',
          //tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="myVehicleScreen"	
        options={{
          title: 'Veículos',
          tabBarIcon: ({ color }) => <Ionicons  name="car" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="historyScreen"	
        options={{
          title: 'Histórico',
          tabBarIcon: ({ color }) => <Ionicons  name="time" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <Ionicons name="person" size={28}  color={color} />,
        }}
      />
    </Tabs>
  );
}
