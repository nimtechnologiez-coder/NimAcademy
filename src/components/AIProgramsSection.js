import React from "react";
import "../style/AIPrograms.css";

// Import your 3 unique images
import Aiprogram from "../images/aiprogram.jpg";
import dataImage from "../images/digitalmarket.jpg";
import pythonImage from "../images/pye.jpg";

function AIProgramCard({ image, title, description, buttonText, href }) {
  return (
    <div className="scroll-sticky-card">
      <div className="ai-image-container">
        <img src={image} alt={title} className="ai-image" />
      </div>
      <div className="ai-content">
        <h2 className="ai-title">{title}</h2>
        <p className="ai-description">{description}</p>

        {/* 🟢 Button with href link */}
        <a href={href} className="join-link">
          <button className="join-button">{buttonText}</button>
        </a>
      </div>
    </div>
  );
}

function AIPrograms() {
  const cards = [
    {
      image: Aiprogram,
      title: "AI Program",
      description:
        "The AI Programs course introduces you to the core concepts and practical applications of Artificial Intelligence. From machine learning and NLP to AI-based automation, this course equips you with in-demand skills using Python, TensorFlow, and OpenAI tools.",
      buttonText: "Join now",
      href: "/apply",
    },
    {
      image: dataImage,
      title: "Data Science Program",
      description:
        "Learn data analysis, visualization, and machine learning techniques to uncover insights and drive business decisions using Python, R, and SQL.",
      buttonText: "Enroll today",
      href: "/apply",
    },
    {
      image: pythonImage,
      title: "Python Program",
      description:
        "Master full-stack web development technologies including React, Node.js, Express, and MongoDB to build scalable applications.",
      buttonText: "Get started",
      href: "/apply",
    },
  ];

  return (
    <div className="scroll-sticky-stack">
      {cards.map((card, index) => (
        <section className="scroll-stack-section" key={index}>
          <AIProgramCard {...card} />
        </section>
      ))}

      {/* 🔵 Explore Button with href link */}
      <button className="explore-btn">
        <a href="/courses" className="explore-link" rel="noopener noreferrer">
          Explore Now
        </a>
      </button>
    </div>
  );
}

export default AIPrograms;
