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

export default class FoodTruckListScreen extends Screen {
  static getLeftButtonConfig() {
    return null;
  }

  static getRightButtonConfig() {
    return null;
  }

  static getScreenTitleConfig() {
    return {
      'title': 'Food Trucks'
    };
  }

  constructor(props) {
    super(props);

    this.data = [
      {
        truckName: 'Sushi Bowl'
      },
      {
        truckName: 'Burger King'
      }
    ];
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(this.data),
    };

    this.renderFoodTrucks = this.renderFoodTrucks.bind(this);
    this.onFoodTruckSelected = this.onFoodTruckSelected.bind(this);
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderFoodTrucks}
        style={{top: NAVIGATION_CONSTANTS.NAVBAR_HEIGHT, marginBottom: NAVIGATION_CONSTANTS.NAVBAR_HEIGHT}}/>
    );
  }

  renderFoodTrucks(rowData, sectionID, rowID, highlightRow) {
    return(
      <Text
        onPress={() => this.onFoodTruckSelected(rowData)}
        style={{fontSize: 30, margin: 10, borderWidth: 1, borderColor: '#000', textAlign:'center'}}>
        {rowData.truckName}
      </Text>
    );
  }

  onFoodTruckSelected(rowData) {
    PropRegistry.save(SCREEN_INSTANCE_IDS.ID_DISH_LIST_SCREEN, {
      'title': rowData.truckName
    });
    Navigation.push(RouteRegistry.getRouteWithScreenId(SCREEN_INSTANCE_IDS.ID_DISH_LIST_SCREEN));
  }
}
