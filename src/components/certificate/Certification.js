// import React, { useState, useEffect } from "react";
// import { Container } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import { AiOutlineDownload } from "react-icons/ai";
// import Particle from "../../Particle";
// import pdf from "../../assets/sonu_Resume (2).pdf";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import { useSpring, animated } from "react-spring";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const resumeLink = "#github link";

// function Resume() {
//   const [width, setWidth] = useState(1200);
//   const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   return (
//     <div>
//       <section className="home-section">
//         <Container fluid id="home">
//           <Particle />
//           <Container className="home-content">
//             <animated.div style={fadeIn} className="d-flex justify-content-center" width="100%">
//               <h1 style={{ color: "rgb(134 61 176)" }}>RESUME</h1>
//             </animated.div>
//             <div className="certificate-section" id="about">
//               <div className="d-flex justify-content-center mt-4">
//                 <Button variant="primary" href={pdf} target="_blank">
//                   <AiOutlineDownload />
//                   &nbsp;Download Resume
//                 </Button>
//               </div>
//               <div className="resume d-flex justify-content-center">
//                 <Document file={resumeLink}>
//                   <Page pageNumber={1} scale={width > 786 ? 1.6 : 0.4} />
//                 </Document>
//               </div>
//               <div className="d-flex justify-content-center">
//                 <Button variant="primary" href={pdf} target="_blank">
//                   <AiOutlineDownload />
//                   &nbsp;Download Resume
//                 </Button>
//               </div>
//             </div>
//           </Container>
//         </Container>
//       </section>
//     </div>
//   );
// }

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import info_java_certi from "../../images/JavaFondationCertification.jpg"; // certification_1
import ufm from "../../images/DBMS_1.jpg"; // Certification_2
import ufn from "../../images/DBMS_2.jpg"; // Certification_3
import cbta from "../../images/CBT&A.pdf";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Certification() {
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
            <Col ms={12} className="mt-3">
              <Row className="g-5">
                {[{
                  img: info_java_certi,
                  title: "Java Foundation Certification",
                  subtitle: "- Infosys Springboard",
                  link: "#"
                },
                {
                  img: ufm,
                  title: "DBMS_1",
                  subtitle: "- Infosys Springboard",
                  link: cbta
                },
                {
                  img: ufn,
                  title: "DBMS_2",
                  subtitle: "- Infosys Springboard",
                  link: "#"
                }].map((cert, index) => (
                  <Col md={4} key={index}>
                    <animated.div style={fadeIn}>
                      <div className="cert-card">
                        <div className="content">
                          <a href={cert.link} target="_blank" rel="noopener noreferrer">
                            <div className="content-overlay"></div>
                            <div className="cert-header" style={{ backgroundColor: "white" }}>
                              <img className="logo_img" src={cert.img} alt={cert.title} />
                            </div>
                            <div className="content-details fadeIn-top">
                              <h3 className="content-title" style={{ color: "black" }}>
                                Certificate
                              </h3>
                            </div>
                          </a>
                        </div>
                        <div className="cert-body">
                          <h2 className="cert-body-title" style={{ fontWeight: 700, color: "#fbd9ad" }}>
                            {cert.title}
                          </h2>
                          <h3 className="cert-body-subtitle" style={{ color: "#eb90ff", marginBottom: "0px" }}>
                            {cert.subtitle}
                          </h3>
                        </div>
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
