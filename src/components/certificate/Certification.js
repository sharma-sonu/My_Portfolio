import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "@react-spring/web"; // Ensure correct import
import info_java_certi from "../../images/JavaFondationCertification.jpg"; // Certification_1
import ufm from "../../images/DBMS_1.jpg"; // Certification_2
import ufn from "../../images/DBMS_2.jpg"; // Certification_3
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Certification() {
  // Animation for fading in the title and the certification cards
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="certificate-description d-flex justify-content-start">
              <animated.h1 style={fadeIn} className="aboutme-heading">
                Certification
              </animated.h1>
            </Col>
            <Col md={12} className="mt-3">
              <Row className="g-5">
                {[
                  {
                    img: info_java_certi,
                    link: "#",
                  },
                  {
                    img: ufm,
                    link: "#",
                  },
                  {
                    img: ufn,
                    link: "#",
                  },
                ].map((cert, index) => (
                  <Col md={4} key={index}>
                    <animated.div style={fadeIn}>
                      <div className="cert-card">
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          <div className="cert-header">
                            <img
                              className="logo_img"
                              src={cert.img}
                              alt="Certificate"
                              style={{ width: "100%", height: "auto" }}
                            />
                          </div>
                        </a>
                      </div>
                    </animated.div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          <div className="blog--viewAll">
            <Link to="/certificatepage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
