import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040e1f',
  },
  scrollContainer: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  categoryButton: {
    backgroundColor: '#1d2b42',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1d2b42',
  },
  categoryText: {
    color: '#ffffff',
    fontSize: 16,
    textTransform: 'capitalize',
  },
  ratingButtons: {
    flexDirection: 'column',
    gap: 10,
  },
  ratingButton: {
    backgroundColor: '#1d2b42',
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1d2b42',
  },
  selectedButton: {
    borderColor: '#FF6B6B',
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    marginHorizontal: 2,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 24,
  },
  button: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  applyButton: {
    backgroundColor: '#FF6B6B',
  },
  resetButton: {
    backgroundColor: '#1d2b42',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 32,
  },
  image: {
    width: 200,
    height: 200,
  },
});