import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps189724Navigator from '../features/Maps189724/navigator';
import Additem189723Navigator from '../features/Additem189723/navigator';
import Maps189719Navigator from '../features/Maps189719/navigator';
import UserProfile189715Navigator from '../features/UserProfile189715/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps189724: { screen: Maps189724Navigator },
Additem189723: { screen: Additem189723Navigator },
Maps189719: { screen: Maps189719Navigator },
UserProfile189715: { screen: UserProfile189715Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
