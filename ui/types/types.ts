import { Product } from './product.types';

export enum Screen {
  Home = 'Home',
  Products = 'Products',
  Favorites = 'Favorites',
  Filters = 'Filters',
  ProductDetail = 'ProductDetail',
  TabNavigator = 'TabNavigator'
}

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
  [Screen.ProductDetail]: {   
    product?: Product;  
  };
  [Screen.TabNavigator]: undefined;
};

export { Product };
