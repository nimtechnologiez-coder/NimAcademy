import React from "react";
import "../style/InstitutionalCollaboration.css";
import institution from "../images/institution.jpg"

function CollaborationBlock({ title, description, extra, image, reverse }) {
  return (
    <div
      className={`institutional-collab-container ${
        reverse ? "reverse-layout" : ""
      }`}
    >
      <div className="institutional-collab-content">
        <h1 className="collab-title">{title}</h1>
        <p
          className="collab-desc"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <p className="collab-bold">
          <strong>{extra}</strong>
        </p>
        <a href="/institution" className="collab-btn">
          Partner with us
        </a>
      </div>

      <div className="institutional-collab-image-wrap">
        <img
          src={institution}
          alt="Collaboration"
          className="institutional-collab-image"
        />
      </div>
    </div>
  );
}

function InstitutionalCollaboration() {
  const collaborations = [
    {
      title: "INSTITUTIONAL COLLABORATION",
      description: `At <strong>Nim Academy</strong>, we partner with colleges and institutions to enhance learning
      through industry-based training, workshops, and internships. Our collaborations help students gain
      hands-on experience in <strong>Cloud Computing, DevOps, Web Development</strong>, and
      <strong> Digital Technologies</strong>, preparing them for real-world careers.`,
      extra:
        "Join us in shaping a future-ready generation of tech professionals through meaningful academic partnerships.",
      image: "institution",
      reverse: false,
    },
  ];

  return (
    <section className="institutional-collab-section">
      {collaborations.map((data, index) => (
        <CollaborationBlock key={index} {...data} />
      ))}
    </section>
  );
}

export default InstitutionalCollaboration;
