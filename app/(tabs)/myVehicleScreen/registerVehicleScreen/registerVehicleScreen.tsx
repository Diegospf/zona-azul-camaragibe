import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import InputField from '@/components/inputField/InputField';
import Button from '@/components/button/Button';
import colors from '@/assets/colors'; // já que seu input usa esse colors também

export default function CadastrarVeiculoScreen() {
  const [placa, setPlaca] = useState('');
  const [confirmarPlaca, setConfirmarPlaca] = useState('');
  const [estadoPlaca, setEstadoPlaca] = useState('');
  const [cidadePlaca, setCidadePlaca] = useState('');
  const [modeloVeiculo, setModeloVeiculo] = useState('');
  const [anoVeiculo, setAnoVeiculo] = useState('');

  const handleCadastrar = () => {
    console.log('Cadastrar veículo');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <InputField
        icon="car-outline"
        placeholder="Placa do Veículo"
        value={placa}
        onChangeText={setPlaca}
      />

      <InputField
        icon="car-outline"
        placeholder="Confirme a Placa"
        value={confirmarPlaca}
        onChangeText={setConfirmarPlaca}
      />

      <InputField
        icon="map-outline"
        placeholder="Estado da Placa"
        value={estadoPlaca}
        onChangeText={setEstadoPlaca}
      />

      <InputField
        icon="business-outline"
        placeholder="Cidade da Placa"
        value={cidadePlaca}
        onChangeText={setCidadePlaca}
      />

      <InputField
        icon="car-sport-outline"
        placeholder="Modelo do Veículo"
        value={modeloVeiculo}
        onChangeText={setModeloVeiculo}
      />

      <InputField
        icon="calendar-outline"
        placeholder="Ano do Veículo"
        value={anoVeiculo}
        onChangeText={setAnoVeiculo}
        keyboardType="numeric"
      />

      <Button
        label="CADASTRAR"
        route={'/myVehicleScreen/registerVehicleScreen/confirmVehicleScreen' as any}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.primary, // azul de fundo
    padding: 20,
    justifyContent: 'center',
  },
});
