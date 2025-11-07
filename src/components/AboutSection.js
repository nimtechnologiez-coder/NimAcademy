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
         Nim Academy – Best Software Training Centre in Nagercoil, empowers learners through professional software courses in Nagercoil designed to build real-world IT skills.
         As part of Nim Technologies, we bridge the gap between academics and industry with expert-led training, structured internships, and hands-on learning that prepare students to become future-ready professionals.
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
