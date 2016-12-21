/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  Alert,
  Text
} from 'react-native';

import Screen from '../core/Screen';
import RouteRegistry, {
  SCREEN_INSTANCE_IDS
} from '../core/RouteRegistry';
import Navigation from '../core/Navigation';

export default class AppModeScreen extends Screen {
  static getScreenTitleConfig() {
    return {
      'title': 'Food Truck'
    };
  }

  static getRightButtonConfig() {
    return null;
  }

  static getLeftButtonConfig() {
    return null;
  }

  constructor(props) {
    super(props);

    this.localEmitter = this.props.route.emitter;
    this.onAddEditMenuClicked = this.onAddEditMenuClicked.bind(this);
    this.onOrderModeClicked = this.onOrderModeClicked.bind(this);
    this.onSeeOrdersClicked = this.onSeeOrdersClicked.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            title="Add/Edit Menu"
            onPress={this.onAddEditMenuClicked}>
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Order Mode"
            onPress={this.onOrderModeClicked}>
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="See Orders"
            onPress={this.onSeeOrdersClicked}>
          </Button>
        </View>
      </View>
    );
  }

  onAddEditMenuClicked() {
    Navigation.push(RouteRegistry.getRouteWithScreenId(SCREEN_INSTANCE_IDS.ID_ADD_EDIT_MENU_SCREEN));
  }

  onOrderModeClicked() {
    Navigation.push(RouteRegistry.getRouteWithScreenId(SCREEN_INSTANCE_IDS.ID_FOOD_TRUCK_LIST_SCREEN));
  }

  onSeeOrdersClicked() {
    Alert.alert('See Orders button clicked!');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  buttonContainer: {
    margin: 10
  }
});
