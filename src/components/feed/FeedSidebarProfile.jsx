import React from "react";
import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import cover from "../../assets/cover.jpg";
import { withRouter } from "react-router-dom";

function FeedSidebarProfile(props) {
  const [profileData, setProfileData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/me",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY1M2IyNTBlZmU3ODAwMTU1YzM0YTAiLCJpYXQiOjE2MjY2ODQxOTcsImV4cCI6MTYyNzg5Mzc5N30.3ZXfLM8Xio4MkKGlFiTA42FVjeiUinuO7VDCroKKFMw",
            },
          }
        );
        if (response.ok) {
          let resp = await response.json();
          setProfileData(resp);
          console.log("fetch", resp);
        } else {
        }
      } catch (error) {}
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card className="mt-2">
      <div
        style={{ backgroundImage: `url(${cover})` }}
        className="siderbarcover"
      ></div>
      <div className="d-flex justify-content-center">
        <img
          src={profileData.image}
          alt="#"
          className="rounded-circle align-self-center sidebarProfilePhoto"
        />
      </div>
      <Card.Body className="leftSidebarCardBody">
        <h3
          style={{ fontSize: "16px" }}
          className="text-center mt-3"
          onClick={() => {
            props.history.push("/me");
            window.location.reload(true);
          }}
        >
          {profileData.name} {profileData.surname}
        </h3>
        <p className="text-center font-weight-light">{profileData.title}</p>
        <hr></hr>
        <a href="#" className="text-muted">
          <div className="d-flex justify-content-between">
            <div className="text-align-left">Who viewed your profile</div>
            <div className="text-align-end">55</div>
          </div>
        </a>
        <a href="#" className="text-muted">
          <div className="d-flex justify-content-between">
            <div className="text-align-left">Views of your post</div>
            <div className="text-align-end">180</div>
          </div>
        </a>
        <hr></hr>
        <a href="" className="text-muted">
          <p>Access exclusive tools & insights</p>
          <span className="d-flex align-items-center">
            <li-icon
              aria-hidden="true"
              type="premium-app-icon"
              class="feed-identity-module__premium-icon mr1 flex-shrink-zero"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path
                  d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                  fill="#f8c77e"
                ></path>
                <path
                  d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                  fill="#e7a33e"
                ></path>
              </svg>
            </li-icon>
            <span>Try Premium for free</span>
          </span>
        </a>
        <hr></hr>
        <span className="font-weight-bold v-align-middle block">
          <li-icon
            aria-hidden="true"
            type="ribbon-filled-icon"
            className="v-align-middle mr-1"
            size="small"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
            </svg>
          </li-icon>
          My items
        </span>
      </Card.Body>
    </Card>
  );
}

export default withRouter(FeedSidebarProfile);
