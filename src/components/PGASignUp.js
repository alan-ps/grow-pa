import React from 'react';
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/**
 * Implements the Sign Ip form component.
 */
class PGASignUp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      password2: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="registration-form">

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword2">
          <Form.Label>Repeat your password</Form.Label>
          <Form.Control
            name="password2"
            type="password"
            value={this.state.password2}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Link to="/">Back</Link>
        <Button variant="primary" type="submit">Register</Button>
      </Form>
    );
  }

}

export default PGASignUp;