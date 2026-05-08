import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/hero.css";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-gradient-overlay"></div>
      <div className="hero-container">
        <div className={`glass-card ${loaded ? "fade-in-active" : ""}`}>
          <img 
            src={process.env.PUBLIC_URL + "/logo-full.jpg"} 
            alt="Madhuram Jobs Full Logo" 
            className="hero-logo" 
          />
          <h1 className="hero-headline">
            Your Growth, <span className="highlight-text">Our Mission</span>
          </h1>
          <p className="hero-subtext">
            Connecting premium Indian talent with top-tier career opportunities. We specialize in fast-tracking careers across Banking, Manufacturing, Pharma, FMCG, and IT.
          </p>
          <div className="hero-cta-group">
            <Link to="/jobs" className="cta-button primary-cta">
              🔍 Find a Job
            </Link>
            <Link to="/contact" className="cta-button secondary-cta">
              🤝 Hire Talent
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

