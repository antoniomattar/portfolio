import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Antonio Mattar </span>
            from <span className="purple"> Koura, Lebanon.</span>
            <br />I am a junior student pursuing in Maths and Computer Science in Aix-Marseille University France.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Taking drone aerial shots
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing strategy games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive for greatness!"{" "}
          </p>
          <footer className="blockquote-footer">Antonio</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
