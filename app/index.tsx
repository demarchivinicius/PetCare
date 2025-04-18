import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export default function Index() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsReady(true);
    }, 100);

    return () => clearTimeout(timeout)
  }, []); 

  useEffect(() => {
    if (isReady) {
      router.replace('/login');
    }
  }, [isReady]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>//
      <Text style={{ fontSize: 18, color: '#666' }}>Redirecionando...</Text>
    </View>
  );
}