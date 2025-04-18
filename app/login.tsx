import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (email && password) {
      router.push('/home');
    }
  };

  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#7C3AED', marginBottom: 32, textAlign: 'center' }}>
        PetCare 🐾
      </Text>

      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
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
        value={password}
        onChangeText={setPassword}
        secureTextEntry
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
        onPress={handleLogin}
        style={{
          backgroundColor: '#7C3AED',
          padding: 16,
          borderRadius: 12,
          marginTop: 8,
        }}
      >
        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: '600', fontSize: 16 }}>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}