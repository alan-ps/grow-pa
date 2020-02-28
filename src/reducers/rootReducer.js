import { combineReducers } from 'redux';

import restReducer from './restReducer';
import actionReducer from './actionReducer';
import goalReducer from './goalReducer';

import navigation from './navigation';

// The main application reducer.
const RootReducer = combineReducers({
  restReducer,
  actionReducer,
  goalReducer,
  navigation
});

export default RootReducer;
