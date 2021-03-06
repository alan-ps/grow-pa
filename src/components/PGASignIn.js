import React from 'react';
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/**
 * Implements the Sign In form component.
 */
class PGASignIn extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      formValid: false,
      formSubmit: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate(email, password) {
    if (email === 'test@test.io' && password === 'qazwsx') {
      return true;
    }

    return false;
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;

    if (!this.validate(email, password)) {
      this.setState({formSubmit: true});
      this.setState({formValid: false});
      return;
    }

    // Submit the data.
    localStorage.setItem('auth', true);
    window.location.href = '/dashboard';
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} id="form-grow-pa-login">
        {
          (this.state.formSubmit && !this.state.formValid) &&
          <div className="alert alert-danger" role="alert">Entered data are not correct!</div>
        }
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

        <Link to="/">Back</Link>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    );
  }
}

export default PGASignIn;
