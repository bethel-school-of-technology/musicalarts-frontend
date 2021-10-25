import React from 'react';
import { Modal, ModalBody, ModalHeader, Button, ModalFooter } from 'reactstrap';

const DeleteConfirmation = ({
  showModal,
  hideModal,
  confirmModal,
  message,
}) => {
  return (
    <div>
      <Modal show={showModal} onHide={hideModal}>
        <ModalHeader closeButton>Delete Confirmation</ModalHeader>
        <ModalBody>
          <div className='alert alert-danger'>{message}</div>
        </ModalBody>
        <ModalFooter>
          <Button variant='default' onClick={hideModal}>
            Cancel
          </Button>
          <Button variant='danger' onClick={() => confirmModal}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DeleteConfirmation;
