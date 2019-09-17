import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';

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
    let payload = { ...this.props.restReducer };
    payload.category_search = value;

    this.props.dispatch({
      type: 'FETCH_CATEGORIES',
      payload: payload
    });
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

const mapStateToProps = state => ({ ...state });
export default connect(mapStateToProps)(SearchAction);
