import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import Button from '@/components/button/Button'; // seu botão customizado
import { useState } from 'react';
import colors from '@/assets/colors'; // ajuste para suas cores
import { Ionicons } from '@expo/vector-icons';
import OptionSelectionScreen from '@/components/optionSelectionScreen/OptionSelectionScreen';
import { useRouter } from 'expo-router';

export default function TicketBuyScreen() {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const router = useRouter();

    return (
        <View style={styles.container}>
            <OptionSelectionScreen title='Tipo de Pagamento'
                options={[{ label: 'PIX', onPress: () => router.push('/buyTicketScreen/ticketPaymentScreen') },
                { icon: 'card', label: 'Terminado em 5652', onPress: () => router.push('/buyTicketScreen/ticketPaymentScreen') },
                ]}
            />
            
            <View style={styles.buttonContainer}>
                <Button label="CADASTRAR CARTÃO" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
});
