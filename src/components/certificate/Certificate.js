// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Graphics_Design from "../../images/circuit.jpg";
// import CCNA_Certificate from "../../images/networking_internship.jpg";
// // import cbta from "../../images/CBT&A.pdf";
// import c from "../../images/c.jpg";
// import skill from "../../images/C++.jpg";
// import problem_solving from "../../images/oasis.jpg";
// import python from "../../images/Essay_Writing.jpg";
// import iq from "../../images/Cisco_1.jpg";
// import computer from "../../images/cisco_2.jpg";
// import Fade from "react-reveal/Fade";

// export default function Certificate() {
//   return (
//     <div className="mt-5">
//       <Container>
//         {/* <Bounce left cascade> */}
//         <Fade left cascade duration={1000} distance="20px">
//           <Row className="g-5">
//             <Col md={4}>
//               <img
//                 src={python}
//                 alt=""
//                 style={{ width: "100%", height: "100%" }}
//               />
//             </Col>

//             <Col md={4}>
//               <img
//                 src={problem_solving}
//                 alt=""
//                 style={{ width: "100%", height: "100%" }}
//               />
//             </Col>

//             <Col md={4}>
//               <img
//                 src={Graphics_Design}
//                 alt=""
//                 style={{ width: "100%", height: "100%" }}
//               />
//             </Col>

//             <Col md={4}>
//               <img
//                 src={CCNA_Certificate}
//                 alt=""
//                 style={{ width: "100%", height: "100%" }}
//               />
//             </Col>

//             <Col md={4}>
//               <img src={c} alt="" style={{ width: "100%", height: "100%" }} />
//             </Col>

//             <Col md={4}>
//               <img
//                 src={skill}
//                 alt=""
//                 style={{ width: "100%", height: "100%" }}
//               />
//             </Col>

//             <Col md={4}>
//               <img src={iq} alt="" style={{ width: "100%", height: "100%" }} />
//             </Col>
//             <Col md={4}>
//               <img
//                 src={computer}
//                 alt=""
//                 style={{ width: "100%", height: "100%" }}
//               />
//             </Col>
//           </Row>
//           {/* </Bounce> */}
//         </Fade>
//       </Container>
//     </div>
//   );
// }

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Graphics_Design from "../../images/circuit.jpg";
import CCNA_Certificate from "../../images/networking_internship.jpg";
import c from "../../images/c.jpg";
import skill from "../../images/C++.jpg";
import problem_solving from "../../images/oasis.jpg";
import python from "../../images/Essay_Writing.jpg";
import iq from "../../images/Cisco_1.jpg";
import computer from "../../images/cisco_2.jpg";
import { useSpring, animated } from "react-spring/web";

export default function Certificate() {
  // Animation for each certificate image
  const fadeIn = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { duration: 1000 },
  });

  return (
    <div className="mt-5">
      <Container>
        <Row className="g-5">
          {[python, problem_solving, Graphics_Design, CCNA_Certificate, c, skill, iq, computer].map((img, index) => (
            <Col md={4} key={index}>
              <animated.img
                src={img}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  ...fadeIn,
                  // Add a slight delay based on the index for staggered effect
                  transitionDelay: `${index * 100}ms`,
                }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
