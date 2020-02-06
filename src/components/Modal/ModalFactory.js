import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleModal } from 'actions'
import { Button, Form } from 'react-bootstrap'

const TopicTitle = () => 'Create new topic'
const TopicBody = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e, title) => {
    e.preventDefault();
    dispatch(toggleModal(false))
    dispatch({type: 'CREATE_CATEGORY', payload: { title: title }});
  }

  return (
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
  )
}

export const ModalFactory = (type) => {
  const modal = {title: null, body: null}

  switch (type) {
    case 'TOPIC':
      modal.title = TopicTitle
      modal.body = TopicBody
      break;
  }

  return modal
}
