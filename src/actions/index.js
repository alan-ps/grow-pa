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
 * @param showModal string | null
 *   A modal type to show, or null to close.
 */
export function toggleModal(showModal) {
  return { type: actionTypes.TOGGLE_MODAL, showModal: showModal}
}
