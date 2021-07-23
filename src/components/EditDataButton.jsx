/* eslint-disable react-hooks/exhaustive-deps */
import { Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { VscEdit } from "react-icons/vsc";
import EditForm from "./EditForm";

export default function EditDataButton(props) {
  let [show, setShow] = useState(false);
  const [expData, setexpData] = useState()

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const userId = props.userId;
  const expId = props.expId

  const fetchData = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`,{
        headers:
        {
          Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY1M2IyNTBlZmU3ODAwMTU1YzM0YTAiLCJpYXQiOjE2MjY2ODQxOTcsImV4cCI6MTYyNzg5Mzc5N30.3ZXfLM8Xio4MkKGlFiTA42FVjeiUinuO7VDCroKKFMw",
        }
      })
      if(response.ok){
        let resp = await response.json()
        setexpData(resp)
        console.log('edit button fetch',resp)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

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
            Edit Experience
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { expData && <EditForm exp={props.e} userId={props.userId} editData={expData} expId={props.expId}/>}
        </Modal.Body>
      </Modal>
    </>
  );
}
