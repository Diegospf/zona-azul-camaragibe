import colors from '@/assets/colors';
import { Stack } from 'expo-router';

import 'react-native-reanimated';

export default function RegisterVehicleLayout() {

  return (
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
      <Stack.Screen name="historyScreen" options={{ title: "Seu Histórico" }} />
      <Stack.Screen name="ticketScreen" options={{ headerShown: false }} />
    </Stack>
  );
}
