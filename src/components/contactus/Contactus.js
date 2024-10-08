

// import React, { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { useSpring, animated } from "@react-spring/web";
// import { AiOutlineSend } from "react-icons/ai";
// import { FiPhone, FiAtSign } from "react-icons/fi";
// import { HiOutlineLocationMarker } from "react-icons/hi";

// export default function Contactus() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!(formData.name && formData.email && formData.message)) {
//       alert("Please fill all fields before submitting!");
//       return;
//     }

//     try {
//       const scriptURL = "https://script.google.com/macros/s/AKfycbwa4gr4gMv5VJO63_BZXb7nVmbL7UMujgTbNgPBdoU-hlXtPQiO9aXUcuT8rYcWGnIx/exec";

//       const response = await fetch(scriptURL, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//         body: new URLSearchParams(formData).toString()
//       });

//       const result = await response.json();
//       if (result.status === "success") {
//         alert(`Thanks ${formData.name}, I will shortly connect with you!`);
//       } else {
//         alert(`Error: ${result.message}`);
//       }

//     } catch (error) {
//       console.error("Error submitting the form:", error);
//       alert("Form submission failed.");
//     }

//     setFormData({
//       name: "",
//       email: "",
//       message: ""
//     });
//   };

//   // Animation for the form section
//   const springProps = useSpring({
//     opacity: 1,
//     transform: "translateY(0)",
//     from: { opacity: 0, transform: "translateY(20px)" },
//     config: { duration: 800 },
//   });

//   return (
//     <div>
//       <Container fluid className="certificate-section" id="about">
//         <Container>
//           <Row>
//             <Col md={12} className="certificate-description d-flex justify-content-start">
//               <animated.h1 className="aboutme-heading" style={springProps}>
//                 Contact me
//               </animated.h1>
//             </Col>
//             <Col md={12} id="contact" className="mt-3">
//               <Row>
//                 <Col md={4}>
//                   <animated.div style={springProps}>
//                     <div className="contacts-form" data-aos="fade-up">
//                       <form onSubmit={handleSubmit}>
//                         <div className="input-container d-flex flex-column">
//                           <label htmlFor="username" className="label-class">
//                             Full Name
//                           </label>
//                           <input
//                             type="text"
//                             className="form-input input-class"
//                             id="username"
//                             name="name"
//                             placeholder="Enter your name"
//                             value={formData.name}
//                             onChange={handleChange}
//                           />
//                         </div>
//                         <div className="input-container d-flex flex-column">
//                           <label htmlFor="email" className="label-class">
//                             Email address
//                           </label>
//                           <input
//                             type="email"
//                             className="form-input input-class"
//                             name="email"
//                             id="email"
//                             placeholder="Enter email"
//                             value={formData.email}
//                             onChange={handleChange}
//                           />
//                         </div>
//                         <div className="input-container d-flex flex-column">
//                           <label htmlFor="userMessage" className="label-class">
//                             Message
//                           </label>
//                           <textarea
//                             className="form-message input-class"
//                             id="userMessage"
//                             name="message"
//                             rows="3"
//                             placeholder="Enter message"
//                             value={formData.message}
//                             onChange={handleChange}
//                           />
//                         </div>

//                         <div className="submit-btn">
//                           <button type="submit" className="submitBtn">
//                             Submit
//                             <AiOutlineSend className="send-icon" />
//                           </button>
//                         </div>
//                       </form>
//                     </div>
//                   </animated.div>
//                 </Col>
//                 <Col md={7}>
//                   <div className="contacts-details">
//                     <a
//                       href="mailto:sonuhyt99058@gmail.com"
//                       className="personal-details"
//                     >
//                       <div className="detailsIcon">
//                         <FiAtSign />
//                       </div>
//                       <p style={{ color: "#fbd9ad" }}>
//                         sonuhyt99058@gmail.com
//                       </p>
//                     </a>
//                     <a
//                       href="tel:+919905867487"
//                       className="personal-details"
//                     >
//                       <div className="detailsIcon">
//                         <FiPhone />
//                       </div>
//                       <p style={{ color: "#fbd9ad" }}>+91 9905867487</p>
//                     </a>
//                     <div className="personal-details">
//                       <div className="detailsIcon">
//                         <HiOutlineLocationMarker />
//                       </div>
//                       <p style={{ color: "#fbd9ad" }}>
//                         Bhopal, Madhya Pradesh
//                       </p>
//                     </div>
//                   </div>
//                 </Col>
//               </Row>
//             </Col>
//           </Row>
//         </Container>
//       </Container>
//     </div>
//   );
// }


import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "@react-spring/web";
import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Contactus() {
  // Initialize formData state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!(formData.name && formData.email && formData.message)) {
      alert("Please fill all fields before submitting!");
      return;
    }

    try {
      // Google Apps Script Web App URL
      const scriptURL = "https://script.google.com/macros/s/AKfycbwDkrrImq265We41gxsaKBT4bmJlnNHk84TBcY2DIDM8cbz4TyPgTwu1EF9cfCZzO71/exec";
//
      // Submit form data
      const response = await fetch(scriptURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      const result = await response.json();

      if (result.status === "success") {
        alert(`Thanks ${formData.name}, I will shortly connect with you!`);
      } else {
        alert(`Error: ${result.message}`);
      }

    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Form submission failed.");
    }

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  // Spring animation for the form
  const springProps = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { duration: 800 },
  });

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="certificate-description d-flex justify-content-start">
              <animated.h1 className="aboutme-heading" style={springProps}>
                Contact me
              </animated.h1>
            </Col>
            <Col md={12} id="contact" className="mt-3">
              <Row>
                {/* Contact form */}
                <Col md={4}>
                  <animated.div style={springProps}>
                    <div className="contacts-form" data-aos="fade-up">
                      <form onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <div className="input-container d-flex flex-column">
                          <label htmlFor="username" className="label-class">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="form-input input-class"
                            id="username"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>

                        {/* Email */}
                        <div className="input-container d-flex flex-column">
                          <label htmlFor="email" className="label-class">
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-input input-class"
                            name="email"
                            id="email"
                            placeholder="Enter email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>

                        {/* Message */}
                        <div className="input-container d-flex flex-column">
                          <label htmlFor="userMessage" className="label-class">
                            Message
                          </label>
                          <textarea
                            className="form-message input-class"
                            id="userMessage"
                            name="message"
                            rows="3"
                            placeholder="Enter message"
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </div>

                        {/* Submit button */}
                        <div className="submit-btn">
                          <button type="submit" className="submitBtn">
                            Submit
                            <AiOutlineSend className="send-icon" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </animated.div>
                </Col>

                {/* Contact details */}
                <Col md={7}>
                  <div className="contacts-details">
                    {/* Email */}
                    <a href="mailto:sonuhyt99058@gmail.com" className="personal-details">
                      <div className="detailsIcon">
                        <FiAtSign />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>
                        sonuhyt99058@gmail.com
                      </p>
                    </a>

                    {/* Phone */}
                    <a href="tel:+919905867487" className="personal-details">
                      <div className="detailsIcon">
                        <FiPhone />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>
                        +91 9905867487
                      </p>
                    </a>

                    {/* Location */}
                    <div className="personal-details">
                      <div className="detailsIcon">
                        <HiOutlineLocationMarker />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>
                        Bhopal, Madhya Pradesh
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
