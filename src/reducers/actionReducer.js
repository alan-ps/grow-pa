import { updateObject, createReducer } from './api';

const initialState = { display: 'bars' };

function changeDisplay(state, action) {
  return updateObject(state, { display: action.display });
}

const restReducer = createReducer(initialState, {
  DISPLAY_CHANGE: changeDisplay
});

export default restReducer;
