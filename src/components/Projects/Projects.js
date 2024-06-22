import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import f1 from "../../Assets/Projects/f1.png";
import LBL from "../../Assets/Projects/LBL.png";
import UICL from "../../Assets/Projects/UICL.png";
import nyeCountdown from "../../Assets/Projects/nye-countdown.png";
import bf from "../../Assets/Projects/bf.png";
import globalproducts from "../../Assets/Projects/global-products.png";
import ig from "../../Assets/Projects/ig.png";

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
              imgPath={ig}
              isBlog={false}
              title="Graphical User Interface Library"
              description="GUI written in C."
              ghLink="https://github.com/antoniomattar/graphical-user-interface-C"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bf}
              isBlog={false}
              title="Brainfuck Interpreter"
              description="Brainfuck interpreter written in C."
              ghLink="https://github.com/antoniomattar/brainfuck-interpreter-in-c"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={globalproducts}
              isBlog={false}
              title="Global Products LB Website"
              description="Website for a company that sells german manufactured products in Lebanon, specialized in electronic shelf labeling and lettering."
              ghLink="https://github.com/antoniomattar/global-products-project"
              demoLink="https://globalproductslb.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LBL}
              isBlog={false}
              title="Lebanese Basketball Website"
              description="Find everything related to the LBL (Standings, games, stats)."
              ghLink="https://github.com/antoniomattar/leb-basketball-site-next"
              demoLink="https://leb-basketball-site-next.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={UICL}
              isBlog={false}
              title="UICL Nigeria Website"
              description="Construction Company Website. (Still not finished)"
              ghLink="https://github.com/antoniomattar/uicl-nigeria"
              demoLink="https://uicl-nigeria.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={f1}
              isBlog={false}
              title="F1 Streaming Website"
              description="Sports streaming website to watch F1 ."
              ghLink="https://github.com/antoniomattar/f1-web"
              demoLink="https://f1-web-amber.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nyeCountdown}
              isBlog={false}
              title="New year countdown Website"
              description="Countdown to the new year 2024 with fireworks and music."
              ghLink="https://github.com/antoniomattar/nye-countdown-2023"
              demoLink="https://nye-countdown-2023.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
