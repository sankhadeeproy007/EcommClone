/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text as RNText,
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Text, Icon, Header, IconNB, Item, Input, Label, Container, Content, Title, Left, Body, Right } from 'native-base';
import Swiper from 'react-native-swiper';

import ImageSwiper from './../../SharedComponents/ImageSwiper';
import styles from './styles';

const swipeData = [
  {
    image: require('./../../../assets/images/macbook.jpg'),
    text: 'Laptops starting at 14,999 only'
  },
  {
    image: require('./../../../assets/images/camera.jpg'),
    text: 'Cameras starting at 4,999 only'
  },
  {
    image: require('./../../../assets/images/shoes.jpeg'),
    text: 'Shoes starting at 2,199 only'
  }
]

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header androidStatusBarColor='#235dbb' iosBarStyle='light-content' style={{backgroundColor: '#2874F0', elevation: 0}}>
          <Left>
            <Button transparent style={styles.headerLeftButton}>
              <Icon name="menu" style={styles.headerLeftIcon} />
            </Button>
          </Left>
          <Body>
            <Title style={{color: '#fff'}}>Flipkart</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="notifications" style={styles.headerRightIcon} />
            </Button>
            <Button transparent>
              <Icon name="cart" style={styles.headerRightIcon} />
            </Button>
          </Right>
        </Header>
        <View style={styles.searchContainer}>
          <Item style={{backgroundColor: 'white', borderRadius: 5}}>
            <Label>Search</Label>
            <Input />
          </Item>
        </View>
        <Content>
          <View style={{height: 200}}>
            <ImageSwiper data={swipeData}  />
          </View>
        </Content>
      </Container>
    );
  }
}
