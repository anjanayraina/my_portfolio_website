import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImg from "../../Assets/myImage.png";
import Tilt from "react-parallax-tilt";

import {
  AiFillGithub,
  AiOutlineTwitter, // Imported Twitter (X) icon
  AiFillInstagram,
} from "react-icons/ai";

import {
  SiWhatsapp,
  SiLeetcode,
  SiUpwork,
} from "react-icons/si";
import { FaLinkedinIn, FaMediumM } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              My <span className="purple">Introduction</span>
            </h1>
            <p className="home-about-body">
              Hello! I’m <span className="purple">Anjanay</span> (also known as <span className="purple">Stryder</span>), a dedicated 
              <span className="purple"> Smart Contract Auditor</span> and 
              <span className="purple"> Blockchain Developer</span>.
              <br />
              <br />I am proficient in:
              <i>
                <b className="purple"> Solidity, Java, and Python. </b>
              </i>
              <br />
              <br />
              My core areas of expertise include:
              <i>
                <b className="purple">
                  {" "}
                  Smart Contract Auditing & Development, Software Engineering for Scalable Web3 Solutions, Front-End Web Development, and Zero-Knowledge Proofs.
                </b>
              </i>
              <br />
              <br />
              I am also passionate about problem-solving, having solved 
              <i className="purple"> 800+ coding challenges</i> across various platforms, including 
              <b className="purple"> Leetcode, GFG, and CodeForces</b>. These experiences have honed my analytical skills and deepened my ability to write secure and efficient code.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        {/* Call to Action Section */}
        <Row>
          <Col md={12} className="home-about-cta text-center">
            <h2 style={{ fontSize: "2.2em", marginTop: "40px" }}>
              <span className="purple">Looking for a Blockchain Expert?</span>
            </h2>
            <p style={{ fontSize: "1.2em", marginTop: "20px", color: "white" }}>
              I am available for <span className="purple">freelance projects</span> as a <span className="purple">Smart Contract Auditor</span> and <span className="purple">Blockchain Developer</span>. Let’s work together to build secure, efficient, and innovative Web3 solutions.
            </p>
            <Button
              href="mailto:anjanayraina326@gmail.com"
              target="_blank"
              className="cta-button"
              style={{
                marginTop: "20px",
                fontSize: "1.2em",
                padding: "10px 20px",
                backgroundColor: "#6C63FF",
                borderColor: "#6C63FF",
                color: "#fff",
                borderRadius: "5px",
              }}
            >
              Hire Me
            </Button>
          </Col>
        </Row>

        {/* Social Links */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me:
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/anjanayraina"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anjanay-raina-289716192/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://medium.com/@anjanayraina326"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaMediumM />
                </a>
              </li>

              {/* Updated X (formerly Twitter) Icon */}
              <li className="social-icons">
                <a
                  href="https://x.com/RainaAnjan69745"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
