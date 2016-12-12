import { Component } from 'react';

export default class Screen extends Component {
  constructor(props) {
    super(props);

    this.onReceiveRightButtonPressedEvent = this.onReceiveRightButtonPressedEvent.bind(this);
  }

  componentDidMount() {
    this.props.route.emitter.addListener('onRightButtonPressed', this.onReceiveRightButtonPressedEvent);
  }

  componentWillUnmount() {
    this.props.route.emitter.removeListener('onRightButtonPressed', this.onReceiveRightButtonPressedEvent);
  }

  onReceiveRightButtonPressedEvent() {

  }
}
