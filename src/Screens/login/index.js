/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text as RNText
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Text, StyleProvider, Icon, Header, IconNB, Item, Input, Label, Container, Content, Footer, Left, Body } from 'native-base';
import styles from './styles';

export default class FirstPage extends Component {
  render() {
    return (
        <Container style={styles.container}>
          <StatusBar
             backgroundColor="#235dbb"
             barStyle="light-content"
           />

          <Content scrollEnabled={false}>
            <View style={styles.topView}>
              <Icon name="cart" style={styles.topIcon} />
            </View>
            <View style={{padding: 10}}>
              <View style={{position: 'relative'}}>
                <Item style={styles.mt20}>
                  <Label style={styles.labelMargin}>First Name</Label>
                  <Input style={{paddingLeft: 0}} />
                </Item>
                <Button transparent androidRippleColor='rgba(0,0,0,0.1)' style={styles.insetButton}><Icon name="close" style={styles.butttonIcon} /></Button>
              </View>
              <View style={{position: 'relative'}}>
                <Item style={styles.mt20}>
                  <Label style={styles.labelMargin}>Password</Label>
                  <Input style={{paddingLeft: 0}} secureTextEntry />
                </Item>
                <Button transparent androidRippleColor='rgba(0,0,0,0.1)' style={styles.insetButton} capitalize={false}><RNText style={styles.forgotText}>Forgot?</RNText></Button>
              </View>
              <Button full capitalize style={styles.signInButton} onPress={()=> Actions.home()}><Text>Sign In</Text></Button>
            </View>
          </Content>
          <Footer style={styles.footer}>
            <View style={{paddingTop: 10, alignSelf: 'stretch', flex: 1}}>
              <Text style={{fontSize: 15, color: '#8a8a8a', textAlign: 'center'}}>Do you login with social profile?</Text>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Button full capitalize={false} style={{flex: 1, height: 55, backgroundColor: '#3b5998'}}>
                  <Text>Facebook</Text>
                </Button >
                <Button full capitalize={false} style={{flex: 1, height: 55, backgroundColor: '#dd4b39'}}>
                  <Text>Google</Text>
                </Button>
              </View>
            </View>
          </Footer>
        </Container>
    );
  }
}
