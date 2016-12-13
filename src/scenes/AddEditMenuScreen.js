/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Screen from '../core/Screen';
import RouteRegistry, {
  SCREEN_INSTANCE_IDS
} from '../core/RouteRegistry';

export default class AddEditMenuScreen extends Screen {
  static getScreenTitleConfig() {
    return null;
  }

  static getRightButtonConfig() {
    return [
      {
        'label': 'Next',
        'type': 'Text'
      }
    ];
  }

  static getLeftButtonConfig() {
    return null;
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! SECOND SCENE
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }

  onReceiveRightButtonPressedEvent() {
    this.props.navigator.push(RouteRegistry.getRouteWithScreenId(SCREEN_INSTANCE_IDS.ID_SECOND_SCREEN));
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
