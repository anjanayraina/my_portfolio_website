import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/deeplearning.jpg";
import emotion from "../../Assets/Projects/chatbuck.jpg";
import editor from "../../Assets/Projects/metaverse.jpg";
import chatify from "../../Assets/Projects/chatify2.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.jpg";
import PoCredit from '../../Assets/PoCredit.webp';
import FethrX from '../../Assets/FetherX.jpeg';
import PerpetualVault from '../../Assets/PerpetualVault.png';
import SolidityDevelopment from '../../Assets/solidity-development.png';
import IPMarletplace from '../../Assets/IP Marketplace.png';
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
              imgPath={PerpetualVault}

              title="Perpetual Vault"
              description="A protocol to create Perpetual Positions implementing ERC4626-compliant smart contracts for liquidity, scaling positions, and collateral management
              "
              ghLink="https://github.com/anjanayraina/PerpetualVault"
             
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FethrX}

              title="FethrX"
              description="A project built in Devacation’23, A decentralised journaling platform with the aim of privacy and freedom of expression in journalism.
              "
              ghLink="https://github.com/0xFethr"
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IPMarletplace}

              title="IP Marketplace"
              description="•	A platform where you can register, contest and lend your Intellectual Property Patents. Designed and
              implemented smart contracts to enable users to register, contest, and lend their intellectual property securely
              .
              "
              ghLink="https://github.com/0xFethr"
             
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PoCredit}

              title="Proof of Credit Blockchain"
              description="A Created a Blockchain from scratch 
              using a consensus algorithm designed 
              by me (PoCredit ). The working of the 
              algorithm is given in the ReadMe on 
              github "
              ghLink="https://github.com/anjanayraina/ProofOfCredit"
             
            />
          </Col>
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
              imgPath={SolidityDevelopment}
              description ="Created a Repo for storing all the tips and important solidity concepts and syntax. This also has some security tips as well as gas saving tips"

              title ="Solidity Security and Gas Savings"
             ghLink="https://github.com/anjanayraina/Soldiity-All-Repo"
              
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
              imgPath={emotion}
              
              title="ChatBuck Token"
              description="Created a ERC20 token in Solidity using OpenZepplin"
              ghLink="https://github.com/abhinav-8/Chatbuck_ERC20_Token"
             
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


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
