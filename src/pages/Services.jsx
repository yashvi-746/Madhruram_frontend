import React from "react";
import ServicesSection from "../components/ServicesSection";

const Services = () => {
  return (
    <div>
      <div
        style={{
          background: "linear-gradient(135deg, var(--primary-blue) 0%, var(--dark-blue) 100%)",
          color: "white",
          padding: "3rem 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
          Our Services
        </h1>
        <p style={{ fontSize: "1.1rem", color: "var(--light-orange)" }}>
          Connecting Talent with Opportunity
        </p>
      </div>
      <ServicesSection />
    </div>
  );
};

export default Services;
