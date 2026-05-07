import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/services.css";

const serviceDetails = {
  "banking-insurance": {
    name: "Banking & Insurance",
    icon: "🏦",
    bannerGradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
    tagline: "Secure your future with top financial institutions",
    description: "The banking and insurance sectors form the backbone of the economy. At Madhuram Jobs, we partner with top-tier financial institutions, multinational banks, private credit firms, and major insurance conglomerates to place highly skilled talent in roles that drive growth and secure futures.",
    whyChooseUs: [
      "Access to exclusive, non-public roles in elite banks",
      "Comprehensive assistance with resume profiling and interview preparation",
      "Focus on roles from entry-level positions to executive-level management",
      "High placement rates with competitive compensation packages"
    ],
    keyRoles: [
      "Investment Banker",
      "Financial Risk Manager",
      "Branch Relationship Manager",
      "Actuarial Analyst",
      "Loan & Credit Officer",
      "Wealth Advisory Executive"
    ]
  },
  "education-finance": {
    name: "Education & Finance",
    icon: "📚",
    bannerGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    tagline: "Empowering minds and enabling financial success",
    description: "The intersection of Education and Institutional Finance keeps the global knowledge economy running smoothly. We support top universities, prestigious K-12 schools, educational tech giants, and financial corporations with top-tier educators, operations personnel, and corporate finance strategists.",
    whyChooseUs: [
      "Strong network of premium academic institutions and business schools",
      "Sourcing roles that offer excellent work-life balance and steady career progression",
      "Dedicated recruitment consultants with specialized domain knowledge in academia and accounting"
    ],
    keyRoles: [
      "Academic Dean & Professor",
      "Financial Controller",
      "E-Learning Content Strategist",
      "Corporate Auditor",
      "University Registrar",
      "Senior Accountant & tax analyst"
    ]
  },
  "pharma": {
    name: "Pharma & Healthcare",
    icon: "💊",
    bannerGradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    tagline: "Pioneering careers in life sciences and medicine",
    description: "The pharmaceutical and healthcare industries are dynamic, highly regulated, and rapidly advancing. Madhuram Jobs connects highly qualified scientists, lab technicians, researchers, and sales specialists with globally recognized pharmaceutical companies, biotech laboratories, and research institutions.",
    whyChooseUs: [
      "Partnered with leading FDA-approved pharmaceutical production houses",
      "Strict confidentiality during executive searches for critical R&D positions",
      "Opportunities in medical sales and distribution with lucrative incentive structures"
    ],
    keyRoles: [
      "Clinical Research Associate (CRA)",
      "Quality Assurance / Quality Control Executive",
      "Medical Representative",
      "Formulation R&D Scientist",
      "Regulatory Affairs Executive",
      "Lab Technical Supervisor"
    ]
  },
  "manufacturing": {
    name: "Manufacturing",
    icon: "🏭",
    bannerGradient: "linear-gradient(135deg, #475569 0%, #64748b 100%)",
    tagline: "Powering modern production, logistics, and heavy industry",
    description: "From automotive assembly plants to high-tech heavy machinery industries, manufacturing relies on efficient operations, safety, and continuous process optimization. We recruit exceptional engineers, plant managers, and safety experts to streamline industrial production.",
    whyChooseUs: [
      "Connections with industry leaders in Automotive, Steel, Power, and Chemicals",
      "Opportunities that prioritize safety standards and lean manufacturing excellence",
      "Focus on roles that offer hands-on training and rapid upward mobility"
    ],
    keyRoles: [
      "Plant Operations Head",
      "Production Planning & Control (PPC) Engineer",
      "QA Inspection Engineer",
      "EHS (Environment, Health, Safety) Lead",
      "Procurement & Supply Chain Manager",
      "Maintenance Engineer"
    ]
  },
  "fmcg": {
    name: "FMCG (Fast-Moving Consumer Goods)",
    icon: "🛒",
    bannerGradient: "linear-gradient(135deg, #db2777 0%, #ec4899 100%)",
    tagline: "Fast-track your career with high-velocity global brands",
    description: "The FMCG sector is fast-paced, highly competitive, and consumer-focused. At Madhuram Jobs, we help top-tier consumer goods brands find professionals who thrive under dynamic market conditions, understand consumer behavior, and possess strong analytical and leadership skills.",
    whyChooseUs: [
      "Collaborative placement with global food, beverage, and personal care brands",
      "Exciting fast-paced roles in sales distribution, branding, and packaging",
      "Career growth options in pan-regional and national leadership positions"
    ],
    keyRoles: [
      "Brand Development Manager",
      "Territory Sales Officer",
      "Category Management Specialist",
      "Logistics & Warehousing Manager",
      "FMCG Procurement Specialist",
      "Market Research Analyst"
    ]
  },
  "it-real-estate": {
    name: "IT & Real Estate",
    icon: "💻",
    bannerGradient: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
    tagline: "Connecting high-tech software engineering with premium property development",
    description: "Digital transformation is reshaping every industry, while real estate remains the ultimate physical investment. We connect premium tech talent with top-tier software companies, as well as placing real estate consultants, architects, and sales directors with prestigious developers.",
    whyChooseUs: [
      "Direct lines to cutting-edge software engineering firms, startups, and SaaS corporations",
      "Relationships with leading real estate builders, commercial agents, and developers",
      "High-paying developer roles and high-commission real estate sales positions"
    ],
    keyRoles: [
      "Full Stack Software Engineer",
      "Cloud Infrastructure Architect",
      "IT Project Manager",
      "Real Estate Investment Advisor",
      "Property & Facility Manager",
      "Commercial Leasing Lead"
    ]
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceDetails[slug];

  if (!service) {
    return (
      <div className="service-detail-not-found">
        <h2>Service Not Found</h2>
        <p>The service you are looking for does not exist or has been moved.</p>
        <Link to="/services" className="back-btn">View All Services</Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      {/* Dynamic Header Banner */}
      <div className="service-banner" style={{ background: service.bannerGradient }}>
        <div className="banner-content">
          <span className="banner-icon-badge">{service.icon}</span>
          <h1 className="banner-title">{service.name}</h1>
          <p className="banner-tagline">{service.tagline}</p>
        </div>
      </div>

      <div className="service-detail-container">
        {/* Core Description */}
        <div className="service-main-content">
          <section className="detail-section">
            <h2>About the Industry</h2>
            <p className="detail-description">{service.description}</p>
          </section>

          {/* Key Recruiting Roles */}
          <section className="detail-section">
            <h2>Key Roles We Recruit For</h2>
            <div className="roles-grid">
              {service.keyRoles.map((role, idx) => (
                <div key={idx} className="role-chip">
                  <span className="role-dot">•</span> {role}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar/Why Choose Us Card */}
        <div className="service-sidebar">
          <div className="why-choose-us-card">
            <h3>Why Choose Madhuram Jobs?</h3>
            <ul>
              {service.whyChooseUs.map((point, idx) => (
                <li key={idx}>
                  <span className="check-mark">✓</span> {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="cta-action-card">
            <h3>Ready to take the next step?</h3>
            <p>Our expert recruitment counselors are ready to guide you towards your dream career in the {service.name} sector.</p>
            <Link to="/contact" className="cta-contact-btn">
              Apply Now / Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="bottom-navigation-nav">
        <Link to="/services" className="back-to-services-link">
          ← Back to All Services
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
