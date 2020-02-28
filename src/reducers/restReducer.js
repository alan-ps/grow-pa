import { updateObject, createReducer } from './api';

const initialState = {
  fetching: false,
  topics: []
};

function fetchData(state, action) {
  return updateObject(state, {
    fetching: action.fetching,
    topics: action.topics
  });
}

// Handler for an entire slice of state ("slice reducer").
const restReducer = createReducer(initialState, {
  FETCH_TOPICS: fetchData
});

export default restReducer;
