import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * Represents a sort action component.
 */
class SortAction extends React.Component {

  constructor(props) {
    super(props);

    this.handleSort = this.handleSort.bind(this);
  }

  handleSort(event, sortType) {
    event.preventDefault();

    let payload = { ...this.props };
    payload.category_sort = sortType;

    this.props.dispatch({
      type: 'FETCH_CATEGORIES',
      payload: payload
    });
  }

  render() {
    const sortTypes = { desc: 'fa-arrow-down', asc: 'fa-arrow-up'};

    return Object.keys(sortTypes).map(
      item => <Link
        key={item}
        to = '#'
        className = {
          `topic-cp__action-item
          ${ item === this.props.category_sort ? 'topic-cp__action-item--active' : 'topic-cp__action-item--disabled' }
          fa ${ sortTypes[item] }`
        }
        onClick = { event => this.handleSort(event, item) }
      />
    );
  }

}

const mapStateToProps = state => ({ ...state.restReducer });
export default connect(mapStateToProps)(SortAction);
