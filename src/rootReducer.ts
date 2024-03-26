import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
// Import reducers from feature microfrontends if needed

const rootReducer = combineReducers({
  // Add reducers from feature microfrontends here
  counter: counterReducer
});

export default rootReducer;
