import React from "react";
import { Link } from "react-router-dom";
import "../styles/services.css";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      name: "Banking & Insurance",
      description: "Connect with leading banking and insurance sector opportunities",
      icon: "🏦",
      slug: "banking-insurance",
    },
    {
      id: 2,
      name: "Education & Finance",
      description: "Explore careers in education and financial services",
      icon: "📚",
      slug: "education-finance",
    },
    {
      id: 3,
      name: "Pharma",
      description: "Access pharmaceutical and healthcare industry positions",
      icon: "💊",
      slug: "pharma",
    },
    {
      id: 4,
      name: "Manufacturing",
      description: "Discover manufacturing and industrial sector jobs",
      icon: "🏭",
      slug: "manufacturing",
    },
    {
      id: 5,
      name: "FMCG",
      description: "Explore FMCG and consumer goods opportunities",
      icon: "🛒",
      slug: "fmcg",
    },
    {
      id: 6,
      name: "IT & Real Estate",
      description: "Find IT and real estate industry positions",
      icon: "💻",
      slug: "it-real-estate",
    },
  ];

  return (
    <section className="services-section">
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">
        We specialize in connecting talented professionals with opportunities across diverse industries
      </p>
      <div className="services-grid">
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/services/${service.slug}`}
            className="service-card"
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <span className="learn-more-link">Learn More →</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

