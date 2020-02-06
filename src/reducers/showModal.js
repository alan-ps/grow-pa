import { createReducer } from './api'

const showModal = createReducer(null, {
  TOGGLE_MODAL: (state, action) => action.showModal
})

export default showModal
