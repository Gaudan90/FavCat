import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './fallback.button.styles';

const FallbackButton = () => {
  return (
    <TouchableOpacity 
      onPress={() => console.log('pressed')}
      style={styles.button}
    >
      <Text style={styles.text}>Test Button</Text>
    </TouchableOpacity>
  );
};

export default FallbackButton;