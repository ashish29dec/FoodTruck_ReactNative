import React from 'react';
import {
  Button,
  ScrollView,
  View
} from 'react-native';
import Screen from '../../core/Screen';
import CartItem from '../../custom/components/CartItem';
import Navigation, {
  NAVIGATION_CONSTANTS
} from '../../core/Navigation';
import RouteRegistry, {
  SCREEN_INSTANCE_IDS
} from '../../core/RouteRegistry';
import PropRegistry from '../../core/PropRegistry';

export default class CartScreen extends Screen {
  static getScreenTitleConfig() {
    return {
      'title': 'Cart'
    };
  }

  static getLeftButtonConfig() {
    return null;
  }

  static getRightButtonConfig() {
    return null;
  }

  constructor(props) {
    super(props);

    this.onSendClicked = this.onSendClicked.bind(this);
  }

  render() {
    let items = this.props.cart.map((cartItem, index) => {
      return(
        <CartItem
        key={index}
        {...cartItem}/>
      );
    });
    return(
      <View style={{flex: 1}}>
        <ScrollView
          style={{top: NAVIGATION_CONSTANTS.NAVBAR_HEIGHT, marginBottom: NAVIGATION_CONSTANTS.NAVBAR_HEIGHT}}>
          {items}
        </ScrollView>
        <Button
          title="Send"
          onPress={this.onSendClicked}/>
      </View>
    );
  }

  onSendClicked() {
    // TODO:
  }
}
