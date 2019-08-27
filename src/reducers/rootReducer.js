import { combineReducers } from 'redux';

import modalReducer from './modalReducer';

// The main application reducer.
const RootReducer = combineReducers({
  modalReducer
});

export default RootReducer;
