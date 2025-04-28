import colors from '@/assets/colors';
import { Stack } from 'expo-router';

import 'react-native-reanimated';

export default function BuyTicketLayout() {

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
            {/* <Stack.Screen name="ticketPayment" options={{title: "Comprar Ticket"}} /> */}
            <Stack.Screen name="ticketSelectVehicleScreen" options={{ title: "Comprar Ticket" }} />
            <Stack.Screen name="ticketTypeScreen" options={{ title: "Comprar Ticket" }} />
            <Stack.Screen name="ticketDurationScreen" options={{ title: "Comprar Ticket" }} />
            <Stack.Screen name="ticketResumeScreen" options={{ title: "Comprar Ticket" }} />
            <Stack.Screen name="ticketPaymentTypeScreen" options={{ title: "Comprar Ticket" }} />
            <Stack.Screen name="ticketPaymentScreen" options={{ title: "Comprar Ticket" }} />

        </Stack>
    );
}
