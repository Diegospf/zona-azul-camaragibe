import { useRouter } from 'expo-router';
import OptionSelectionScreen from '@/components/optionSelectionScreen/OptionSelectionScreen';

export default function TicketDuration() {
  const router = useRouter();

  return (
    <OptionSelectionScreen
      title="Escolha a duração do ticket"
      options={[
        { label: '15 minutos', onPress: () => router.push('/buyTicketScreen/ticketResumeScreen') },
        { label: '30 minutos', onPress: () => router.push('/buyTicketScreen/ticketResumeScreen') },
        { label: '1 hora', onPress: () => router.push('/buyTicketScreen/ticketResumeScreen') },
        { label: '2 horas', onPress: () => router.push('/buyTicketScreen/ticketResumeScreen') },
        { label: '3 horas', onPress: () => router.push('/buyTicketScreen/ticketResumeScreen') },
      ]}
    />
  );
}