import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../Sidebar";
import { withRouter } from "react-router-dom";
import PostsContainer from "../PostsContainer";

class FeedMain extends Component {
  render() {
    {
      console.log("this.props", this.props);
    }
    return (
      <div>
        <Container>
          <Row>
            <Col sm={3} className="p-0">
              <Sidebar />
            </Col>
            <Col sm={5} className="p-0"></Col>
            <Col sm={4} className="p-0">
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(FeedMain);
