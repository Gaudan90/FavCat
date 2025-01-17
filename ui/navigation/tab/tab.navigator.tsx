import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList, Screen } from '../../types/types';
import HomeScreen from '../../screens/home/home.screen';
import ProductListScreen from '../../screens/product/product.list.screen';
import FavoritesScreen from '../../screens/favorites/favorites.screen';
import ProductDetailScreen from '../../screens/details/product.detail.screen';
import FiltersScreen from '../../screens/filters/filter.screen';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { Product } from '../../types/product.types';
import { View } from 'react-native';

const Tab = createBottomTabNavigator<TabParamList>();

const ProductDetailTabButton = ({ children, ...props }: any) => {
  const route = useRoute();
  const params = route.params as { product?: Product };
  
  if (!params?.product) {
    return null;
  }
  
  return children;
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1d2b42',
          borderTopWidth: 1,
          borderTopColor: '#041e2b',
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarActiveTintColor: '#cd1c18',
        tabBarInactiveTintColor: '#6f84a6',
      }}
    >
      <Tab.Screen
        name={Screen.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          tabBarLabel: 'Home'
        }}
      />
      <Tab.Screen
        name={Screen.Products}
        component={ProductListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" size={size} color={color} />
          ),
          tabBarLabel: 'Prodotti'
        }}
      />
      <Tab.Screen
        name={Screen.ProductDetail}
        component={ProductDetailScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} />
          ),
          tabBarLabel: 'Dettaglio',
        }}
      />
      <Tab.Screen
        name={Screen.Favorites}
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
          tabBarLabel: 'Preferiti'
        }}
      />
      <Tab.Screen
        name={Screen.Filters}
        component={FiltersScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="filter-outline" size={size} color={color} />
          ),
          tabBarLabel: 'Filtri'
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;