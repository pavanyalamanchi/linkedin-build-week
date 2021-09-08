import React, { Component } from 'react'
import { Container, Col, Row, Card, ListGroup, Button } from "react-bootstrap";
import { SiTesla, SiSpacex } from "react-icons/si";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ProfileEdit from "./ProfileEdit";
import ExperienceSection from './ExperienceSection'
import cover from "../assets/cover.jpg";
import ProfileImage from './ProfileImage'
import InvalidPage from './InvalidPage'
import Loading from './Loading'
import UserPostsProfile from './UserPostsProfile'

function ProfileSection(props) {
	const [profileData, setProfileData] = useState(null)
	const [validProfile, setValidProfile] = useState()
	const [loading, setLoading] = useState(true)
	
	useEffect(() => {
		fetchData()
	}, [])
	
	const fetchData = async () => {
		console.log("fetching?")
		let profileId = props.match.params.id
		try {
      let response = await fetch( `https://striveschool-api.herokuapp.com/api/profile/${profileId}`, {
        headers: { 
					Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU4MmIzNTgxNzAwMTVjMjI3MDMiLCJpYXQiOjE2MzExMDA5NzMsImV4cCI6MTYzMjMxMDU3M30.0oXsqtJMnQ-VviYyjhLSP4Vsr-B8wsYQFOuehjie-0I"       },
      });
			
      if (response.ok) {
				console.log("reponse ok!")
        let resp = await response.json()
        setProfileData(resp)
				setValidProfile(true)
				setLoading(false)
        console.log("fetch", resp)
      } else {
				console.log("response not ok!")
				setValidProfile(false)
			}
    } catch (error) {
			console.log("ERROR:", error)
			setLoading(false)
			setValidProfile(false)
		}
	}
	
  if (profileData === null){
    return <Loading />
  } else {
  	return (
  		<Container className="main-body-container">
        {console.log("PROFILE DATA", profileData)}
        <Row className="justify-content-center">
          <Col sm={8} className="user-info mt-2">
            <Card>
              <div className="cover-image">
                <Card.Img className="cover-img" variant="top" src={cover} />
              </div>
              {<ProfileImage profileData={profileData} fetch={fetchData}/>}
  
              <Card.Body className="user-info-body">
                <Row className="justify-content-end">
  								<div className="profile-spacer-div"/>
                </Row>
                <Row className="justify-content-space-between rows-col-md-6 rows-col-sm-12 rows-col-sx-12 ">
                  <Col>
                    <div className="d-flex mt-3">
                      <h2 className="member-name">
                        {profileData.name} {profileData.surname}{" "}
                        <span>• 1st</span>
                      </h2>
                    </div>
                    <div>
                      <h6 className="member-position">{profileData.title}</h6>
                    </div>
                    <div className="d-flex">
                      <p className="text-muted">
                        {profileData.area} ·
                        <a
                          href=".sample"
                          alt="#"
                          className="profile-contact-info"
                        >
                          {""} Contact Info
                        </a>
                      </p>
                    </div>
                  </Col>
  
                  <Col className="col d-flex profile-company-images justify-content-center">
                    <ListGroup variant="flush" className="mt-3">
                      <ListGroup.Item className='list-border'>
                        <SiTesla className="svg-margin" />
                        Tesla
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <SiSpacex className="svg-margin" />
                        SpaceX
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
  
                <div>
  
                  <a
                    href="./sample"
                    className='profile-connections'
                  >
                    500+ Connections
                  </a>
                </div>
                <div className="profile-button-margin">
                  <Button className="btn text-light rounded-pill mb-2 open-to">
                    Open To
                  </Button>
                  <button className="btn btn-outline-secondary rounded-pill mb-2">
                    Add section
                  </button>
                  <button className="btn btn-outline-secondary rounded-pill mb-2">
                    More
                  </button>
                </div>
              </Card.Body>
            </Card>
  
            <Card>
              <Card.Body>
  
                <h5 className="profile-body-section-header" >About</h5>
                <p>
                  {profileData.bio}
                </p>
  
              </Card.Body>
            </Card>
  
            <Card>
              <Card.Body>
                <h5>Activity</h5>
                <div>
                  <span className="activity-followers">1,844 followers</span>
                </div>
                <Row>
                  <Col>
  									<UserPostsProfile />
                  </Col>
                </Row>
                <Button
                  href="#"
                  variant="light"
                  size="lg"
                  style={{ width: "100%" }}
                >
                  <p>See all activity</p>
                </Button>
              </Card.Body>
            </Card>
            
            <Card>
              <ExperienceSection userID={profileData._id} editCapability={false}/>
            </Card>
            
          </Col>
          
          <Col sm={4}>
            <Sidebar />
          </Col>
          
        </Row>
        <Row className="justify-content-center"></Row>
      </Container>
  	)
	}
}

export default ProfileSection
