import { combineReducers } from 'redux';

import modalReducer from './modalReducer';
import restReducer from './restReducer';

// The main application reducer.
const RootReducer = combineReducers({
  modalReducer,
  restReducer
});

export default RootReducer;
