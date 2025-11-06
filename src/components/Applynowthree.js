import "../style/Applynowthree.css";
 
function EnrollmentForm() {
  return (
    <form className="enroll-form-card">
      <input className="enroll-input" type="text" placeholder="First Name" required />
      <input className="enroll-input" type="text" placeholder="Last Name" required />
      <input className="enroll-input" type="email" placeholder="E-Mail Address" required />
      <input className="enroll-input" type="tel" placeholder="Phone Number" required />
      <select className="enroll-input" required>
        <option value="">Select Course</option>
        <option value="Full Stack">Full Stack</option>
        <option value="AI Program">AI Program</option>
        <option value="Data Science">Data Science</option>
        {/* Add more options if needed */}
      </select>
      <button className="enroll-submit-btn" type="submit">Submit Now</button>
    </form>
  );
}
export default EnrollmentForm;
 