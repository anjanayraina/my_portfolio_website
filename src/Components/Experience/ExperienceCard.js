import React from 'react'
import Card from "react-bootstrap/Card";
import { MdOutlineControlPoint } from "react-icons/md";
function ExperienceCard() {
  return (
    <>
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            So my first work started with <strong className='purple'>Android Development</strong>. Some of the work that i did is : 
          </p> 
          <h1 className='purple-header'> 1) Kidz.fit</h1>
          <ul>
            <li className="about-activity">
              <MdOutlineControlPoint /> Designed the front end for the Kidz.fit App
            </li>
            <li className="about-activity">
              <MdOutlineControlPoint /> Helped in creating the backed for the app in boto3
            </li>
            <li className="about-activity">
              <MdOutlineControlPoint /> Also did some user testing of the app
            </li>
            <li className="about-activity">
              <MdOutlineControlPoint /> <strong className='purple'>Technologies and Tools:</strong> Android Studio, AWS .
            </li>
          </ul>
          <h1 className='purple-header'> 2) Communev</h1>
          <ul>
            <li className="about-activity">
              <MdOutlineControlPoint /> Helped modernize the UI/UX of their App
            </li>
            <li className="about-activity">
              <MdOutlineControlPoint /> Fixing Bugs
            </li>
            <li className="about-activity">
              <MdOutlineControlPoint /> <strong className='purple'>Technologies and Tools:</strong> React Native , JavaScript .
            </li>
            
          </ul>


        </blockquote>
      </Card.Body>
      
    </Card>
    <Card className="quote-card-view">      
      <Card.Body className="blockquote mb-0">
        <blockquote>
        <p style={{ textAlign: "justify" }}>Tladbouasbfiuasbfjb</p>
        </blockquote>
      </Card.Body>
      </Card>
    </>
  );
}

export default ExperienceCard