import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import ArvoText from '../arvoText/ArvoText';

type TicketStatus = 'ativo' | 'expirado';

interface TicketCardProps {
  status: TicketStatus;
  placa: string;
  horaInicio: string;
  horaTermino: string;
  data: string;
  duracao: string;
  valor: string;
  pagamento: string;
  isPressable?: boolean;
}

export default function TicketCard({
  status,
  placa,
  horaInicio,
  horaTermino,
  data,
  duracao,
  valor,
  pagamento,
  isPressable = false
}: TicketCardProps) {
  const router = useRouter();
  const isAtivo = status === 'ativo';

  const handlePress = () => {
    if (!isPressable) return;

    router.push({
      pathname: '/historyScreen/ticketScreen' as any,
      params: {
        status,
        placa,
        horaInicio,
        horaTermino,
        data,
        duracao,
        valor,
        pagamento
      }
    });
  };

  const CardContent = () => (
    <View style={[styles.card, !isAtivo && styles.cardExpired]}>
      <View style={styles.header}>
        <ArvoText style={styles.title}>
          {isAtivo ? 'Ticket Ativo' : 'Ticket Expirado'}
        </ArvoText>
        <Ionicons
          name="ellipse"
          size={16}
          color={isAtivo ? '#00C851' : '#ff4444'}
        />
      </View>
      <ArvoText style={styles.text}>Placa: {placa}</ArvoText>
      <ArvoText style={styles.text}>Hora de Início: {horaInicio}</ArvoText>
      <ArvoText style={styles.text}>Hora de Término: {horaTermino}</ArvoText>
      <ArvoText style={styles.text}>Data: {data}</ArvoText>
      <ArvoText style={styles.text}>Duração: {duracao}</ArvoText>
      <ArvoText style={styles.text}>Valor: {valor}</ArvoText>
      <ArvoText style={styles.text}>Pagamento via: {pagamento}</ArvoText>
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
