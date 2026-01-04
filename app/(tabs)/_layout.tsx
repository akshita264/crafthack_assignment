import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme, Platform } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const activeColor = '#2196F3'; // Professional Blue

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeColor,
        headerShown: true, // We want titles like "My Orders" to show at the top
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 90 : 60,
          paddingBottom: Platform.OS === 'ios' ? 30 : 10,
          backgroundColor: colorScheme === 'dark' ? '#121212' : '#fff',
        },
        headerStyle: {
          backgroundColor: colorScheme === 'dark' ? '#121212' : '#f8f9fa',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      
      {/* This is your Order List (Home) */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'My Orders',
          tabBarLabel: 'Orders',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons 
              name={focused ? 'receipt' : 'receipt-outline'} 
              size={size} 
              color={color} 
            />
          ),
        }}
      />

      {/* This is the secondary tab seen in your image */}
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons 
              name={focused ? 'search' : 'search-outline'} 
              size={size} 
              color={color} 
            />
          ),
        }}
      />
    </Tabs>
  );
}