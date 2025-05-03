import { useRouter } from 'expo-router';
import OptionSelectionScreen from '@/components/optionSelectionScreen/OptionSelectionScreen';

export default function TicketTypeScreen() {
  const router = useRouter();

  return (
    <OptionSelectionScreen
      title="Escolha o tipo do ticket"
      options={[
        { label: 'Zona Azul', onPress: () => router.push('/buyTicketScreen/ticketDurationScreen') },
        { label: 'Zona de Carga', onPress: () => router.push('/buyTicketScreen/ticketDurationScreen') },
        { label: 'Zona Roxa', onPress: () => router.push('/buyTicketScreen/ticketDurationScreen') },
      ]}
    />
  );
}