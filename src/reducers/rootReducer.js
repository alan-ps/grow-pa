import { combineReducers } from 'redux';

import showModal from './showModal';
import restReducer from './restReducer';
import actionReducer from './actionReducer';
import goalReducer from './goalReducer';

import navigation from './navigation';

// The main application reducer.
const RootReducer = combineReducers({
  showModal,
  restReducer,
  actionReducer,
  goalReducer,
  navigation
});

export default RootReducer;
