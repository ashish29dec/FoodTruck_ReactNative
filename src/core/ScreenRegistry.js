import Navigation from './Navigation';
import AppModeScreen from '../scenes/AppModeScreen';
import AddEditMenuScreen from '../scenes/AddEditMenuScreen';
import AddNewDishScreen from '../scenes/AddNewDishScreen';
import FoodTruckListScreen from '../scenes/order/FoodTruckListScreen';
import DishListScreen from '../scenes/order/DishListScreen';
import AddDishToOrderScreen from '../scenes/order/AddDishToOrderScreen';
import SecondScene from '../scenes/SecondScene';
import { SCREEN_INSTANCE_IDS } from './RouteRegistry';

export function registerScreens() {
  Navigation.registerScreen(SCREEN_INSTANCE_IDS.ID_APP_MODE_SCREEN, () => AppModeScreen);
  Navigation.registerScreen(SCREEN_INSTANCE_IDS.ID_ADD_EDIT_MENU_SCREEN, () => AddEditMenuScreen);
  Navigation.registerScreen(SCREEN_INSTANCE_IDS.ID_ADD_NEW_DISH_SCREEN, () => AddNewDishScreen);
  Navigation.registerScreen(SCREEN_INSTANCE_IDS.ID_FOOD_TRUCK_LIST_SCREEN, () => FoodTruckListScreen);
  Navigation.registerScreen(SCREEN_INSTANCE_IDS.ID_DISH_LIST_SCREEN, () => DishListScreen);
  Navigation.registerScreen(SCREEN_INSTANCE_IDS.ID_ADD_DISH_TO_ORDER_SCREEN, () => AddDishToOrderScreen);
  Navigation.registerScreen(SCREEN_INSTANCE_IDS.ID_SECOND_SCREEN, () => SecondScene);
}
