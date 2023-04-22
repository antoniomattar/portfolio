import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import f1 from "../../Assets/Projects/f1.png";
import LBL from "../../Assets/Projects/LBL.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={f1}
              isBlog={false}
              title="F1 Streaming Website"
              description="Sports streaming website to watch F1 ."
              ghLink="https://github.com/antoniomattar/f1-web"
              demoLink="https://f1-web-amber.vercel.app/"
            />
            <ProjectCard
              imgPath={LBL}
              isBlog={false}
              title="Lebanese Basketball Website"
              description="Find everything related to the LBL (Standings, games, stats)."
              ghLink="https://github.com/antoniomattar/leb-basketball-site-next"
              demoLink="https://leb-basketball-site-next.vercel.app"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
