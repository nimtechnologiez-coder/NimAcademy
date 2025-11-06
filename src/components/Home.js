import React from "react";
import Navbar from "../components/Navbar";
import "../style/Home.css";

function Home() {
  return (
    <div className="home-body">
      {/* Main Section */}
      <div className="main-wrapperr">

      
         <Navbar/>
        {/* Hero Section */}
        <div className="hero">
      
          <h1 className="hero-title">
            <span className="hero-highlight">NIM</span> ACADEMY
          </h1>
          <p className="hero-subtitle">MASTER IT SKILLS. BUILD YOUR FUTURE</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
