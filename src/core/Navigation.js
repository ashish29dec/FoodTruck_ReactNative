import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';
import PropRegistry from './PropRegistry';

var registeredScreens = {};

class Navigation {
  constructor() {
    this.onRightButtonPressed = this.onRightButtonPressed.bind(this);
    this.onBackPressed = this.onBackPressed.bind(this);
  }

  renderScene(route, navigator, emitter) {
    let InternalComponent = registeredScreens[route.screenInstanceId]();
    let props = PropRegistry.load(route.screenInstanceId);
    return (<InternalComponent {...props} navigator={navigator} global_emitter={emitter} route={route}/>);
  }

  registerScreen(name, generator) {
    registeredScreens[name] = generator;
  }

  renderNavigationBar() {
    var navigationObj = this;
    return {
      LeftButton: function(route, navigator, index, navState) {
        let InternalComponent = registeredScreens[route.screenInstanceId]();
        let config = InternalComponent.getLeftButtonConfig();
        if (config && config.type) {
          // TODO: Add code to display actual left butons in header
        } else if (navState.routeStack[index - 1]) {
          // There is some screen in the history. We must go to it. Display default back button
          return (
            <TouchableHighlight
              onPress={() => navigationObj.onBackPressed(navigator)}>
              <Text style={styles.navBarTitle}>
                Back
              </Text>
            </TouchableHighlight>
          );
        }
        return null;
      },
      RightButton: function(route, navigator, index, navState) {
        let InternalComponent = registeredScreens[route.screenInstanceId]();
        let config = InternalComponent.getRightButtonConfig();
        if (config && config.length > 0) {
          config = config[0];
          if (config.type == 'Text') {
            return (
              <TouchableHighlight
                onPress={() => navigationObj.onRightButtonPressed(route)}>
                <Text style={styles.navBarTitle}>
                  {config.label}
                </Text>
              </TouchableHighlight>
            );
          }
        }
        return null;
      },
      Title: function(route, navigator, index, navState) {
        let InternalComponent = registeredScreens[route.screenInstanceId]();
        let config = InternalComponent.getScreenTitleConfig();
        if (config && config.title) {
          return (
            <Text style={styles.navBarTitle}>
              {config.title}
            </Text>
          );
        }
        return null;
      },
    };
  }

  onRightButtonPressed(route) {
    route.emitter.emit('onRightButtonPressed', {});
  }

  onBackPressed(navigator) {
    navigator.pop();
  }
}

const styles = StyleSheet.create({
  navBarTitle: {
    fontSize: 20,
    color: '#fff',
  },
});

export default new Navigation();