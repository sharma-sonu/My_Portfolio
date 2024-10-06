import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated } from '@react-spring/web'; // Ensure correct import for react-spring

export default function PersonalSkill() {
  const titleSpring = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });
  const skillSpring = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 }, delay: 200 });

  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">Technical Skill</Link>
        <Link className="btn btn-primary me-3" to="/personalskill">Personal Skill</Link>
        <Link className="btn btn-primary" to="/toolkit">Toolkit</Link>
      </div>
      <animated.h1 style={titleSpring} className="mt-4">Personal Skills</animated.h1>
      <div className="mt-4">
        <Container>
          <Row className='g-5'>
            {[
              { title: 'Communication Skills', percentage: '75%', color: '#fe3e57' },
              { title: 'Project Management', percentage: '85%', color: '#54faae' },
              { title: 'Problem Solving', percentage: '81%', color: '#ff8c2f' },
              { title: 'Analytical Abilities', percentage: '77%', color: '#f1f965' },
              { title: 'Organization', percentage: '87%', color: '#ff0173' },
              { title: 'Creativity', percentage: '79%', color: '#39c4ff' },
            ].map((skill, index) => (
              <Col md={4} key={index}>
                <animated.h1 style={{ ...skillSpring, fontSize: '100px', color: skill.color, fontWeight: 700 }}>
                  {skill.percentage}
                </animated.h1>
                <div style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                  <div className="progress">
                    <div
                      role="progressbar"
                      aria-valuenow={parseInt(skill.percentage)}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: skill.percentage, backgroundColor: skill.color }}
                    />
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
