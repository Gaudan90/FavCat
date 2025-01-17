import React, { useEffect, useState, useCallback } from 'react';
  import { View, Text, FlatList } from 'react-native';
  import { SafeAreaView } from 'react-native-safe-area-context';
  import { useFocusEffect } from '@react-navigation/native';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import { Product } from '../../types/product.types';
  import ProductCard from '../../atoms/product card/product.card';
  import { styles } from './favorites.styles';

  const FAVORITES_STORAGE_KEY = '@favorites';

  const FavoritesScreen = () => {
    const [favorites, setFavorites] = useState<Product[]>([]);

    const loadFavorites = useCallback(async () => {
      try {
        const favoritesJson = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);
        if (favoritesJson) {
          const favoritesData = JSON.parse(favoritesJson);
          setFavorites(Array.isArray(favoritesData) ? favoritesData : []);
        } else {
          setFavorites([]);
        }
      } catch (error) {
        console.error('Errore nel caricamento dei preferiti:', error);
        setFavorites([]);
      }
    }, []);

    useFocusEffect(
      useCallback(() => {
        loadFavorites();
      }, [loadFavorites])
    );

    if (favorites.length === 0) {
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.emptyContainer}>
            <Text style={styles.text}>Niente Preferiti?! (╯°□°)╯︵ ┻━┻</Text>
            <Text style={[styles.text, { fontSize: 16 }]}>
              Aggiungi alcuni prodotti ai preferiti. Adesso!!!
            </Text>
          </View>
        </SafeAreaView>
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={favorites}
          renderItem={({ item }) => (
            <ProductCard 
              product={item} 
              onFavoriteChange={loadFavorites}
              isFavoritesScreen={true}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          onRefresh={loadFavorites}
          refreshing={false}
        />
      </SafeAreaView>
    );
  };

  export default FavoritesScreen;