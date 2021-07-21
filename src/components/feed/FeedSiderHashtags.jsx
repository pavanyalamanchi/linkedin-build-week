import React from 'react'
import {Card} from 'react-bootstrap'
import Hashtags from './Hashtags'

export default function FeedSiderHashtags(props) {
  
	return (
            <Card className="mt-2">
            <Card.Body className="leftSidebarCardBody">
            <Hashtags title="Recent"/>
            <Hashtags title="Group"/>
            <Hashtags title="Followed Hastags"/>
            </Card.Body>
            <a href="">
                <Card.Footer className="text-center font-weight-bold text-muted text-decoration-none bg-white">
                Discover More
                </Card.Footer>
            </a>
            </Card>
  )
}
