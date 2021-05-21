import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const PasswordPolicyModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Password Policy
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Password Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your Password should contain Minimum eight characters, at least one
          uppercase letter, one lowercase letter, one number and one special
          character
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PasswordPolicyModal;
