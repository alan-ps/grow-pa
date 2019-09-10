import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import WelcomeBlock from './WelcomeBlock';
import LoginBlock from './LoginBlock';

/**
 * The "Front" component that describes the base app idea and requests to join.
 */
const Front = () => (
  <div className="container">
    <Row>
      <Col className="col-12 col-sm-6">
        <WelcomeBlock />
      </Col>
      <Col className="col-12 col-sm-6">
        <LoginBlock />
      </Col>
    </Row>
  </div>
);

export default Front;
