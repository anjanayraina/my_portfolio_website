import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAndroid,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiTensorflow,
  SiCloudfoundry,
  SiHyperledger,
  SiGooglecloud ,
  SiBlockchaindotcom ,
} from "react-icons/si";


import {
  FaHardHat,
  FaJava,
  FaReact,
  FaGithubSquare,
}
from "react-icons/fa";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
        <h2>Solidity</h2>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCloudfoundry />
        <h2>Foundry</h2>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaHardHat />
        <h2>Hardhat</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHyperledger />
        <h2>HyperLedger Fabric</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlockchaindotcom />
        <h2>Move</h2>
      </Col>
       


      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
        <h2 >Java</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid />
        <h2>Android</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h2>Javascript</h2>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h2>React</h2>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <h2>TensorFlow</h2>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h2>Firebase</h2>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaGithubSquare />
        <h2>Github</h2>
      </Col>
    </Row>
  );
}

export default Techstack;
