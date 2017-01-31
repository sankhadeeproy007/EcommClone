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
export function fetchGrid1Data() {
  return function(dispatch) {
    axios.get('http://localhost:3000/grid1Data')
    .then((response) => {
      dispatch({
        type: 'FETCH_GRID1_DATA_FULFILLED',
        payload: response.data
      })
    })
    .catch((err) => {
      dispatch({
        type: 'FETCH_GRID1_DATA_FAILED',
        payload: err
      })
    })
  }
};
export function fetchGrid2Data() {
  return function(dispatch) {
    axios.get('http://localhost:3000/grid2Data')
    .then((response) => {
      dispatch({
        type: 'FETCH_GRID2_DATA_FULFILLED',
        payload: response.data
      })
    })
    .catch((err) => {
      dispatch({
        type: 'FETCH_GRID2_DATA_FAILED',
        payload: err
      })
    })
  }
};
