import { Modal, Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { VscEdit } from "react-icons/vsc";

export default function EditDataButton(props) {
  
  let [show, setShow] = useState(false)
  
  const handleShow = () => { setShow(true) }
  const handleClose = () => { setShow(false) }
  
  return (
    <>
      <VscEdit
        className="icons experience-fragment-edit-button"
        onClick={handleShow}>
       </VscEdit>
      <Modal
        {...props}
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update experience
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer className="position-absolute bottom-0">
          <Button onClick={props.onHide}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}