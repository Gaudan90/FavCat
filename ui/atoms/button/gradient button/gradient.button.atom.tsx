import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './gradient.button.styles';

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

export default GradientButton;