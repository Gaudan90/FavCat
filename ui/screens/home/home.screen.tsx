import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import GradientButton from '../../atoms/button/gradient.button.atom';

const HomeScreen = () => {
  const handlePress = () => {
    console.log('Bottone premuto!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Welcome home!</Text>
        
        <GradientButton 
          title="Clicca qui"
          onPress={handlePress}
          colors={['#FF6B6B', '#FF8E53'] as const}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
  },
});

export default HomeScreen;