import React, { useEffect, useState } from "react";
import "../style/Gallery.css";

// 🖼 Import your local images
import img1 from "../images/images2.jpg";
import img2 from "../images/images1.jpg";
import img3 from "../images/images3.jpg";
import img4 from "../images/images4.jpg";
import img5 from "../images/images5.jpg";
import img6 from "../images/iamgess.jpg";
// import img7 from "../images/gallery7.jpg";
// import img8 from "../images/gallery8.jpg";
// import img9 from "../images/gallery9.jpg";
// import img10 from "../images/gallery10.jpg";
// import img11 from "../images/gallery11.jpg";
// import img12 from "../images/gallery12.jpg";
// import img13 from "../images/gallery13.jpg";
// import img14 from "../images/gallery14.jpg";
// import img15 from "../images/gallery15.jpg";

function Gallery() {
  // 🧩 Group your imported images into sets
  const imageSets = [
    [img1,img2,img3,img4],
    [img5,img6],
    [],
  ];

  const [index, setIndex] = useState(0);

  // ⏳ Auto-slide images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imageSets.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [imageSets.length]);

  return (
    <section className="gallery-wrapper">
      <h2 className="gallery-heading">
        <span className="text-blue">OUR</span>{" "}
        <span className="text-green">GALLERY</span>
      </h2>

      <div className="gallery-grid-container fade-in">
        {imageSets[index].map((img, i) => (
          <div className={`gallery-card ${i === 0 ? "tall" : ""}`} key={i}>
            <img src={img} alt={`Gallery ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
