import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '@/components/button/Button';
import OptionSelectionScreen from '@/components/optionSelectionScreen/OptionSelectionScreen';
import colors from '@/assets/colors';
import { useRouter } from 'expo-router';

export default function ResumoPedidoScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <OptionSelectionScreen title='Resumo do pedido' options={[
                { label: 'ABC1234', onPress: () => { } },
                { label: 'Zona Azul', onPress: () => { } },
                { label: '1 hora', onPress: () => { } },
            ]} />
            <Button label='CONFIRMAR' route={'/buyTicketScreen/ticketPaymentTypeScreen' as any} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        padding: 16,
    }
});
