  import React from 'react';
  import { View, Text, Image } from 'react-native';
  import { styles } from './home.styles';

  const HomeScreen = () => {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image 
            source={require('../../../assets/images/favcat.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.text}>Benvenuto!</Text>
          <Text style={styles.text}>
            Esplora la nostra vasta collezione di prodotti.
          </Text>
          <Text style={styles.description}>
          Puoi facilmente cercare, filtrare e organizzare gli articoli in base alle tue preferenze.
          </Text>
          <Text style={styles.description}>
          Salva i tuoi prodotti preferiti e torna a trovarli quando vuoi!
          </Text>
          <Text style={styles.text}>
          Meow!
          </Text>
        </View>
      </View>
    );
  };

  export default HomeScreen;