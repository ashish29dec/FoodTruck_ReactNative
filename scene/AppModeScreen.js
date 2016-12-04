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

    this.buttonPressed = this.buttonPressed.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={buttonPressed}
          title='Add/Edit Menu'>
        </Button>
        <Button
          onPress={buttonPressed}
          title='Order Mode'>
        </Button>
        <Button
          onPress={buttonPressed}
          title='See Orders'>
        </Button>
      </View>
    );
  }

  buttonPressed(event) {
    console.log('event: ' + event);
    Alert.alert('Button has been pressed!');
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
