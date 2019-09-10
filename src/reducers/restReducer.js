import { updateObject, createReducer } from './api';

const initialState = {
  categories: 0,
  category_sort: 'desc',
  category_search: ''
};

function fetchData(state, action) {
  return updateObject(state, {
    categories: action.categories,
    category_sort: action.category_sort,
    category_search: action.category_search
  });
}

// Handler for an entire slice of state ("slice reducer").
const restReducer = createReducer(initialState, {
  FETCH: fetchData
});

export default restReducer;
