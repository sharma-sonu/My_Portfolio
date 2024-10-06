// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Zoom from "react-reveal/Zoom";
// import { Fade } from "react-reveal";
// import nyc from "../../images/nyc.png";
// import ci from "../../images/onboarding.jpeg";
// import hd from "../../images/hd.jpeg";
// import pp from "../../images/sims.png";
// import { FaCode } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { HiArrowRight } from "react-icons/hi";

// export default function Projects() {
//   return (
//     <div>
//       <Container fluid className="certificate-section" id="about">
//         <Container>
//           <Row>
//             <Col
//               md={12}
//               className="certificate-description d-flex justify-content-start"
//             >
//               <Zoom left cascade>
//                 <h1 className="aboutme-heading">Projects</h1>
//               </Zoom>
//             </Col>
//             <Col md={3}>
//               <Fade bottom>
//                 <div
//                   key={1}
//                   className="singleProject"
//                   style={{
//                     backgroundColor: "rgb(142 70 186 / 31%)",
//                     border: "1px solid",
//                   }}
//                 >
//                   <div className="projectContent">
//                     <h5 id={"first"} style={{ color: "#fbd9ad" }}>
//                       Heart Beat Monitoring System using Arduino
//                     </h5>
//                     <img src={nyc} alt={nyc} />
//                     <div className="project--showcaseBtn">
//                       <a
//                         href={
//                           "#github code"
//                         }
//                         target="_blank"
//                         rel="noreferrer"
//                         className={"iconBtn"}
//                         aria-labelledby={`code`}
//                       >
//                         <FaCode
//                           id={`code`}
//                           className={"icon"}
//                           aria-label="Code"
//                         />
//                       </a>
//                     </div>
//                   </div>
//                   <h6>
//                     <p
//                       className="project--desc"
//                       style={{
//                         background: "#fbd9ad",
//                         color: "#b061df",
//                         fontWeight: 600,
//                       }}
//                     >
//                       A heartbeat monitoring system using Arduino 
//                       detects pulse signals via a sensor, processes
//                       them, and displays heart rate in beats per 
//                       minute (BPM) on an LCD or serial monitor.
//                     </p>
//                   </h6>
//                   <div
//                     className="project--lang"
//                     style={{
//                       background: "#fbd9ad",
//                       color: "#b061df",
//                       fontWeight: 600,
//                     }}
//                   >
//                     C, Arduino, Touch Sensor
//                   </div>
//                 </div>
//               </Fade>
//             </Col>


//             <Col md={3}>
//               <Fade bottom>
//                 <div
//                   key={1}
//                   className="singleProject"
//                   style={{
//                     backgroundColor: "rgb(142 70 186 / 31%)",
//                     border: "1px solid",
//                   }}
//                 >
//                   <div className="projectContent">
//                     <h5 id={"first"} style={{ color: "#fbd9ad" }}>
//                     ATM Machine
//                     </h5>
//                     <img src={hd} alt={hd} />
//                     <div className="project--showcaseBtn">
//                       <a
//                         href={
//                           "https://github.com/MD-MAFUJUL-HASAN/Machine_Learning/tree/main/Heart%20Disease%20Prediction"
//                         }
//                         target="_blank"
//                         rel="noreferrer"
//                         className={"iconBtn"}
//                         aria-labelledby={`code`}
//                       >
//                         <FaCode
//                           id={`code`}
//                           className={"icon"}
//                           aria-label="Code"
//                         />
//                       </a>
//                     </div>
//                   </div>
//                   <h6>
//                     <p
//                       className="project--desc"
//                       style={{
//                         background: "#fbd9ad",
//                         color: "#b061df",
//                         fontWeight: 600,
//                       }}
//                     >
//                       Use of AI and Machine Learning: Artificial intelligence
//                       and machine learning are already being used in healthcare
//                       to help predict heart disease. In the future, these
//                       technologies could become more advanced, enabling more
//                       accurate predictions of heart disease risk.
//                     </p>
//                   </h6>
//                   <div
//                     className="project--lang"
//                     style={{
//                       background: "#fbd9ad",
//                       color: "#b061df",
//                       fontWeight: 600,
//                     }}
//                   >
//                     Java, Java Swing, OOps
//                   </div>
//                 </div>
//               </Fade>
//             </Col>


