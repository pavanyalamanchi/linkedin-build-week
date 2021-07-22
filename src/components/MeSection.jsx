import { Container, Col, Row, Card, ListGroup, Button } from "react-bootstrap";
import { SiTesla, SiSpacex } from "react-icons/si";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ProfileEdit from "./ProfileEdit";
import ExperienceSection from './ExperienceSection'
import cover from "../assets/cover.jpg";

const MainSection = (props) => {
  const [profileData, setProfileData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/me",
          {
            headers: {
              Authorization:
                "Bearer ",
            },
          }
        );
        
        if (response.ok) {
        let resp = await response.json();
          setProfileData(resp);
          console.log("fetch", resp);
        } else {
        }
      } catch (error) {}
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <Container className="main-body-container">
      <Row className="justify-content-center">
        <Col sm={8} className="user-info mt-2">
          <Card>
            <div className="cover-image">
              <Card.Img className="cover-img" variant="top" src={cover} />
            </div>
            <img
              src={props.user.image}
              alt="#"
              className="profile-pic rounded-circle"
            />

            <Card.Body className="user-info-body">
              <Row className="justify-content-end">
                  {props.user && <ProfileEdit profileData={props.user}/>}
              </Row>
              <Row className="justify-content-space-between rows-col-md-6 rows-col-sm-12 rows-col-sx-12 ">
                <Col>
                  <div className="d-flex mt-3">
                    <h2 className="member-name">
                      {props.user.name} {props.user.surname}{" "}
                      <span>• 1st</span>
                    </h2>
                  </div>
                  <div>
                    <h6 className="member-position">{props.user.title}</h6>
                  </div>
                  <div className="d-flex">
                    <p className="text-muted">
                      {props.user.area} ·
                      <a
                        href=".sample"
                        alt="#"
                        className="profile-contact-info"
                      >
                        {""} Contact Info
                      </a>
                    </p>
                  </div>
                </Col>

                <Col className="col d-flex profile-company-images justify-content-center">
                  <ListGroup variant="flush" className="mt-3">
                    <ListGroup.Item className='list-border'>
                      <SiTesla className="svg-margin" />
                      Tesla
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <SiSpacex className="svg-margin" />
                      SpaceX
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>

              <div>

                <a
                  href="./sample"
                  className='profile-connections'
                >
                  500+ Connections
                </a>
              </div>
              <div className="profile-button-margin">
                <Button className="btn text-light rounded-pill mb-2 open-to">
                  Open To
                </Button>
                <button className="btn btn-outline-secondary rounded-pill mb-2">
                  Add section
                </button>
                <button className="btn btn-outline-secondary rounded-pill mb-2">
                  More
                </button>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>

              <h5 className="profile-body-section-header" >About</h5>
              <p>
                {props.user.bio}
              </p>

            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h5>Activity</h5>
              <div>
                <span className="activity-followers">1,844 followers</span>
              </div>
              <Row>
                <Col>
                  <div className="card mb-3 activity-border">
                    <div className="row no-gutters">
                      <div className="col-md-2">
                        <Card.Img
                          className="cover-img activity-image"
                          variant="top"
                          src={cover}
                        />
                      </div>
                      <div className="col-md-10">
                        <div className="card-body">
                          <h5 className="activity-body-header">
                            Simulation gear reducer
                          </h5>
                          <p className="card-text">{props.user.name} shared this </p>
                          <p className="card-text">
                            <small className="text-muted">3 React</small>
                            <small className="text-muted">1 Comment</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-3 activity-border">
                    <div className="row no-gutters">
                      <div className="col-md-2">
                        <Card.Img
                          className="cover-img activity-image"
                          variant="top"
                          src={cover}
                        />
                      </div>
                      <div className="col-md-10">
                        <div className="card-body">
                          <h5 className="activity-body-header">
                            Simulation gear reducer
                          </h5>
                          <p className="card-text">Elon Musk shared this </p>
                          <p className="card-text">
                            <small className="text-muted">3 React</small>
                            <small className="text-muted">1 Comment</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="card mb-3 activity-border">
                    <div className="row no-gutters">
                      <div className="col-md-2">
                        <Card.Img
                          className="cover-img activity-image"
                          variant="top"
                          src={cover}
                        />
                      </div>
                      <div className="col-md-10">
                        <div className="card-body">
                          <h5 className="activity-body-header">
                            Simulation gear reducer
                          </h5>
                          <p className="card-text">Elon Musk shared this</p>
                          <p className="card-text">
                            <small className="text-muted">3 React</small>
                            <small className="text-muted">1 Comment</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-3 activity-border">
                    <div className="row no-gutters">
                      <div className="col-md-2">
                        <Card.Img
                          className="cover-img activity-image"
                          variant="top"
                          src={cover}
                        />
                      </div>
                      <div className="col-md-10">
                        <div className="card-body">
                          <h5 className="activity-body-header">
                            Simulation gear reducer
                          </h5>
                          <p className="card-text">Elon Musk shared this </p>
                          <p className="card-text">
                            <small className="text-muted">3 React</small>
                            <small className="text-muted">1 Comment</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Button
                href="#"
                variant="light"
                size="lg"
                style={{ width: "100%" }}
              >
                <p>See all activity</p>
              </Button>
            </Card.Body>
          </Card>
          
          <Card>
            <ExperienceSection user={props.user}/>
          </Card>
          
        </Col>
        
        <Col sm={4}>
          <Sidebar />
        </Col>
        
      </Row>
      <Row className="justify-content-center"></Row>
    </Container>
  );
};

export default MainSection;
