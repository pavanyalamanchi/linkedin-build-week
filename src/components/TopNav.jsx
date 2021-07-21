import {
    Container,
    Row,
    Col,
    Image,
    Nav,
    Navbar,
    Form,
    FormControl,
  } from "react-bootstrap";
  import { SiLinkedin } from "react-icons/si";
  import { TiHome, TiMessageTyping } from "react-icons/ti";
  import { BsFillPeopleFill, BsThreeDots } from "react-icons/bs";
  import { IoNotificationsSharp } from "react-icons/io5";
  import { RiDashboardFill } from "react-icons/ri";
  import { MdWork } from "react-icons/md";
  import "../nav.css";
  
  const TopNav = () => {
    return (
      <>
        <Container fluid className="bg-white">
          <Row>
            <Col>
              <Container className="mt-n2">
                <Navbar className="nav-contain">
                  <Navbar.Brand href="/feed">
                    <SiLinkedin className="in" />
                  </Navbar.Brand>
                  <Form inline className="d-none d-sm-block">
                    <FormControl
                      type="text"
                      placeholder="Search"
                      className="ml-sm-n2 imput search"
                    />
                  </Form>
                  <Nav className="">
                    <Nav.Link href="/feed">
                      <TiHome className="nav-icon hm" />
                      <br />
                      <span>Home</span>
                    </Nav.Link>
                    <Nav.Link href="#features">
                      <BsFillPeopleFill className="nav-icon" />
                      <br />
                      <span>My Network</span>
                    </Nav.Link>
                    <Nav.Link href="#pricing">
                      <MdWork className="nav-icon" />
                      <br />
                      <span>Jobs</span>
                    </Nav.Link>
                    <Nav.Link href="#pricing">
                      <TiMessageTyping className="nav-icon" />
                      <br />
                      <span>Messaging</span>
                    </Nav.Link>
                    <Nav.Link href="#pricing">
                      <IoNotificationsSharp className="nav-icon" />
                      <br />
                      <span>Notification</span>
                    </Nav.Link>
                    <Nav.Link href="#pricing" className="d-block d-sm-none">
                      <BsThreeDots />
                      <span>more</span>
                    </Nav.Link>
                    <Image
                      src="https://bit.ly/3zegycw"
                      className="elon d-none d-sm-block"
                    />
                  </Nav>
                  <div className="vl ml-1 d-none d-sm-block"></div>
                  <Nav.Link href="#pricing" style={{ color: "gray" }}>
                    <RiDashboardFill className="nav-icon" />
                    <br />
                    <span>Work</span>
                  </Nav.Link>
                  <p className="premium d-none d-sm-block">
                    Try Premium Free <br /> For 1 Month
                  </p>
                </Navbar>
              </Container>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  
  export default TopNav;