//             <Col md={3}>
//               <Fade bottom>
//                 <div
//                   key={1}
//                   className="singleProject"
//                   style={{
//                     backgroundColor: "rgb(142 70 186 / 31%)",
//                     border: "1px solid",
//                   }}
//                 >
//                   <div className="projectContent">
//                     <h5 id={"first"} style={{ color: "#fbd9ad" }}>
//                       Receipt Calculator
//                     </h5>
//                     <img src={ci} alt={ci} />
//                     <div className="project--showcaseBtn">
//                       <a
//                         href={
//                           "https://github.com/MD-MAFUJUL-HASAN/Online-Payroll-Management-System"
//                         }
//                         target="_blank"
//                         rel="noreferrer"
//                         className={"iconBtn"}
//                         aria-labelledby={`code`}
//                       >
//                         <FaCode
//                           id={`code`}
//                           className={"icon"}
//                           aria-label="Code"
//                         />
//                       </a>
//                     </div>
//                   </div>
//                   <h6>
//                     <p
//                       className="project--desc"
//                       style={{
//                         background: "#fbd9ad",
//                         color: "#b061df",
//                         fontWeight: 600,
//                       }}
//                     >
//                       A Payroll management System with feature like generate
//                       payslip & reports. It manages salaries, leaves, branches,
//                       employees, designations, shifts, holidays and employee
//                       attendance. It has chat application so internal employees
//                       can use that feature.
//                     </p>
//                   </h6>
//                   <div
//                     className="project--lang"
//                     style={{
//                       background: "#fbd9ad",
//                       color: "#b061df",
//                       fontWeight: 600,
//                     }}
//                   >
//                     Java, OOps
//                   </div>
//                 </div>
//               </Fade>
//             </Col>

            
//             <Col md={3}>
//               <Fade bottom>
//                 <div
//                   key={1}
//                   className="singleProject"
//                   style={{
//                     backgroundColor: "rgb(142 70 186 / 31%)",
//                     border: "1px solid",
//                   }}
//                 >
//                   <div className="projectContent">
//                     <h5 id={"first"} style={{ color: "#fbd9ad" }}>
//                       Personal Portfolio
//                     </h5>
//                     <img src={pp} alt={pp} />
//                     <div className="project--showcaseBtn">
//                       <a
//                         href={
//                           "https://github.com/MD-MAFUJUL-HASAN/Personal-Portfolio"
//                         }
//                         target="_blank"
//                         rel="noreferrer"
//                         className={"iconBtn"}
//                         aria-labelledby={`code`}
//                       >
//                         <FaCode
//                           id={`code`}
//                           className={"icon"}
//                           aria-label="Code"
//                         />
//                       </a>
//                     </div>
//                   </div>
//                   <h6>
//                     <p
//                       className="project--desc"
//                       style={{
//                         background: "#fbd9ad",
//                         color: "#b061df",
//                         fontWeight: 600,
//                       }}
//                     >
//                       Welcome to my personal portfolio. Explore my work, skills,
//                       and achievements in a concise and visually appealing
//                       format. Get a glimpse of my expertise and creativity.
//                     </p>
//                   </h6>
//                   <div
//                     className="project--lang"
//                     style={{
//                       background: "#fbd9ad",
//                       color: "#b061df",
//                       fontWeight: 600,
//                     }}
//                   >
//                     HTML, CSS, React, JavaScript
//                   </div>
//                 </div>
//               </Fade>
//             </Col>

//           </Row>
//           <div className="blog--viewAll">
//             <Link to="/projectspage">
//               <button className="btn btn-primary">
//                 View All
//                 <HiArrowRight className="viewArr" />
//               </button>
//             </Link>
//           </div>
//         </Container>
//       </Container>
//     </div>
//   );
// }

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "@react-spring/web"; // Updated import
import nyc from "../../images/nyc.png";
import ci from "../../images/onboarding.jpeg";
import hd from "../../images/hd.jpeg";
import pp from "../../images/sims.png";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
  // Create a spring animation for the project header
  const projectSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  // Create an array of projects for easier rendering
  const projects = [
    {
      id: 1,
      title: "Heart Beat Monitoring System using Arduino",
      image: nyc,
      description: "A heartbeat monitoring system using Arduino detects pulse signals via a sensor, processes them, and displays heart rate in beats per minute (BPM) on an LCD or serial monitor.",
      languages: "C, Arduino, Touch Sensor",
      github: "#github code", // Placeholder for the actual GitHub link
    },
    {
      id: 2,
      title: "ATM Machine",
      image: hd,
      description: "Use of AI and Machine Learning: Artificial intelligence and machine learning are already being used in healthcare to help predict heart disease. In the future, these technologies could become more advanced, enabling more accurate predictions of heart disease risk.",
      languages: "Java, Java Swing, OOPs",
      github: "https://github.com/sharma-sonu/ATM-Machine",
    },
    {
      id: 3,
      title: "Receipt Calculator",
      image: ci,
      description: "A Payroll management System with feature like generate payslip & reports. It manages salaries, leaves, branches, employees, designations, shifts, holidays and employee attendance. It has chat application so internal employees can use that feature.",
      languages: "Java, OOPs",
      github: "https://github.com/sharma-sonu/Temprature-Converter",
    },
    {
      id: 4,
      title: "Personal Portfolio",
      image: pp,
      description: "Welcome to my personal portfolio. Explore my work, skills, and achievements in a concise and visually appealing format. Get a glimpse of my expertise and creativity.",
      languages: "HTML, CSS, React, JavaScript",
      github: "https://github.com/sharma-sonu/My_Portfolio",
    },
  ];

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="certificate-description d-flex justify-content-start">
              <animated.h1 className="aboutme-heading" style={projectSpring}>
                Projects
              </animated.h1>
            </Col>

            {/* Render projects dynamically */}
            {projects.map((project) => (
              <Col md={3} key={project.id}>
                <animated.div
                  className="singleProject"
                  style={{
                    ...projectSpring,
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>{project.title}</h5>
                    <img src={project.image} alt={project.title} />
                    <div className="project--showcaseBtn">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                        aria-labelledby={`code-${project.id}`}
                      >
                        <FaCode id={`code-${project.id}`} className="icon" aria-label="Code" />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}
                    >
                      {project.description}
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{ background: "#fbd9ad", color: "#b061df", fontWeight: 600 }}
                  >
                    {project.languages}
                  </div>
                </animated.div>
              </Col>
            ))}

          </Row>

          <div className="blog--viewAll">
            <Link to="/projectspage">
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
