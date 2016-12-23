import React, {
  Component
} from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

var PropTypes = React.PropTypes;
const checkedImg = require('./img/checked.png');
const uncheckedImg = require('./img/unchecked.png');

export default class Checkbox extends Component {
  constructor(props) {
    super(props);

    let defaultChecked = this.props.checked || false;
    this.state = {
      isChecked: defaultChecked
    };

    this.onChange = this.onChange.bind(this);
  }

  render() {
    let source = this.state.isChecked? checkedImg: uncheckedImg;
    return (
      <TouchableHighlight
        onPress={this.onChange}
        style={{flex: 1}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 30, margin: 10, flex: 1}}>
            {this.props.label}
          </Text>
          <Image
            style={{margin: 10}}
            source={source}/>
        </View>
      </TouchableHighlight>
    );
  }

  onChange() {
    let isChecked = !this.state.isChecked;
    this.setState({
      isChecked: isChecked
    });
    this.props.onChange(isChecked);
  }
}

Checkbox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool
};
