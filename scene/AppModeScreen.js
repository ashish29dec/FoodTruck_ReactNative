import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  View,
  Alert
} from 'react-native';

export default class AppModeScreen extends Component {
  constructor(props) {
    super(props);

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
