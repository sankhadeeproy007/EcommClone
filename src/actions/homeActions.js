import axios from 'axios';

export function fetchSwipeData() {
  return function(dispatch) {
    axios.get('http://localhost:3000/swipeData')
    .then((response) => {
      dispatch({
        type: 'FETCH_SWIPE_DATA_FULFILLED',
        payload: response.data
      })
    })
    .catch((err) => {
      dispatch({
        type: 'FETCH_SWIPE_DATA_FAILED',
        payload: err
      })
    })
  }
};
