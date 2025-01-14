import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainParamList, Screen } from './types';
import HelloScreen from '../screens/hello.screen';

const Stack = createNativeStackNavigator<MainParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name={Screen.Home} 
        component={HelloScreen}
      />
    </Stack.Navigator>
  );
};

export default RootStack;