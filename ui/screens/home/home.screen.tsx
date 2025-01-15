import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './home.styles';

const HomeScreen = () => {
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Welcome home!</Text>
      </View>
    </View>
  );
};

export default HomeScreen;