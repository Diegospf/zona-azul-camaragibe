import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Button from '@/components/button/Button';

export default function TicketDetalhe() {
  const {
    status,
    placa,
    horaInicio,
    horaTermino,
    data,
    duracao,
    valor,
    pagamento
  } = useLocalSearchParams();

  const router = useRouter();
  const isAtivo = status === 'ativo';

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>Ticket Ativo</Text>
          <Ionicons name="ellipse" size={16} color="#00C851" />
        </View>
        <Text style={styles.text}>Placa: {placa}</Text>
        <Text style={styles.text}>Hora de Início: {horaInicio}</Text>
        <Text style={styles.text}>Hora de Término: {horaTermino}</Text>
        <Text style={styles.text}>Data: {data}</Text>
        <Text style={styles.text}>Duração: {duracao}</Text>
        <Text style={styles.text}>Valor: {valor}</Text>
        <Text style={styles.text}>Pagamento via: {pagamento}</Text>
      </View>

      {/* <Pressable style={styles.shareButton}>
        <Ionicons name="share-social" size={20} color="white" />
        <Text style={styles.shareText}>COMPARTILHAR</Text>
      </Pressable> */}
      <Button label='Compartilhar' icon='share-social' variant='primary' />

      <Button label='Voltar ao Inicio' variant='secondary' onPress={() => router.back()} />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e1bd1',
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 32,
    marginTop: 62,
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
  },
  shareButton: {
    flexDirection: 'row',
    backgroundColor: '#7ED321',
    borderRadius: 12,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16
  },
  shareText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8
  },
  backButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center'
  },
  backText: {
    color: '#2e1bd1',
    fontWeight: 'bold'
  }
});
