// import AppModeRoute from '../routes/AppModeRoute';
// import SecondRoute from '../routes/SecondRoute';
// import AddEditMenuRoute from '../routes/AddEditMenuRoute';
import Route from './Route';
var EventEmitter = require('EventEmitter');

export const SCREEN_INSTANCE_IDS = {
  'ID_APP_MODE_SCREEN': 'foodtruck.app_mode',
  'ID_ADD_EDIT_MENU_SCREEN': 'foodtruck.add_edit_menu',
  'ID_SECOND_SCREEN': 'second'
};

class RouteRegistry {

  constructor() {
    this.routeRegistry = {};
    this.routeRegistry[SCREEN_INSTANCE_IDS.ID_APP_MODE_SCREEN] = () => new Route(SCREEN_INSTANCE_IDS.ID_APP_MODE_SCREEN);
    this.routeRegistry[SCREEN_INSTANCE_IDS.ID_ADD_EDIT_MENU_SCREEN] = () => new Route(SCREEN_INSTANCE_IDS.ID_ADD_EDIT_MENU_SCREEN);
    this.routeRegistry[SCREEN_INSTANCE_IDS.ID_SECOND_SCREEN] = () => new Route(SCREEN_INSTANCE_IDS.ID_SECOND_SCREEN);
  }

  getRouteAtIndex(index) {
    return this.routeRegistry[SCREEN_INSTANCE_IDS.ID_APP_MODE_SCREEN]();
  }

  getRouteWithScreenId(id) {
    return this.routeRegistry[id]();
  }
}

export default new RouteRegistry();
