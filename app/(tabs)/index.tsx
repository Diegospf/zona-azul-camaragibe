import { View, ImageBackground, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import Button from '@/components/button/Button'; // Seu botão personalizado

export default function HomeScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('@/assets/images/map-sample.jpg')} 
                resizeMode="cover"
                style={styles.map}
            >
                
                <TouchableOpacity style={styles.floatingButton}>
                    <Ionicons name="locate" size={24} color="#fff" />
                </TouchableOpacity>

                
                <View style={styles.buyButtonContainer}>
                    <Button label="COMPRAR TICKET" route={'../buyTicketScreen' as any}/>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
        justifyContent: 'flex-end',
        //alignItems: 'center',
        position: 'relative',
    },
    floatingButton: {
        position: 'absolute',
        bottom: 30,
        right: '10%',
        backgroundColor: '#7CC420',
        borderRadius: 50,
        padding: 14,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    buyButtonContainer: {
        marginBottom: 10, 
        width: '100%',
        alignItems: 'center',
    },
});
