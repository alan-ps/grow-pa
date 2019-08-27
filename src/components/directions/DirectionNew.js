import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * Represents a new direction component.
 */
class DirectionNew extends React.Component {

  openModal(event) {
    event.preventDefault();

    this.props.dispatch({
      type: 'TOGGLE_MODAL',
      showModal: true,
      modalType: 'DIRECTION_NEW'
    })
  }

  render() {
    return (
      <div className="directions__item directions__item-empty">
        <Link to="#" onClick={ e => this.openModal(e) } data-toggle="modal">
          <i className="fas fa-plus"></i>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.modalReducer });
export default connect(mapStateToProps)(DirectionNew);
