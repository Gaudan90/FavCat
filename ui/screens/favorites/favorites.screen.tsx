import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from '../../types/product.types';
import ProductCard from '../../atoms/product card/product.card';
import { styles } from './favorites.styles';

const FAVORITES_STORAGE_KEY = '@favorites';

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const favoritesJson = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);
      const favoritesData = favoritesJson ? JSON.parse(favoritesJson) : [];
      setFavorites(favoritesData);
    } catch (error) {
      console.error('Errore nel caricamento dei preferiti:', error);
    }
  };

  if (favorites.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Niente Preferiti?! (╯°□°)╯︵ ┻━┻</Text>
        <Text style={[styles.text, { fontSize: 16 }]}>
          Aggiungi alcuni prodotti ai preferiti!
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default FavoritesScreen;