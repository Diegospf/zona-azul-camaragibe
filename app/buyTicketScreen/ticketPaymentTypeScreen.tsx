import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import Button from '@/components/button/Button'; // seu botão customizado
import { useState } from 'react';
import colors from '@/assets/colors'; // ajuste para suas cores
import { Ionicons } from '@expo/vector-icons';
import OptionSelectionScreen from '@/components/optionSelectionScreen/OptionSelectionScreen';
import { useRouter } from 'expo-router';

export default function ComprarTicket() {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const router = useRouter();

    return (
        <View style={styles.container}>
            <OptionSelectionScreen title='Tipo de Pagamento'
                options={[{ label: 'PIX', onPress: () => router.push('/buyTicketScreen/ticketPaymentScreen') },
                { icon: 'card', label: 'Terminado em 5652', onPress: () => router.push('/buyTicketScreen/ticketPaymentScreen') },
                ]}
            />
            {/* Botão fixo no final */}
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
    content: {
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 80, // espaço para o botão embaixo
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'serif',
        color: '#fff',
        marginBottom: 20,
    },
    option: {
        backgroundColor: '#B4A9F5',
        width: '90%',
        borderRadius: 12,
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginBottom: 20,
        alignItems: 'center',
    },
    optionSelected: {
        backgroundColor: '#9675F5',
    },
    optionText: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'serif',
        color: '#333',
    },
    optionTextSelected: {
        color: '#fff',
    },
    optionWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 12,
    },
    cardInfo: {
        alignItems: 'flex-start',
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'serif',
        color: '#333',
    },
    cardSubtitle: {
        fontSize: 16,
        fontFamily: 'serif',
        color: '#333',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
});
