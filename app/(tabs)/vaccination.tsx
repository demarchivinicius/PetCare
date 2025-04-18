import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';

const vacinas = [
  { id: '1', nome: 'Raiva', data: '10/01/2024', validade: '10/01/2026' },
  { id: '2', nome: 'Raiva', data: '10/01/2024', validade: '10/01/2026' },
  { id: '3', nome: 'Gripe Canina', data: '01/12/2023', validade: '01/12/2025' },
];

export default function VaccinationScreen() {
  const router = useRouter(); // AGORA tá no lugar certo

  const handleAdd = () => {
    router.push('/add-vaccine');
  };

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <View style={styles.cardContent}>
        <View>
          <Text style={styles.cardTitle}>{item.nome}</Text>
          <Text style={styles.cardDate}>Aplicada em: {item.data}</Text>
          <Text style={styles.cardDate}>Validade: {item.validade}</Text>
        </View>
        <IconButton icon="qrcode-scan" size={30} iconColor="#fff" />
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carteira de Vacinação</Text>

      <FlatList
        data={vacinas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
      <TouchableOpacity style={styles.button} onPress={() => router.push('/add-vaccine')}>
        <Text style={styles.buttonText}>Adicionar Vacina</Text>
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
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#7c3aed',
    marginBottom: 15,
    borderRadius: 12,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  cardTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  cardDate: {
    fontSize: 14,
    color: '#E0DBF9',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#7c3aed',
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 16,
  },
});
