import React from 'react'
import faker from 'faker'

export default function Experience(props) {
	console.log(props)
  return (
		<a href="" className="my-3 experience-fragment-container">
			<div className="experience-fragment-company-image">
        <img className="experience-fragment-image" src={faker.image.business()} alt="" />
      </div>
      <div className="px-3 experience-fragment-details">
        <h6 className="fw-400 experience-fragment-title">
          {props.experienceData.role}
        </h6>
        <p className="experience-fragment-text">
          {props.experienceData.company}
        </p>
        <p className="experience-fragment-text text-secondary">
          {convertDateToString(props.experienceData.startDate, props.experienceData.endDate)} 
        </p>
        <p className="experience-fragment-text text-secondary">
          {props.experienceData.area}
        </p>
        <p className="experience-fragment-description my-2 text-decoration-none">
          {props.experienceData.description}
        </p>
      </div>
		</a>
  )
}

function convertDateToString (start, end) {
  console.log(start)
  console.log(end)
  if (end === null) {
    return (start + " - Present")
  } else {
    return (start + " - " + end)
  }
}