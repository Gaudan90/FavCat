import { NavigatorScreenParams } from '@react-navigation/native';
import { Product } from './product.types';

export enum Screen {
  Home = 'Home',
  TabNavigator = 'TabNavigator',
  Products = 'Products',
  Favorites = 'Favorites',
  Filters = 'Filters',
  ProductDetail = 'ProductDetail',
}

export type MainParamList = {
  TabNavigator: undefined;
  [Screen.Home]: undefined;
  [Screen.ProductDetail]: {  
    product: Product;
  };
};

export type ProductFilters = {
  category?: string;
  minRating?: number;
};


export type TabParamList = {
  [Screen.Home]: undefined;
  [Screen.Products]: {
    filters?: ProductFilters;
  };
  [Screen.Favorites]: undefined;
  [Screen.Filters]: undefined;
};

export type RootStackParamList = {
  TabNavigator: undefined | { screen: string; params: any };
  MainTabs: undefined;
  ProductList: {
    filters?: {
      category: string;
      minRating: number;
    };
  };
  Filters: undefined;
  ProductDetail: {   
    product: Product;
  };
};