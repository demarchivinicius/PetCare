// app/_layout.jsx
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#7c3aed',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 70,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#C9BAF5',
        tabBarLabelStyle: { fontSize: 12, paddingBottom: 5 },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'index') {
            iconName = 'paw';
          } else if (route.name === 'vaccination') {
            iconName = 'medkit';
          } else if (route.name === 'profile') {
            iconName = 'person';
          }

          return <Ionicons name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Início' }} />
      <Tabs.Screen name="vaccination" options={{ title: 'Vacinas' }} />
      <Tabs.Screen name="profile" options={{ title: 'Perfil' }} />
    </Tabs>
  );
}
