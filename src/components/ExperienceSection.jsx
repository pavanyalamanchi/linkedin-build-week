import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Experience from "./Experience";
import Loading from "./Loading";
import AddDataButton from "./AddDataButton";

export default function ExperienceSection(props) {
  const [experiences, setExperiences] = useState(null);
  
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
    const userId = props.user.id
    try {
      const fetchExp = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer ",
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
