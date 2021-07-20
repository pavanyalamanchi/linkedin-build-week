import { Container, Col, Row, Card, ListGroup, Button } from "react-bootstrap";
import profile from "../assets/musk.png";
import cover from "../assets/cover.jpg";
import { SiTesla, SiSpacex } from "react-icons/si";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

const MainSection = () => {
  const [profileData, setProfileData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/me",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY1M2IyNTBlZmU3ODAwMTU1YzM0YTAiLCJpYXQiOjE2MjY2ODQxOTcsImV4cCI6MTYyNzg5Mzc5N30.3ZXfLM8Xio4MkKGlFiTA42FVjeiUinuO7VDCroKKFMw",
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
    <Container>
      <Row className="justify-content-center">
        <Col sm={8} className="user-info mt-2">
          <Card>
            <div className="cover-image">
              <Card.Img className="cover-img" variant="top" src={cover} />
            </div>
            <img src={profile} alt="#" className="profile-pic rounded-circle" />

            <Card.Body className="user-info-body">
              <Row className="justify-content-space-between rows-col-md-6 rows-col-sm-12 rows-col-sx-12 ">
                <Col>
                  <div className="d-flex mt-3">
                    <h2 className="member-name">
                      {profileData.name} {profileData.surname}{" "}
                      <span>. 1st</span>
                    </h2>
                  </div>
                  <div>
                    <h6 className="member-position">{profileData.title}</h6>
                  </div>
                  <div className="d-flex">
                    <p className="text-muted">
                      {profileData.area} .
                      <a
                        href=".sample"
                        alt="#"
                        className="profile-contact-info"
                      >
                        Contact Info
                      </a>
                    </p>
                  </div>
                </Col>

                <Col className="col d-flex justify-content-center">
                  <ListGroup variant="flush" className="mt-3">
                    <ListGroup.Item>
                      <SiTesla className='svg-margin' />
                      Tesla
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <SiSpacex className='svg-margin' />
                      SpaceX
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>

              <div>
                <a
                  href="./sample"
                  className='connections'
                >
                  500+ Connections
                </a>
              </div>
              <div className="profile-button-margin" >
                <Button
                  className="btn text-light rounded-pill mb-2 open-to"
                >
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
              <h3>About</h3>
              <p>
                {profileData.bio}
              </p>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h3>Activity</h3>
              <div>
                <span style={{ color: "#0a66c2", fontWeight: "500" }}>
                  1,844 followers
                </span>
              </div>
              <Row>
                <Col>
                  <div className="card mb-3">
                    <div className="row no-gutters">
                      <div className="col-md-2">
                        <Card.Img
                          className="cover-img"
                          variant="top"
                          src={cover}
                          style={{ height: "60px", width: "60px" }}
                        />
                      </div>
                      <div className="col-md-10">
                        <div className="card-body">
                          <h5
                            className=""
                            style={{ fontSize: "16px", lineHeight: "5px" }}
                          >
                            Simulation gear reducer
                          </h5>
                          <p className="card-text">Elon Musk shared this </p>
                          <p className="card-text">
                            <small class="text-muted">3 React</small>
                            <small class="text-muted">1 Comment</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-3">
                    <div className="row no-gutters">
                      <div className="col-md-2">
                        <Card.Img
                          className="cover-img"
                          variant="top"
                          src={cover}
                          style={{ height: "60px", width: "60px" }}
                        />
                      </div>
                      <div className="col-md-10">
                        <div className="card-body">
                          <h5
                            className=""
                            style={{ fontSize: "16px", lineHeight: "5px" }}
                          >
                            Simulation gear reducer
                          </h5>
                          <p className="card-text">Elon Musk shared this </p>
                          <p className="card-text">
                            <small class="text-muted">3 React</small>
                            <small class="text-muted">1 Comment</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="card mb-3">
                    <div className="row no-gutters">
                      <div className="col-md-2">
                        <Card.Img
                          className="cover-img"
                          variant="top"
                          src={cover}
                          style={{ height: "60px", width: "60px" }}
                        />
                      </div>
                      <div className="col-md-10">
                        <div className="card-body">
                          <h5
                            className=""
                            style={{ fontSize: "16px", lineHeight: "5px" }}
                          >
                            Simulation gear reducer
                          </h5>
                          <p className="card-text">Elon Musk shared this</p>
                          <p className="card-text">
                            <small class="text-muted">3 React</small>
                            <small class="text-muted">1 Comment</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-3">
                    <div className="row no-gutters">
                      <div className="col-md-2">
                        <Card.Img
                          className="cover-img"
                          variant="top"
                          src={cover}
                          style={{ height: "60px", width: "60px" }}
                        />
                      </div>
                      <div className="col-md-10">
                        <div className="card-body">
                          <h5
                            className=""
                            style={{ fontSize: "16px", lineHeight: "5px" }}
                          >
                            Simulation gear reducer
                          </h5>
                          <p className="card-text">Elon Musk shared this </p>
                          <p className="card-text">
                            <small class="text-muted">3 React</small>
                            <small class="text-muted">1 Comment</small>
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
                See all activity
              </Button>
            </Card.Body>
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
