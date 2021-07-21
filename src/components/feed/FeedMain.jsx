import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FeedLeftSidebar from "./FeedLeftSidebar";
import Sidebar from "../Sidebar";
import { withRouter } from "react-router-dom";
import PostsContainer from "../PostsContainer";

class FeedMain extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={3}>
              <FeedLeftSidebar />
            </Col>
            <Col sm={5}>
              <PostsContainer />
            </Col>
            <Col sm={4}>
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(FeedMain);
