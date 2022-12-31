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
          <h5>Jan 2021 - May 2021</h5>
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
          <h5>May 2021 - June 2021</h5>
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
        <p style={{ textAlign: "justify" }}>After that i dabbled in <strong className='purple'>Machine Learning and Deep Learning</strong> a little bit as well as some more tech stacks. After all that i switched to <strong className ="purple">Blockckchain Development</strong> . Some of my work in Blockchain is Below : </p>
        <h1 className='purple-header'> 1) Chatbuck</h1>
        <h5>Jan 2022 - Aug 2022</h5>
          <ul>
 
            <li className="about-activity">
              <MdOutlineControlPoint /> Designed the Blockchain backend for the Messenger Platform
            </li>
            <li className="about-activity">
              <MdOutlineControlPoint /> Worked on the Front End of the Android App
            </li>
            <li className="about-activity">
              <MdOutlineControlPoint />  Created a Crypto Token “Chatbuck” in Solidity
            </li>
            <li className="about-activity">
              <MdOutlineControlPoint /> <strong className='purple'>Technologies and Tools:</strong> Ethereum , Solidity, Remix IDE ,JavaScript , Android Studio.
            </li>
          </ul>
          <h1 className='purple-header'> 2) DLT Labs</h1>
          <h5>Jan 2023 - Present</h5>
          <ul>
            <li className="about-activity">
              <MdOutlineControlPoint /> Working on creating a Blockchain for TRAI for regulation of network providers . 
            </li>

            <li className="about-activity">
              <MdOutlineControlPoint /> <strong className='purple'>Technologies and Tools:</strong> Blockchain .
            </li>
            
          </ul>
        </blockquote>
      </Card.Body>
      </Card>
      <Card className="quote-card-view">      
      <Card.Body className="blockquote mb-0">
        <blockquote>
       <p style={{ textAlign: "justify" }}>Right now i am working in <strong className='purple'>Blockchain security and Auditing</strong>.
         </p>
        </blockquote>
      </Card.Body>
      </Card>
    </>
  );
}

export default ExperienceCard