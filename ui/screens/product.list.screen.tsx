import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lista Prodotti</Text>
      <Text>Qui si vedranno i prodotti dall'API</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default ProductListScreen;