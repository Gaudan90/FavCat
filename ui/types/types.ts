export enum Screen {
  Tutorial = 'Tutorial',
  MainTabs = 'MainTabs',
  Products = 'Products',
  Favorites = 'Favorites',
  Filters = 'Filters'
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
};