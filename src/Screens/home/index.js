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
  Platform,
  Dimensions,
  Animated,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Text, Icon, Header, IconNB, Item, Input, Label, Container, Content, Title, Left, Body, Right } from 'native-base';
import Swiper from 'react-native-swiper';

import ImageSwiper from './../../SharedComponents/ImageSwiper';
import HomeGrid from './../../SharedComponents/HomeGrid';
import styles from './styles';

const deviceHeight = Dimensions.get('window').height;

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

const grid1Data = [
  {
    image: require('./../../../assets/images/trimmer.jpeg'),
    buttonText: '50-80% Off',
    subText: 'Electronics & Auto',
    greenText: 'Power Banks, Trimmers'
  },
  {
    image: require('./../../../assets/images/man.jpeg'),
    buttonText: '40-80% Off',
    subText: 'Fashion & Lifestyle',
    greenText: 'Clothing, Footwear'
  }
]

const grid2Data = [
  {
    image: require('./../../../assets/images/iphone.jpg'),
    buttonText: '26,990',
    subText: 'iPhone (16 GB)',
    greenText: '*no Exchange'
  },
  {
    image: require('./../../../assets/images/guitar.jpg'),
    buttonText: '2,599',
    subText: 'Musical Instruments',
    greenText: 'Guitars'
  }
]

export default class Home extends Component {
  render() {
    return (
      <View style={{height: deviceHeight}}>
        <Animated.View>
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
        </Animated.View>
        <View style={styles.searchContainer}>
          <Item style={{backgroundColor: 'white', borderRadius: 5}}>
            <Label>Search</Label>
            <Input />
          </Item>
        </View>
        <Content>
          <View style={{height: 180}}>
            <ImageSwiper data={swipeData}  />
          </View>
          <View style={{height: 50, flexDirection: 'row'}}>
            <Button full style={styles.categoryButton}><Icon style={styles.categoryIcon} name="phone-portrait" /></Button>
            <Button full style={styles.categoryButton}><Icon style={styles.categoryIcon} name="camera" /></Button>
            <Button full style={styles.categoryButton}><Icon style={styles.categoryIcon} name="shirt" /></Button>
            <Button full style={styles.categoryButton}><Icon style={styles.categoryIcon} name="laptop" /></Button>
            <Button full style={styles.categoryButton}><Icon style={styles.categoryIcon} name="print" /></Button>
          </View>
          <HomeGrid data={grid1Data} />
          <HomeGrid data={grid2Data} />
        </Content>
      </View>
    );
  }
}
