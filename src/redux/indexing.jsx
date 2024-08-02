// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './reducer'; // Ensure you have this reducer

const rootReducer = combineReducers({
  auth: authReducer,
  // other reducers
});

export default rootReducer;
