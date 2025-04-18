import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function AddVaccineScreen() {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [veterinario, setVeterinario] = useState('');
    const [clinica, setClinica] = useState('');
    const router = useRouter();

    const handleAdd = () => {
        if (!nome || !data || !veterinario || !clinica) {
            Alert.alert('Preencha todos os campos');
            return;
        }
        Alert.alert('Vacina adicionada com sucesso!');
        router.back(); // Volta pra tela anterior
    };

    const handleScanQrCode = () => {
        Alert.alert('Leitor de QR Code não implementado (ainda 😎)');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adicionar Vacina</Text>

            <Text style={styles.label}>Nome da Vacina</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: V10, Raiva"
                value={nome}
                onChangeText={setNome}
            />

            <Text style={styles.label}>Data da Aplicação</Text>
            <TextInput
                style={styles.input}
                placeholder="DD/MM/AAAA"
                value={data}
                onChangeText={setData}
            />

            <Text style={styles.label}>Validade Vacina</Text>
            <TextInput
                style={styles.input}
                placeholder="DD/MM/AAAA"
                value={data}
                onChangeText={setData}
            />

            <Text style={styles.label}>Veterinário Responsável</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome do veterinário"
                value={veterinario}
                onChangeText={setVeterinario}
            />

            <Text style={styles.label}>Clínica</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome da clínica"
                value={clinica}
                onChangeText={setClinica}
            />

            <TouchableOpacity style={styles.button} onPress={handleAdd}>
                <Text style={styles.buttonText}>Salvar Vacina</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.qrButton} onPress={handleScanQrCode}>
                <Ionicons name="qr-code-outline" size={24} color="#5E3AEE" />
                <Text style={styles.qrText}>Ler QR Code (opcional)</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F2FC',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#5E3AEE',
        marginBottom: 30,
        textAlign: 'center',
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 6,
        color: '#333',
    },
    input: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#DDD',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#5E3AEE',
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 10,
        elevation: 4,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 16,
    },
    qrButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    qrText: {
        marginLeft: 8,
        fontSize: 14,
        color: '#5E3AEE',
        fontWeight: '500',
    },
});
