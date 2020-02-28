import React from 'react';
import { Row, Col } from 'react-bootstrap';

import DisplayAction from 'components/Actions/DisplayAction';
import SortAction from 'components/Actions/SortAction';
import SearchAction from 'components/Actions/SearchAction';

const TopicControlPanel = () => (
  <div className="topic-cp">
    <Row>
      <Col xs='8' className="topic-cp__search">
        <SearchAction />
      </Col>
      <Col xs='2' className="topic-cp__display">
        <DisplayAction />
      </Col>
      <Col xs='2' className="topic-cp__sort">
        <SortAction />
      </Col>
    </Row>
  </div>
);

export default TopicControlPanel;
