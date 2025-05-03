import { ScrollView, View, Text, StyleSheet } from 'react-native';
import TicketCard from '@/components/ticketCard/TicketCard';
import colors from '@/assets/colors';

export default function HystoryScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <TicketCard
        status="ativo"
        carPlate="ABC1234"
        startTime="14:30"
        endTime="15:00"
        ticketDate="17/10/2024"
        ticketDuration="30 minutos"
        ticketValue="R$10,00"
        ticketPayment="PIX"
        isPressable
      />
      <TicketCard
        status="expirado"
        carPlate="ABC1234"
        startTime="17:00"
        endTime="17:30"
        ticketDate="15/10/2024"
        ticketDuration="30 minutos"
        ticketValue="R$10,00"
        ticketPayment="PIX"
        isPressable
      />
      {/* TODO: Adicione mais tickets aqui um map deve ser feito pra ficar mais dinamico em relação a quantidade*/}
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
