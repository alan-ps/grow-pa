import React from 'react';
import Modal from 'react-bootstrap/Modal';

class DirectionNewModal extends React.Component {

  render() {
    return (
      <Modal show={ this.props.show } onHide={ this.props.onHide }>
        <Modal.Header closeButton>
          <Modal.Title>
            Create new direction
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { this.props.modalContent }
        </Modal.Body>
        <Modal.Footer>
          This is a footer :)
        </Modal.Footer>
      </Modal>
    );
  }

}

export default DirectionNewModal;
