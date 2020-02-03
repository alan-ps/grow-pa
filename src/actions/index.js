import * as actionTypes from './actionTypes'

/**
 * 
 */
export function addTopic(name) {
  return { type: actionTypes.ADD_TOPIC, name }
}

/**
 * 
 */
export function removeTopic(id) {
  return { type: actionTypes.REMOVE_TOPIC, id }
}

/**
 * Toggle a modal window.
 * 
 * @param modal string
 *   A modal type to toggle.
 */
export function toggleModal(modal) {
  return { type: actionTypes.TOGGLE_MODAL, modal: modal}
}
