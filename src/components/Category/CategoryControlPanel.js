import React from 'react';
import { Row, Col } from 'react-bootstrap';

import DisplayAction from 'components/Actions/DisplayAction';
import SortAction from 'components/Actions/SortAction';
import SearchAction from 'components/Actions/SearchAction';

/**
 * Represents category control panel component.
 */
const CategoryControlPanel = () => (
  <div className="category-cp">
    <Row>
      <Col xs='8' className="category-cp__search">
        <SearchAction />
      </Col>
      <Col xs='2' className="category-cp__display">
        <DisplayAction />
      </Col>
      <Col xs='2' className="category-cp__sort">
        <SortAction />
      </Col>
    </Row>
  </div>
);

export default CategoryControlPanel;
