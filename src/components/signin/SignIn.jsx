import React, { Component } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'

class SignIn extends Component {
	state = {
    email: null,
    API: null,
    userData: null,
    signedIn: this.props.isSignedIn
  }
  
  componentDidMount = () => {
    localStorage.clear()
    if (this.props.isSignedIn === true){
      this.props.history.push("/feed")
    }
  }
  
  componentDidUpdate = () => {
    console.log("signin - componentDidUpdate")
    if (this.props.isSignedIn === true) {
      console.log("REDIRECTING!")
      this.props.history.push("/feed")
    }
  }
  
  render() {
		return (
			<div className="sign-in-screen">
        {console.log("SignIn Component - Signed in?", this.props.isSignedIn)}
        <div className="sign-in-form">
        <img 
          src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" 
          alt="LinkedIn"
          className="sign-in-logo" />
          <h4 className="sign-in-text">Welcome to your professional community.</h4>
          <Form onSubmit={(e) => { this.props.fetchUser(e, this.state) }}>
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Email" 
                onChange={(e) => this.setState({ email: e.target.value })}/>
            </Form.Group>
            
            <Form.Group>
              <Form.Label>API Key (Password): </Form.Label >
              <Form.Control 
                type="password" 
                placeholder="API key here"
                onChange={(e) => this.setState({ API: e.target.value })} />
            </Form.Group>
            <Button variant="primary" type="submit" className="sign-in-button default-blue-bg">
              Sign in
            </Button>
          </Form>
        </div>
			</div>
		)
	}
}

export default withRouter(SignIn)