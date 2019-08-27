import { updateObject, createReducer } from './api';

const initialState = {
  showModal: false,
  modalType: ''
};

// Handler for a specific case ("case reducer").
function toggleModal(state, action) {
  return updateObject(state, {
    showModal: action.showModal,
    modalType: action.modalType
  })
}

// Handler for an entire slice of state ("slice reducer").
const modalReducer = createReducer(initialState, {
  TOGGLE_MODAL: toggleModal
});

export default modalReducer;
