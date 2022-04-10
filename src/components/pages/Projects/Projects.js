import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../MainLayout/Particles/Particles";
import Antidote from "../../../resources/antidoe.png";
import Tripwerkz from "../../../resources/Tripwerkz-Logo.jpg";
import ChillPe from "../../../resources/chillpe.webp";
import GoApp from "../../../resources/GoApp.jpg";
import PactPharma from "../../../resources/pact-oharma.jpg";
import A1Cards from "../../../resources/a1card.jpg";
import "./Projects.css";

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
              imgPath={Antidote}
              isBlog={false}
              title="Antidote Health"
              description=""
              isSiteAvailable={true}
              link="https://www.antidotehealth.ai/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tripwerkz}
              isBlog={false}
              title="Tripwerkz"
              description=""
              isSiteAvailable={true}
              link="https://tripwerkz.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={A1Cards}
              isBlog={false}
              title="A1 Cards"
              isSiteAvailable={true}
              description=""
              link="https://a1card.io/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GoApp}
              isBlog={false}
              title="Go App"
              description=""
              isSiteAvailable={false}
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChillPe}
              isBlog={false}
              title="ChillPe"
              isSiteAvailable={false}
              description=""
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PactPharma}
              isBlog={false}
              title="Pact Pharma"
              isSiteAvailable={true}
              description=""
              link="https://pactpharma.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
