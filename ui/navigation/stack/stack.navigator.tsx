import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 
import TabNavigator from '../tab/tab.navigator';
import ProductDetailScreen from '../../screens/details/product.detail.screen';

const Stack = createStackNavigator(); // Rimuovi il generic type

const StackNavigator = () => {
  return (
    <Stack.Navigator
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
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;