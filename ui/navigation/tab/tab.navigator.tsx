import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../../types/types';
import ProductListScreen from '../../screens/product/product.list.screen';
import FavoritesScreen from '../../screens/favorites/favorites.screen';
import FiltersScreen from '../../screens/filters/filter.screen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<TabParamList>();

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
        name="Products"
        component={ProductListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" size={size} color={color} />
          ),
          tabBarLabel: 'Prodotti'
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
          tabBarLabel: 'Preferiti'
        }}
      />
      <Tab.Screen
        name="Filters"
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