import { combineReducers } from 'redux';

import modalReducer from './modalReducer';
import restReducer from './restReducer';
import actionReducer from './actionReducer';
import goalReducer from './goalReducer';

// The main application reducer.
const RootReducer = combineReducers({
  modalReducer,
  restReducer,
  actionReducer,
  goalReducer
});

export default RootReducer;
