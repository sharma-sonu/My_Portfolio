

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { useSpring, animated } from '@react-spring/web';

function ExperienceJourney() {
  // Define the spring animation for the title
  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' }, // Initial state
    to: { opacity: 1, transform: 'translateY(0)' }, // Final state
    config: { tension: 170, friction: 12 }, // Customize the spring
  });

  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <animated.h1 style={titleSpring}>Experience Journey</animated.h1>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid rgb(78 22 112)" }}
          date="2023 - Continuing"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Octanet Services Private Limited
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Java Developer
          </h6>
          <p>• Provide education counseling to students and guardians for study abroad.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          date="2021 - 2022"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">Oasis Infobyte</h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Web Development (Frontend Developer)
          </h6>
          <p>
            
          • Developed a portfolio website to showcase my projects, skills, and achievements.
          • Languages used: HTML, CSS, Javascript; Framework: React.js; Tool: VS Code.

          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
