/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducers from './reducers';

import Login from './Screens/login';
import Home from './Screens/home';

const RouterWithRedux = connect()(Router);
const middleware = applyMiddleware(promise(), thunk, logger());
const store = compose(middleware)(createStore)(reducers);

export default class FlipkartClone extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="home" component={Home} hideNavBar initial={true} />
            <Scene key="login" component={Login} />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}


AppRegistry.registerComponent('FlipkartClone', () => FlipkartClone);
