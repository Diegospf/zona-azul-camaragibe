import colors from '@/assets/colors';
import { Stack } from 'expo-router';

import 'react-native-reanimated';

export default function HistoryLayout() {

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary, 
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontSize: 24, 
          fontWeight: 'bold', 
          fontFamily: 'Arvo-Bold',
        },
        headerShadowVisible: false, 
      }}
    >
      <Stack.Screen name="historyScreen" options={{ title: "Seu Histórico" }} />
      <Stack.Screen name="ticketScreen" options={{ headerShown: false }} />
    </Stack>
  );
}
