import React from 'react'
// import { connect } from 'react-redux'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'

class GrowPALoginForm extends React.Component {
  // constructor(props) {
  //   // super(props);

  //   // this.state = {
  //   //   searchPhrase: '',
  //   //   searchBy: 'title'
  //   // };

  //   // this.handleChange = this.handleChange.bind(this);
  //   // this.handleSubmit = this.handleSubmit.bind(this);
  // }

  handleSubmit(event) {
  	console.log(11)
    event.preventDefault();
    // this.props.dispatch({ type: 'FILTER',  searchPhrase: this.state.searchPhrase, searchBy: this.state.searchBy })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} id="form-grow-pa-login">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    );
  }
}

//export default connect(mapStateToProps)(SearchForm);
export default GrowPALoginForm;
