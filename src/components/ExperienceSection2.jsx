import { Col, Row, Card, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { VscEdit } from "react-icons/vsc";
import Experience from './Experience'
import AddDataButton from './AddDataButton'
import EditDataButton from './EditDataButton'
{/* import AddForm from "./AddForm"; */}

const ExperienceSection = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  return (
    <>
      <Card>
        <Card.Body>
          <Row>
            <Col sm={11}>
              <h3 className="body-title">Experiences</h3>
            </Col>
            <Col sm={1}>
              <FiPlus
                className="icons"
                onClick={() => setModalShow(true)}
              ></FiPlus>
              <AddDataButton
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              {" "}
              <Card.Img
                className="cover-img"
                variant="top"
                src={""}
                style={{ height: "60px", width: "60px" }}
              />
            </Col>
            <Col sm={9}>
              {" "}
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
              </p>
            </Col>
            <Col sm={1}>
              <VscEdit
                className="icons"
                onClick={() => setModalShow1(true)}>
              </VscEdit>
              
              <EditDataButton
                show={modalShow1}
                onHide={() => setModalShow1(false)}
              />
            </Col>
          </Row>
        </Card.Body>
        
        
      </Card>
    </>
  );
};



export default Experience;
