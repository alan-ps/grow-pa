import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';

import { fetchData } from 'utils/rest';

const WAIT_INTERVAL = 300;

/**
 * Represents a search action component.
 */
class SearchAction extends React.Component {

  constructor(props) {
    super(props);

    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    this.timer = null;
    this.value = '';
  }

  handleFilter(event) {
    clearTimeout(this.timer);
    this.value = event.target.value;
    this.timer = setTimeout(this.triggerChange.bind(this), WAIT_INTERVAL, this.value);
  }

  triggerChange(value) {
    fetchData(this.props, value, this.props.category_sort);
  }

  render() {
    return (
        <Form.Group>
          <Form.Control
            name='category'
            type='text'
            placeholder='Search'
            onChange={ this.handleFilter }
          />
        </Form.Group>
    );
  }

}

const mapStateToProps = state => ({ ...state.restReducer });
export default connect(mapStateToProps)(SearchAction);
