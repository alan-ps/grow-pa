import React, {useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal } from 'react-bootstrap'
import { toggleModal } from 'actions'
import { ModalFactory } from './ModalFactory'

const AppModal = () => {
  const type = useSelector(state => state.modalReducer.modal)
  const show = !!type

  const dispatch = useDispatch();
  const onHide = useCallback(() => dispatch(toggleModal(false)), [dispatch]);

  // Do not render a modal.
  if (!type) {
    return null
  }

  const AppModalTitle = ModalFactory(type).title
  const AppModalBody = ModalFactory(type).body

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          <AppModalTitle />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AppModalBody />
      </Modal.Body>
    </Modal>
  )
}

export default AppModal;
