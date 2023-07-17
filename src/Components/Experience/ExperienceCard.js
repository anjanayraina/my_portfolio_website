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

          <h1 className='purple-header'> 1) Natwest Group</h1>
          <h5>May 2023 - July 2023</h5>
          <ul>
            <li className="about-activity">
              <MdOutlineControlPoint /> Utilize Oracle Fusion’s functionalities to develop visually appealing and user-friendly reports that effectively convey complexinformation in a clear and concise manner. 
            </li>
            <br/ >
            <li className="about-activity">
              <MdOutlineControlPoint /> 
              Recognizing the importance of verifying the accuracy and reliability of reports, I delved into the process of developing comprehensive unit tests. Devised test scenarios to validate their functionality and validated the scenarios with test cases using samople inputs               </li>
           <br />
            <li className="about-activity">
              <MdOutlineControlPoint />  Gather and analyze data from various sources to generate comprehensive reports, presenting key findings and recommen-dations to support strategic decision-making processes
 
            </li>
            <br />

            <li className="about-activity">
              <MdOutlineControlPoint /> <strong className='purple'>Technologies and Tools:</strong> Blockchain , Solidity , Remix ide .
            </li>
          </ul>

          <h1 className='purple-header'> 2) DLT Labs</h1>
          <h5>Jan 2023 - July 2023</h5>
          <ul>
            <li className="about-activity">
              <MdOutlineControlPoint /> Working on creating a Blockchain for TRAI for regulation of network providers . 
            </li>

            <li className="about-activity">
              <MdOutlineControlPoint /> <strong className='purple'>Technologies and Tools:</strong> Blockchain , Solidity , Remix ide .
            </li>
          </ul>

          <h1 className='purple-header'> 3) Chatbuck</h1>
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

          <h1 className='purple-header'> 4) Communev</h1>
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

          <h1 className='purple-header'> 5) Kidz.fit</h1>
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
       

        </blockquote>
      </Card.Body>
      
    </Card>
    <Card className="quote-card-view">      

      </Card>
      <Card className="quote-card-view">      
      <Card.Body className="blockquote mb-0">
        <blockquote>
       <p style={{ textAlign: "justify" }}>Right now i am working in <strong className='purple'>Blockchain security and Auditing</strong>.
         I regualrly participate in the bug bounties on <strong className='purple'>Code4rena </strong>  and am always learning more about gas saving and secuirty of smart contracts in solidity</p>
        <br/>
        <br/>
        <p><strong>Apart from that i also do freelancing on the side. You can hire me on Upwork . The link is given in end of Home section</strong></p></blockquote>
      </Card.Body>
      </Card>
    </>
  );
}

export default ExperienceCard