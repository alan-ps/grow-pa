import React from 'react';
import { connect } from 'react-redux';
import { default as modalTypes } from './';

const MODAL_TYPES = {
  DIRECTION_NEW: modalTypes.newDirectionModal
};

const RootModal = ({type, closeModal}) => {
  const SpecifiedModal = MODAL_TYPES[type] || null;

  return !SpecifiedModal ?
    null :
    <SpecifiedModal
      show = {type}
      onHide = {e => closeModal(e)}
    />;
};

const mapStateToProps = (state) => ({
  type: state.modalReducer.modal
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => {
    dispatch({ type: 'TOGGLE_MODAL', modal: false })
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootModal);
