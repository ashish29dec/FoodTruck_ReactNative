import Navigation from './Navigation';
import AppModeScreen from '../scenes/AppModeScreen';
import AddEditMenuScreen from '../scenes/AddEditMenuScreen';
import AddNewDishScreen from '../scenes/AddNewDishScreen';
import SecondScene from '../scenes/SecondScene';
import { SCREEN_INSTANCE_IDS } from './RouteRegistry';

export function registerScreens() {
  Navigation.registerScreen(SCREEN_INSTANCE_IDS.ID_APP_MODE_SCREEN, () => AppModeScreen);
  Navigation.registerScreen(SCREEN_INSTANCE_IDS.ID_ADD_EDIT_MENU_SCREEN, () => AddEditMenuScreen);
  Navigation.registerScreen(SCREEN_INSTANCE_IDS.ID_ADD_NEW_DISH_SCREEN, () => AddNewDishScreen);
  Navigation.registerScreen(SCREEN_INSTANCE_IDS.ID_SECOND_SCREEN, () => SecondScene);
}
