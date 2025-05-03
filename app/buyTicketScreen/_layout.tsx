import colors from '@/assets/colors';
import { Stack } from 'expo-router';

import 'react-native-reanimated';

export default function BuyTicketLayout() {

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
            {/* <Stack.Screen name="ticketPayment" options={{title: "Comprar Ticket"}} /> */}
            <Stack.Screen name="ticketSelectVehicleScreen" options={{ title: "Comprar Ticket" }} />
            <Stack.Screen name="ticketTypeScreen" options={{ title: "Comprar Ticket" }} />
            <Stack.Screen name="ticketDurationScreen" options={{ title: "Comprar Ticket" }} />
            <Stack.Screen name="ticketResumeScreen" options={{ title: "Comprar Ticket" }} />
            <Stack.Screen name="ticketPaymentTypeScreen" options={{ title: "Comprar Ticket" }} />
            <Stack.Screen name="ticketPaymentScreen" options={{ title: "Comprar Ticket" }} />
            <Stack.Screen name="ticketSuccessScreen" options={{ headerShown: false }} />

        </Stack>
    );
}
