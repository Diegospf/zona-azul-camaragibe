import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import InputField from '@/components/inputField/InputField';
import Button from '@/components/button/Button';
import colors from '@/assets/colors'; // já que seu input usa esse colors também

export default function RegisterVehicleScreen() {
  const [carPlate, setCarPlate] = useState('');
  const [confirmCarPlate, setConfirmCarPlate] = useState('');
  const [stateCarPlate, setStateCarPlate] = useState('');
  const [cityCarPlate, setCityCarPlate] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');

  const handleCadastrar = () => {
    console.log('Cadastrar veículo');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <InputField
        icon="car-outline"
        placeholder="Placa do Veículo"
        value={carPlate}
        onChangeText={setCarPlate}
      />

      <InputField
        icon="car-outline"
        placeholder="Confirme a Placa"
        value={confirmCarPlate}
        onChangeText={setConfirmCarPlate}
      />

      <InputField
        icon="map-outline"
        placeholder="Estado da Placa"
        value={stateCarPlate}
        onChangeText={setStateCarPlate}
      />

      <InputField
        icon="business-outline"
        placeholder="Cidade da Placa"
        value={cityCarPlate}
        onChangeText={setCityCarPlate}
      />

      <InputField
        icon="car-sport-outline"
        placeholder="Modelo do Veículo"
        value={vehicleModel}
        onChangeText={setVehicleModel}
      />

      <InputField
        icon="calendar-outline"
        placeholder="Ano do Veículo"
        value={vehicleYear}
        onChangeText={setVehicleYear}
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
