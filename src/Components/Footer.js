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
          <a className = "purple">Design Inspired from : {" "}</a>
          <a href = "https://www.figma.com/community/file/1140961109650222027?preview=fullscreen" >Link 1</a>
          <a  href ="https://www.figma.com/community/file/999778948176594363">Link 2</a>
        </Col>
      
      </Row>
    </Container>
  );
}

export default Footer;
