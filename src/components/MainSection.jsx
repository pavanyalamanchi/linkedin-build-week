import { Container, Col, Row, Card, ListGroup, Button } from "react-bootstrap";
import profile from "../assets/musk.png";
import cover from "../assets/cover.jpg";
import { SiTesla, SiSpacex } from 'react-icons/si'
import Sidebar from './Sidebar'
import ExperienceSection from './ExperienceSection'

const MainSection = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={8} className="user-info mt-2">
          <Card>
           <div className="cover-image"> <Card.Img className="cover-img" variant="top" src={cover} /></div>
            <img src={profile} alt="#" className="profile-pic rounded-circle" />
            <Card.Body className="user-info-body">
              <Row className="justify-content-space-between rows-col-md-6 rows-col-sm-12 rows-col-sx-12 ">
                <Col>
            
                    <div className="d-flex mt-3">
                      <h2 className="member-name">Elon Musk <span>. 1st</span></h2>
                    </div>
                   <div><h6 className="member-position">CEO Tesla SpaceX</h6></div>
                    <div className="d-flex">
                      <p className="text-muted"> Berlin Metropolitan Area . <a
                        href=".sample"
                        alt="#"
                        style={{ textDecoration: "none", fontWeight: "600", color:"#004182" }}
                      >
                        Contact Info
                      </a></p>
                    </div>
                 
                </Col>
                <Col className="col d-flex justify-content-center">
                  <ListGroup variant='flush' className='mt-3' >
                    <ListGroup.Item style={{borderBottom:'1px solid white'}}><SiTesla style={{marginRight:'0.8rem'}}/>Tesla</ListGroup.Item>
                    <ListGroup.Item><SiSpacex style={{marginRight:'0.8rem'}}/>SpaceX</ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
              
                 <div> <a href='./sample' style={{ textDecoration: "none", fontWeight: "600", fontSize:'medium' }}>500+ Connections</a></div>
                  <div className='' style={{marginTop:'0.8rem'}}>
        <Button className='btn btn-info text-light rounded-pill mb-2' style={{backgroundColor:'#0a66c2', borderColor:'#0a66c2'}}> Open To</Button>
                    <button className='btn btn-outline-secondary rounded-pill mb-2'>Add section</button>
                    <button className='btn btn-outline-secondary rounded-pill mb-2'>More</button>
                  </div>
             
            </Card.Body>
          </Card>

          <Card>
          <Card.Body>
            <h3 className="body-title">About</h3>
            <p>Experienced Senior Web Application Developer with a demonstrated history of working in the computer software industry. Skilled in Negotiation,Web Development,Mobile App development, C++, Content Management Systems (CMS), Management, and HTML. Strong engineering professional with a Master’s of Computer Science focused in Computer Science from Halmstad University, Sweden.</p>
          </Card.Body>
          </Card>

          <Card>
          <Card.Body>
            <h3 className="body-title">Activity</h3>
            <div><span style={{color: "#0a66c2", fontWeight:"500"}}>1,844 followers</span></div>
            <Row>
              <Col>
                <div className="card mb-3">
                  <div className="row no-gutters">
                    <div className="col-md-2">
                    <Card.Img className="cover-img" variant="top" src={cover} style={{height:"60px", width: "60px"}} />
                    </div>
                    <div className="col-md-10">
                      <div className="card-body">
                        <h5 className="activity-item-title">Simulation gear reducer</h5>
                        <p className="card-text">Elon Musk shared this  </p>
                        <p className="card-text"><small class="text-muted">3 React</small><small class="text-muted">1 Comment</small></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="row no-gutters">
                    <div className="col-md-2">
                    <Card.Img className="cover-img" variant="top" src={cover} style={{height:"60px", width: "60px"}} />
                    </div>
                    <div className="col-md-10">
                      <div className="card-body">
                        <h5 className="activity-item-title" >Simulation gear reducer</h5>
                        <p className="card-text">Elon Musk shared this  </p>
                        <p className="card-text"><small class="text-muted">3 React</small><small class="text-muted">1 Comment</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
              <div className="card mb-3">
                  <div className="row no-gutters">
                    <div className="col-md-2">
                    <Card.Img className="cover-img" variant="top" src={cover} style={{height:"60px", width: "60px"}} />
                    </div>
                    <div className="col-md-10">
                      <div className="card-body">
                        <h5 className="activity-item-title">Simulation gear reducer</h5>
                        <p className="card-text">Elon Musk shared this  </p>
                        <p className="card-text"><small class="text-muted">3 React</small><small class="text-muted">1 Comment</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              <div className="card mb-3">
                  <div className="row no-gutters">
                    <div className="col-md-2">
                    <Card.Img className="cover-img" variant="top" src={cover} style={{height:"60px", width: "60px"}} />
                    </div>
                    <div className="col-md-10">
                      <div className="card-body">
                        <h5 className="activity-item-title">Simulation gear reducer</h5>
                        <p className="card-text">Elon Musk shared this  </p>
                        <p className="card-text"><small class="text-muted">3 React</small><small class="text-muted">1 Comment</small></p>
                      </div>
                    </div>
                  </div>
                </div>
                </Col>
            </Row>
            <Button href="#" variant="light" size="lg" style={{width: "100%"}}> See all activity</Button>
          </Card.Body>
          </Card>
          
          <ExperienceSection />
            
        </Col>
        
        <Col sm={4}> 
          <Sidebar />
        </Col>
        
      </Row>
      <Row className="justify-content-center">
        
      </Row>
    </Container>
  );
};

export default MainSection;
