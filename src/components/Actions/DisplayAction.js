import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * Represents a display action component.
 */
class DisplayAction extends React.Component {

  constructor(props) {
    super(props);

    this.handleDisplay = this.handleDisplay.bind(this);
  }

  handleDisplay(event, displayType) {
    event.preventDefault();

    this.props.dispatch({ type: 'DISPLAY_CHANGE', display: displayType});
  }

  render() {
    const displayTypes = { bars: 'fa-th', list: 'fa-list'};

    return Object.keys(displayTypes).map(
      item => <Link
        to = '#'
        className = {
          `category-cp__action-item
          ${ item == this.props.display ? 'category-cp__action-item--active' : 'category-cp__action-item--disabled' }
          fa ${ displayTypes[item] }`
        }
        onClick = { event => this.handleDisplay(event, item) }
      />
    );
  }

}

const mapStateToProps = state => ({ ...state.actionReducer });
export default connect(mapStateToProps)(DisplayAction);
