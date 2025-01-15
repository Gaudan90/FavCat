import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Product } from '../../types/product.types';
import { styles } from './product.card.styles';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Ionicons
        key={index}
        name={index < Math.floor(rating) ? 'star' : 'star-outline'}
        size={16}
        color="#FFD700"
      />
    ));
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
        <Text style={styles.price}>€ {product.price.toFixed(2)}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {product.description}
        </Text>
        <View style={styles.ratingContainer}>
          <View style={styles.stars}>
            {renderStars(product.rating.rate)}
          </View>
          <Text style={styles.ratingText}>
            {product.rating.rate} ({product.rating.count} recensioni)
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;