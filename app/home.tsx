import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1, padding: 24, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 16, color: '#333' }}>🐶 Meus Pets</Text>

      {[
        { name: 'Toby', type: 'Cachorro', age: '2 anos' },
        { name: 'Mimi', type: 'Gato', age: '3 anos' },
      ].map((pet, index) => (
        <View key={index} style={{
          padding: 16,
          backgroundColor: '#F3F4F6',
          borderRadius: 16,
          marginBottom: 12,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 2,
        }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#111' }}>{pet.name}</Text>
          <Text style={{ color: '#666' }}>{pet.type} - {pet.age}</Text>
        </View>
      ))}

      <TouchableOpacity
        onPress={() => router.push('/register')}
        style={{
          backgroundColor: '#7C3AED',
          padding: 16,
          borderRadius: 12,
          marginTop: 24,
        }}
      >
        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}>
          + Cadastrar novo Pet
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}