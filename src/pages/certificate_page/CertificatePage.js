// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Zoom from "react-reveal/Zoom";
// import { Fade } from "react-reveal";
// import ucsc from "../../images/networking_internship.jpg";
// import ufm from "../../images/oasis.jpg";
// import Cisco_networking from "../../images/Cisco_networking.jpg";
// import nh from "../../images/Cisco_Javascript.jpg";

// import cbta from "../../images/CBT&A.pdf";

// import Particle from "../../Particle";
// export default function CertificatePage() {
//   return (
//     <section className="home-section">
//       <Container fluid id="home">
//         <Particle />
//         <Container className="home-content">
//           <div
//             className="d-flex justify-content-center"
//             width="100%"
//             style={{ backgroundColor: "#fbd9ad" }}
//           >
//             <Zoom left cascade>
//               <h1 style={{ color: "rgb(134 61 176" }}>Certificates</h1>
//             </Zoom>
//           </div>
//           <div>
//             <div>
//               <Container fluid className="certificate-section" id="about">
//                 <Container>
//                   <Row>
//                     <Col md={12} className="mt-5">
//                       <Row className="g-5">
//                         <Col md={4} className="col-sm-12 col-md4">
//                           <Fade bottom duration={2000} distance="20px">
//                             <div className="cert-card">
//                               <div className="content">
//                                 <a
//                                   href="#"
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                 >
//                                   <div className="content-overlay"></div>
//                                   <div
//                                     className="cert-header"
//                                     style={{ backgroundColor: "white" }}
//                                   >
//                                     {
//                                       <img
//                                         className="logo_img"
//                                         src={ucsc}
//                                         alt={ucsc}
//                                       />
//                                     }
//                                   </div>
//                                   <div className="content-details fadeIn-top">
//                                     <h3
//                                       className="content-title"
//                                       style={{ color: "black" }}
//                                     >
//                                       Certificate
//                                     </h3>
//                                   </div>
//                                 </a>
//                               </div>
//                               <div className="cert-body">
//                                 <h2
//                                   className="cert-body-title"
//                                   style={{ fontWeight: 700, color: "#fbd9ad" }}
//                                 >
//                                   Internship : Networking
//                                 </h2>
//                                 <h3
//                                   className="cert-body-subtitle"
//                                   style={{
//                                     color: "#eb90ff",
//                                     marginBottom: "0px",
//                                   }}
//                                 >
//                                   - Cisco
//                                 </h3>
//                               </div>
//                             </div>
//                           </Fade>
//                         </Col>

//           {/* for OASIS INFOBYTE iNTERN */}

//                         <Col md={4}>
//                           <Fade bottom duration={2000} distance="20px">
//                             <div className="cert-card">
//                               <div className="content">
//                                 <a
//                                   href={cbta}
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                 >
//                                   <div className="content-overlay"></div>
//                                   <div
//                                     className="cert-header"
//                                     style={{ backgroundColor: "white" }}
//                                   >
//                                     {
//                                       <img
//                                         className="logo_img"
//                                         src={ufm}
//                                         alt={ufm}
//                                       />
//                                     }
//                                   </div>
//                                   <div className="content-details fadeIn-top">
//                                     <h3
//                                       className="content-title"
//                                       style={{ color: "black" }}
//                                     >
//                                       Certificate
//                                     </h3>
//                                   </div>
//                                 </a>
//                               </div>
//                               <div className="cert-body">
//                                 <h2
//                                   className="cert-body-title"
//                                   style={{ fontWeight: 700, color: "#fbd9ad" }}
//                                 >
//                                   Internship : Web Development
//                                 </h2>
//                                 <h3
//                                   className="cert-body-subtitle"
//                                   style={{
//                                     color: "#eb90ff",
//                                     marginBottom: "0px",
//                                   }}
//                                 >
//                                   - Oasis Infobyte
//                                 </h3>
//                               </div>
//                             </div>
//                           </Fade>
//                         </Col>

//                   {/* for Networking certificate ccna */}

