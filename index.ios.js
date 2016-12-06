/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import AppModeScreen from './scene/AppModeScreen';

export default class FoodTruck_ReactNative extends Component {
  render() {
    return (
      <AppModeScreen />
    );
  }
}

AppRegistry.registerComponent('FoodTruck_ReactNative', () => FoodTruck_ReactNative);
