  import React, { useState, useEffect } from 'react';
  import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
  import { SafeAreaView } from 'react-native-safe-area-context';
  import { useNavigation } from '@react-navigation/native';
  import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
  import { Ionicons } from '@expo/vector-icons';
  import { styles } from './filter.styles';
  import { TabParamList } from '../../types/types';

  type FilterScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Filters'>;

  const FiltersScreen = () => {
    const navigation = useNavigation<FilterScreenNavigationProp>();
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [selectedRating, setSelectedRating] = useState<number>(0);

    useEffect(() => {
      fetchCategories();
    }, []);

    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategories(data.sort());
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const RatingStars = ({ rating }: { rating: number }) => (
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Ionicons
            key={star}
            name={star <= rating ? 'star' : 'star-outline'}
            size={24}
            color={star <= rating ? '#FFD700' : '#ffffff'}
            style={styles.star}
          />
        ))}
      </View>
    );

    const applyFilters = () => {
      navigation.navigate('Products', {
        filters: {
          category: selectedCategory,
          minRating: selectedRating,
        }
      });
    };

    const resetFilters = () => {
      setSelectedCategory('');
      setSelectedRating(0);
    };

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.content}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Filtra per Categoria</Text>
              <View style={styles.categoryContainer}>
                {categories.map((category) => (
                  <TouchableOpacity
                    key={category}
                    style={[
                      styles.categoryButton,
                      selectedCategory === category && styles.selectedButton
                    ]}
                    onPress={() => setSelectedCategory(category)}
                  >
                    <Text style={styles.categoryText}>{category}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Filtra per Rating Minimo</Text>
              <View style={styles.ratingButtons}>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <TouchableOpacity
                    key={rating}
                    style={[
                      styles.ratingButton,
                      selectedRating === rating && styles.selectedButton
                    ]}
                    onPress={() => setSelectedRating(rating)}
                  >
                    <RatingStars rating={rating} />
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={[styles.button, styles.applyButton]}
                onPress={applyFilters}
              >
                <Text style={styles.buttonText}>Applica Filtri</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[styles.button, styles.resetButton]}
                onPress={resetFilters}
              >
                <Text style={styles.buttonText}>Resetta Filtri</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
              <Image
                source={require('../../../assets/images/favcat.png')}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };

  export default FiltersScreen;