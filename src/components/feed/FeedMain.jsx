import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FeedLeftSidebar from './FeedLeftSidebar'
import FeedRightSidebar from './FeedRightSidebar'
import { withRouter } from 'react-router-dom'


class FeedMain extends Component {
  
  
  render() {
    return (
    	<div>
        <Container>
          <Row>
            <Col sm={3}> <FeedLeftSidebar /></Col>
            <Col sm={5}> </Col>
            <Col sm={4}> <FeedRightSidebar /></Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default withRouter(FeedMain)