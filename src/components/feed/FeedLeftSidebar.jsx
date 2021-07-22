import React, { Component } from 'react'
import FeedSidebarProfile from './FeedSidebarProfile'
import FeedSiderbarHashtags from './FeedSiderHashtags'

export default function FeedLeftSidebar (props) {

	return (
		<>
			<FeedSidebarProfile user={props.user}/>
			<FeedSiderbarHashtags/>
    </>
	)

}
