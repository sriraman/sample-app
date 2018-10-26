import { combineReducers } from 'redux';

import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';

export default combineReducers({
  app,
  posts
});
