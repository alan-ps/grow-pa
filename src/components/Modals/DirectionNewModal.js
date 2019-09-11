import React, { Component } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';

import { putData } from 'utils/rest';
import {conectModal} from "./RootModal";

/**
 * Implements a modal to add new direction.
 */
class DirectionNewModal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      img: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    // let directions = localStorage.getItem('directions');
    // directions = directions ? JSON.parse(directions) : [];
    //
    // const newItem = {
    //   title: this.state.title,
    //   img: this.state.img
    // };
    //
    // directions.push(newItem);

    // localStorage.setItem('directions', JSON.stringify(directions));
    // window.location.href = '/dashboard';
    this.props.dispatch({
      type: 'TOGGLE_MODAL',
      showModal: false,
      modalType: 'DIRECTION_NEW'
    });

    putData(this.props, this.state.title);
  }

  render() {
    return (
      <Modal show={ this.props.show } onHide={ this.props.onHide }>
        <Modal.Header closeButton>
          <Modal.Title>Create new direction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={ this.handleSubmit } className='direction-new-form'>
            <Form.Group controlId='formBasicTitle'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                name='title'
                value={ this.state.title }
                onChange={ this.handleChange }
              />
            </Form.Group>

            <Form.Group controlId='formBasicImg'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                name='img'
                type="text"
                value={ this.state.img }
                onChange={ this.handleChange }
              />
            </Form.Group>

            <Button variant='primary' type='submit'>Add new item</Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

}
const mapStateToProps = state => ({ ...state.restReducer });
export default connect(mapStateToProps)(DirectionNewModal);
