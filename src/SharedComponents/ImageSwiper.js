import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import { Text } from 'native-base';
import Swiper from 'react-native-swiper';

export default class ImageSwiper extends Component {
  render() {
    const data = this.props.data;
    return (
      <Swiper loop={false} showsButtons={false} showsPagination={false}>
        {data.map((item, i) => {
          return (
            <TouchableOpacity key={i} style={styles.swiperButton} activeOpacity={0.95}>
              <Image style={styles.swiperImage} source={{uri: item.image}}
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
    height: 180,
    overflow: 'hidden',
    position: 'relative'
  },
  swiperImage: {
    height: 580,
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
