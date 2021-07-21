import React from 'react'
import {Container,Row, Col,Card} from 'react-bootstrap'
import Sidebar from './Sidebar'

const FeedMain = () => {
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

export default FeedMain
