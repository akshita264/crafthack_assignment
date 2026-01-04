import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { OrderProvider } from '../src/context/OrderContext';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    // 1. Wrap the entire app in our Data Provider
    <OrderProvider>
      {/* 2. Apply the Theme (Dark or Light) */}
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        {/* 3. Define the main navigation stack */}
        <Stack>
          {/* This hides the header for the tabs because the Tab Layout has its own header */}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          
          {/* This configures the Detail screen header */}
          <Stack.Screen 
            name="details" 
            options={{ 
              title: 'Order Details',
              headerBackTitle: 'Orders',
              headerTintColor: colorScheme === 'dark' ? '#fff' : '#2196F3'
            }} 
          />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </OrderProvider>
  );
}