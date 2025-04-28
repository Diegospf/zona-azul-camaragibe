import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import colors from '@/assets/colors';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary, // Cor de fundo do cabeçalho para todas as telas
          },
          headerTintColor: '#fff', // Cor do texto do cabeçalho (título)
          headerTitleStyle: {
            fontSize: 24, // Tamanho da fonte do título
            fontWeight: 'bold', // Estilo da fonte do título
          },
          headerShadowVisible: false, // Remove a sombra do cabeçalho
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="loginScreen" options={{ title: "Login" }} />
        <Stack.Screen name="registerScreen" options={{ title: "Registro" }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="myVehicleScreen" options={{ title: "Seus Veículos" }} />
        <Stack.Screen name="buyTicketScreen" options={{ headerShown: false }} />
        <Stack.Screen name="registerVehicleScreen" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
