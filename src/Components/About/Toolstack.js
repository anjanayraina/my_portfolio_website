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
} from "react-icons/si";

import {
  FaEthereum,

} from "react-icons/fa";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
        <h2>Android Studio</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h2>VS Code</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaEthereum />
        <h2>Ethereum Blockchain</h2>
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
