import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import Experience from './Experience'

export default function ExperienceSection (props) {
  const [experiences, setExperiences] = useState(null)
  
  console.log(experiences)
  
  useEffect(() => {
    console.log("useEffect working!")
    fetchExperiences()
  }, [])
  
  
  
	
	return (
		<div>
			<Card.Body>
        <h5 className="profile-body-section-header my-2 mb-4">
          Experience
        </h5>
        {}
        <Experience />
        <Experience />
        <Experience />
        
      </Card.Body>
		</div>
	)
  
  
  async function fetchExperiences() {
    try {
      console.log("Fetching?")
      const fetchExp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/:userId/experiences`, 
        headers: {
          "Content-Type":"application/json",
          "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY1M2IyNTBlZmU3ODAwMTU1YzM0YTAiLCJpYXQiOjE2MjY2ODQxOTcsImV4cCI6MTYyNzg5Mzc5N30.3ZXfLM8Xio4MkKGlFiTA42FVjeiUinuO7VDCroKKFMw"
        }
      )
      const data = await fetchExp.json()
      setExperiences( data )
      console.log("Experiences:", experiences)
      
    } catch (err) {
      console.log(err)
    }
  }
  
}
{/* SEPARATE */}