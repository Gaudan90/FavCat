import React, { useEffect, useState, useCallback } from 'react';
import { View, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './product.list.styles';
import ProductCard from '../../atoms/product card/product.card';
import GradientButton from '../../atoms/button/gradient button/gradient.button.atom';
import { Product } from '../../types/product.types';

const ProductListScreen = () => {
  // ** Use States ** //
  const [products, setProducts] = useState<Product[]>([]);
  const [originalProducts, setOriginalProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [titleSortAsc, setTitleSortAsc] = useState(true);
  const [ratingSortAsc, setRatingSortAsc] = useState(true);

  // ** Use Callbacks ** //
  const sortByTitle = useCallback(() => {
    const sortedProducts = [...products].sort((a, b) => {
      const comparison = a.title.localeCompare(b.title);
      return titleSortAsc ? comparison : -comparison;
    });
    setProducts(sortedProducts);
    setTitleSortAsc(!titleSortAsc);
  }, [products, titleSortAsc]);

  const sortByRating = useCallback(() => {
    const sortedProducts = [...products].sort((a, b) => {
      const comparison = a.rating.rate - b.rating.rate;
      return ratingSortAsc ? comparison : -comparison;
    });
    setProducts(sortedProducts);
    setRatingSortAsc(!ratingSortAsc);
  }, [products, ratingSortAsc]);

  const resetSort = useCallback(() => {
    setProducts([...originalProducts]);
    setTitleSortAsc(true);
    setRatingSortAsc(true);
  }, [originalProducts]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchProducts();
  }, []);

  // **API Calls & Use Effects **//
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setOriginalProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#FF6B6B" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <GradientButton
          title={
            <View style={styles.iconContainer}>
              <Ionicons 
                name={titleSortAsc ? "arrow-up" : "arrow-down"} 
                size={24} 
                color="white" 
              />
            </View>
          }
          onPress={sortByTitle}
          colors={['#FF6B6B', '#FF8E53']}
          style={styles.sortButton}
        />
        <GradientButton
          title={
            <View style={styles.iconContainer}>
              <Ionicons 
                name={ratingSortAsc ? "star" : "star-outline"} 
                size={24} 
                color="white" 
              />
            </View>
          }
          onPress={sortByRating}
          colors={['#FF6B6B', '#FF8E53']}
          style={styles.sortButton}
        />
        <GradientButton
          title={
            <View style={styles.iconContainer}>
              <Ionicons 
                name="refresh" 
                size={24} 
                color="white" 
              />
            </View>
          }
          onPress={resetSort}
          colors={['#FF6B6B', '#FF8E53']}
          style={styles.sortButton}
        />
      </View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#FF6B6B']}
          />
        }
      />
    </SafeAreaView>
  );
};

export default ProductListScreen;