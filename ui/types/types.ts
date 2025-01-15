export enum Screen {
  Home = 'Home',
  TabNavigator = 'TabNavigator',
  Products = 'Products',
  Favorites = 'Favorites',
}

export type MainParamList = {
  TabNavigator: undefined;
  [Screen.Home]: undefined;
};

export type TabParamList = {
  Home: undefined;
  Products: undefined;
  Favorites: undefined;
};