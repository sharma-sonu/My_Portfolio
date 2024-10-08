
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { useSpring, animated } from '@react-spring/web';

function EducationJourney() {
  // Define the spring animation for the title
  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'rotateX(90deg)' }, // Initial state
    to: { opacity: 1, transform: 'rotateX(0deg)' }, // Final state
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
        <animated.h1 style={titleSpring}>Qualification Journey</animated.h1>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          date="2021 - 2025"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            BACHELOR OF TECHNOLOGY
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            ORIENTAL INSTITUTE OF SCIENCE AND TECHNOLOGY, BHOPAL
          </h4>
          <p>
            Pursuing B.Tech in Electronics and Communication Engineering.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          date="2018 - 2020"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">INTERMEDIATE</h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            M.K COLLEGE, DARBHANGA
          </h4>
          <p>Completed 12th and secured 74 percent.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          date="2017 - 2018"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">MATRIC</h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            MKJ HIGH SCHOOL, DARBHANGA
          </h4>
          <p>Completed 10th and secured 79 percent.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default EducationJourney;
