import { combineReducers } from 'redux';

import modalReducer from './_modal';

// The main application reducer.
const appReducer = combineReducers({
  modalReducer
});

export default appReducer;
