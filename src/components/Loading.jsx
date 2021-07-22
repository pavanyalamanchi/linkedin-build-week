import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <div className="loading-spinner-container">
      <Spinner animation="border" variant="primary" />;
    </div>
  )
}
