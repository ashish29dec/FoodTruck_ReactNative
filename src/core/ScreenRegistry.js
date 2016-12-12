import Navigation from './Navigation';
import AppModeScreen from '../scenes/AppModeScreen';
import SecondScene from '../scenes/SecondScene';
import { SCREEN_INSTANCE_IDS } from './RouteRegistry';

export function registerScreens() {
  Navigation.registerScreen(SCREEN_INSTANCE_IDS.ID_APP_MODE_SCREEN, () => AppModeScreen);
  Navigation.registerScreen(SCREEN_INSTANCE_IDS.ID_SECOND_SCREEN, () => SecondScene);
}
