import React from 'react';
import { Form } from 'react-bootstrap';

/**
 * Represents a single goal item.
 */
const GoalItem = (props) => (
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label={ props.name } />
  </Form.Group>
);

export default GoalItem;
