// app/compra/sucesso.tsx
import { useRouter } from "expo-router";
import SuccessScreen from "@/components/successScreen/SuccessScreen";

export default function CompraSucesso() {
  const router = useRouter();
 
  return (
    <SuccessScreen
      message="Compra realizada com sucesso"
      secondaryButtonLabel="Voltar ao Início"
      secondaryRoute={"(tabs)"}
      primaryButtonLabel="Ver meu ticket"
      primaryRoute={"/historyScreen/ticketScreen"} //de alguma forma passar o ticket que foi criado para ser exibido na tela
    />
  );
}
