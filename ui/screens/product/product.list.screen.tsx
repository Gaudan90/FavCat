  import React, { useEffect, useState, useCallback } from 'react';
  import { View, Text, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
  import { SafeAreaView } from 'react-native-safe-area-context';
  import { Ionicons } from '@expo/vector-icons';
  import { useRoute, RouteProp, useFocusEffect } from '@react-navigation/native';
  import { styles } from './product.list.styles';
  import ProductCard from '../../atoms/product card/product.card';
  import GradientButton from '../../atoms/button/gradient button/gradient.button.atom';
  import { Product } from '../../types/product.types';
  import { TabParamList, Screen } from '../../types/types';
  
  type ProductListScreenRouteProp = RouteProp<TabParamList, Screen.Products>;

  const ProductListScreen = () => {
    const route = useRoute<ProductListScreenRouteProp>();
    const filters = route.params?.filters;

    // ** Use States ** //
    const [products, setProducts] = useState<Product[]>([]);
    const [originalProducts, setOriginalProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [titleSortAsc, setTitleSortAsc] = useState(true);
    const [ratingSortAsc, setRatingSortAsc] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [refreshKey, setRefreshKey] = useState(0);

    // ** Use Callbacks ** //
    const applyFilters = useCallback((productList: Product[]) => {
      if (!filters || !productList) return productList;

      let filteredProducts = [...productList];

      if (filters.category) {
        filteredProducts = filteredProducts.filter(
          product => product.category === filters.category
        );
      }

      if (typeof filters.minRating === 'number' && filters.minRating > 0) {
        filteredProducts = filteredProducts.filter(
          product => product.rating?.rate >= filters.minRating!
        );
      }

      return filteredProducts;
    }, [filters]);

    const sortByTitle = useCallback(() => {
      if (!products.length) return;
      
      const sortedProducts = [...products].sort((a, b) => {
        if (!a.title || !b.title) return 0;
        const comparison = a.title.localeCompare(b.title);
        return titleSortAsc ? comparison : -comparison;
      });
      setProducts(sortedProducts);
      setTitleSortAsc(!titleSortAsc);
    }, [products, titleSortAsc]);

    const sortByRating = useCallback(() => {
      if (!products.length) return;
      
      const sortedProducts = [...products].sort((a, b) => {
        if (!a.rating?.rate || !b.rating?.rate) return 0;
        const comparison = a.rating.rate - b.rating.rate;
        return ratingSortAsc ? comparison : -comparison;
      });
      setProducts(sortedProducts);
      setRatingSortAsc(!ratingSortAsc);
    }, [products, ratingSortAsc]);

    const resetSort = useCallback(() => {
      if (!originalProducts.length) return;
      const filteredProducts = applyFilters(originalProducts);
      setProducts(filteredProducts);
      setTitleSortAsc(true);
      setRatingSortAsc(true);
    }, [originalProducts, applyFilters]);

    const onRefresh = useCallback(() => {
      setRefreshing(true);
      fetchProducts();
    }, []);

    useFocusEffect(
      useCallback(() => {
        setRefreshKey(prev => prev + 1);
      }, [])
    );

    // **API Calls & Use Effects **//
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setOriginalProducts(data);
          const filteredData = applyFilters(data);
          setProducts(filteredData);
        } else {
          setError('No products found');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products');
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    };
    
    useEffect(() => {
      fetchProducts();
    }, [filters]);

    if (loading) {
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
          renderItem={({ item }) => (
            <ProductCard 
              key={`${item.id}-${refreshKey}`}
              product={item} 
            />
          )}
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