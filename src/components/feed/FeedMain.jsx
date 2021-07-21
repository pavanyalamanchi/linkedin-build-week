import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FeedLeftSidebar from './FeedLeftSidebar'
import { withRouter } from 'react-router-dom'

class FeedMain extends Component {
  
  
  render() {
    {console.log("this.props", this.props)}
    return (
    	<div>
        <Container>
          <Row>
            <Col sm={3}> <FeedLeftSidebar /></Col>
            <Col sm={5}> 
              
            </Col>
            <Col sm={4}> <FeedLeftSidebar /></Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default withRouter(FeedMain)