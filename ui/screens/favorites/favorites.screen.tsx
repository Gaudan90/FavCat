import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './favorites.styles';

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Preferiti</Text>
      <Text>Qui appariranno i preferiti</Text>
    </View>
  );
};

export default FavoritesScreen;