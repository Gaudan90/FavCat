import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF6B6B',
    padding: 15,
    minWidth: 200,
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default FallbackButton;