import React from "react";
import "../style/NextgenAI.css";
import nextgenImg from "../images/ai.jpg";

function NextgenAI() {
  return (
    <div className="ng-content-block">
      <img src={nextgenImg} alt="Nextgen AI" className="ng-block-img" />
      <div className="ai-program-section">
        <h2 className="ai-program-title">
          17-Day AI Program – Learn, Build & Innovate
        </h2>
        <p className="ai-program-desc">
          The 17-Day AI Program is a focused learning journey that blends theoretical concepts with practical applications. Over 17 intensive days, participants will explore the foundations of Artificial Intelligence, including machine learning algorithms, data handling, neural networks, and automation.
        </p>
      </div>
    </div>
  );
}

export default NextgenAI;
