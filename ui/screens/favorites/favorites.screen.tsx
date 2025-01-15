import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './favorites.styles';

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Niente Preferiti?! (╯°□°)╯︵ ┻━┻</Text>
      <Text>Qui andranno i preferiti</Text>
    </View>
  );
};

export default FavoritesScreen;