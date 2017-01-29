export default function reducer(state={
  swipeData: [
    {
      image: require('./../../assets/images/macbook.jpg'),
      text: 'Laptops starting at 14,999 only'
    },
    {
      image: require('./../../assets/images/camera.jpg'),
      text: 'Cameras starting at 4,999 only'
    },
    {
      image: require('./../../assets/images/shoes.jpeg'),
      text: 'Shoes starting at 2,199 only'
    }
  ],
  grid1Data: [
    {
      image: require('./../../assets/images/trimmer.jpeg'),
      buttonText: '50-80% Off',
      subText: 'Electronics & Auto',
      greenText: 'Power Banks, Trimmers'
    },
    {
      image: require('./../../assets/images/man.jpeg'),
      buttonText: '40-80% Off',
      subText: 'Fashion & Lifestyle',
      greenText: 'Clothing, Footwear'
    }
  ],
  grid2Data: [
    {
      image: require('./../../assets/images/iphone.jpg'),
      buttonText: '26,990',
      subText: 'iPhone (16 GB)',
      greenText: '*no Exchange'
    },
    {
      image: require('./../../assets/images/guitar.jpg'),
      buttonText: '2,599',
      subText: 'Musical Instruments',
      greenText: 'Guitars'
    }
  ]
}, action) {

switch (action.type) {
case "FETCH_TABLE": {
return {...state, fetching: true};
}
case "FETCH_TABLE_REJECTED": {
return {...state, fetching: false, error: action.payload};
}
case "FETCH_TABLE_FULFILLED": {
return {
...state,
fetching: false,
fetched: true,
table: action.payload.standing,
matchday: action.payload.matchday,
};
}
case "FETCH_TABLE_RESET": {
return {...state, fetched: false};
}
default:
return state;
}
}
