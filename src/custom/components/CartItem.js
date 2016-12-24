import React, {
  Component
} from 'react';
import {
  Text,
  View
} from 'react-native';

var PropTypes = React.PropTypes;

export default class CartItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let options = this.props.options.map((option, index) => {
      return (
        <Text
          key={index}
          style={{fontSize: 20}}>
          {option.name}
        </Text>
      );
    });
    return (
      <View style={{borderWidth: 1, borderColor: '#000', margin: 10}}>
        <Text style={{fontSize: 30}}>
          {this.props.dishName}
        </Text>
        {options}
        <Text style={{fontSize: 20}}>
          {this.props.notes}
        </Text>
      </View>
    );
  }
}
