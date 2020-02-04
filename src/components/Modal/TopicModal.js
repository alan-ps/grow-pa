import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { toggleModal } from 'actions';

const TopicModal = ({
  type,
  closeModal,
  handleSubmit
}) => {
  const [title, setTitle] = useState('');

  return (
  <Modal show={ type } onHide={ closeModal }>
    <Modal.Header closeButton>
      <Modal.Title>Create new direction</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={ e => handleSubmit(e, title) } className='direction-new-form'>
        <Form.Group controlId='formBasicTitle'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            name='title'
            value={ title }
            onChange={ e => setTitle(e.target.value) }
          />
        </Form.Group>
        <Button variant='primary' type='submit'>Add new item</Button>
      </Form>
    </Modal.Body>
  </Modal>
  )
}

const mapStateToProps = (state) => ({
  type: state.modalReducer.modal
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  closeModal: () => {
    dispatch(toggleModal(false))
  },
  handleSubmit: (e, title) => {
    e.preventDefault();

    dispatch(toggleModal(false))
    // @TODO: use action creator!
    dispatch({type: 'CREATE_CATEGORY', payload: { title: title }});
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicModal);
