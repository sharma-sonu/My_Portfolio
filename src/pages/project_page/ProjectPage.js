import React from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "@react-spring/web"; // Updated import
import nyc from "../../images/nyc.png";
import ci from "../../images/onboarding.jpeg";
import eco from "../../images/eco.png";
import pp from "../../images/nyc.png";
import { FaCode } from "react-icons/fa";

export default function ProjectPage() {
  // Animation properties
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });
  const slideIn = useSpring({ transform: 'translateX(0)', from: { transform: 'translateX(-100%)' } });

  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <animated.div
            style={{
              ...fadeIn,
              display: "flex",
              justifyContent: "center",
              width: "100%",
              backgroundColor: "#fbd9ad",
            }}
          >
            <h1 style={{ color: "rgb(134, 61, 176)" }}>PROJECTS</h1>
          </animated.div>

          <div>
            <Container fluid className="certificate-section" id="about">
              <Container>
                <Row>
                  <Col md={12} className="mt-5">
                    <Row className="g-5">
                      {/* Project Data Array */}
                      {[
                        {
                          title: "Heart Beat Monitoring System Using Arduino",
                          imgSrc: nyc,
                          description: "A heartbeat monitoring system using Arduino detects pulse signals via a sensor, processes them, and displays heart rate in beats per minute (BPM) on an LCD or serial monitor.",
                          languages: "C, Arduino, Touch Sensor",
                        },
                        {
                          title: "Calculator",
                          imgSrc: ci,
                          description: "Developed a responsive calculator that performs mathematical operations like addition, subtraction, multiplication, and division, offering quick and efficient calculations with a user-friendly interface.",
                          languages: "HTML, CSS, JavaScript",
                        },
                        {
                          title: "To-Do-List",
                          imgSrc: eco,
                          description: "I developed a to-do list application where users can enter, organize, and track their daily tasks, helping them manage their schedules efficiently and stay productive throughout the day.",
                          languages: "HTML, CSS, React, JavaScript",
                        },
                        {
                          title: "Personal Portfolio",
                          imgSrc: pp,
                          description: "Welcome to my personal portfolio. Explore my work, skills, and achievements in a concise and visually appealing format. Get a glimpse of my expertise and creativity.",
                          languages: "HTML, CSS, SCSS, React, JavaScript",
                        }
                      ].map((project, index) => (
                        <Col md={3} className="col-sm-12 col-md-4" key={index}>
                          <animated.div style={slideIn}>
                            <div className="singleProject" style={{
                              backgroundColor: "rgb(142 70 186 / 31%)",
                              border: "1px solid",
                            }}>
                              <div className="projectContent">
                                <h5 style={{ color: "#fbd9ad" }}>{project.title}</h5>
                                <img src={project.imgSrc} alt={project.title} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code-${index}`} // Unique ID for each project
                                  >
                                    <FaCode
                                      id={`code-${index}`} // Unique ID for accessibility
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p className="project--desc" style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}>
                                  {project.description}
                                </p>
                              </h6>
                              <div className="project--lang" style={{
                                background: "#fbd9ad",
                                color: "#b061df",
                                fontWeight: 600,
                              }}>
                                {project.languages}
                              </div>
                            </div>
                          </animated.div>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
        </Container>
      </Container>
    </section>
  );
}
