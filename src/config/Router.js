import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Home, Settings } from '../screens';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Settings: {
      screen: Settings,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(AppNavigator);
