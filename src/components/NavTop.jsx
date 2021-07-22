import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";

import "../second-nav.css";

const NavTop = () => {
  //   listner = null;
  const [nav, setNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScrol);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  const handleScrol = () => {
    if (window.pageYOffset > 50) {
      if (!nav) {
        setNav({ nav: true });
      }
    } else {
      if (nav) {
        setNav({ nav: false });
      }
    }
  };
  return (
    <>
      <Container
        fluid
        className={`bg-white contains border d-none ${nav && "d-block"}`}
      >
        <Container className="bg-white">
          <Row
            className="  justify-content-start flex-nowrap bg-white"
            style={{ height: "50px" }}
          >
            <Col href="#home" className="d-flex mr-5 mt-2">
              <Image src="https://bit.ly/3zegycw" className="elon ml-0 mt-0" />
              <Col>
                <span>Name</span>
                <p className="title mt-n2">Title</p>
              </Col>
            </Col>

            <Button className="btn text-light rounded-pill mb-2 mt-1 open-to ml-1">
              Open to
            </Button>

            <Button className="btn text-light rounded-pill mb-2 mt-1 open-to ml-1">
              Open to
            </Button>

            <Button className="btn text-light rounded-pill mb-2 mt-1 open-to ml-1">
              Open to
            </Button>
          </Row>
        </Container>
      </Container>
    </>
  );
};
export default NavTop;
