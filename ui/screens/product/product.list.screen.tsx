import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRoute, RouteProp } from '@react-navigation/native';
import { styles } from './product.list.styles';
import ProductCard from '../../atoms/product card/product.card';
import GradientButton from '../../atoms/button/gradient button/gradient.button.atom';
import { Product } from '../../types/product.types';
import { TabParamList, Screen } from '../../types/types';

type ProductListScreenRouteProp = RouteProp<TabParamList, Screen.Products>;

const ProductListScreen = () => {
  const route = useRoute<ProductListScreenRouteProp>();
  const filters = route.params?.filters;

  const [products, setProducts] = useState<Product[]>([]);
  const [originalProducts, setOriginalProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [isSortingByTitleAsc, setIsSortingByTitleAsc] = useState<boolean>(true);
  const [isSortingByRatingAsc, setIsSortingByRatingAsc] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedProductId, setExpandedProductId] = useState<number | null>(null);

  const applyFilters = (productList: Product[]) => {
    if (!filters || !productList) return productList;

    return productList.filter(product => {
      const matchesCategory = !filters.category || product.category === filters.category;
      const matchesRating = !filters.minRating || (product.rating?.rate ?? 0) >= filters.minRating;
      return matchesCategory && matchesRating;
    });
  };

  const handleSortByTitle = () => {
    const sorted = [...products].sort((a, b) => {
      const comparison = (a.title ?? '').localeCompare(b.title ?? '');
      return isSortingByTitleAsc ? comparison : -comparison;
    });
    setProducts(sorted);
    setIsSortingByTitleAsc(prev => !prev);
  };

  const handleSortByRating = () => {
    const sorted = [...products].sort((a, b) => {
      const comparison = (a.rating?.rate ?? 0) - (b.rating?.rate ?? 0);
      return isSortingByRatingAsc ? comparison : -comparison;
    });
    setProducts(sorted);
    setIsSortingByRatingAsc(prev => !prev);
  };

  const handleResetSort = () => {
    const filtered = applyFilters([...originalProducts]);
    setProducts(filtered);
    setIsSortingByTitleAsc(true);
    setIsSortingByRatingAsc(true);
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) throw new Error('Network response was not ok');
      
      const data = await response.json();
      if (!Array.isArray(data) || data.length === 0) {
        throw new Error('No products found');
      }
      
      setOriginalProducts(data);
      setProducts(applyFilters(data));
      setError(null);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Error fetching products');
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchProducts();
  };

  const handleProductPress = (productId: number) => {
    setExpandedProductId(productId === expandedProductId ? null : productId);
  };

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#FF6B6B" />
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centered}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <GradientButton
          title={
            <Ionicons 
              name={isSortingByTitleAsc ? "arrow-up" : "arrow-down"} 
              size={24} 
              color="white" 
            />
          }
          onPress={handleSortByTitle}
          colors={['#FF6B6B', '#FF8E53']}
          style={styles.sortButton}
        />
        <GradientButton
          title={
            <Ionicons 
              name={isSortingByRatingAsc ? "star" : "star-outline"} 
              size={24} 
              color="white" 
            />
          }
          onPress={handleSortByRating}
          colors={['#FF6B6B', '#FF8E53']}
          style={styles.sortButton}
        />
        <GradientButton
          title={
            <Ionicons name="refresh" size={24} color="white" />
          }
          onPress={handleResetSort}
          colors={['#FF6B6B', '#FF8E53']}
          style={styles.sortButton}
        />
      </View>
      
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard 
            product={item}
            isExpanded={item.id === expandedProductId}
            onPress={() => handleProductPress(item.id)}
          />
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            colors={['#FF6B6B']}
            progressViewOffset={20}
          />
        }
      />
    </SafeAreaView>
  );
};

export default ProductListScreen;