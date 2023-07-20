import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Stranger!, I am <span className="purple">Anjanay Raina </span>
            from <span className="purple"> Delhi, India.</span>
            <br />I am currently in my 3rd year pursuing CS at IIIT Delhi
            <br />
            <br />
           Some of my Hobbies are :
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> I go to a nearby gym to learn Mixed Martial Arts 
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming ( mainly Stragety Games ie- AoE2 , League of legends, Chess)
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime and Reading Manga ( I am a Weeb xD)
            </li>
            <li className="about-activity">
              <ImPointRight /> Volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Crypto and Blockchain 
            </li>
          </ul>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
