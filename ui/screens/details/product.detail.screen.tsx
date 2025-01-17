import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList, Screen } from '../../types/types';
import { styles } from './product.detail.style';

type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, Screen.ProductDetail>;
type ProductDetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, Screen.ProductDetail>;

const ProductDetailScreen = () => {
  const route = useRoute<ProductDetailScreenRouteProp>();
  const navigation = useNavigation<ProductDetailScreenNavigationProp>();

  // Controllo di sicurezza per i parametri
  if (!route.params?.product) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.errorText}>Prodotto non trovato</Text>
        </View>
      </SafeAreaView>
    );
  }

  const { product } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false}>
        <Image 
          source={{ uri: product.image }} 
          style={styles.image} 
          resizeMode="cover"
        />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>€ {product.price.toFixed(2)}</Text>
          
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={20} color="#FFD700" />
            <Text style={styles.ratingText}>
              {product.rating.rate} / 5
            </Text>
            <Text style={styles.reviewCount}>
              ({product.rating.count} recensioni)
            </Text>
          </View>

          <View style={styles.categoryContainer}>
            <Text style={styles.categoryLabel}>Categoria:</Text>
            <Text style={styles.categoryText}>{product.category}</Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionLabel}>Descrizione:</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;