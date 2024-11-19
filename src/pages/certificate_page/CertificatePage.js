import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "@react-spring/web";
import ucsc from "../../images/networking_internship.jpg";
import ufm from "../../images/oasis.jpg";
import Cisco_networking from "../../images/Cisco_networking.jpg";
import nh from "../../images/Cisco_Javascript.jpg";
import Particle from "../../Particle";

export default function CertificatePage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <h1 style={{ color: "rgb(134 61 176)" }}>Certificates</h1>
          </div>
          <div>
            <Container fluid className="certificate-section" id="about">
              <Row>
                <Col md={12} className="mt-5">
                  <Row className="g-5">
                    {/* Certificate Card for Networking Internship */}
                    <Col md={4} className="col-sm-12">
                      <AnimatedCertificate image={ucsc} pdfLink="#" />
                    </Col>

                    {/* Certificate Card for Web Development */}
                    <Col md={4}>
                      <AnimatedCertificate image={ufm} pdfLink="#" />
                    </Col>

                    {/* Certificate Card for CCNA Networking */}
                    <Col md={4}>
                      <AnimatedCertificate image={Cisco_networking} pdfLink="#" />
                    </Col>

                    {/* Certificate Card for JavaScript Essentials */}
                    <Col md={4}>
                      <AnimatedCertificate image={nh} pdfLink="#" />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="blog--viewAll"></div>
        </Container>
      </Container>
    </section>
  );
}

// Animated Certificate Component
const AnimatedCertificate = ({ image, pdfLink }) => {
  const springProps = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div style={springProps}>
      <div className="cert-card">
        <a href={pdfLink} target="_blank" rel="noopener noreferrer">
          <div className="cert-header">
            <img
              className="logo_img"
              src={image}
              alt="Certificate"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </a>
      </div>
    </animated.div>
  );
};
