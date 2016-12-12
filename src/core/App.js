/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';
import Navigation from './Navigation';
import {registerScreens} from './ScreenRegistry';
import RouteRegistry from './RouteRegistry';
var EventEmitter = require('EventEmitter');

export default class FoodTruck_ReactNative extends Component {
  constructor(props) {
    super(props);

    registerScreens();
    this.EventEmitter = new EventEmitter();
  }

  render() {
    return (
      <Navigator
        initialRoute={RouteRegistry.getRouteAtIndex(0)}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={Navigation.renderNavigationBar()}
            style={styles.navBar}
          />
        }
      />
    );
  }

  renderScene(route, navigator) {
    return Navigation.renderScene(route, navigator, this.EventEmitter);
  }
}

const styles = StyleSheet.create({
  navBar: {
    borderBottomColor: '#48209A',
    borderBottomWidth: 1,
    backgroundColor: '#5B29C1'
  },
});

AppRegistry.registerComponent('FoodTruck_ReactNative', () => FoodTruck_ReactNative);
