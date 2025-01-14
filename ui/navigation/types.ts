export enum Screen {
    Home = 'Home',
    TabNavigator = 'TabNavigator',
  }
  
  export type MainParamList = {
    TabNavigator: undefined;
    [Screen.Home]: undefined;
  };