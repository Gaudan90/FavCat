import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../../types/types';
import { styles } from './product.detail.style';

type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

const ProductDetailScreen = () => {
  const route = useRoute<ProductDetailScreenRouteProp>();

  if (!route.params?.product) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.errorText}>Prodotto non disponibile</Text>
        </View>
      </SafeAreaView>
    );
  }

  const { product } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} contentContainerStyle={styles.scrollContainer}>
        {/* Immagine Header Decorativa */}
        <View style={styles.headerImageContainer}>
          <Image 
            source={require('../../../assets/images/favcat.png')}
            style={styles.headerImage}
            resizeMode="cover"
          />
        </View>

        <View style={styles.productImageContainer}>
          <Image 
            source={{ uri: product.image }} 
            style={styles.productImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{product.category}</Text>
          </View>

          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>€ {product.price.toFixed(2)}</Text>

          <View style={styles.ratingContainer}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Ionicons
                key={index}
                name={index < Math.floor(product.rating.rate) ? "star" : "star-outline"}
                size={24}
                color="#FFD700"
                style={styles.starIcon}
              />
            ))}
            <Text style={styles.ratingText}>
              {product.rating.rate}/5 ({product.rating.count} recensioni)
            </Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Descrizione</Text>
            <Text style={styles.descriptionText}>{product.description}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;