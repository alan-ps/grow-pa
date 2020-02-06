import { createReducer } from './api'

const showModal = createReducer(false, {
  TOGGLE_MODAL: (state, action) => action.modal
})

export default showModal
