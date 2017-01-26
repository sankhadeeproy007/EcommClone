/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text as RNText,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Text, StyleProvider, Icon, Header, IconNB, Item, Input, Label, Container, Content, Title, Left, Body, Right } from 'native-base';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#2874F0'}}>
          <Left>
            <Button transparent>
              <Icon name="menu" style={{color: '#fff'}} />
            </Button>
          </Left>
          <Body>
            <Title style={{color: '#fff'}}>Flipkart</Title>
          </Body>
          <Right />
        </Header>
        <Text onPress={()=> Actions.pop()}>
          Welcome to React Native again!
        </Text>
      </Container>
    );
  }
}
