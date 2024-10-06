

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../../Particle";
// import Typing from "./Typing";
// import Tilt from "react-parallax-tilt";
// import AboutmeContainer from "../../components/aboutme/aboutmeContainer";
// import Fade from "react-reveal/Fade";
// import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
// import { FaLinkedinIn, FaGoogle } from "react-icons/fa";
// import Certification from "../../components/certificate/Certification";
// import Projects from "../../components/projects/Projects";
// import Contactus from "../../components/contactus/Contactus";

// export default function Home() {
//   return (
//     <section className="home-section">
//       <Container fluid id="home">
//         <Particle />
//         <Container className="home-content">
//           <Row>
//             <Col md={8} className="home-header">
//               <h1 className="heading" style={{ paddingBottom: 15, fontSize: "100px" }}>
//                 Hi There!{" "}
//                 <span className="wave" role="img" aria-label="wave">
//                   👋🏻
//                 </span>
//               </h1>

//               <h1 className="heading-name">
//                 I'm
//                 <strong className="main-name"> Sonu Sharma</strong>
//               </h1>

//               <div className="typing-homeclass">
//                 <Typing />
//               </div>

//               <div className="sociallink-home">
//                 <ul className="homeaboutsociallinks">
//                   <li className="socialicons">
//                     <a
//                       href="https://github.com/sharma-sonu"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="iconcolour homesocialicons"
//                     >
//                       <AiFillGithub />
//                     </a>
//                   </li>
//                   <li className="socialicons">
//                     <a
//                       href="https://www.linkedin.com/in/sonu-sharma-491672205"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="iconcolour homesocialicons"
//                     >
//                       <FaLinkedinIn />
//                     </a>
//                   </li>
//                   <li className="socialicons">
//                     <a
//                       href="https://www.instagram.com/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="iconcolour homesocialicons"
//                     >
//                       <AiFillInstagram />
//                     </a>
//                   </li>
//                   <li className="socialicons">
//                     <a
//                       href="mailto:sonuhyt99058@gmail.com"
//                       className="iconcolour homesocialicons"
//                     >
//                       <FaGoogle />
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </Col>
//             <Col md={4} style={{ paddingBottom: 20 }}>
//               <div className="img-home-main">
//                 <Tilt>
//                   <Fade cascade>
//                     <img
//                       src="./portfolio.png"
//                       alt="Home Illustration"
//                       className="img-fluid"
//                     />
//                   </Fade>
//                 </Tilt>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </Container>
//       <AboutmeContainer />
//       <Certification />
//       <Projects />
//       <Contactus />
//     </section>
//   );
// }

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Typing from "./Typing";
import Tilt from "react-parallax-tilt";
import AboutmeContainer from "../../components/aboutme/aboutmeContainer";
import { useSpring, animated } from "@react-spring/web"; // Updated import for react-spring
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaGoogle } from "react-icons/fa";
import Certification from "../../components/certificate/Certification";
import Projects from "../../components/projects/Projects";
import Contactus from "../../components/contactus/Contactus";

export default function Home() {
  // Define spring animations for the header and image
  const headerSpring = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 });
  const imgSpring = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 600 });

  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <animated.h1 className="heading" style={{ paddingBottom: 15, fontSize: "100px", ...headerSpring }}>
                Hi There!{" "}
                <span className="wave" role="img" aria-label="wave">
                  👋🏻
                </span>
              </animated.h1>

              <animated.h1 className="heading-name" style={headerSpring}>
                I'm
                <strong className="main-name"> Sonu Sharma</strong>
              </animated.h1>

              <div className="typing-homeclass">
                <Typing />
              </div>

              <div className="sociallink-home">
                <ul className="homeaboutsociallinks">
                  <li className="socialicons">
                    <a
                      href="https://github.com/sharma-sonu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="iconcolour homesocialicons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://www.linkedin.com/in/sonu-sharma-491672205"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="iconcolour homesocialicons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="iconcolour homesocialicons"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="mailto:sonuhyt99058@gmail.com"
                      className="iconcolour homesocialicons"
                    >
                      <FaGoogle />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4} style={{ paddingBottom: 20 }}>
              <div className="img-home-main">
                <Tilt>
                  <animated.div style={imgSpring}>
                    <img
                      src="./portfolio.png"
                      alt="Home Illustration"
                      className="img-fluid"
                    />
                  </animated.div>
                </Tilt>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <AboutmeContainer />
      <Certification />
      <Projects />
      <Contactus />
    </section>
  );
}
