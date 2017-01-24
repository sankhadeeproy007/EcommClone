/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Login from './Screens/login';
import Home from './Screens/home';

export default class FlipkartClone extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} title="PageOne" hideNavBar initial={true} />
          <Scene key="home" component={Home} title="PageOne" />
        </Scene>
      </Router>
    );
  }
}


AppRegistry.registerComponent('FlipkartClone', () => FlipkartClone);