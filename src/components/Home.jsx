import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

export default class Home extends Component {
	render() {
		return (
			<div className="App">
        <TopNav />
        <Router>
          <Route exact path="/feed" render={(routerProps) => <FeedMain /> } />          
          <Route exact path="/me/:id" render={(routerProps) => <MeSection /> } />
          <Route exact path="/profile/:id" render={routerProps => <ProfileSection /> } />
        </Router>
        <Footer />
				Home!
			</div>
		)
	}
}
