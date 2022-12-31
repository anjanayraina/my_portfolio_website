import React from 'react'
import Card from "react-bootstrap/Card";
function ExperienceCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            So my first work started with <strong className='purple'>Android Development</strong>. Some of the work that i did is : 
          </p>
          <h1>Kidz.fit</h1>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard