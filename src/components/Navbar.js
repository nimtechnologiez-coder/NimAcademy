import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/Navbar.css";
import logo from "../images/nimlogo.png"; // ✅ your logo image (place it in src/assets folder)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`nim-navbar ${menuOpen ? "menu-open" : ""}`}>
      {/* 🌟 Logo with Image */}
      <div className="nim-logo">
        <Link to="/" className="nim-logo-link">
          <img src={logo} alt="NIM Academy Logo" className="nim-logo-img" />
          
        </Link>
      </div>

      {/* 🌟 Hamburger Icon */}
      <div
        className={`nim-hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        role="button"
        tabIndex={0}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* 🌟 Desktop Menu */}
      <ul className="nim-nav-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/courses" ? "active" : ""}>
          <Link to="/courses">Courses</Link>
        </li>
        <li className={location.pathname === "/nextgen" ? "active" : ""}>
          <Link to="/nextgen">NextGen</Link>
        </li>
        <li className={location.pathname === "/internship" ? "active" : ""}>
          <Link to="/internship">Internship</Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>

      {/* 🌟 Apply Button */}
      <div className="nim-btn-wrap">
        <Link to="/apply">
          <button className="nim-apply-btn">Apply Now</button>
        </Link>
      </div>

      {/* 🌟 Mobile Slide Menu */}
      <div className={`nim-mobile-menu ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={handleLinkClick}>Home</Link>
          </li>
          <li>
            <Link to="/courses" onClick={handleLinkClick}>Courses</Link>
          </li>
          <li>
            <Link to="/nextgen" onClick={handleLinkClick}>NextGen AI</Link>
          </li>
          <li>
            <Link to="/internship" onClick={handleLinkClick}>Internship</Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleLinkClick}>Contact Us</Link>
          </li>
        </ul>

        <Link to="/apply" onClick={handleLinkClick}>
          <button className="nim-mobile-apply">Apply Now</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
