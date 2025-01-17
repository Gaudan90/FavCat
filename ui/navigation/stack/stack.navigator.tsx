import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from '../tab/tab.navigator';
import ProductDetailScreen from '../../screens/details/product.detail.screen';
import { RootStackParamList } from '../../types/types';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TabNavigator"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen 
        name="TabNavigator" 
        component={TabNavigator}
      />
      <Stack.Screen 
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{
          headerShown: true,
          headerTitle: 'Dettaglio Prodotto',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#1d2b42',
          },
          presentation: 'card',
          cardShadowEnabled: true,
          gestureEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;