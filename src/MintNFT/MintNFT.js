import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Particle from "../Components/Particle";
import nft from '../Assets/nft.jpg';

import MintNFTCard from './MintNFTCard.js'
function doNoting(){


}
function MintNFT() {

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
     
              </Col>
              <Col
                md={5}
                style={{ paddingTop: "120px", paddingBottom: "50px" }}
                className="about-img"
              >
                <img src={nft} alt="journey image" className="img-fluid" />
              </Col>
            </Row>

    

    
    
          </Container>
        </Container>
      );
}

export default MintNFT