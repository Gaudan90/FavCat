import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#040e1f',
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    image: {
      width: 200,
      height: 200,
      marginBottom: 20,
    },
    text: {
      color: '#ffffff',
      fontSize: 24,
      marginBottom: 15,
      textAlign: 'center',
    },
    description: {
      color: '#ffffff',
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 15,
      lineHeight: 22,
      opacity: 0.8,
    },
});