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

export default class AppModeScreen extends Screen {
  static getScreenTitleConfig() {
    return {
      'title': 'Screen 1'
    };
  }

  static getRightButtonConfig() {
    return [
      {
        'label': 'Next',
        'type': 'Text'
      }
    ];
  }

  constructor(props) {
    super(props);

    this.localEmitter = this.props.route.emitter;
    this.onButtonPress = this.onButtonPress.bind(this);
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

  onReceiveRightButtonPressedEvent() {
    this.onButtonPress();
  }

  onButtonPress() {
    this.props.navigator.push(RouteRegistry.getRouteWithScreenId(SCREEN_INSTANCE_IDS.ID_SECOND_SCREEN));
  }

  onAddEditMenuClicked() {
    Alert.alert('Add Edit Menu button clicked!');
  }

  onOrderModeClicked() {
    Alert.alert('Order Mode button clicked!');
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
