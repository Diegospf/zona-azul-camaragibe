import { ScrollView, View, Text, StyleSheet } from 'react-native';
import TicketCard from '@/components/ticketCard/TicketCard';
import colors from '@/assets/colors';

export default function HystoryScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <TicketCard
        status="ativo"
        placa="ABC1234"
        horaInicio="14:30"
        horaTermino="15:00"
        data="17/10/2024"
        duracao="30 minutos"
        valor="R$10,00"
        pagamento="PIX"
        isPressable
      />
      <TicketCard
        status="expirado"
        placa="ABC1234"
        horaInicio="17:00"
        horaTermino="17:30"
        data="15/10/2024"
        duracao="30 minutos"
        valor="R$10,00"
        pagamento="PIX"
        isPressable
      />
      {/* Adicione mais tickets aqui um map deve ser feito pra ficar mais dinamico em relação a quantidade*/}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
  },
});
