import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import ArvoText from '../arvoText/ArvoText';

type TicketStatus = 'ativo' | 'expirado';

interface TicketCardProps {
  status: TicketStatus;
  carPlate: string;
  startTime: string;
  endTime: string;
  ticketDate: string;
  ticketDuration: string;
  ticketValue: string;
  ticketPayment: string;
  isPressable?: boolean;
}

export default function TicketCard({
  status,
  carPlate,
  startTime,
  endTime,
  ticketDate,
  ticketDuration,
  ticketValue,
  ticketPayment,
  isPressable = false
}: TicketCardProps) {
  const router = useRouter();
  const isActive = status === 'ativo';

  const handlePress = () => {
    if (!isPressable) return;

    router.push({
      pathname: '/historyScreen/ticketScreen' as any,
      params: {
        status,
        carPlate,
        startTime,
        endTime,
        ticketDate,
        ticketDuration,
        ticketValue,
        ticketPayment
      }
    });
  };

  const CardContent = () => (
    <View style={[styles.card, !isActive && styles.cardExpired]}>
      <View style={styles.header}>
        <ArvoText style={styles.title}>
          {isActive ? 'Ticket Ativo' : 'Ticket Expirado'}
        </ArvoText>
        <Ionicons
          name="ellipse"
          size={16}
          color={isActive ? '#00C851' : '#ff4444'}
        />
      </View>
      <ArvoText style={styles.text}>Placa: {carPlate}</ArvoText>
      <ArvoText style={styles.text}>Hora de Início: {startTime}</ArvoText>
      <ArvoText style={styles.text}>Hora de Término: {endTime}</ArvoText>
      <ArvoText style={styles.text}>Data: {ticketDate}</ArvoText>
      <ArvoText style={styles.text}>Duração: {ticketDuration}</ArvoText>
      <ArvoText style={styles.text}>Valor: {ticketValue}</ArvoText>
      <ArvoText style={styles.text}>Pagamento via: {ticketPayment}</ArvoText>
    </View>
  );

  return isPressable ? (
    <Pressable onPress={handlePress}>{CardContent()}</Pressable>
  ) : (
    CardContent()
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16
  },
  cardExpired: {
    backgroundColor: '#d3d3d3'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2
  }
});
