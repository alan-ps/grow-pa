import { updateObject, createReducer } from './api';

const initialState = {
  modal: false
};

// Handler for a specific case ("case reducer").
function toggleModal(state, action) {
  return updateObject(state, {
    modal: action.modal || false
  })
}

// Handler for an entire slice of state ("slice reducer").
const modalReducer = createReducer(initialState, {
  TOGGLE_MODAL: toggleModal
});

export default modalReducer;
