import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function RegisterPet() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [age, setAge] = useState('');

  const handleRegister = () => {
    if (name && species && age) {
      router.push('/home');
    }
  };

  return (
    <View style={{ flex: 1, padding: 24, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 24, color: '#7C3AED' }}>Cadastrar</Text>

      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        style={{
          borderWidth: 1,
          padding: 12,
          marginBottom: 12,
          borderRadius: 12,
          borderColor: '#ddd',
          backgroundColor: '#F9FAFB',
        }}
      />

      <TextInput
        placeholder="E-mail"
        value={name}
        onChangeText={setName}
        style={{
          borderWidth: 1,
          padding: 12,
          marginBottom: 12,
          borderRadius: 12,
          borderColor: '#ddd',
          backgroundColor: '#F9FAFB',
        }}
      />

      <TextInput
        placeholder="Aniversario"
        value={species}
        onChangeText={setSpecies}
        style={{
          borderWidth: 1,
          padding: 12,
          marginBottom: 12,
          borderRadius: 12,
          borderColor: '#ddd',
          backgroundColor: '#F9FAFB',
        }}
      />

      <TextInput
        placeholder="Celualar"
        value={species}
        onChangeText={setSpecies}
        style={{
          borderWidth: 1,
          padding: 12,
          marginBottom: 12,
          borderRadius: 12,
          borderColor: '#ddd',
          backgroundColor: '#F9FAFB',
        }}
        />
      <TextInput
        placeholder="Senha"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          padding: 12,
          marginBottom: 12,
          borderRadius: 12,
          borderColor: '#ddd',
          backgroundColor: '#F9FAFB',
        }}
      />
       <TextInput
        placeholder="Confirmar Senha"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          padding: 12,
          marginBottom: 12,
          borderRadius: 12,
          borderColor: '#ddd',
          backgroundColor: '#F9FAFB',
        }}
      />
      <TouchableOpacity
        onPress={handleRegister}
        style={{
          backgroundColor: '#7C3AED',
          padding: 16,
          borderRadius: 12,
          marginTop: 8,
        }}
      >
        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}>
          Salvar Pet
        </Text>
      </TouchableOpacity>
    </View>
  );
}