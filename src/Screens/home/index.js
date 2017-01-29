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
import { connect,  } from 'react-redux';
import { Button, Text, Icon, Header, IconNB, Item, Input, Label, Container, Content, Title, Left, Body, Right } from 'native-base';
import Swiper from 'react-native-swiper';

import ImageSwiper from './../../SharedComponents/ImageSwiper';
import HomeGrid from './../../SharedComponents/HomeGrid';
import styles from './styles';

const deviceHeight = Dimensions.get('window').height;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll : 0,
      top: new Animated.Value(0)
    }
  }
  onPageScroll(e) {

    // let scroll = this.state.scroll;
    // let currentScroll = e.nativeEvent.contentOffset.y;
    // this.setState({
    //   scroll: currentScroll
    // });
    // if (currentScroll>scroll) {
    //   Animated.timing(
    //     this.state.top,
    //     {
    //       toValue: -50,
    //       duration: 500
    //     }
    //   ).start();
    // }
    // else {
    //   Animated.timing(
    //     this.state.top,
    //     {
    //       toValue: 0,
    //       duration: 500
    //     }
    //   ).start();
    // }

  }
  render() {
    const { props: { swipeData, grid1Data, grid2Data } } = this;
    return (
      <View style={{height: deviceHeight}}>
        <Animated.View style={{marginTop: this.state.top}}>
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
        <Content bounces={false} scrollEventThrottle={0} onScroll={(e)=> this.onPageScroll(e)}>
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
const mapStateToProps = state => ({
  swipeData: state.homePage.swipeData,
  grid1Data: state.homePage.grid1Data,
  grid2Data: state.homePage.grid2Data
})
export default connect(mapStateToProps)(Home);
