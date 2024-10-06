

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "@react-spring/web"; // Updated import
import axios from "axios";
import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Contactus() {
  const [formData, setFormData] = useState({}); // Initialize as an object

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!(formData.name && formData.email && formData.message)) {
      alert("Please fill all fields before submitting!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/submitForm",
        formData
      );
      console.log(response.data.message); // Log the response from the backend

      alert(`Thanks ${formData.name}, I will shortly connect with you!`);
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Backend server was not running while submitting the form.");
    }

    setFormData({});
  };

  // Animation for the form section
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
                <Col md={4}>
                  <animated.div style={springProps}>
                    <div className="contacts-form" data-aos="fade-up">
                      <form onSubmit={handleSubmit}> {/* Updated to handle submit event */}
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
                            value={formData.name || ""}
                            onChange={handleChange}
                          />
                        </div>
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
                            value={formData.email || ""}
                            onChange={handleChange}
                          />
                        </div>
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
                            value={formData.message || ""}
                            onChange={handleChange}
                          />
                        </div>

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
                <Col md={7}>
                  <div className="contacts-details">
                    <a
                      href="mailto:sonuhyt99058@gmail.com"
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiAtSign />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>
                        sonuhyt99058@gmail.com
                      </p>
                    </a>
                    <a
                      href="tel:+919905867487" // Fixed to use tel protocol for phone links
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiPhone />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>+91 9905867487</p>
                    </a>
                    <div className="personal-details">
                      <div className="detailsIcon">
                        <HiOutlineLocationMarker />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>
                        Bhopal, Madhya Pradesh
                      </p>
                    </div>
                  </div>
                  <div className="contact-map">
                    {/* Uncomment and include your Google Map iframe here */}
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
