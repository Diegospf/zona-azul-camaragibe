import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import colors from '@/assets/colors';
import { useRouter } from 'expo-router';
import Button from '@/components/button/Button';

export default function TelaInicial() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zona Azul</Text>
      <Text style={styles.subtitle}>Camaragibe</Text>

      {/* <TouchableOpacity style={styles.button} onPress={() => router.push('/telaLogin')}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity> */}

      {/* Erro é pq a variavel tem que ser do tipo RelativePathString que é uma string de caminho*/}
      <Button label='ENTRAR' route={'(tabs)' as any}/>

      <Button label='REGISTRO' route={'/registerScreen' as any}/>
      <Image
        source={require('../assets/images/camaragibe-logo.png')} // Substitua pelo seu
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary, // Azul forte
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 40,
  },
  image: {
    width: 180,
    height: 80,
    marginTop: 50,
  },
});