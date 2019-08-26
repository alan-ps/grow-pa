import { updateObject, createReducer } from './_api';

const initialState = {
  showModal: false,
  modalData: { title: '', content: '' }
};

// Handler for a specific case ("case reducer").
function toggleModal(state, action) {
  return updateObject(state, {
    showModal: action.showModal
  })
}

// Handler for an entire slice of state ("slice reducer").
const modalReducer = createReducer(initialState, {
  TOGGLE_MODAL: toggleModal
});

export default modalReducer;
