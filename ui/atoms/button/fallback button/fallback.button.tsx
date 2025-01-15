import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './fallback.button.styles';

//** In case you have issues with the gradient button, you can use this button instead **//

const FallbackButton = () => {
  return (
    <TouchableOpacity 
      onPress={() => console.log('pressed')}
      style={styles.button}
    >
      <Text style={styles.text}>Fallback!</Text>
    </TouchableOpacity>
  );
};

export default FallbackButton;