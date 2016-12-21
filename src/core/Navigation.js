import React from 'react';
import {
  BackAndroid,
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';
import PropRegistry from './PropRegistry';

var registeredScreens = {};
var navigatorObj = null;

export const NAVIGATION_CONSTANTS = {
  'NAVBAR_HEIGHT': Navigator.NavigationBar.Styles.General.TotalNavHeight,
};

class Navigation {
  constructor() {
    this.onRightButtonPressed = this.onRightButtonPressed.bind(this);
    this.onBackPressed = this.onBackPressed.bind(this);
    this.push = this.push.bind(this);
    this.pop = this.pop.bind(this);
    this.registerBackButton = this.registerBackButton.bind(this);
    this.unregisterBackButton= this.unregisterBackButton.bind(this);
  }

  renderScene(route, navigator, emitter) {
    navigatorObj = navigator;
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
              onPress={() => navigationObj.onBackPressed()}>
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

  onBackPressed() {
    if (navigatorObj.state.routeStack.length > 1) {
      this.pop();
      return true;
    }
    return false;
  }

  push(route) {
    navigatorObj.push(route);
  }

  pop() {
    navigatorObj.pop();
  }

  registerBackButton() {
    BackAndroid.addEventListener('hardwareBackPress', this.onBackPressed);
  }

  unregisterBackButton() {
    BackAndroid.removeEventListener('hardwareBackPress', this.onBackPressed);
  }
}

const styles = StyleSheet.create({
  navBarTitle: {
    fontSize: 20,
    color: '#fff',
    justifyContent: 'center',
    position: 'relative',
    paddingTop: 15,
    paddingBottom: 15,
  },
});

export default new Navigation();
