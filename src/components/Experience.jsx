import React from "react";
import faker from "faker";
import EditDataButton from "./EditDataButton";
import { Button } from "react-bootstrap";

export default function Experience(props) {
  console.log(props);

  const handleShow = () => {
    console.log("Handle show!");
  };

  return (
    <>
      <div href="" className="my-3 experience-fragment-container">
        <div className="experience-fragment-company-image">
          <img
            className="experience-fragment-image"
            src={faker.image.business()}
            alt=""
          />
        </div>

        <div className="px-3 experience-fragment-details">
          <div className="experience-fragment-header">
            <h6 className="fw-400 experience-fragment-title">
              {props.experienceData.role}
            </h6>
            <div className="experience-fragment-edit-container">
              <EditDataButton />
            </div>
          </div>

          <p className="experience-fragment-text">
            {props.experienceData.company}
          </p>
          <p className="experience-fragment-text text-secondary">
            {convertDateToString(
              props.experienceData.startDate,
              props.experienceData.endDate
            )}
          </p>
          <p className="experience-fragment-text text-secondary">
            {props.experienceData.area}
          </p>
          <p className="experience-fragment-description my-2 text-decoration-none">
            {props.experienceData.description}
          </p>
        </div>
      </div>
    </>
  );
}

function convertDateToString(start, end) {
  console.log(start);
  console.log(end);
  if (end === null) {
    return start + " - Present";
  } else {
    return start + " - " + end;
  }
}
