import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

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
    <View style={[styles.card, !isAtivo && styles.cardExpirado]}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {isAtivo ? 'Ticket Ativo' : 'Ticket Expirado'}
        </Text>
        <Ionicons
          name="ellipse"
          size={16}
          color={isAtivo ? '#00C851' : '#ff4444'}
        />
      </View>
      <Text style={styles.text}>Placa: {placa}</Text>
      <Text style={styles.text}>Hora de Início: {horaInicio}</Text>
      <Text style={styles.text}>Hora de Término: {horaTermino}</Text>
      <Text style={styles.text}>Data: {data}</Text>
      <Text style={styles.text}>Duração: {duracao}</Text>
      <Text style={styles.text}>Valor: {valor}</Text>
      <Text style={styles.text}>Pagamento via: {pagamento}</Text>
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
  cardExpirado: {
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
