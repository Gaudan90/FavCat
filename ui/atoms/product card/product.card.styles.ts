import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
      backgroundColor: 'white',
      borderRadius: 12,
      marginHorizontal: 16,
      marginVertical: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    image: {
      width: '100%',
      height: 200,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      resizeMode: 'contain',
      backgroundColor: '#fff',
    },
    contentContainer: {
      padding: 16,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    price: {
      fontSize: 18,
      fontWeight: '600',
      color: '#FF6B6B',
      marginBottom: 8,
    },
    description: {
      fontSize: 14,
      color: '#666',
      marginBottom: 8,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    stars: {
      flexDirection: 'row',
      marginRight: 8,
    },
    ratingText: {
      fontSize: 14,
      color: '#666',
    },
  });