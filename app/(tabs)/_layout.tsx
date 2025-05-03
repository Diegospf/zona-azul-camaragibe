import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';


import colors from '@/assets/colors';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.secondary,
        headerShown: false,
        popToTopOnBlur: true,
        tabBarLabelStyle: {
          //fontSize: 12,
          fontWeight: 600,
          fontFamily: 'Arvo-Regular',
        },
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
        }}
      />
      <Tabs.Screen
        name="myVehicleScreen"
        options={{
          title: 'Veículos',
          tabBarIcon: () => <Ionicons  name="car" size={28} color={colors.secondary} />,
        }}
      />
      <Tabs.Screen
        name="historyScreen"	
        options={{
          title: 'Histórico',
          tabBarIcon: () => <Ionicons  name="time" size={28} color={colors.secondary} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: () => <Ionicons name="person" size={28}  color={colors.secondary} />,
        }}
      />
    </Tabs>
  );
}
