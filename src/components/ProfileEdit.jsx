import { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

const ProfileEdit = (props) => {
  const [Lgshow, setLgShow] = useState(false);

  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);

  return (
    <>
      <MdEdit size="1x" className="svg-edit" onClick={handleShow} />
      <Modal
        show={Lgshow}
        size="lg"
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Edit Intro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col className="col-lg-6">
                <Form.Group className="mb-1" controlId="formGroupEmail">
                  <Form.Label>First Name *</Form.Label>
                  <Form.Control
                    className="input-value"
                    type="email"
                    placeholder="Enter First Name"
                    value={props.firstName}
                    required
                  />
                </Form.Group>
              </Col>
              <Col className="col-lg-6">
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Last Name *</Form.Label>
                  <Form.Control
                    className="input-value"
                    type="text"
                    placeholder="Enter Last Name"
                    value={props.lastName}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <a href="./sample" className="edit-form-anchor" alt="#">
                Add former name
              </a>
            </Row>
            <Row className="profile-edit-pronunciation">
              <AiOutlinePlus />
              <span>Record Name Pronunciation</span>
            </Row>
            <Row className="profile-edit-text">
              <span>
                Name pronunciation can only be added using our mobile app.
              </span>
            </Row>
            <Form.Group className="mb-1" controlId="formGroupEmail">
              <Form.Label>Pronouns</Form.Label>
              <Row className="profile-edit-dropdown">
                <select
                  className="form-select select-form"
                  aria-label="Default select example"
                  width="98%"
                >
                  <option>Please Select</option>
                  <option value="1">He/Him</option>
                  <option value="2">She/Her</option>
                  <option value="3">They/Them</option>
                  <option value="4">Custom</option>
                </select>
              </Row>
            </Form.Group>
            <Row className="profile-edit-text">
              <span>
                Let others know how to refer to you.
                <a href="./sample" alt="#" className="edit-form-learnmore">
                  {" "}
                  Learn more
                </a>
              </span>
            </Row>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Headline *</Form.Label>
              <Form.Control className="input-value" as="textarea" rows={2} value={props.headline} required/>
            </Form.Group>
            <Row className="profile-edit-pos">
              <AiOutlinePlus />
              <span>Add Current Position</span>
            </Row>
            <Form.Group className="mb-1" controlId="formGroupEmail">
              <Form.Label>Education</Form.Label>
              <Row className="profile-edit-dropdown">
                <select
                  className="form-select select-form"
                  aria-label="Default select example"
                  width="98%"
                >
                  <option>Please Select</option>
                  <option value="1">He/Him</option>
                  <option value="2">She/Her</option>
                  <option value="3">They/Them</option>
                  <option value="4">Custom</option>
                </select>
              </Row>
            </Form.Group>
            <Row>
              <a href="./sample" className="edit-form-anchor" alt="#">
                <span>Add new education</span>
              </a>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check className='form-check' type="checkbox" label="Show education in my intro" />
            </Form.Group>
            
            <Form.Group className="mb-1" controlId="formGroupEmail">
                  <Form.Label>Country/Region *</Form.Label>
                  <Form.Control
                    className="input-value-bottom"
                    type="email"
                    placeholder="Location"
                    value={props.country}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-1" controlId="formGroupEmail">
                  <Form.Label>Locations in this Country/Region</Form.Label>
                  <Form.Control
                    className="input-value-bottom"
                    type="email"
                    placeholder="Locations"
                    value={props.country}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Industry *</Form.Label>
              <Row className="profile-edit-dropdown">
                <select
                  className="form-select select-form"
                  aria-label="Default select example"
                  width="98%"
                >
                  <option>{props.industry}</option>
                  <option value="1">He/Him</option>
                  <option value="2">She/Her</option>
                  <option value="3">They/Them</option>
                  <option value="4">Custom</option>
                </select>
              </Row>
            </Form.Group>

            <Row className="profile-edit-text">
              <span>
                Contact Info
              </span>
            </Row>

            <Row className='profile-edit-text mt-2'>
                <label className='mr-auto'>
                Profile URL, Email, WeChat ID
                </label>
                <MdEdit size="1x" className="svg-edit-bottom"/>
            </Row>
            <hr className='hr-line'></hr>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='edit-button text-white' onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfileEdit;