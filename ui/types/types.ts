import { Product } from "./product.types";

export enum Screen {
  Tutorial = 'Tutorial',
  MainTabs = 'MainTabs',
  Products = 'Products',
  Favorites = 'Favorites',
  Filters = 'Filters',
  ProductDetail = 'ProductDetail'
}

export type ProductFilters = {
  category?: string;
  minRating?: number;
};

export type RootStackParamList = {
  Tutorial: {
    onComplete: () => Promise<void>;
  };
  MainTabs: undefined;
};

export type TabParamList = {
  Products: {
    filters?: ProductFilters;
  };
  Favorites: undefined;
  Filters: undefined;
  ProductDetail: {
    product: Product;
  };
};