import React from "react";
import "../styles/about.css";


const About = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Madhuram Jobs</h2>
          <p>
            Madhuram Jobs is a leading job consultancy dedicated to connecting
            talented professionals with career opportunities that match their
            skills and aspirations. With years of experience in the recruitment
            industry, we have established strong partnerships with top companies
            across various sectors.
          </p>
          <p>
            Our team of expert recruiters understands the unique demands of
            different industries and works tirelessly to match the right
            candidates with the right roles. We believe in creating win-win
            situations for both job seekers and employers.
          </p>
          <p>
            We pride ourselves on our personalized approach to recruitment,
            taking the time to understand each candidate's career goals and
            helping them achieve professional growth.
          </p>
        </div>
        <div className="about-image">
          <img src={process.env.PUBLIC_URL + "/logo-full.jpg"} alt="Madhuram Jobs" />
        </div>
      </div>

      <div className="mission-vision">
        <div className="mv-card">
          <h3>🎯 Our Mission</h3>
          <p>
            To empower individuals and organizations by facilitating meaningful
            career connections that drive mutual growth and success.
          </p>
        </div>
        <div className="mv-card">
          <h3>👁️ Our Vision</h3>
          <p>
            To be the most trusted and innovative recruitment partner,
            recognized for transforming careers and building exceptional teams.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
