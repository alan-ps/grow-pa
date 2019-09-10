import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * Represents a component to create new category.
 */
class CategoryNew extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    this.props.dispatch({
      type: 'TOGGLE_MODAL',
      showModal: true,
      modalType: 'DIRECTION_NEW'
    });
  }

  render() {
    return (
      <Link to='#' className="category-list__item col-md-3" onClick = { e => this.handleClick(e) }>
        <div className="category-list__item-new">
          <i className="code fa fa-plus-circle"></i>
        </div>
        <div className="category-list__item-title">Create new</div>
      </Link>
    );
  }
}

const mapStateToProps = state => ({ ...state.actionReducer });
export default connect(mapStateToProps)(CategoryNew);
