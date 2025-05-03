import colors from '@/assets/colors';
import { Stack } from 'expo-router';

import 'react-native-reanimated';

export default function RegisterVehicleLayout() {

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
      <Stack.Screen name="registerVehicleScreen" options={{ title: "Cadastrar Veículo" }} />
      <Stack.Screen name="confirmVehicleScreen" options={{ headerShown: false }} />
      <Stack.Screen name="registerSuccessScreen" options={{ headerShown: false }} />
    </Stack>
  );
}
