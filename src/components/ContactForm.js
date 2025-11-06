import React from "react";
import "../style/ContactForm.css";

function ContactForm() {
  return (
    <div className="contact-form-outer">
      <form className="contact-form-inner">
        <input type="text" placeholder="Name" className="contact-input" />
        <input type="email" placeholder="E-Mail Address" className="contact-input" />
        <input type="tel" placeholder="Phone Number" className="contact-input" />
        <textarea placeholder="Your Message" className="contact-textarea" rows={7} />
        <button className="contact-submit" type="submit">Submit Now</button>
      </form>
    </div>
  );
}

export default ContactForm;
