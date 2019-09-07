import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchData } from 'utils/rest';

/**
 * Represents a sort action component.
 */
class SortAction extends React.Component {

  constructor(props) {
    super(props);

    this.handleSort = this.handleSort.bind(this);
  }

  componentDidMount() {
    // @TODO
    this.sort = 'desc';
  }

  handleSort(event, sortType) {
    event.preventDefault();

    // @TODO
    fetchData(this.props, '', sortType);
  }

  render() {
    const sortTypes = { desc: 'fa-arrow-down', asc: 'fa-arrow-up'};

    return Object.keys(sortTypes).map(
      item => <Link
        to = '#'
        className = { `category-cp__action-item fa ${ sortTypes[item] }` }
        onClick = { event => this.handleSort(event, item) }
      />
    );
  }

}

const mapStateToProps = state => ({ ...state.actionReducer });
export default connect(mapStateToProps)(SortAction);
