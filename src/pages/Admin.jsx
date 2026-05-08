import React, { useState, useEffect } from "react";
import "../styles/admin.css";

const DEFAULT_JOBS = [
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

const CATEGORIES = ["Banking & Insurance", "Education & Finance", "Pharma", "Manufacturing", "FMCG", "IT & Real Estate"];
const LOCATIONS = ["Vadodara", "Mumbai", "Bangalore", "Pune", "Ahmedabad", "Remote"];
const JOB_TYPES = ["Full-time", "Contract"];

const Admin = () => {
  const [jobs, setJobs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Form State
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [location, setLocation] = useState(LOCATIONS[0]);
  const [type, setType] = useState(JOB_TYPES[0]);
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");

  // Toast State
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  useEffect(() => {
    const saved = localStorage.getItem("madhuram_jobs");
    if (saved) {
      setJobs(JSON.parse(saved));
    } else {
      localStorage.setItem("madhuram_jobs", JSON.stringify(DEFAULT_JOBS));
      setJobs(DEFAULT_JOBS);
    }
  }, []);

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "success" }), 3000);
  };

  const handleResetForm = () => {
    setTitle("");
    setCompany("");
    setCategory(CATEGORIES[0]);
    setLocation(LOCATIONS[0]);
    setType(JOB_TYPES[0]);
    setSalary("");
    setExperience("");
    setDescription("");
    setIsEditing(false);
    setEditId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !company || !salary || !experience || !description) {
      showToast("Please fill in all fields", "error");
      return;
    }

    let updatedJobs = [];
    if (isEditing) {
      updatedJobs = jobs.map((job) =>
        job.id === editId
          ? {
              ...job,
              title,
              company,
              category,
              location,
              type,
              salary,
              experience,
              description,
            }
          : job
      );
      showToast("Job listing updated successfully!");
    } else {
      const newJob = {
        id: Date.now(),
        title,
        company,
        category,
        location,
        type,
        salary,
        experience,
        postedDate: "Just now",
        description,
      };
      updatedJobs = [newJob, ...jobs];
      showToast("New job listing added successfully!");
    }

    setJobs(updatedJobs);
    localStorage.setItem("madhuram_jobs", JSON.stringify(updatedJobs));
    handleResetForm();
  };

  const handleEditClick = (job) => {
    setIsEditing(true);
    setEditId(job.id);
    setTitle(job.title);
    setCompany(job.company);
    setCategory(job.category);
    setLocation(job.location);
    setType(job.type);
    setSalary(job.salary);
    setExperience(job.experience);
    setDescription(job.description);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this job listing?")) {
      const updatedJobs = jobs.filter((job) => job.id !== id);
      setJobs(updatedJobs);
      localStorage.setItem("madhuram_jobs", JSON.stringify(updatedJobs));
      showToast("Job listing deleted successfully!", "error");
    }
  };

  return (
    <div className="admin-page">
      {toast.show && (
        <div className={`toast toast-${toast.type}`}>
          {toast.message}
        </div>
      )}

      <div className="admin-banner">
        <h1>Admin Control Panel</h1>
        <p>Manage, add, and update career opportunities on Madhuram Jobs</p>
      </div>

      <div className="admin-container">
        {/* Form Section */}
        <div className="admin-form-card glass-card-admin">
          <h2>{isEditing ? "✏️ Edit Job Listing" : "➕ Add New Job Listing"}</h2>
          <form onSubmit={handleSubmit} className="job-form">
            <div className="form-grid-admin">
              <div className="form-group-admin">
                <label>Job Title</label>
                <input
                  type="text"
                  placeholder="e.g. Sales Executive"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="form-group-admin">
                <label>Company Name</label>
                <input
                  type="text"
                  placeholder="e.g. Madhuram Solutions"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div className="form-group-admin">
                <label>Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group-admin">
                <label>Location</label>
                <select value={location} onChange={(e) => setLocation(e.target.value)}>
                  {LOCATIONS.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group-admin">
                <label>Job Type</label>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                  {JOB_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group-admin">
                <label>Experience Required</label>
                <input
                  type="text"
                  placeholder="e.g. 2-5 Years"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>

              <div className="form-group-admin full-width-admin">
                <label>Salary Package</label>
                <input
                  type="text"
                  placeholder="e.g. ₹5,00,000 - ₹7,00,000 PA"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>

              <div className="form-group-admin full-width-admin">
                <label>Job Description</label>
                <textarea
                  rows="4"
                  placeholder="Describe the roles, responsibilities, and key qualifications required..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="form-actions-admin">
              <button type="submit" className="admin-submit-btn">
                {isEditing ? "Update Job Listing" : "Publish Job Listing"}
              </button>
              {isEditing && (
                <button type="button" className="admin-cancel-btn" onClick={handleResetForm}>
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Listings Section */}
        <div className="admin-listings-card glass-card-admin">
          <h2>📋 Active Job Listings ({jobs.length})</h2>
          {jobs.length > 0 ? (
            <div className="admin-jobs-table-wrapper">
              <table className="admin-jobs-table">
                <thead>
                  <tr>
                    <th>Job Title & Company</th>
                    <th>Category</th>
                    <th>Location</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job) => (
                    <tr key={job.id}>
                      <td>
                        <div className="table-job-info">
                          <strong>{job.title}</strong>
                          <span>{job.company}</span>
                        </div>
                      </td>
                      <td>
                        <span className="table-badge">{job.category}</span>
                      </td>
                      <td>{job.location}</td>
                      <td>
                        <div className="table-actions">
                          <button className="table-edit-btn" onClick={() => handleEditClick(job)}>
                            ✏️ Edit
                          </button>
                          <button className="table-delete-btn" onClick={() => handleDeleteClick(job.id)}>
                            🗑️ Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="admin-no-jobs">
              <p>No job listings found. Start by creating a new job listing using the form above!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
