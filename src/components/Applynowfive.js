import "../style/Applynowfive.css";
import aiprogram from "../images/aiprogram.jpg";
import digitalmarket from "../images/digitalmarket.jpg";
import pye from "../images/pye.jpg";

function AIPrograms() {
  const cards = [
    {
      image: aiprogram,
      title: "AI Program",
      description:
        "The AI Programs course introduces you to the core concepts and practical applications of Artificial Intelligence. From machine learning and natural language processing to computer vision and AI-based automation, this course equips you with in-demand skills using Python and powerful libraries like TensorFlow, Scikit-Learn, and OpenAI tools.",
      buttonText: "Join now",
      href: "/apply",
    },
    {
      image: digitalmarket,
      title: "Data Science Program",
      description:
        "Learn data analysis, visualization, and machine learning techniques to uncover insights and drive business decisions with popular tools and languages like Python, R, and SQL.",
      buttonText: "Enroll today",
      href: "/apply",
    },
    {
      image: pye,
      title: "Python Program",
      description:
        "Master front-end and back-end web development technologies including React, Node.js, Express, and databases to build modern, scalable web applications.",
      buttonText: "Get Started",
      href: "/apply",
    },
  ];

  return (
    <div className="ai-scroll-stack">
      {cards.map((card, idx) => (
        <section className="ai-stack-section" key={idx}>
          <div className="ai-program-card">
            <img src={card.image} alt={card.title} className="ai-program-image" />
            <div className="ai-program-content">
              <h2>{card.title}</h2>
              <p>{card.description}</p>

              {/* 🟢 Button replaced with <a> for href navigation */}
              <a href={card.href} className="ai-program-btn">
                {card.buttonText}
              </a>
            </div>
          </div>
        </section>
      ))}

      {/* ✅ Explore Button also updated with href */}
      <a href="/courses" className="ai-explore-btn">
        Explore now
      </a>
    </div>
  );
}

export default AIPrograms;
