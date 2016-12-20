
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  Button,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Screen from '../core/Screen';
import RouteRegistry, {
  SCREEN_INSTANCE_IDS
} from '../core/RouteRegistry';
import Navigation, {
  NAVIGATION_CONSTANTS
} from '../core/Navigation';

export default class AddEditMenuScreen extends Screen {
  static getScreenTitleConfig() {
    return {
      'title': 'Add/Edit Menu'
    };
  }

  static getRightButtonConfig() {
    return [
      {
        'label': 'Edit',
        'type': 'Text'
      }
    ];
  }

  static getLeftButtonConfig() {
    return null;
  }

  constructor(props) {
    super(props);

    this.data = [];
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(this.data),
    };

    this.renderDish = this.renderDish.bind(this);
    this.onNewItemClicked = this.onNewItemClicked.bind(this);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderDish}
          style={{top: NAVIGATION_CONSTANTS.NAVBAR_HEIGHT, marginBottom: NAVIGATION_CONSTANTS.NAVBAR_HEIGHT}}/>
        <Button
          title="New Item"
          onPress={this.onNewItemClicked}/>
      </View>
    );
  }

  renderDish(rowData, sectionID, rowID, highlightRow) {
    // TODO: Render dish here
    return (
      <View style={{flexDirection: 'row', borderWidth: 1, borderColor: '#000'}}>
        <Text style={{flex: 1, fontSize: 20}}>
          {rowData.dishName}
        </Text>
        <Text>
          {rowData.numOptions} options
        </Text>
      </View>
    );
  }

  onNewItemClicked() {
    Navigation.push(RouteRegistry.getRouteWithScreenId(SCREEN_INSTANCE_IDS.ID_ADD_NEW_DISH_SCREEN));
  }

  onReceiveRightButtonPressedEvent() {
    Navigation.push(RouteRegistry.getRouteWithScreenId(SCREEN_INSTANCE_IDS.ID_SECOND_SCREEN));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
