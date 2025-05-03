import ArvoText from '@/components/arvoText/ArvoText';
import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <ArvoText >This screen doesn't exist.</ArvoText>
        <Link href="/" style={styles.link}>
          <ArvoText >Go to home screen!</ArvoText>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
