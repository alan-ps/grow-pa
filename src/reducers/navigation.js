import { updateObject, createReducer } from './api';

const initialState = {
  title: '',
  back: ''
};

function navInfoUpdate(state, action) {
  return updateObject(state, {
    title: action.title,
    back: action.back
  });
}

// Handler for an entire slice of state ("slice reducer").
const nav = createReducer(initialState, {
  NAV_INFO_UPDATE: navInfoUpdate
});

export default nav;
