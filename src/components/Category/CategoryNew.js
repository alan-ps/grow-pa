import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleModal } from 'actions';

const CategoryNew = ({name, onClick}) => (
  <Link to='#' className="category-list__item col-md-3" onClick={e => onClick(e)}>
    <div className="category-list__item-new">
      <i className="code fa fa-plus-circle"></i>
    </div>
    <div className="category-list__item-title">{ name }</div>
  </Link>
);

const mapStateToProps = (state, ownProps) => ({
  name: ownProps.name || 'Create New'
})

const mapDispatchToProps = (dispatch) => ({
  onClick: (e) => {
    e.preventDefault();
    dispatch(toggleModal('DIRECTION_NEW'));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryNew);
