export enum Screen {
  Home = 'Home',
  TabNavigator = 'TabNavigator',
  Products = 'Products',
  Favorites = 'Favorites',
  Filters = 'Filters',
}

export type MainParamList = {
  TabNavigator: undefined;
  [Screen.Home]: undefined;
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
};