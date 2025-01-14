import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import GradientButton from '../atoms/button/gradient.button.atom';

const HelloScreen = () => {
  const handlePress = () => {
    console.log('Bottone premuto!');
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{ 
          uri: 'https://cdn.betterttv.net/emote/5fb750cf68e2d56f0f398e87/3x.gif'
        }} 
        style={styles.headerImage}
      />
      
      <View style={styles.content}>
        <Text style={styles.text}>Hello World! We're working for you.</Text>
        
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
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
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

export default HelloScreen;