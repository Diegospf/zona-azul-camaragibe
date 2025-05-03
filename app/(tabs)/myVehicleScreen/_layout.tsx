import colors from '@/assets/colors';
import { Stack } from 'expo-router';

import 'react-native-reanimated';

export default function MyVehicleLayout() {

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
      <Stack.Screen name="myVehicleScreen" options={{ title: "Seus Veículos" }} />
      <Stack.Screen name="registerVehicleScreen" options={{ headerShown: false }} />
    </Stack>
  );
}