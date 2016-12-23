import Route from './Route';
var EventEmitter = require('EventEmitter');

export const SCREEN_INSTANCE_IDS = {
  'ID_APP_MODE_SCREEN': 'foodtruck.app_mode',
  'ID_ADD_EDIT_MENU_SCREEN': 'foodtruck.add_edit_menu',
  'ID_ADD_NEW_DISH_SCREEN': 'foodtruck.add_new_dish',
  'ID_FOOD_TRUCK_LIST_SCREEN': 'foodtruck.food_truck_list',
  'ID_DISH_LIST_SCREEN': 'foodtruck.food_truck_dish_list',
  'ID_ADD_DISH_TO_ORDER_SCREEN': 'foodtruck.add_dish_to_order',
  'ID_SECOND_SCREEN': 'second'
};

class RouteRegistry {

  constructor() {
    this.routeRegistry = {};
    this.routeRegistry[SCREEN_INSTANCE_IDS.ID_APP_MODE_SCREEN] = () => new Route(SCREEN_INSTANCE_IDS.ID_APP_MODE_SCREEN);
    this.routeRegistry[SCREEN_INSTANCE_IDS.ID_ADD_EDIT_MENU_SCREEN] = () => new Route(SCREEN_INSTANCE_IDS.ID_ADD_EDIT_MENU_SCREEN);
    this.routeRegistry[SCREEN_INSTANCE_IDS.ID_ADD_NEW_DISH_SCREEN] = () => new Route(SCREEN_INSTANCE_IDS.ID_ADD_NEW_DISH_SCREEN);
    this.routeRegistry[SCREEN_INSTANCE_IDS.ID_FOOD_TRUCK_LIST_SCREEN] = () => new Route(SCREEN_INSTANCE_IDS.ID_FOOD_TRUCK_LIST_SCREEN);
    this.routeRegistry[SCREEN_INSTANCE_IDS.ID_DISH_LIST_SCREEN] = () => new Route(SCREEN_INSTANCE_IDS.ID_DISH_LIST_SCREEN);
    this.routeRegistry[SCREEN_INSTANCE_IDS.ID_ADD_DISH_TO_ORDER_SCREEN] = () => new Route(SCREEN_INSTANCE_IDS.ID_ADD_DISH_TO_ORDER_SCREEN);
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
