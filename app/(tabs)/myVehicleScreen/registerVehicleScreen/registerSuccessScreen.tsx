import { useRouter } from "expo-router";
import SuccessScreen from "@/components/successScreen/SuccessScreen";

export default function VehicleSuccessScreen() {
  const router = useRouter();

  return (
    <SuccessScreen
      message="Veículo cadastrado com sucesso!"
      primaryButtonLabel="Voltar ao Início"
      primaryRoute="/"
    />
  );
}