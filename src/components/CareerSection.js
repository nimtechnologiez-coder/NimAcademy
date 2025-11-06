import React from "react";
import "../style/CareerSection.css"; // ✅ ensure correct folder name: "styles"

function CareerSection() {
  return (
    <section className="career-section">
      <h2 className="career-heading">
        PROGRAMS DESIGNED FOR <br /> YOUR CAREER GROWTH
      </h2>
      <a href="/courses" className="career-btn">
        Explore Our Resources
      </a>
    </section>
  );
}

export default CareerSection;
