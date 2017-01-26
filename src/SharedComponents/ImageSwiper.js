import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import { Text } from 'native-base';
import Swiper from 'react-native-swiper';

export default class ImageSwiper extends Component {
  componentDidMount() {
    console.log('this.props.data', this.props.data);
  }
  render() {
    const data = this.props.data;
    return (
      <Swiper loop={false} showsButtons={false} showsPagination={false}>
        {data.map((item, i) => {
          return (
            <TouchableOpacity key={i} style={styles.swiperButton} activeOpacity={0.8}>
              <Image style={styles.swiperImage} source={item.image}
                />
              <Text style={styles.swiperText}>{item.text}</Text>
            </TouchableOpacity>
          )
        })}
      </Swiper>
    );
  }
}

const styles = {
  swiperButton: {
    height: 200,
    overflow: 'hidden',
    position: 'relative'
  },
  swiperImage: {
    height: 600,
    top: -250,
    resizeMode: 'contain'
  },
  swiperText: {
    position: 'absolute',
    right: 10,
    color: '#fff',
    bottom: 25
  }
}
