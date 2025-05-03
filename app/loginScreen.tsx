import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Switch,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../assets/colors';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Button from '@/components/button/Button';
import InputField from '@/components/inputField/InputField';
import ArvoText from '@/components/arvoText/ArvoText';

export default function LoginScreen() {
    const router = useRouter();

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [displayPassword, setDisplayPassword] = useState(false);
    const [stayLoggedIn, setStayLoggedIn] = useState(false);

    return (
        <View style={styles.container}>

            <InputField icon="call" placeholder="TELEFONE" value={phone} onChangeText={setPhone} keyboardType='phone-pad' />
            <InputField icon="lock-closed"
                placeholder="SENHA"
                secureTextEntry={!displayPassword}
                value={password}
                onChangeText={setPassword}
                rightIcon={displayPassword ? 'eye-off' : 'eye'}
                onRightIconPress={() => setDisplayPassword(!displayPassword)} />
            

            <View style={styles.switchContainer}>
                <Switch
                    value={stayLoggedIn}
                    onValueChange={setStayLoggedIn}
                    thumbColor={colors.secondary}
                    trackColor={{ true: colors.secondary, false: '#ccc' }}
                />
                <ArvoText style={styles.switchText}>Manter conectado</ArvoText>
            </View>

            <Button label='ENTRAR'  route={'(tabs)' as any}/>

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
        backgroundColor: colors.primary,
        paddingHorizontal: 30,
        paddingTop: 60,
    },
    
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    switchText: {
        color: colors.white,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    image: {
        width: 180,
        height: 80,
        alignSelf: 'center',
    },
});
