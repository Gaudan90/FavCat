import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './filter.styles';

const FiltersScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dammi i Filtri! (╯°□°)╯︵ ┻━┻</Text>
      <Text>Qui andranno i filtri</Text>
    </View>
  );
};

export default FiltersScreen;