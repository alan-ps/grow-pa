import { combineReducers } from 'redux';

import modalReducer from './modalReducer';
import restReducer from './restReducer';
import actionReducer from './actionReducer';

// The main application reducer.
const RootReducer = combineReducers({
  modalReducer,
  restReducer,
  actionReducer
});

export default RootReducer;
