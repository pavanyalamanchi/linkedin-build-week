import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import { VscEdit } from "react-icons/vsc";
import EditForm from "./EditForm";

export default function EditDataButton(props) {
  let [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <VscEdit
        className="icons experience-fragment-edit-button"
        onClick={handleShow}
      ></VscEdit>
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
          <EditForm exp={props.e} />
        </Modal.Body>
      </Modal>
    </>
  );
}
