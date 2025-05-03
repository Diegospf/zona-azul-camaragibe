import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '@/components/button/Button';
import OptionSelectionScreen from '@/components/optionSelectionScreen/OptionSelectionScreen';
import colors from '@/assets/colors';
import { useRouter } from 'expo-router';
import QRCode from 'react-native-qrcode-svg';
import ArvoText from '@/components/arvoText/ArvoText';

export default function TicketPaymentScreen() {
    const qrCodeValue = 'chave-pix-exemplo'; // valor do QR Code

    return (
      <View style={styles.container}>
        
        <ArvoText style={styles.instructionText}>
          Leia o QRCode ou copie o código no aplicativo do seu banco e realize o pagamento.
        </ArvoText>
  
        
        <View style={styles.qrContainer}>
          <QRCode value={qrCodeValue} size={200} />
        </View>
  
        
        <View style={styles.infoBox}>
          <ArvoText style={styles.infoText}>Valor: R$ 10,00</ArvoText>
          <ArvoText style={styles.infoText}>QRCode expira em: 4:39 minutos</ArvoText>
        </View>
  
        
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
      backgroundColor: colors.primary, 
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
      backgroundColor: colors.bluePurple,
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
      backgroundColor: '#58B95E',
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