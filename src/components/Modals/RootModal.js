import React from 'react';
import { connect } from 'react-redux';
import { default as modalTypes } from './';

const MODAL_TYPES = {
  DIRECTION_NEW: modalTypes.newDirectionModal
};

/**
 * Represents a root modal component.
 */
class RootModal extends React.Component {

  closeModal() {
    this.props.dispatch({ type: 'TOGGLE_MODAL', showModal: false });
  }

  render() {
    if (!this.props.modalType) {
      return null;
    }

    const SpecifiedModal = MODAL_TYPES[this.props.modalType];

    return (
      <SpecifiedModal
        show = { this.props.showModal }
        onHide = { e=>this.closeModal(e) }
      />
    );
  }
}

const mapStateToProps = state => ({ ...state.modalReducer });
export default connect(mapStateToProps)(RootModal);


// DirectionNewModal.js

// export default connectModal('DIRECTION_NEW') (
//   connect(mapStateToProps)(DirectionNewModal)
// );

// RootModal.js


// return (
//   React.createElement(this.props.component, {
//     show: this.props.showModal && this.props.name === this.props.modalType,
//     onHide: (e) => this.closeModal(e),
//     ...this.props.otherProps
//   })
// );
//
//
// const mapStateToProps = state => ({ ...state.modalReducer });
// const ConnectedRootModal = connect(mapStateToProps)(RootModal);
//
// export function connectModal(name) {
//   return function (component) {
//     return (props) => (
//       <ConnectedRootModal name={name} component={component} otherProps={props}/>
//     )
//   }
// }

