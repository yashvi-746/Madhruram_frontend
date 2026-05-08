import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo-section">
              <Link to="/">
                <img src={process.env.PUBLIC_URL + "/logo-full.jpg"} alt="Madhuram Jobs Logo" className="footer-logo-img" />
              </Link>
              <p>
                Leading job consultancy connecting talent with opportunities.
              </p>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/jobs">Jobs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/admin" style={{ opacity: 0.65 }}>Admin Portal</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li>
                <Link to="/services/banking-insurance">Banking & Insurance</Link>
              </li>
              <li>
                <Link to="/services/education-finance">Education & Finance</Link>
              </li>
              <li>
                <Link to="/services/pharma">Pharma</Link>
              </li>
              <li>
                <Link to="/services/manufacturing">Manufacturing</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="footer-contact-info">
              <p>
                <span className="contact-icon">📧</span>
                <span className="contact-text">
                  <strong>Email:</strong> jobs.madhuram@gmail.com
                </span>
              </p>
              <p>
                <span className="contact-icon">📱</span>
                <span className="contact-text">
                  <strong>Phone:</strong> +91-80000646627
                </span>
              </p>
              <p>
                <span className="contact-icon">📍</span>
                <span className="contact-text">
                  <strong>Address:</strong> A/12 Shubhlaxmi Society, Nr. Ayurvedik Crossing, Wagodia Road, Vadoadara, Gujarat - 390019
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2024 Madhuram Jobs. All rights reserved. Your Growth Our
            Mission.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

