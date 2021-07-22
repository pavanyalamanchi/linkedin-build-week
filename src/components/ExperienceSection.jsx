import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Experience from "./Experience";
import Loading from "./Loading";
import AddDataButton from "./AddDataButton";

export default function ExperienceSection(props) {
  const [experiences, setExperiences] = useState(null);
  console.log("Should be null?", experiences);

  useEffect(() => {
    fetchExperiences();
  }, []);

  if (experiences === null) {
    console.log("Loading!");
    return <Loading />;
  } else {
    return (
      <div>
        <Card.Body>
          <div className="profile-section-header-container">
            <h5 className="profile-body-section-title my-2">Experience</h5>

            <AddDataButton />
          </div>

          {experiences.map((exp) => (
            <Experience experienceData={exp} />
          ))}
        </Card.Body>
      </div>
    );
  }

  async function fetchExperiences() {
    const userId = "60f53b250efe7800155c34a0";
    try {
      const fetchExp = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY1M2IyNTBlZmU3ODAwMTU1YzM0YTAiLCJpYXQiOjE2MjY2ODQxOTcsImV4cCI6MTYyNzg5Mzc5N30.3ZXfLM8Xio4MkKGlFiTA42FVjeiUinuO7VDCroKKFMw",
          },
        }
      );
      const data = await fetchExp.json();
      setExperiences(data);
    } catch (err) {
      console.log(err);
    }
  }
}
