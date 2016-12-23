import React from 'react';
import {
  ListView,
  Text,
  View
} from 'react-native';
import Screen from '../../core/Screen';
import Navigation, {
  NAVIGATION_CONSTANTS
} from '../../core/Navigation';
import RouteRegistry, {
  SCREEN_INSTANCE_IDS
} from '../../core/RouteRegistry';
import PropRegistry from '../../core/PropRegistry';

export default class DishListScreen extends Screen {
  static TITLE = '';

  static getScreenTitleConfig() {
    return {
      'title': DishListScreen.TITLE
    };
  }

  static getLeftButtonConfig() {
    return null;
  }

  static getRightButtonConfig() {
    return null;
  }

  constructor(props) {
    super(props);

    this.data = [
      {
        dishName: 'California Steak Burger'
      },
      {
        dishName: 'Chicken Sandwich'
      },
      {
        dishName: 'Salad'
      }
    ];
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(this.data),
    };

    this.renderDishes = this.renderDishes.bind(this);
    this.onDishSelected = this.onDishSelected.bind(this);
  }

  componentWillMount() {
    DishListScreen.TITLE = this.props.title;
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderDishes}
        style={{top: NAVIGATION_CONSTANTS.NAVBAR_HEIGHT, marginBottom: NAVIGATION_CONSTANTS.NAVBAR_HEIGHT}}/>
    );
  }

  renderDishes(rowData, sectionID, rowID, highlightRow) {
    return(
      <Text
        style={{fontSize: 30, margin: 10, borderWidth: 1, borderColor: '#000', textAlign:'center'}}
        onPress={() => this.onDishSelected(rowData)}>
        {rowData.dishName}
      </Text>
    );
  }

  onDishSelected(dish) {
    PropRegistry.save(SCREEN_INSTANCE_IDS.ID_ADD_DISH_TO_ORDER_SCREEN, {
      'name': dish.dishName
    });
    Navigation.push(RouteRegistry.getRouteWithScreenId(SCREEN_INSTANCE_IDS.ID_ADD_DISH_TO_ORDER_SCREEN));
  }
}
