import React from "react";
import "../style/ContactFor.css";
import contactImg from "../images/ai.jpg";

function ContactForm() {
  return (
    <div className="contact-container">
      {/* ✉️ Left Section - Form */}
      <div className="contact-form-section">
        <h2>Have Questions? We're Just a Message Away!</h2>
        <form className="form-fields">
          <div className="row">
            <div>
              <label>First Name</label>
              <input type="text" name="firstName" />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" name="lastName" />
            </div>
          </div>

          <label>E-mail</label>
          <input type="email" name="email" />

          <label>Phone Number</label>
          <input type="text" name="phone" />

          <label>Subject</label>
          <input type="text" name="subject" />

          <label>Message</label>
          <textarea name="message" rows="4"></textarea>

          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </div>

      {/* 📞 Right Section - Info */}
      <div className="contact-info-section">
        <img src={contactImg} alt="Office" className="contact-img" />

        <div className="info">
          <div className="info-block">
            <span className="icon mail" />
            <div>
              <div className="info-title">Mail</div>
              <div>contactnimacademy@gmail.com</div>
            </div>
          </div>

          <div className="info-block">
            <span className="icon phone" />
            <div>
              <div className="info-title">Phone</div>
              <div>+91-7397224594</div>
            </div>
          </div>

          <div className="info-block">
            <span className="icon address" />
            <div>
              <div className="info-title">Address</div>
              <div>
                1st Floor, Opposite to Industry, North Konam, Rajakkamangalam
                Road, PIN: 629004, Tamil Nadu, India
              </div>
            </div>
          </div>

          <div className="info-block">
            <span className="icon hours" />
            <div>
              <div className="info-title">Working Hours</div>
              <div>Mon - Sun 10 am - 6:30 pm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
