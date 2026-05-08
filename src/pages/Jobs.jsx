import React, { useState, useEffect } from "react";
import "../styles/jobs.css";

const JOBS_DATA = [
  {
    id: 1,
    title: "Relationship Manager - Wealth Management",
    company: "Leading Private Sector Bank",
    category: "Banking & Insurance",
    location: "Mumbai",
    type: "Full-time",
    salary: "₹8,00,000 - ₹12,00,000 PA",
    experience: "3-6 Years",
    postedDate: "2 days ago",
    description: "Responsible for managing high-net-worth client portfolios, providing wealth advisory services, and cross-selling premium financial products."
  },
  {
    id: 2,
    title: "Senior Full Stack Developer (React & Node)",
    company: "NextGen Software Solutions",
    category: "IT & Real Estate",
    location: "Remote",
    type: "Full-time",
    salary: "₹12,00,000 - ₹18,00,000 PA",
    experience: "4-8 Years",
    postedDate: "1 day ago",
    description: "Join a high-growth tech team to build and maintain scalable enterprise SaaS platforms. Expertise in React, Node.js, and AWS is required."
  },
  {
    id: 3,
    title: "QA & QC Executive - Formulation",
    company: "Premium Pharmaceutical Corp",
    category: "Pharma",
    location: "Vadodara",
    type: "Full-time",
    salary: "₹4,50,000 - ₹6,50,000 PA",
    experience: "2-5 Years",
    postedDate: "3 days ago",
    description: "Ensure strict adherence to WHO-GMP standards for oral solid dosage formulations. Handle QA documentation and laboratory audits."
  },
  {
    id: 4,
    title: "Corporate Auditor & Senior Accountant",
    company: "Apex Financial Advisory",
    category: "Education & Finance",
    location: "Pune",
    type: "Full-time",
    salary: "₹6,00,000 - ₹9,00,000 PA",
    experience: "3-5 Years",
    postedDate: "5 days ago",
    description: "Conduct statutory and internal audits for corporate clients. Manage taxation filings, balance sheet finalization, and team reviews."
  },
  {
    id: 5,
    title: "Territory Sales Officer",
    company: "Global FMCG Brand",
    category: "FMCG",
    location: "Bangalore",
    type: "Full-time",
    salary: "₹5,00,000 - ₹7,50,000 PA",
    experience: "2-4 Years",
    postedDate: "4 days ago",
    description: "Drive sales volume and distribution network expansion within the assigned territory. Manage distributor relations and field sales executives."
  },
  {
    id: 6,
    title: "Production Planning (PPC) Engineer",
    company: "Automotive Components Ltd",
    category: "Manufacturing",
    location: "Vadodara",
    type: "Contract",
    salary: "₹4,00,000 - ₹6,00,000 PA",
    experience: "2-5 Years",
    postedDate: "1 week ago",
    description: "Coordinate plant production scheduling, material procurement, inventory control, and optimize machine utilization to meet delivery timelines."
  },
  {
    id: 7,
    title: "Real Estate Investment Advisor",
    company: "Sovereign Realty Group",
    category: "IT & Real Estate",
    location: "Mumbai",
    type: "Full-time",
    salary: "₹6,00,000 - ₹10,00,000 PA",
    experience: "1-4 Years",
    postedDate: "Just now",
    description: "Advise clients on high-value commercial and residential property investments. Generate leads, conduct site visits, and close transactions."
  },
  {
    id: 8,
    title: "Assistant Professor - Business Analytics",
    company: "Elite Business School",
    category: "Education & Finance",
    location: "Ahmedabad",
    type: "Full-time",
    salary: "₹8,00,000 - ₹11,00,000 PA",
    experience: "3-7 Years",
    postedDate: "2 weeks ago",
    description: "Deliver high-quality lectures on business analytics and statistics. Mentor PGDM students, publish research articles, and design curriculum."
  },
  {
    id: 9,
    title: "Underwriter - Health & Motor Insurance",
    company: "National Insurance Co",
    category: "Banking & Insurance",
    location: "Bangalore",
    type: "Contract",
    salary: "₹5,50,000 - ₹8,00,000 PA",
    experience: "2-5 Years",
    postedDate: "6 days ago",
    description: "Evaluate risk profiles, determine policy terms, and approve claims for health and commercial motor insurance portfolios."
  }
];

const CATEGORIES = ["All", "Banking & Insurance", "Education & Finance", "Pharma", "Manufacturing", "FMCG", "IT & Real Estate"];
const LOCATIONS = ["All", "Vadodara", "Mumbai", "Bangalore", "Pune", "Ahmedabad", "Remote"];
const JOB_TYPES = ["All", "Full-time", "Contract"];

const Jobs = () => {
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem("madhuram_jobs");
    if (saved) {
      return JSON.parse(saved);
    }
    localStorage.setItem("madhuram_jobs", JSON.stringify(JOBS_DATA));
    return JOBS_DATA;
  });

  useEffect(() => {
    const saved = localStorage.getItem("madhuram_jobs");
    if (saved) {
      setJobs(JSON.parse(saved));
    }
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedLocation("All");
    setSelectedType("All");
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
    const matchesLocation = selectedLocation === "All" || job.location === selectedLocation;
    const matchesType = selectedType === "All" || job.type === selectedType;

    return matchesSearch && matchesCategory && matchesLocation && matchesType;
  });

  return (
    <div className="jobs-page">
      <div className="jobs-banner">
        <h1>Explore Career Opportunities</h1>
        <p>Find your next professional leap in top industries across India</p>
      </div>

      <div className="jobs-container">
        {/* Search & Filter Controls */}
        <div className="search-filter-card">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search by job title, company, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button className="clear-search" onClick={() => setSearchTerm("")}>
                ✕
              </button>
            )}
          </div>

          <div className="filters-grid">
            <div className="filter-group">
              <label>Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {LOCATIONS.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Job Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {JOB_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group reset-group">
              <button className="reset-button" onClick={handleResetFilters}>
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Listings Count */}
        <div className="listings-count">
          <p>
            Showing <strong>{filteredJobs.length}</strong> {filteredJobs.length === 1 ? "job" : "jobs"} available
          </p>
        </div>

        {/* Job Cards Grid */}
        {filteredJobs.length > 0 ? (
          <div className="jobs-grid">
            {filteredJobs.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-card-header">
                  <div className="job-badge">{job.category}</div>
                  <span className="job-date">{job.postedDate}</span>
                </div>
                <h3 className="job-title">{job.title}</h3>
                <h4 className="job-company">{job.company}</h4>
                <p className="job-desc">{job.description}</p>
                
                <div className="job-details">
                  <div className="detail-item">
                    <span className="detail-icon">📍</span>
                    <span>{job.location}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">💼</span>
                    <span>{job.type}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">⏳</span>
                    <span>{job.experience}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">💰</span>
                    <span>{job.salary}</span>
                  </div>
                </div>

                <div className="job-card-footer">
                  <a href={`/contact?job=${encodeURIComponent(job.title)}`} className="apply-btn">
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-jobs-found">
            <span className="no-jobs-icon">🔍</span>
            <h3>No Jobs Match Your Filters</h3>
            <p>Try adjusting your search terms or resetting the filters to explore other options.</p>
            <button className="reset-button-large" onClick={handleResetFilters}>
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
