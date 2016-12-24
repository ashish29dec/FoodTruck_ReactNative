import React from 'react';
import {
  Button,
  ListView,
  Text,
  View
} from 'react-native';
import Screen from '../../core/Screen';
import Navigation, {
  NAVIGATION_CONSTANTS
} from '../../core/Navigation';
import RouteRegistry, {
  SCREEN_INSTANCE_IDS
} from '../../core/RouteRegistry';
import PropRegistry from '../../core/PropRegistry';

export default class DishListScreen extends Screen {
  static TITLE = '';

  static getScreenTitleConfig() {
    return {
      'title': DishListScreen.TITLE
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

    this.data = [
      {
        dishName: 'California Steak Burger',
        id: 0,
      },
      {
        dishName: 'Chicken Sandwich',
        id: 1,
      },
      {
        dishName: 'Salad',
        id: 2,
      }
    ];
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(this.data),
      cart: []
    };

    this.renderDishes = this.renderDishes.bind(this);
    this.onDishSelected = this.onDishSelected.bind(this);
    this.onCheckoutClicked = this.onCheckoutClicked.bind(this);
    this.onOrderModified = this.onOrderModified.bind(this);
  }

  componentWillMount() {
    DishListScreen.TITLE = this.props.title;
  }

  render() {
    let checkoutButton = null;
    if (this.state.cart.length > 0) {
      let checkoutTitle = 'Check Out (' + this.state.cart.length + ')';
      checkoutButton = (
        <Button
          title={checkoutTitle}
          onPress={this.onCheckoutClicked}/>
      );
    }
    return (
      <View style={{flex: 1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderDishes}
          style={{top: NAVIGATION_CONSTANTS.NAVBAR_HEIGHT, marginBottom: NAVIGATION_CONSTANTS.NAVBAR_HEIGHT}}/>
        {checkoutButton}
      </View>
    );
  }

  renderDishes(rowData, sectionID, rowID, highlightRow) {
    return(
      <Text
        style={{fontSize: 30, margin: 10, borderWidth: 1, borderColor: '#000', textAlign:'center'}}
        onPress={() => this.onDishSelected(rowData)}>
        {rowData.dishName}
      </Text>
    );
  }

  componentDidMount() {
    this.props.global_emitter.addListener('onOrderModified', this.onOrderModified);
  }

  componentWillUnmount() {
    this.props.global_emitter.removeListener('onOrderModified', this.onOrderModified);
  }

  onDishSelected(dish) {
    PropRegistry.save(SCREEN_INSTANCE_IDS.ID_ADD_DISH_TO_ORDER_SCREEN, {
      'name': dish.dishName,
      'id': dish.id,
    });
    Navigation.push(RouteRegistry.getRouteWithScreenId(SCREEN_INSTANCE_IDS.ID_ADD_DISH_TO_ORDER_SCREEN));
  }

  onOrderModified(params) {
    let newOrder = this.state.cart;
    if (params.action === 'added') {
      newOrder.push(params.order);
    } else if (params.action === 'remove') {
      let indexInCart = params.index;
      newOrder.splice(indexInCart, 1);
    }
    this.setState({
      cart: newOrder
    });
  }

  onCheckoutClicked() {
    PropRegistry.save(SCREEN_INSTANCE_IDS.ID_CART_SCREEN, {
      'cart': this.state.cart,
    });
    Navigation.push(RouteRegistry.getRouteWithScreenId(SCREEN_INSTANCE_IDS.ID_CART_SCREEN));
  }
}
