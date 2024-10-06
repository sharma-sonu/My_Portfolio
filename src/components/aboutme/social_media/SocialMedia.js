

import React from "react";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "@react-spring/web"; // Ensure correct import

export default function SocialMedia() {
  // Animation for the title
  const titleSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  // Animation for the icons
  const iconSpring = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { duration: 1000 },
  });

  return (
    <div className="mt-4">
      <animated.h1 style={titleSpring}>Connect with me</animated.h1>
      <Container className="mt-5">
        <Row className="g-5">
          {/* GitHub */}
          <Col md={3}>
            <a
              href="#" // https://github.com/sharma-sonu
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <animated.div style={iconSpring}>
                <AiFillGithub />
              </animated.div>
            </a>
          </Col>
          {/* LinkedIn */}
          <Col md={3}>
            <a
              href="https://www.linkedin.com/in/sonu-sharma-491672205/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <animated.div style={iconSpring}>
                <AiFillLinkedin />
              </animated.div>
            </a>
          </Col>
          {/* Instagram */}
          <Col md={3}>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <animated.div style={iconSpring}>
                <AiOutlineInstagram />
              </animated.div>
            </a>
          </Col>
          {/* Facebook */}
          <Col md={3}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <animated.div style={iconSpring}>
                <AiFillFacebook />
              </animated.div>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
