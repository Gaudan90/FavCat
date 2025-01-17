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

export type TabParamList = {
  Home: undefined;
  Products: {
    filters?: {
      category: string;
      minRating: number;
    };
  };
  Favorites: undefined;
  Filters: undefined;
};

export type RootStackParamList = {
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