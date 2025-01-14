import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface GradientButtonProps {
  title: string;
  onPress: () => void;
  colors: readonly [string, string];
  style?: StyleProp<ViewStyle>;
}

const GradientButton: React.FC<GradientButtonProps> = ({ 
  title, 
  onPress, 
  colors, 
  style 
}) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={[styles.touchable, style]}
    >
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  gradient: {
    padding: 15,
    minWidth: 200,
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default GradientButton;