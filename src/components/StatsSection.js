import React from "react";
import "../style/StatsCards.css"; // optional if you plan to style separately

function StatsCards() {
  const stats = [
    { title: "COURSES", value: "10+" },
    { title: "STUDENTS", value: "50+" },
    { title: "PLACEMENTS", value: "50+" },
  ];

  return (
    <section className="stats-section">
      <div className="stats-row">
        {stats.map((stat) => (
          <div className="stats-card" key={stat.title}>
            <div className="stats-title">{stat.title}</div>
            <div className="stats-value">{stat.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsCards;
