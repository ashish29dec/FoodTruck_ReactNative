import React from 'react';
import {
  Button,
  ScrollView,
  Text,
  TextInput,
  View
} from 'react-native';
import Screen from '../core/Screen';
import Navigation, {
  NAVIGATION_CONSTANTS
} from '../core/Navigation';

export default class AddNewDishScreen extends Screen {
  static getScreenTitleConfig() {
    return {
      'title': 'New Item'
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

    this.state = {
      'dishName': '',
      'options': ['']
    };

    this.onDishNameEntered = this.onDishNameEntered.bind(this);
    this.onSaveDish = this.onSaveDish.bind(this);
    this.onOptionChanged = this.onOptionChanged.bind(this);
    this.onAddNewOption = this.onAddNewOption.bind(this);
    this.onRemoveOption = this.onRemoveOption.bind(this);
  }

  render() {
    let dishOptions = this.state.options.map((option, index, array) => {
      let optionButtonText = (index == array.length - 1)? '+': '-';
      let optionButtonPressFunction = (index == array.length - 1)? this.onAddNewOption: this.onRemoveOption;
      return (
        <View key={index} style={{flexDirection: 'row'}}>
          <TextInput
            value={option}
            onChangeText={(text) => this.onOptionChanged(text, index, array)}
            style={{flex: 1}}/>
          <Button
            title={optionButtonText}
            onPress={() => optionButtonPressFunction(index, array)}/>
        </View>
      );
    }, this);
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{top: NAVIGATION_CONSTANTS.NAVBAR_HEIGHT, marginBottom: NAVIGATION_CONSTANTS.NAVBAR_HEIGHT}}>
          <View>
            <Text>Item</Text>
            <TextInput
              value={this.state.dishName}
              onChangeText={this.onDishNameEntered}/>
          </View>
          <View>
            { dishOptions }
          </View>
        </ScrollView>
        <Button
          title="Save"
          onPress={this.onSaveDish}/>
      </View>
    );
  }

  onDishNameEntered(name) {
    this.setState({
      'dishName': name
    });
  }

  onSaveDish() {
    // TODO:
    Navigation.pop();
  }

  onOptionChanged(text, index, array) {
    array[index] = text;
    this.setState({
      'options': array
    });
  }

  onAddNewOption(index, array) {
    array.push('');
    this.setState({
      'options': array
    });
  }

  onRemoveOption(index, array) {
    array.splice(index, 1);
    this.setState({
      'options': array
    });
  }
}
