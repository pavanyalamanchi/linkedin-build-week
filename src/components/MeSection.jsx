import { Container, Col, Row, Card, ListGroup, Button } from "react-bootstrap";
import { SiTesla, SiSpacex } from "react-icons/si";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ProfileEdit from "./ProfileEdit";
import ExperienceSection from './ExperienceSection'
import cover from "../assets/cover.jpg";
import ProfileImage from './ProfileImage'
import NavTop from './NavTop'
import Footer from './Footer'
import MeActivity from './MeActivity'
import faker from "faker";


const MainSection = () => {
  const [profileData, setProfileData] = useState("");

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

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
    <NavTop />
    <Container className="main-body-container">
      <Row className="justify-content-center">
        <Col sm={8} className="user-info mt-2">
          <Card>
            <div className="cover-image">
              <Card.Img className="cover-img" variant="top" src={cover} />
            </div>
            {<ProfileImage profileData={profileData} fetch={fetchData}/>}

            <Card.Body className="user-info-body">
              <Row className="justify-content-end">
                  {profileData && <ProfileEdit profileData={profileData} fetch={fetchData}/>}
              </Row>
              <Row className="justify-content-space-between rows-col-md-6 rows-col-sm-12 rows-col-sx-12 ">
                <Col>
                  <div className="d-flex mt-3">
                    <h2 className="member-name">
                      {profileData.name} {profileData.surname}{" "}
                      <span>• 1st</span>
                    </h2>
                  </div>
                  <div>
                    <h6 className="member-position">{profileData.title}</h6>
                  </div>
                  <div className="d-flex">
                    <p className="text-muted">
                      {profileData.area} ·
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
                {profileData.bio}
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
                 <MeActivity randomimage={faker.image.image()}/>
                 <MeActivity randomimage={faker.image.business()}/>
                </Col>
                <Col>
                 <MeActivity randomimage={faker.image.animals()}/>
                 <MeActivity randomimage={faker.image.food()}/>
                </Col>
              </Row>
            
            </Card.Body>
            <a href="">
              <Card.Footer className="text-center card-footer text-muted text-decoration-none font-weight-bold">
              See all activity
              </Card.Footer>
            </a>
          </Card>
          
          <Card>
            <ExperienceSection />
          </Card>
          
        </Col>
        
        <Col sm={4}>
          <Sidebar />
        </Col>
        
      </Row>
      <Row className="justify-content-center"></Row>
    </Container>
    <Footer />
    </>
  );
};

export default MainSection;
