import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class FeedMain extends Component {
	render() {
		return (
			<div>
          <Container>
            <Row>
              <Col sm={3}> <Sidebar /></Col>
              <Col sm={5}></Col>
              <Col sm={4}> <Sidebar /></Col>
            </Row>
          </Container>
        </div>
		)
	}
}
