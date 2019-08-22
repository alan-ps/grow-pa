import React from 'react';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

/**
 * The "Front" component that describes the base app idea and requests to join.
 */
class Front extends React.Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col className="col-12 col-sm-6">
            <h1>Your personal grow assistant</h1>
            <ul>
              <li>Make your personal plan</li>
              <li>Learn and work on it</li>
              <li>Grow the skills</li>
            </ul>
          </Col>
          <Col className="col-12 col-sm-6">
            <div className="sign-in">
              <div className="sign-in-social">
                <Link to="facebook.com" className="sign-in-social__btn sign-in-social__btn_color_blue" role="button">Login with Facebook</Link>
                <Link to="google.com" className="sign-in-social__btn sign-in-social__btn_color_red" role="button">Login with Google</Link>
              </div>
              <p>or</p>
              <div className="login">
                <Link to="/sign-in" className="login__btn login__btn_green" role="button">Sign in</Link>
                <Link to="/sign-up" className="login__btn login__btn_white" role="button">Sign up</Link>
                <div className="clearfix"></div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Front;
