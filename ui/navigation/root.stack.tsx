import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainParamList, Screen } from '../types/types';
import TabNavigator from '../navigation/tab/tab.navigator';
import HomeScreen from '../screens/home/home.screen';

const Stack = createNativeStackNavigator<MainParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name={Screen.TabNavigator} 
        component={TabNavigator}
      />

    <Stack.Screen name={Screen.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;