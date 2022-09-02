import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify2.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";


function Projects() {

  let projectArray  = [];
  return (
    
    <Container fluid className="project-section">
      <Particle />
     
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}

              title="Whatsapp Clone"
              description="Created A WhatsApp Clone in Android Studio using MySQL Database in the backend with JDBC Drivers for Server Side Scripting. It Supports most the whatsapp features such as deleting a message and creating groups "
              ghLink="https://github.com/anjanayraina/DBMS-Project"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              description ="Online Website created for Staybook Group of Hotels in React.js and Next.js . It supports Everything from booking a hotel to managing the bookings for the Hotel Side , static landing pages have also been created for the hotels."

              title ="Staybook Hotels Website"
             ghLink="https://github.com/anjanayraina/StayBookHotelsGithubLinks"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
             
              title="Metaverse Land Dapp"
              description="Created a fully functional Dapp using Ethereum Blockchain and 3.js, in this you can buy and sell virtual land in the metaverse.I have openzepplin in solidity to create the smart contract to mint the NFT token for the purchased land and connected the front end with smart contact using Web3.js"
              ghLink="https://github.com/anjanayraina/metaverse-land-dapp"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
          
              title="Sentiment Analysis Model"
              description="This is a deep learning model created in tensorflow using keras api that assignes a sentiement to a sentence that is inputted .The model is built using keras API and gives an accuracy of 95+ %"
              ghLink="https://github.com/anjanayraina/Sentinment-Analysis/blob/main/NewSentimentModel.ipynb"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              
              title="Snakes and Ladder"
              description="Snakes and Ladders Game Created using JavaFX Library. "
              ghLink="https://github.com/ashishkamathi/SankesAndLadder"
                 />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              
              title="ChatBuck Token"
              description="Created a ERC20 token in Solidity using OpenZepplin"
              ghLink="https://github.com/abhinav-8/Chatbuck_ERC20_Token"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
