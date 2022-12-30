import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function MyJourneyCard() {
    return (
        <Card className="quote-card-view">
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }}>
              I was born in <strong className="purple">Jammu </strong> in 2001. I was in DPS Jammu till the 10th class. After that, I went to a local State Board school cause of the misconception that JK Board is easier than CBSE (it's not, by the way). After that, I got admitted to IIIT Delhi. This was the first time I got introduced to the world of computers. I wouldn't say I liked coding at first. It was very repetitive, had to cram up the syntax, not to mention the red-colored bugs that every programmer hates. But anyways, I stuck through it to the point that I really started loving what I did. </p>
              <p>After learning some programming, every programmer is tempted to create a real-world app they can look upon in awe after making it. So, with that in mind, I started with Android Development. I liked it initially, but after dedicating some time to it, I realized that I needed something other than Android Development. Nothing wrong with the Framework. After some work on it, it stopped being challenging enough for me to keep me occupied xD. </p>
<p>After all that, I kept dabbling in some more tech stacks. I did some work in Machine Learning, Backend Dev in Java, and Front End Web Dev. But in the end, I learned Blockchain. I really liked Blockchain Dev and have stuck to it till now. Apart from dev, I also started learning DSA, and i regularly solve problems on Leetcode even to this day.</p>
    
            </blockquote>
          </Card.Body>
        </Card>
      );
}

export default MyJourneyCard