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
  ActivityIndicator,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect,  } from 'react-redux';
import { Button, Text, Icon, Header, IconNB, Item, Input, Label, Container, Content, Title, Left, Body, Right } from 'native-base';
import Swiper from 'react-native-swiper';

import ImageSwiper from './../../SharedComponents/ImageSwiper';
import HomeGrid from './../../SharedComponents/HomeGrid';
import styles from './styles';

import { fetchSwipeData, fetchGrid1Data, fetchGrid2Data } from './../../actions/homeActions';

const deviceHeight = Dimensions.get('window').height;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll : 0,
      top: new Animated.Value(0)
    }
  }
  componentWillMount() {
    this.props.fetchSwipeData();
    this.props.fetchGrid1Data();
    this.props.fetchGrid2Data();
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
    const { props: { swipeData, grid1Data, grid2Data, swipeDataLoading, grid1DataLoading, grid2DataLoading } } = this;
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
          <View style={{height: 180, justifyContent: (swipeDataLoading) ? 'center' : undefined}}>
            {(swipeDataLoading) ?
              <ActivityIndicator style={{alignSelf: 'center'}} size="large" color="#2874F0" />
              :
              <ImageSwiper data={swipeData}  />
            }
          </View>
          <View style={{height: 50, flexDirection: 'row'}}>
            <Button full style={styles.categoryButton}><Icon style={styles.categoryIcon} name="phone-portrait" /></Button>
            <Button full style={styles.categoryButton}><Icon style={styles.categoryIcon} name="camera" /></Button>
            <Button full style={styles.categoryButton}><Icon style={styles.categoryIcon} name="shirt" /></Button>
            <Button full style={styles.categoryButton}><Icon style={styles.categoryIcon} name="laptop" /></Button>
            <Button full style={styles.categoryButton}><Icon style={styles.categoryIcon} name="print" /></Button>
          </View>
          {(!grid1DataLoading) && <HomeGrid data={grid1Data} />}
          {(!grid2DataLoading) && <HomeGrid data={grid2Data} />}
          <View style={{height: 350}}>
            <View style={{height: 80, borderWidth: 1, flexDirection: 'row'}}>
              <View style={{flex: 1}}  />
              <View style={{flex: 3, padding: 10, justifyContent: 'space-around'}}>
                <Text style={{fontWeight: '600'}}>Minimum 60% off</Text>
                <Text style={{color: '#8e8e8e', fontSize: 13}}>Wrangler, Puma...</Text>
              </View>
              <View style={{flex: 1.5, justifyContent: 'center', alignItems: 'center'}}>
                <Button style={{backgroundColor: '#2874F0', alignSelf: 'center', height: 25}}>
                  <Text style={{fontSize: 14}}>View All</Text>
                </Button>
              </View>
            </View>
            <View style={{flexDirection: 'row', flex: 1, borderWidth: 1}}>
              <View style={{flex: 2}}>
                
              </View>
              <View style={{flex: 1}}>
                <View style={{borderWidth: 1, flex: 1}}></View>
                <View style={{borderWidth: 1, flex: 1}}></View>
              </View>
            </View>
          </View>
        </Content>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  swipeData: state.homePage.swipeData,
  swipeDataLoading: state.homePage.swipeDataLoading,
  grid1DataLoading: state.homePage.grid1DataLoading,
  grid2DataLoading: state.homePage.grid2DataLoading,
  grid1Data: state.homePage.grid1Data,
  grid2Data: state.homePage.grid2Data
})
const bindActions = dispatch => ({
  fetchSwipeData: () => dispatch(fetchSwipeData()),
  fetchGrid1Data: () => dispatch(fetchGrid1Data()),
  fetchGrid2Data: () => dispatch(fetchGrid2Data())
})
export default connect(mapStateToProps, bindActions)(Home);
