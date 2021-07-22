import React, { Component } from 'react'
import FeedSidebarProfile from './FeedSidebarProfile'
import FeedSiderbarHashtags from './FeedSiderHashtags'

export default class FeedLeftSidebar extends Component {
	render() {
		return (
			<>
			<FeedSidebarProfile userID={"123123"}/>
			<FeedSiderbarHashtags/>
      		</>
		)
	}
}
