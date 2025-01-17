import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Product } from '../../types/product.types';
import { TabParamList, Screen } from '../../types/types';
import { styles } from './product.card.styles';
import { ProductCardProps } from '../../types/product.types';

type ProductNavigationProp = BottomTabNavigationProp<TabParamList>;

const FAVORITES_STORAGE_KEY = '@favorites';

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onFavoriteChange
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation<ProductNavigationProp>();

  useEffect(() => {
    checkIfFavorite();
  }, [product.id]);

  const checkIfFavorite = async () => {
    try {
      const favoritesJson = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);
      if (favoritesJson) {
        const favorites: Product[] = JSON.parse(favoritesJson);
        setIsFavorite(favorites.some(fav => fav.id === product.id));
      }
    } catch (error) {
      console.error('Errore nel controllo dei preferiti:', error);
    }
  };

  const toggleFavorite = async () => {
    try {
      const favoritesJson = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);
      let favorites: Product[] = [];
      
      if (favoritesJson) {
        favorites = JSON.parse(favoritesJson);
      }

      if (isFavorite) {
        favorites = favorites.filter(fav => fav.id !== product.id);
      } else {
        favorites = [...favorites, product];
      }

      await AsyncStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
      setIsFavorite(!isFavorite);
      
      if (onFavoriteChange) {
        onFavoriteChange();
      }
    } catch (error) {
      console.error('Errore nel salvataggio del preferito:', error);
    }
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={toggleFavorite}
      >
        <Ionicons
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={24}
          color={isFavorite ? '#FF6B6B' : '#6f84a6'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Screen.ProductDetail, { product });
        }}
      >
        <Image 
          source={{ uri: product.image }} 
          style={styles.image} 
        />
        <View style={styles.contentContainer}>
          <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
          <Text style={styles.price}>€ {product.price.toFixed(2)}</Text>
          <Text style={styles.description} numberOfLines={3}>
            {product.description}
          </Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>
              {product.rating.rate} / 5 ({product.rating.count} recensioni)
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;