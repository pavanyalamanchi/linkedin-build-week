import React, { Component } from 'react'
import FeedSidebarSections from './FeedSidebarSections'

export default class FeedLeftSidebar extends Component {
	render() {
		return (
			<>
        <div className="sidebar-main-container">
  				<FeedSidebarSections userID={"123123"}/>
  			</div>
      </>
		)
	}
}
