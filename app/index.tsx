import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import colors from '@/assets/colors';
import { useRouter } from 'expo-router';
import Button from '@/components/button/Button';
import ArvoText from '@/components/arvoText/ArvoText';

export default function InitialScreen() {
  //const router = useRouter();

  return (
    <View style={styles.container}>
      <ArvoText style={styles.title}>Zona Azul</ArvoText>
      <ArvoText style={styles.subtitle}>Camaragibe</ArvoText>


      {/* Erro é pq a variavel tem que ser do tipo RelativePathString que é uma string de caminho*/}
      {/* para resolver é só usar um '' as any'' */}
      <Button label='ENTRAR' route={'/loginScreen' as any}/>

      <Button label='REGISTRAR' route={'/registerScreen' as any}/>
      <Image
        source={require('../assets/images/camaragibe-logo.png')} 
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
    fontFamily: 'Arvo-Bold',
  },
  subtitle: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 40,
    fontFamily: 'Arvo-Regular',
  },
  image: {
    width: 180,
    height: 80,
    marginTop: 50,
  },
});