import React from 'react'
import {Card} from 'react-bootstrap'
import marcelo from '../../assets/Marcelo-pic.png'
import strive from '../../assets/strivelogo.jpg'

export default function SidebarAd(props) {
  
	return (
            <Card className="mt-2">
            <Card.Body className="leftSidebarCardBody">
            <p className="text-center text-muted mt-2 mb-1">Get the latest jobs and industry news</p>
            <div className="d-flex justify-content-center">
                  <img src={marcelo} className="rounded-circle mr-1" style={{height:"80px", width:"80px"}}></img>
                  <img src={strive} className="rounded-circle" style={{height:"80px", width:"80px"}}></img>
            </div>
            <p className="text-center" style={{fontSize:"16px"}}>Marcelo Mantilla, explore relevant opportunities with <span className="font-weight-bold">QD Sverige AB</span></p>
            </Card.Body>
            </Card>
  )
}
