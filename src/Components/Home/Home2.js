import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myImage.png";
import Tilt from "react-parallax-tilt";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

import{
  SiWhatsapp,
  SiLeetcode
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

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
              I started Programming About 2 years ago when my parents enrolled me in a Local Coding Tutions and i fell in love with
              with it since.....
              <br />
              <br />I am proficient in 
              <i>
                <b className="purple"> Java, Solidity and Python. </b>
              </i>
              <br />
              <br />
              The main Technology Stacks that i am intrested in are :
              <i>
               
                <b className="purple">
               {"  "} Blockchain Development,
                 Front-End Web Development and {" "} Native Android Development.
                </b>
              </i>
              <br />
              <br />
              <i>
  Apart from that i love problem solving as well , I have solved 800+ problems on various Platforms like <b className = "purple">Leetcode , GFG , CodeForces </b> etc...
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
                  href="https://leetcode.com/anjanayraina/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiLeetcode />
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
                  href="https://wa.me/6284247485?text="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiWhatsapp />
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
