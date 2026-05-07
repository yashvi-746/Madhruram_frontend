import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { submitContact } from "../utils/api";
import "../styles/form.css";

const ContactForm = () => {
  const [searchParams] = useSearchParams();
  const jobTitle = searchParams.get("job");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  useEffect(() => {
    if (jobTitle) {
      setFormData((prev) => ({
        ...prev,
        message: `Hi, I am interested in applying for the "${decodeURIComponent(jobTitle)}" position. Please review my application.`,
      }));
    }
  }, [jobTitle]);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (!/^[0-9]{10}$/.test(formData.contact.replace(/\D/g, ""))) {
      newErrors.contact = "Contact number must be exactly 10 digits";
    }

    if (formData.message.length > 500) {
      newErrors.message = "Message cannot exceed 500 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await submitContact(formData);
      setSuccessMessage(response.message || "Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        contact: "",
        message: "",
      });
      setErrors({});

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      const errorMsg = error.message || "Failed to send message. Please try again.";
      setErrorMessage(errorMsg);

      // Clear error message after 5 seconds
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "var(--primary-blue)" }}>
        Send us a Message
      </h2>

      {successMessage && (
        <div className="message success-message">{successMessage}</div>
      )}
      {errorMessage && <div className="message error-alert">{errorMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className={`form-group ${errors.name ? "error" : ""}`}>
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>

        <div className={`form-group ${errors.email ? "error" : ""}`}>
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>

        <div className={`form-group ${errors.contact ? "error" : ""}`}>
          <label htmlFor="contact">Contact Number *</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="10-digit phone number"
          />
          {errors.contact && (
            <div className="error-message">{errors.contact}</div>
          )}
        </div>

        <div className={`form-group ${errors.message ? "error" : ""}`}>
          <label htmlFor="message">Message (Optional)</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message (max 500 characters)"
          />
          <small style={{ color: "#6b7280" }}>
            {formData.message.length}/500
          </small>
          {errors.message && (
            <div className="error-message">{errors.message}</div>
          )}
        </div>

        <button
          type="submit"
          className="form-button"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
