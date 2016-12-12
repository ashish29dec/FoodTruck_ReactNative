import AppModeRoute from '../routes/AppModeRoute';
import SecondRoute from '../routes/SecondRoute';
var EventEmitter = require('EventEmitter');

export const SCREEN_INSTANCE_IDS = {
  'ID_APP_MODE_SCREEN': 'foodtruck.app_mode',
  'ID_SECOND_SCREEN': 'second'
};

class RouteRegistry {

  constructor() {
    this.routeRegistry = {};
    this.routeRegistry[SCREEN_INSTANCE_IDS.ID_APP_MODE_SCREEN] = () => new AppModeRoute(SCREEN_INSTANCE_IDS.ID_APP_MODE_SCREEN);
    this.routeRegistry[SCREEN_INSTANCE_IDS.ID_SECOND_SCREEN] = () => new SecondRoute(SCREEN_INSTANCE_IDS.ID_SECOND_SCREEN);
  }

  getRouteAtIndex(index) {
    return this.routeRegistry[SCREEN_INSTANCE_IDS.ID_APP_MODE_SCREEN]();
  }

  getRouteWithScreenId(id) {
    return this.routeRegistry[id]();
  }
}

export default new RouteRegistry();
