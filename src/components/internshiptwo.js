import "../style/internshiptwo.css";
import interns01 from "../images/interns01.jpg";
import interns02 from "../images/interns02.jpg";
 
function InternshipCards() {
  return (
    <div className="internship-cards-wrapper">
      {/* Section 1 */}
      <div className="internship-row">
        <div className="internship-text">
          NIM makes it possible for you to achieve your fullest potential. We nurture our talent, and equip them to contribute to the creation of a better future. With exciting opportunities across a breadth of domains and industries, we encourage you to take the initial steps toward a fulfilling career with us.
        </div>
         <img src={interns01} alt="AI Internship" className="internship-img" />
      </div>
      {/* Section 2 */}
      <div className="internship-row">
        <img src={interns02} alt="AI Internship" className="internship-img" />
        <div className="internship-text">
          <span className="join-heading">Join <span className="highlight-green">us</span></span><br/>
         
          <p>
            Intern with NIM makes it possible for you to achieve your fullest potential. We nurture our talent, and equip them to contribute to the creation of a better future. With exciting opportunities across a breadth of domains and industries, we encourage you to take the initial steps toward a fulfilling career with us.
          </p>
        </div>
       
      </div>
   
    </div>
  );
}
export default InternshipCards;
 