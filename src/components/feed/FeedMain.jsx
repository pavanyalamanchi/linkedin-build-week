import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FeedLeftSidebar from './FeedLeftSidebar'
import FeedRightSidebar from './FeedRightSidebar'
import { withRouter } from 'react-router-dom'
import PostsContainer from "./PostsContainer";
import NewPost from "./NewPost";
import Loading from '../Loading'


class FeedMain extends Component {
  
  componentDidMount = () => {
    const fetchUser = fetch("... userAPI")
  }
  
  render() {
    if (this.props.user === null) {
      return <Loading />
    } else {
      return (
        <div>
          {console.log("FeedMain - SIGN IN DATA:", this.props.user)}
          <Container>
            <Row>
              <Col sm={3} className="rightSidebar"> 
                <FeedLeftSidebar user={this.props.user}/>
              </Col>
              <Col sm={5} className="feedMain"> 
                <NewPost user={this.props.user}/>
                <PostsContainer user={this.props.user}/>
                </Col>
              <Col sm={4}> <FeedRightSidebar /></Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}

export default withRouter(FeedMain);
