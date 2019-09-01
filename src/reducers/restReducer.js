import { updateObject, createReducer } from './api';

const initialState = {
  categories: 0
};

function fetchData(state, action) {
  return updateObject(state, { categories: action.categories });
}

// Handler for an entire slice of state ("slice reducer").
const restReducer = createReducer(initialState, {
  FETCH: fetchData
});

export default restReducer;
