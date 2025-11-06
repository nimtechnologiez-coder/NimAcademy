import React from "react";
import "../style/BenefitsSection.css";
import program from "../images/program1.jpg";
import program1 from "../images/program2.jpg";
import program2 from "../images/program3.jpg";

function BenefitsSection() {
  return (
    <section className="benefits-container">
      {/* 1st card */}
      <div className="benefits-card">
        <div className="benefits-content">
          <h3>
            <span className="benefits-blue">Improvement </span>
            <span className="benefits-green">in Learning Outcomes</span>
          </h3>
          <p>
            Our platform delivers a remarkable 50% improvement in learning
            outcomes, enhancing student performance significantly. With effective
            course management tools and personalized feedback, learners better
            grasp complex subjects, preparing them for academic success and
            fostering a passion for lifelong learning.
          </p>
        </div>
        <div className="benefits-image-container">
          <img
            src={program}
            alt="Learning Outcomes"
            className="benefits-image"
          />
        </div>
      </div>

      {/* 2nd card */}
      <div className="benefits-card">
        <div className="benefits-content">
          <h3>
            <span className="benefits-blue">Enhanced </span>
            <span className="benefits-green">Student Engagement</span>
          </h3>
          <p>
            Users experience a 30% increase in student engagement through our
            interactive collaboration tools. By facilitating real-time discussions
            and using multimedia resources, we create a dynamic environment that
            encourages active participation, boosting both academic performance
            and essential soft skills.
          </p>
        </div>
        <div className="benefits-image-container">
          <img
            src={program1}
            alt="Student Engagement"
            className="benefits-image"
          />
        </div>
      </div>

      {/* 3rd card */}
      <div className="benefits-card">
        <div className="benefits-content">
          <h3>
            <span className="benefits-blue">Increase </span>
            <span className="benefits-green">in Teacher Efficiency</span>
          </h3>
          <p>
            Educators benefit from a 40% increase in efficiency, allowing them to
            focus more on teaching. By automating administrative tasks like
            grading and assignment tracking, our solution empowers teachers to
            dedicate more time to high-quality instruction and personalized
            support, enhancing the overall educational experience.
          </p>
        </div>
        <div className="benefits-image-container">
          <img
            src={program2}
            alt="Teacher Efficiency"
            className="benefits-image"
          />
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
