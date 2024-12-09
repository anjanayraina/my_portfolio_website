import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <a className = "purple">Website Inspired From: {" "}</a>
          <a href = "https://soumyajit.vercel.app/">Link</a>
        </Col>
      
      </Row>
    </Container>
  );
}

export default Footer;
