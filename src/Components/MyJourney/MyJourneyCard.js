import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function MyJourneyCard() {
    return (
        <Card className="quote-card-view">
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }}>
              I was born in Jammu in 2001. I was in DPS Jammu till the 10th class. After that, I went to a local State Board school cause of the misconception that JK Board is easier than CBSE (it's not, by the way). After that, i got admitted to IIIT Delhi. This was the first time I got introduced to the world of computers.
              </p>

    
    
            </blockquote>
          </Card.Body>
        </Card>
      );
}

export default MyJourneyCard