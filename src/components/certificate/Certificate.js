import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Graphics_Design from "../../images/circuit.jpg";
import CCNA_Certificate from "../../images/networking_internship.jpg";
// import cbta from "../../images/CBT&A.pdf";
import c from "../../images/c.jpg";
import skill from "../../images/C++.jpg";
import problem_solving from "../../images/oasis.jpg";
import python from "../../images/Essay_Writing.jpg";
import iq from "../../images/Cisco_1.jpg";
import computer from "../../images/cisco_2.jpg";
import Fade from "react-reveal/Fade";

export default function Certificate() {
  return (
    <div className="mt-5">
      <Container>
        {/* <Bounce left cascade> */}
        <Fade left cascade duration={1000} distance="20px">
          <Row className="g-5">
            <Col md={4}>
              <img
                src={python}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>

            <Col md={4}>
              <img
                src={problem_solving}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>

            <Col md={4}>
              <img
                src={Graphics_Design}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>

            <Col md={4}>
              <img
                src={CCNA_Certificate}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>

            <Col md={4}>
              <img src={c} alt="" style={{ width: "100%", height: "100%" }} />
            </Col>

            <Col md={4}>
              <img
                src={skill}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>

            <Col md={4}>
              <img src={iq} alt="" style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col md={4}>
              <img
                src={computer}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
          </Row>
          {/* </Bounce> */}
        </Fade>
      </Container>
    </div>
  );
}
