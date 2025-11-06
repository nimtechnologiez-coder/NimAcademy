import React from "react";
import Navbar from "../components/Navbar";

// import CustomCursor from "./cursor";
import "../style/Institution.css";

function HowItWorks() {
  return (
    <div className="howitworks-section">
      <h2 className="howitworks-title">
        <span className="hiw-blue">How </span>
        <span className="hiw-green">It Works ?</span>
      </h2>
      <p className="howitworks-desc">
        College collaboration brings immense value by fostering academic growth,
        industry exposure, and innovation. Through strategic partnerships with
        educational institutions and organizations, students gain access to
        advanced learning resources, skill development programs, and real-world
        training opportunities. Collaborative initiatives enhance research,
        enable knowledge sharing, and bridge the gap between academia and
        industry. These collaborations also promote student and faculty exchange,
        joint certifications, and career-oriented workshops that improve
        employability and professional growth. Overall, college collaboration
        creates a dynamic learning environment that drives excellence, innovation,
        and future-ready education.
      </p>
    </div>
  );
}

function ContactForm() {
  return (
    <div className="cf-container">
      <form className="cf-form">
        <input type="text" placeholder="Name" className="cf-input" />
        <input type="text" placeholder="Institute Name" className="cf-input" />
        <input type="email" placeholder="E-Mail Address" className="cf-input" />
        <input type="tel" placeholder="Phone Number" className="cf-input" />
        <textarea
          placeholder="Your Message"
          className="cf-textarea"
          rows={7}
        ></textarea>
        <div className="cf-submit-wrap">
          <button type="submit" className="cf-submit-btn">
            Submit Now
          </button>
          <button type="button" className="cf-submit-btn">
            Attach File
          </button>
        </div>
      </form>
    </div>
  );
}

function Colleges() {
  return (
    <div className="workwithcolleges-section">
      <h2 className="wwc-heading">
        <span className="wwc-blue">How we </span>
        <span className="wwc-green">Work with Colleges ?</span>
      </h2>
      <ol className="wwc-list">
        <li>Identify student interest areas and skill requirements.</li>
        <li>Customize internship programs to align with academic schedules.</li>
        <li>Deliver high-quality training via industry professionals.</li>
        <li>Provide certifications and performance reports for each student.</li>
      </ol>
    </div>
  );
}

function Institution() {
  return (
    <div className="apply-body">
      <div className="main-wrapper">
        <Navbar />
        <div className="hero">
          <h1 className="ins-title">
            INSTITUTIONAL <span className="ins-highlight">COLLABORATION</span>
          </h1>
        </div>
      </div>

      <Colleges />
      <ContactForm />
      <HowItWorks />
  
      {/* <CustomCursor />  */}
    </div>
  );
}

export default Institution;
