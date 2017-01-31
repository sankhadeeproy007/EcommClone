export default function reducer(state={
  swipeDataLoading: true,
  swipeData: [],
  grid1Data: [],
  grid1DataLoading: true,
  grid2Data: [],
  grid2DataLoading: true,
}, action) {

  switch (action.type) {
    case "FETCH_SWIPE_DATA_FULFILLED": {
      return {...state, swipeDataLoading: false, swipeData: action.payload};
    }
    case "FETCH_SWIPE_DATA_FAILED": {
      return {...state};
    }
    case "FETCH_GRID1_DATA_FULFILLED": {
      return {...state, grid1DataLoading: false, grid1Data: action.payload};
    }
    case "FETCH_GRID1_DATA_FAILED": {
      return {...state};
    }
    case "FETCH_GRID2_DATA_FULFILLED": {
      return {...state, grid2DataLoading: false, grid2Data: action.payload};
    }
    case "FETCH_GRID2_DATA_FAILED": {
      return {...state};
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