//                         <Col md={4}>
//                           <Fade bottom duration={2000} distance="20px">
//                             <div className="cert-card">
//                               <div className="content">
//                                 <a
//                                   href="#"
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                 >
//                                   <div className="content-overlay"></div>
//                                   <div
//                                     className="cert-header"
//                                     style={{ backgroundColor: "white" }}
//                                   >
//                                     {
//                                       <img
//                                         className="logo_img"
//                                         src={Cisco_networking}
//                                         alt={Cisco_networking}
//                                       />
//                                     }
//                                   </div>
//                                   <div className="content-details fadeIn-top">
//                                     <h3
//                                       className="content-title"
//                                       style={{ color: "black" }}
//                                     >
//                                       Certificate
//                                     </h3>
//                                   </div>
//                                 </a>
//                               </div>
//                               <div className="cert-body">
//                                 <h2
//                                   className="cert-body-title"
//                                   style={{ fontWeight: 700, color: "#fbd9ad" }}
//                                 >
//                                   CCNA Networking
//                                 </h2>
//                                 <h3
//                                   className="cert-body-subtitle"
//                                   style={{
//                                     color: "#eb90ff",
//                                     marginBottom: "0px",
//                                   }}
//                                 >
//                                   - Cisco
//                                 </h3>
//                               </div>
//                             </div>
//                           </Fade>
//                         </Col>
//                         {/* write  code  */}

                        
//                         <Col md={4}>
//                           <Fade bottom duration={2000} distance="20px">
//                             <div className="cert-card">
//                               <div className="content">
//                                 <a
//                                   href="#"
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                 >
//                                   <div className="content-overlay"></div>
//                                   <div
//                                     className="cert-header"
//                                     style={{ backgroundColor: "white" }}
//                                   >
//                                     {
//                                       <img
//                                         className="logo_img"
//                                         src={nh}
//                                         alt={nh}
//                                       />
//                                     }
//                                   </div>
//                                   <div className="content-details fadeIn-top">
//                                     <h3
//                                       className="content-title"
//                                       style={{ color: "black" }}
//                                     >
//                                       Certificate
//                                     </h3>
//                                   </div>
//                                 </a>
//                               </div>
//                               <div className="cert-body">
//                                 <h2
//                                   className="cert-body-title"
//                                   style={{ fontWeight: 700, color: "#fbd9ad" }}
//                                 >
//                                   Javascript Essentials
//                                 </h2>
//                                 <h3
//                                   className="cert-body-subtitle"
//                                   style={{
//                                     color: "#eb90ff",
//                                     marginBottom: "0px",
//                                   }}
//                                 >
//                                   - Cisco
//                                 </h3>
//                               </div>
//                             </div>
//                           </Fade>
//                         </Col>

//                       </Row>
//                     </Col>
//                   </Row>
//                 </Container>
//               </Container>
//             </div>
//           </div>
//           <div className="blog--viewAll"></div>
//         </Container>
//       </Container>
//     </section>
//   );
// }

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "react-spring"; // Import react-spring hooks
import ucsc from "../../images/networking_internship.jpg";
import ufm from "../../images/oasis.jpg";
import Cisco_networking from "../../images/Cisco_networking.jpg";
import nh from "../../images/Cisco_Javascript.jpg";
import cbta from "../../images/CBT&A.pdf";
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
                      <AnimatedCertificate
                        image={ucsc}
                        title="Internship: Networking"
                        subtitle="- Cisco"
                        pdfLink="#"
                      />
                    </Col>

                    {/* Certificate Card for Web Development */}
                    <Col md={4}>
                      <AnimatedCertificate
                        image={ufm}
                        title="Internship: Web Development"
                        subtitle="- Oasis Infobyte"
                        pdfLink={cbta}
                      />
                    </Col>

                    {/* Certificate Card for CCNA Networking */}
                    <Col md={4}>
                      <AnimatedCertificate
                        image={Cisco_networking}
                        title="CCNA Networking"
                        subtitle="- Cisco"
                        pdfLink="#"
                      />
                    </Col>

                    {/* Certificate Card for JavaScript Essentials */}
                    <Col md={4}>
                      <AnimatedCertificate
                        image={nh}
                        title="JavaScript Essentials"
                        subtitle="- Cisco"
                        pdfLink="#"
                      />
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
const AnimatedCertificate = ({ image, title, subtitle, pdfLink }) => {
  const springProps = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div style={springProps}>
      <div className="cert-card">
        <div className="content">
          <a href={pdfLink} target="_blank" rel="noopener noreferrer">
            <div className="content-overlay"></div>
            <div className="cert-header" style={{ backgroundColor: "white" }}>
              <img className="logo_img" src={image} alt={title} />
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
            {title}
          </h2>
          <h3 className="cert-body-subtitle" style={{ color: "#eb90ff", marginBottom: "0px" }}>
            {subtitle}
          </h3>
        </div>
      </div>
    </animated.div>
  );
};
