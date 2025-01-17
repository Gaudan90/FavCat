import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    backgroundColor: '#f0f0f0',
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1d2b42',
    marginBottom: 8,
  },
  price: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FF6B6B',
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  ratingText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#1d2b42',
  },
  reviewCount: {
    marginLeft: 8,
    fontSize: 14,
    color: '#6f84a6',
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1d2b42',
    marginRight: 8,
  },
  categoryText: {
    fontSize: 16,
    color: '#6f84a6',
  },
  descriptionContainer: {
    marginBottom: 16,
  },
  descriptionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1d2b42',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#6f84a6',
  },
  errorText: {
    fontSize: 16,
    color: '#FF6B6B',
    textAlign: 'center',
  },
});