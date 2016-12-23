import React from 'react';
import {
  Button,
  ScrollView,
  Text,
  TextInput,
  View
} from 'react-native';
import Checkbox from '../../custom/components/Checkbox/Checkbox';
import Screen from '../../core/Screen';
import Navigation, {
  NAVIGATION_CONSTANTS
} from '../../core/Navigation';

export default class AddDishToOrderScreen extends Screen {
  static TITLE = '';

  static getLeftButtonConfig() {}

  static getRightButtonConfig() {}

  static getScreenTitleConfig() {
    return {
      'title': AddDishToOrderScreen.TITLE
    };
  }

  constructor(props) {
    super(props);

    this.options = [
      {
        name: 'Egg'
      },
      {
        name: 'Fries'
      }
    ];

    this.state = {
      'notes': ''
    };

    this.onAddingDishToOrder = this.onAddingDishToOrder.bind(this);
    this.onOptionToggled = this.onOptionToggled.bind(this);
    this.onNotesModified = this.onNotesModified.bind(this);
  }

  componentWillMount() {
    AddDishToOrderScreen.TITLE = this.props.name;
  }

  render() {
    let options = this.options.map((option, index, array) => {
      return (
        <Checkbox
          key={index}
          label={option.name}
          checked={false}
          onChange={(checked) => this.onOptionToggled(checked, index)}/>
      );
    }, this);
    return (
      <View style={{flex: 1}}>
        <ScrollView
          style={{top: NAVIGATION_CONSTANTS.NAVBAR_HEIGHT, marginBottom: NAVIGATION_CONSTANTS.NAVBAR_HEIGHT}}>
          <Text style={{fontSize: 20, margin: 10}}>
            Options
          </Text>
          <View>
            {options}
          </View>
          <Text style={{fontSize: 20, margin: 10, marginTop: 20}}>
            Notes
          </Text>
          <TextInput
            multiline={true}
            onChangeText={this.onNotesModified}
            value={this.state.notes}
            numberOfLines={4}>
          </TextInput>
        </ScrollView>
        <Button
          title="Add"
          onPress={this.onAddingDishToOrder}/>
      </View>
    );
  }

  onAddingDishToOrder() {
    // TODO
  }

  onOptionToggled(checked, index) {
    // TODO:
  }

  onNotesModified(notes) {
    this.setState({
      'notes': notes
    });
  }
}