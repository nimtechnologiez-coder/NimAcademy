import React, { useState } from "react";
import "../style/Internshipfour.css";
import interncard01 from "../images/interncard01.jpg";
import interncard02 from "../images/interncard02.jpg";
import interncard03 from "../images/interncard03.jpg";
 
const ResearchInternship = () => {
  const [activeIndex, setActiveIndex] = useState(0);
 
  const internshipData = [
    {
      number: "01",
      title: "Research Internship",
      img: interncard01,
      description: [
        "Be a part of ground-breaking research. The students, who work in an industrial R&D environment, get access to industry-scale problems and data.",
        "They also get a chance to interact with some of the world’s best researchers."
      ],
    },
    {
      number: "02",
      title: "What do we seek in our interns?",
      img: interncard02,
      description: [
        "We seek curious minds who are passionate about learning and innovation.",
        "You must be open to exploring new ideas, working collaboratively, and solving real-world problems through technology."
      ],
    },
    {
      number: "03",
      title: "What is the role of an intern?",
      img: interncard03,
      description: [
        "Interns actively contribute to research, participate in ongoing projects, and work under the mentorship of senior experts.",
        "The internship may vary from 6–8 weeks (short) or 16–18 weeks (long), depending on project requirements."
      ],
    },
  ];
 
  return (
    <div className="research-container">
      {/* Left Section */}
      <div className="research-left">
        {internshipData.map((item, index) => (
          <div
            key={index}
            className={`research-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <p className="research-number">{item.number}</p>
            <h3 className={activeIndex === index ? "active-text" : ""}>{item.title}</h3>
          </div>
        ))}
      </div>
 
      {/* Right Section */}
      <div className="research-right">
        <img
          src={internshipData[activeIndex].img}
          alt={internshipData[activeIndex].title}
          className="research-img"
        />
        <div className="research-text">
          {internshipData[activeIndex].description.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
 
export default ResearchInternship;
 
 