import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './ui/navigation/root.stack';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}