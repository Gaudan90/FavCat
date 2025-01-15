import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './home.styles';
import GradientButton from '../../atoms/button/gradient button/gradient.button.atom';

const HomeScreen = () => {
  const handlePress = () => {
    console.log('Bottone premuto!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Welcome home!</Text>
        
        <GradientButton 
          title="Cliccami per l'antistress!"
          onPress={handlePress}
          colors={['#FF6B6B', '#FF8E53'] as const}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default HomeScreen;