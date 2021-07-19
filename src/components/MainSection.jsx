import { Container, Col, Row, Card, ListGroup, Button } from "react-bootstrap";
import profile from "../assets/musk.png";
import { SiTesla, SiSpacex } from 'react-icons/si'

const MainSection = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="col-8">
          <Card>
            <Card.Img className="cover-img" variant="top" src="http://via.placeholder.com/640x150" />
            <img src={profile} alt="#" className="profile-pic rounded-circle" />
            <Card.Body>
              <Row className="justify-content-space-between rows-col-md-6 rows-col-sm-12 rows-col-sx-12 " style={{ marginTop: "3.5rem", marginLeft: "1rem" }}>
                <Col>
                  <Row>
                    <div className="d-flex mt-3">
                      <h2 
                        style={{ width: "fit-content", marginRight: "0.8rem" }}
                      >
                        Elon Musk
                      </h2>
                      <span
                        style={{
                          width: "fit-content",
                          padding: "0rem",
                          paddingTop: "4px",
                          marginRight: "0.5rem",
                        }}
                      >
                        .
                      </span>
                      <span style={{ width: "fit-content", paddingTop: "7px" }}>
                        {" "}
                        1st
                      </span>
                    </div>
                    <h6>CEO Tesla SpaceX</h6>
                    <div className="d-flex">
                      <span
                        className="text-muted"
                        style={{ marginRight: "0.4rem" }}
                      >
                        Berlin Metropolitan Area
                      </span>
                      <span
                        className="d-flex"
                        style={{ marginRight: "0.4rem" }}
                      >
                        .
                      </span>
                      <a
                        href=".sample"
                        alt="#"
                        style={{ textDecoration: "none", fontWeight: "600" }}
                      >
                        Contact Info
                      </a>
                    </div>
                  </Row>
                </Col>
                <Col className="col d-flex justify-content-center">
                  <ListGroup variant='flush' className='mt-3' >
                    <ListGroup.Item style={{borderBottom:'1px solid white'}}><SiTesla style={{marginRight:'0.8rem'}}/>Tesla</ListGroup.Item>
                    <ListGroup.Item><SiSpacex style={{marginRight:'0.8rem'}}/>SpaceX</ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
              <Row style={{ marginTop: "0.8rem", marginLeft: "1rem" }}>
                  <a href='./sample' style={{ textDecoration: "none", fontWeight: "600", fontSize:'medium' }}>500+ Connections</a>
                  <div className='' style={{marginTop:'0.8rem'}}>
        <Button className='btn btn-info text-light rounded-pill mb-2' style={{backgroundColor:'#0072b1', borderColor:'#0072b1'}}> Open To</Button>
                    <button className='btn btn-outline-secondary rounded-pill mb-2'>Add section</button>
                    <button className='btn btn-outline-secondary rounded-pill mb-2'>More</button>
                  </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSection;
