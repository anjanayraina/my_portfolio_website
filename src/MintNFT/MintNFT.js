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
                <h1 style={{ fontSize: "4rem", paddingBottom: "20px" }}>
                  Mint my <strong className="purple">NFT</strong>
                </h1>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Button variant="outline-light">Mint</Button>{' '}
              </Col>
              <Col
                md={5}
                style={{ paddingTop: "120px", paddingBottom: "50px" }}
                className="about-img"
              >
                <img src={nft} alt="journey image" className="img-fluid" />
              </Col>
            </Row>

    
            <Particle />
          </Container>
        </Container>
      );
}

export default MintNFT