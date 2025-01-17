import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabParamList, Screen } from '../types/types';
import TabNavigator from './tab/tab.navigator';

const Stack = createNativeStackNavigator<TabParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name={Screen.Home} 
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
};

export default RootStack;