import React from "react";
import {
  FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube
} from "react-icons/fa";
import "../style/footer.css";
// import CustomCursor from "./cursor";

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-left">
        <p className="footer-desc">
          NIM Academy helps learners become skilled IT professionals by offering high-quality, practical, and industry-relevant education.<br />
          IT Courses in Web Development, Data Analytics, AI & More.
        </p>

        <div className="footer-social">
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/company/nim-academy"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/nim_academy/"><FaInstagram /></a>
          <a href="https://www.youtube.com/channel/UCTjUuiaIyNPCtgNKa99A8Bg"><FaYoutube /></a>
        </div>
      </div>

      <div className="footer-links-right">
        <div>
          <ul>
            <li><a href="#">Accessibility on NIM Academy</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Terms and conditions</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li><a href="#">Help Centre</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">NIM Education</a></li>
            <li><a href="#">Make a donation</a></li>
            <li><a href="#">About us</a></li>
          </ul>
        </div>
      </div>

      {/* <CustomCursor /> */}
    </footer>
  );
}
