import React from "react";
import "../style/AboutSection.css";
import MacStudio from "../images/Mac Studio.jpg";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-left">
        <h2>
          Why <span className="highlight">Nim</span> Academy?
        </h2>
        <p>
          NIM Academy empowers learners to become skilled IT professionals
          through practical, high-quality, and industry-aligned training. As the
          professional training and internship division of Nim Technologies, we
          focus on bridging the gap between classroom learning and real-world
          needs by offering structured internship programs, expert-led sessions,
          and modern teaching approaches that build a future-ready workforce.
        </p>
      
<button className="explore-btn">
  <Link to="/courses" className="explore-link">
    Explore Our Courses
  </Link>
</button>
      </div>
      <div className="about-right">
        <img src={MacStudio} alt="Nim Academy" className="about-img" />
      </div>
    </section>
  );
}

export default AboutSection;
