import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import { Text } from 'native-base';

export default class HomeGrid extends Component {
  render() {
    const data = this.props.data;
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.85} style={{flex: 1, overflow: 'hidden', marginRight: 3}}>
          <Image style={styles.gridImage} source={data[0].image} />
          <View style={styles.orangeButton}>
            <Text style={styles.orangeButtonText}>50-80% Off</Text>
          </View>
          <View style={styles.subText}>
            <Text style={{fontSize: 13}}>Electronics & Auto</Text>
            <Text style={styles.greenText}>Power Banks, Trimmers</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.85} style={{flex: 1, overflow: 'hidden', marginLeft: 4}}>
          <Image style={styles.gridImage} source={data[1].image} />
            <View style={styles.orangeButton}>
              <Text style={styles.orangeButtonText}>50-80% Off</Text>
            </View>
            <View style={styles.subText}>
              <Text style={{fontSize: 13}}>Electronics & Auto</Text>
              <Text style={styles.greenText}>Power Banks, Trimmers</Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    height: 300,
    flexDirection: 'row',
    padding: 7,
    elevation: 2
  },
  gridImage: {
    height: 180,
    width: 200,
    resizeMode: 'cover'
  },
  orangeButton: {
    backgroundColor: '#FB641B',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  orangeButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    fontStyle: 'italic'
  },
  subText : {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  greenText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#00860b'
  }
}
