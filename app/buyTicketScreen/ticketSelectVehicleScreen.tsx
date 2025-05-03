import { useRouter } from 'expo-router';
import OptionSelectionScreen from '@/components/optionSelectionScreen/OptionSelectionScreen';

export default function TicketSelectVehicle() {
  const router = useRouter();

  return (
    <OptionSelectionScreen
      title="Escolha seu veículo"
      options={[
        { label: 'BRA2E19', onPress: () => router.push('/buyTicketScreen/ticketTypeScreen') },
        { label: 'ABC1234', onPress: () => router.push('/buyTicketScreen/ticketTypeScreen') },
      ]}
    />
  );
}