import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import coding_work from '../../Assets/coding_work.png';
import chill from '../../Assets/chill.jpg';
import ExperienceCard from './ExperienceCard';
function Experience() {
    return (
        <Container fluid className="about-section">
          <Particle />
          <Container>
            <Row style={{ justifyContent: "center", padding: "10px" }}>
              <Col
                md={7}
                style={{
                  justifyContent: "center",
                  paddingTop: "30px",
                  paddingBottom: "50px",
                }}
              >
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                   <h1 className="purple-header">About My Experience</h1>
                </h1>
                <ExperienceCard />
              </Col>
              <Col
                md={5}
                style={{ paddingTop: "120px", paddingBottom: "50px" }}
                className="about-img"
              >
                <img src={coding_work} alt="about" className="img-fluid2" />
                <img src={chill} alt="about" className="img-fluid2" />
              </Col>
            </Row> 

    
   
          </Container>
        </Container>
      );
}

export default Experience