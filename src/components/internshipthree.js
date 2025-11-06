import "../style/internshipthree.css";
import interncardss from "../images/interncardss.jpg";
 
const InternCard = () => {
  return (
    <div className="internship-container">
        <img src={interncardss} alt="Internship Background" className="background-image" />
     
      <div className="blur-card">
        <h1>
          <span className="blue">INTERN</span>
          <span className="green">SHIP</span>
        </h1>
        <a href="/apply" className="apply-btn">
  APPLY NOW
</a>

      </div>
    </div>
  );
};
export default InternCard;
 