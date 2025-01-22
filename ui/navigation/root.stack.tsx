import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from '../types/types';
import TabNavigator from './tab/tab.navigator';
import TutorialScreen from '../screens/tutorial/tutorial.screen';
import ProductDetailScreen from '../screens/product/product.list.screen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const TUTORIAL_SHOWN_KEY = '@tutorial_shown';

const RootStack = () => {
  const [isTutorialNeeded, setIsTutorialNeeded] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkTutorialStatus = async () => {
      try {
        const tutorialShown = await AsyncStorage.getItem(TUTORIAL_SHOWN_KEY);
        setIsTutorialNeeded(!tutorialShown);
      } catch (error) {
        console.error('Error checking tutorial status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkTutorialStatus();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isTutorialNeeded ? (
        <Stack.Screen 
          name="Tutorial"
          component={TutorialScreen}
          initialParams={{ 
            onComplete: async () => {
              await AsyncStorage.setItem(TUTORIAL_SHOWN_KEY, 'shown');
              setIsTutorialNeeded(false);
            }
          }}
        />
      ) : (
        <>
          <Stack.Screen 
            name="MainTabs"
            component={TabNavigator}
          />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetailScreen}
            options={{
              headerShown: true,
              headerTitle: 'Dettaglio Prodotto',
              headerTintColor: '#cd1c18',
              headerStyle: {
                backgroundColor: '#1d2b42',
              },
              presentation: 'card',
              animation: 'slide_from_right',
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootStack;