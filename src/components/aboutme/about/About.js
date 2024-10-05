// import React from "react";
// import { Container } from "react-bootstrap";
// import { Row } from "react-bootstrap";
// import { Col } from "react-bootstrap";
// import Slide from "react-reveal/Slide";
// import Fade from "react-reveal/Fade";
// const About = () => {
//   return (
//     <div>
//       <Container>
//         {/* <Slide left > */}
//         <Row className="mt-5">
//           <Col md={5}>
           

//             <Slide left>
//               <lottie-player
//                 src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
//                 background="transparent"
//                 speed="1"
//                 style={{ width: "100%", height: "90%" }}
//                 loop
//                 autoplay
//               ></lottie-player>
//             </Slide>
//           </Col>

//           <Col md={7}>
//             <Fade duration={3000}>
//               <p className="home-about-body">
//                 My name is <b className="purple">Sonu Sharma </b> 
//                   and I am a <b className="purple"> </b> 
//                     student at <b className="purple">Oriental Institute of Science and technology</b>
//                       Bhopal.
//                 <br />
//                 <br />
//                         I am proficient in various programming languages such as &nbsp;
//                   <b className="purple">
//                     {" "}
//                     C, Java, HTML, CSS and JavaScript.{" "}
//                   </b>
//                 <br />
//                 <br />
//                 I also have experience working with frameworks and libraries such as &nbsp;

//                   <b className="purple">
//                     {" "}
//                     NodeJS, ReactJS{" "}
//                   </b>
//                 <br />
//                 <br />
//                 Whenever possible, I also apply my passion for developing
//                 products with &nbsp;
//                   <b className="purple">
//                     {" "}
//                     Modern Javascript Library and Frameworks.
//                   </b>
//                 <br />
//                 <br />In my free time, I enjoy learning new technologies and &nbsp;
//                   <b className="purple">building new web technologies and products. </b>
//               </p>
//             </Fade>
//           </Col>
//         </Row>
        
//       </Container>
//     </div>
//   );
// };

// export default About;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from '@react-spring/web';

const About = () => {
  // Define the spring animations
  const slideProps = useSpring({
    from: { transform: 'translateX(-100%)' }, // Slide from left
    to: { transform: 'translateX(0%)' },
  });

  const fadeProps = useSpring({
    from: { opacity: 0 }, // Fade in effect
    to: { opacity: 1 },
    config: { duration: 3000 } // Animation duration
  });

  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={5}>
            <animated.div style={slideProps}>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </animated.div>
          </Col>

          <Col md={7}>
            <animated.div style={fadeProps}>
              <p className="home-about-body">
                My name is <b className="purple">Sonu Sharma </b>
                and I am a <b className="purple"> </b>
                student at <b className="purple">Oriental Institute of Science and technology</b>
                Bhopal.
                <br />
                <br />
                I am proficient in various programming languages such as &nbsp;
                <b className="purple"> C, Java, HTML, CSS and JavaScript. </b>
                <br />
                <br />
                I also have experience working with frameworks and libraries such as &nbsp;
                <b className="purple"> NodeJS, ReactJS </b>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products with &nbsp;
                <b className="purple"> Modern Javascript Library and Frameworks.</b>
                <br />
                <br />In my free time, I enjoy learning new technologies and &nbsp;
                <b className="purple">building new web technologies and products. </b>
              </p>
            </animated.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
