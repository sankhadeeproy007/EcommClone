import { combineReducers } from 'redux';
import routes from './routes';
import homePage from './homePage';

export default combineReducers({
  routes,
  homePage
});
