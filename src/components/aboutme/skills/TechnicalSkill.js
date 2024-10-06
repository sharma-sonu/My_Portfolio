
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "@react-spring/web"; // Ensure correct import

export default function TechnicalSkill() {
  // Animation for the title
  const titleSpring = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

  // Animation for each skill
  const skillSpring = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 }, delay: 200 });

  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">Technical Skill</Link>
        <Link className="btn btn-primary me-3" to="/personalskill">Personal Skill</Link>
        <Link className="btn btn-primary" to="/toolkit">Toolkit</Link>
      </div>
      <animated.h1 style={titleSpring} className="mt-4">Technical Skills</animated.h1>
      <div className="mt-5">
        <Container>
          <Row className="g-5">
            {[ 
              { title: 'C', percentage: '50%', color: '#fe3e57', value: '50' },
              { title: 'Java', percentage: '75%', color: '#54faae', value: '75' },
              { title: 'HTML', percentage: '90%', color: '#39c4ff', value: '90' },
              { title: 'CSS', percentage: '75%', color: '#f1f965', value: '75' },
              { title: 'Javascript', percentage: '75%', color: '#ff0173', value: '75' },
              { title: 'React', percentage: '70%', color: '#ff8c2f', value: '70' },
              { title: 'Node js', percentage: '50%', color: '#41f2ff', value: '50' },
              { title: 'MySql', percentage: '75%', color: '#fe3e57', value: '75' },
              { title: 'Wordpress', percentage: '75%', color: '#54faae', value: '75' },
            ].map((skill, index) => (
              <Col md={4} key={index}>
                <animated.h1 style={{ ...skillSpring, fontSize: '100px', color: skill.color, fontWeight: 700 }}>
                  {skill.percentage}
                </animated.h1>
                <div style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                  <div className="progress">
                    <div
                      role="progressbar"
                      aria-valuenow={skill.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: skill.percentage, backgroundColor: skill.color }}
                    ></div>
                  </div>
                  <h2 style={{ color: skill.color, fontSize: '25px', marginTop: '13px', fontWeight: 700 }}>
                    {skill.title}
                  </h2>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
