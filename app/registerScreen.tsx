// app/register.tsx

import { View, Text, TextInput, StyleSheet, ScrollView, Pressable, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Button from '@/components/button/Button';
import InputField from '@/components/inputField/InputField';
import colors from '@/assets/colors';
import ArvoText from '@/components/arvoText/ArvoText';

export default function RegisterScreen() {
    //const router = useRouter();

    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const [aceitouTermos, setAceitouTermos] = useState(false);

    const [showSenha, setShowSenha] = useState(false);
    const [showConfirmarSenha, setShowConfirmarSenha] = useState(false);

    const [error, setError] = useState('');

    //para quando precisar enviar para o servidor ou banco de dados.
    function handleRegistrar() {
        // Limpa erros antigos
        setError('');

        // 1. Verifica se algum campo está vazio
        if (!nome || !dataNascimento || !email || !telefone || !cpf || !senha || !confirmarSenha) {
            setError('Por favor, preencha todos os campos.');
            return;
        }

        // 2. Verifica se aceitou os termos
        if (!aceitouTermos) {
            setError('Você deve aceitar os termos de uso.');
            return;
        }

        // 3. Verifica se as senhas coincidem
        if (senha !== confirmarSenha) {
            setError('As senhas não coincidem.');
            return;
        }

        // Se passou por tudo, registra
        console.log({
            nome,
            dataNascimento,
            email,
            telefone,
            cpf,
            senha,
        });

        Alert.alert('Sucesso', 'Registro realizado com sucesso!');
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Nome */}
            <InputField icon="person-outline" placeholder="Nome Completo" value={nome} onChangeText={setNome} />

            {/* Data de nascimento */}
            <InputField icon="calendar" placeholder="Data de nascimento" value={dataNascimento} onChangeText={setDataNascimento} />

            {/* Email */}
            <InputField icon="mail" placeholder="Email" value={email} onChangeText={setEmail} />

            {/* Telefone */}
            <InputField icon="call" placeholder="Telefone" value={telefone} onChangeText={setTelefone} keyboardType='phone-pad' />

            {/* CPF */}
            <InputField icon="card" placeholder="CPF" value={cpf} onChangeText={setCpf} keyboardType='phone-pad' />

            {/* Senha */}
            <InputField icon="lock-closed"
                placeholder="Senha"
                secureTextEntry={!showSenha}
                value={senha}
                onChangeText={setSenha}
                rightIcon={showSenha ? 'eye-off' : 'eye'}
                onRightIconPress={() => setShowSenha(!showSenha)} />

            {/* Confirmar Senha */}
            <InputField icon="lock-closed"
                placeholder="Confirmar senha"
                secureTextEntry={!showConfirmarSenha}
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
                rightIcon={showConfirmarSenha ? 'eye-off' : 'eye'}
                onRightIconPress={() => setShowConfirmarSenha(!showConfirmarSenha)} />

            {/* CheckBox e termos */}
            <View style={styles.checkboxContainer}>
                <Pressable onPress={() => setAceitouTermos(!aceitouTermos)} style={styles.checkboxPressable}>
                    <Ionicons
                        name={aceitouTermos ? "checkbox-outline" : "square-outline"}
                        size={24}
                        color={colors.secondary}
                    />
                </Pressable>
                <ArvoText style={styles.checkboxLabel}>
                    Li e concordo com os termos de uso
                </ArvoText>
            </View>

            {/* Mensagem de erro */}
            {error ? (
                <ArvoText style={styles.errorText}>{error}</ArvoText>
            ) : null}

            {/* Botão Registrar */}
            <Button label='REGISTRO' onPress={handleRegistrar} />
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        padding: 20,
        paddingTop: 40,
        flexGrow: 1,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    checkboxPressable: {
        marginRight: 10,
    },
    checkboxChecked: {
        backgroundColor: '#FFF',
    },
    checkboxLabel: {
        color: '#fff',
        fontSize: 14,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});
