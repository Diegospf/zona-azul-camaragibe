import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '@/components/button/Button';
import OptionSelectionScreen from '@/components/optionSelectionScreen/OptionSelectionScreen';
import colors from '@/assets/colors';
import { useRouter } from 'expo-router';
import QRCode from 'react-native-qrcode-svg';

export default function ResumoPedidoScreen() {
    const qrCodeValue = 'chave-pix-exemplo'; // valor do QR Code

    return (
      <View style={styles.container}>
        {/* Texto explicativo */}
        <Text style={styles.instructionText}>
          Leia o QRCode ou copie o código no aplicativo do seu banco e realize o pagamento.
        </Text>
  
        {/* QRCode */}
        <View style={styles.qrContainer}>
          <QRCode value={qrCodeValue} size={200} />
        </View>
  
        {/* Valor e tempo */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Valor: R$ 10,00</Text>
          <Text style={styles.infoText}>QRCode expira em: 4:39 minutos</Text>
        </View>
  
        {/* Botões usando seu componente */}
        <Button
          label="PIX COPIA E COLA" route={'/buyTicketScreen/ticketSuccessScreen' as any}
        />
  
        <Button
          icon='share-social' label="COMPARTILHAR"/>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary, // Azul do fundo
      padding: 16,
    },
    instructionText: {
      textAlign: 'center',
      color: 'white',
      marginBottom: 24,
      fontSize: 16,
      paddingHorizontal: 10,
    },
    qrContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    infoBox: {
      backgroundColor: colors.bluePurple, // Roxinho
      borderRadius: 10,
      padding: 16,
      alignItems: 'center',
      marginBottom: 20,
    },
    infoText: {
      color: '#333',
      fontSize: 16,
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: '#58B95E', // Verde
      borderRadius: 10,
      marginBottom: 16,
      width: '100%',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    buttonContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });