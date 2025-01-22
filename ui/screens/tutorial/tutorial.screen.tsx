import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './tutorial.styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Tutorial'>;

const TutorialScreen = ({ route }: Props) => {
  const handleClose = async () => {
    await route.params.onComplete();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
        style={styles.closeButton}
        onPress={handleClose}
      >
        <Ionicons name="close" size={24} color="#000" />
      </TouchableOpacity>
      
      <View style={styles.content}>
        <Image 
          source={require('../../../assets/images/favcat.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Benvenuto!</Text>
        <Text style={styles.description}>
          Esplora la nostra vasta collezione di prodotti.
        </Text>
        <Text style={styles.description}>
          Puoi facilmente cercare, filtrare e organizzare gli articoli in base alle tue preferenze.
        </Text>
        <Text style={styles.description}>
          Salva i tuoi prodotti preferiti e torna a trovarli quando vuoi!
        </Text>
        <Text style={styles.footer}>
          Meow!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default TutorialScreen;