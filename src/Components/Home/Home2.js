import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myImage.png"
import Tilt from "react-parallax-tilt";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

import{
  SiWhatsapp,
  SiLeetcode,
  SiUpwork,
  SiGmail
} from "react-icons/si";
import { FaLinkedinIn , FaMediumM } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              My <span className = "purple">Introduction</span> !!
            </h1>
            <p className="home-about-body">
            Hey there Stranger! I am <span className = "purple">Anjanay</span> or you might know me by <span className = "purple">Stryder</span>
              <br />
              <br />I am proficient in 
              <i>
                <b className="purple"> Solidity, Java and Python. </b>
              </i>
              <br />
              <br />
              The main Fields and Technology Stacks that i am intrested in are :
              <i>
               
                <b className="purple">{"  "} Smart Contract Auditing/Development, 
               {"  "} Software Engineering,
                 Front-End Web Development and {" "} Zero Knowledge Proofs.
                </b>
              </i>
              <br />
              <br />
              <i>
  Apart from that i love problem solving as well , I have solved <i className = "purple">800+ problems</i> on various Platforms like <b className = "purple">Leetcode , GFG , CodeForces </b> etc...
             </i>
          
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/anjanayraina"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anjanay-raina-289716192/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
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
              <li className="social-icons">
                <a
                 
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  onClick={() => window.location = 'mailto:anjanayraina326@gmail.com'}
                >
                  <SiGmail />
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
