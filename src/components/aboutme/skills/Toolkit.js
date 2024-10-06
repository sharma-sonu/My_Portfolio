import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import vs from "../../../images/Vs.png";
import pc from "../../../images/pc.png";
import git from "../../../images/git.png";
import github from "../../../images/github.png";
import cb from "../../../images/cb.png";
import pg from "../../../images/pg.png";
import pm from "../../../images/pm.png";
import chrome from "../../../images/chorme.svg";
import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web"; // Ensure correct import

export default function Toolkit() {
  // Animation for the title
  const titleSpring = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });
  
  // Animation for the icons
  const iconSpring = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { duration: 1000 },
  });

  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary me-3" to="/personalskill">
          Personal Skill
        </Link>
        <Link className="btn btn-primary" to="/toolkit">
          Toolkit
        </Link>
      </div>
      <animated.h1 style={titleSpring} className="mt-4">Tools I Use</animated.h1>
      <Container className="mt-4">
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {[vs, pc, git, github, cb, pg, pm, chrome].map((imageSrc, index) => (
            <Col xs={4} md={2} className="tech-icons" key={index}>
              <animated.img
                src={imageSrc}
                alt=""
                style={{
                  width: "85%",
                  height: "85%",
                  filter: index === 3 ? "grayscale(1) invert(1)" : "none", // Apply filter to GitHub icon
                  ...iconSpring // Apply the icon animation
                }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
