import { StyleSheet, Image, Platform } from 'react-native';


import SuccessScreen from '@/components/successScreen/SuccessScreen';

export default function TabTwoScreen() {
  return (
    <SuccessScreen
      message="PERFIL"
      secondaryButtonLabel="Voltar ao Início"
      secondaryRoute={"(tabs)"}
      primaryButtonLabel="Ver meu ticket"
      primaryRoute={"/historyScreen/ticketScreen"} //de alguma forma passar o ticket que foi criado para ser exibido na tela
    />
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
