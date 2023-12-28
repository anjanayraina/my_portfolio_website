import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiAndroidstudio,
  SiGooglecolab,
  SiWeb3Dotjs,
  SiRemix,
  SiBlockchaindotcom,
  SiGooglecloud,
} from "react-icons/si";

import {
  FaEthereum,
  FaDocker,

} from "react-icons/fa";

import {GiFoxHead, } 
from "react-icons/gi";
function Toolstack() {
  return (
    
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h2>VS Code</h2>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <GiFoxHead />
        <h2>Remix IDE</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaEthereum />
        <h2>Ethereum Blockchain</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlockchaindotcom />
        <h2>Aptos Blockchain</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
        <h2>Google Cloud NLP</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
        <h2>Docker</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
        <h2>Android Studio</h2>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
        <h2>Google Colab</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWeb3Dotjs />
        <h2>Web3.js</h2>
      </Col>
    </Row>
  );
}

export default Toolstack;
