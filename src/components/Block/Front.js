import React, { Suspense, lazy } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WelcomeBlock = lazy(() => import('./WelcomeBlock'));
const LoginBlock = lazy(() => import('./LoginBlock'));

/**
 * The "Front" component that describes the base app idea and requests to join.
 */
const Front = () => (
  <div className="container">
    <Row>
      <Col className="col-12 col-sm-6">
        <Suspense fallback={<div>Loading...</div>}>
          <WelcomeBlock />
        </Suspense>
      </Col>
      <Col className="col-12 col-sm-6">
        <Suspense fallback={<div>Loading...</div>}>
          <LoginBlock />
        </Suspense>
      </Col>
    </Row>
  </div>
);

export default Front;
