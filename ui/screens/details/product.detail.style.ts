import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width - 32;
const imageHeight = imageWidth * 0.66;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040e1f',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  imageContainer: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  image: {
    width: imageWidth,
    height: imageHeight,
    backgroundColor: '#040e1f',
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6f84a6',
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
    color: '#6f84a6',
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
    color: '#6f84a6',
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
    color: '#6f84a6',
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
  headerImage: {
    width: 150,
    height: 150,
    backgroundColor: '#040e1f',
  },
});