// import React from "react";
// import { FaHackerrank } from "react-icons/fa";
// import {
//   SiCodeforces,
// } from "react-icons/si";
// import { Container, Row } from "react-bootstrap";
// import { Col } from "react-bootstrap";
// import Zoom from "react-reveal/Zoom";

// export default function Ranking() {
//   return (
//     <div className="mt-4">
//       <Zoom left cascade>
//         <h1>See my rank</h1>
//       </Zoom>
//       <Container className="mt-5">
//         <Row className="g-5">
//           <Col md={3}>
//             <a
//               href="#"
//               target="_blank"
//               rel="noreferrer"
//               className="icon-colour  home-social-icons"
//             >
//               <Zoom cascade>
//                 <FaHackerrank />
//               </Zoom>
//             </a>
//           </Col>
      
//           <Col md={3}>
//             <a
//               href="#"
//               target="_blank"
//               rel="noreferrer"
//               className="icon-colour  home-social-icons"
//             >
//               <Zoom cascade>
//                 <SiCodeforces />
//               </Zoom>
//             </a>
//           </Col>{" "}
//         </Row>
//       </Container>
//     </div>
//   );
// }

import React from "react";
import { FaHackerrank } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "react-spring";

export default function Ranking() {
  const titleSpring = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });
  const iconSpring = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 }, delay: 200 });

  return (
    <div className="mt-4">
      <animated.h1 style={titleSpring}>See my rank</animated.h1>
      <Container className="mt-5">
        <Row className="g-5">
          <Col md={3}>
            <animated.a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
              style={iconSpring} // Apply animation style directly to the link
            >
              <FaHackerrank />
            </animated.a>
          </Col>
          <Col md={3}>
            <animated.a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
              style={iconSpring} // Apply animation style directly to the link
            >
              <SiCodeforces />
            </animated.a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
