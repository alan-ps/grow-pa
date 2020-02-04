import React from 'react';
import { connect } from 'react-redux';
import TopicModal from './TopicModal';

const MODAL_TYPES = {
  TOPIC: TopicModal
};

const Modal = ({type, closeModal}) => {
  const MW = MODAL_TYPES[type] || null;
  return MW ? <MW show={Boolean(type)} onHide = {e => closeModal(e)}/> : null;
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
)(Modal);
