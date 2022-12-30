import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import MyJourneyCard from './MyJourneyCard.js';
import journey from '../../Assets/journey.webp';

function MyJourney() {
  
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
                  Know about <strong className="purple">My Journey!!</strong>
                </h1>
                <MyJourneyCard />
              </Col>
              <Col
                md={5}
                style={{ paddingTop: "120px", paddingBottom: "50px" }}
                className="about-img"
              >
                <img src={journey} alt="journey image" className="img-fluid1" />
              </Col>
            </Row>

    

    
    
          </Container>
        </Container>
      );
}

export default MyJourney