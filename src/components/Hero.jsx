import React from "react";
import { Link } from "react-router-dom";
import "../styles/hero.css";


const Hero = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url('/hero-bg.png')` }}>
      <div className="hero-overlay">
        <div className="glass-card">
          <img src={process.env.PUBLIC_URL + "/logo-full.jpg"} alt="Madhuram Jobs Full Logo" className="hero-logo" />
          <h1>Your Growth Our Mission</h1>
          <p>Connecting talent with opportunity across industries.</p>
          <Link to="/contact" className="cta-button">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

