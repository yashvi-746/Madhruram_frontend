import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
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
          Get in Touch
        </h1>
        <p style={{ fontSize: "1.1rem", color: "var(--light-orange)" }}>
          Have questions? We'd love to hear from you.
        </p>
      </div>
      <ContactForm />
      <div style={{ maxWidth: "1200px", margin: "3rem auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
          <div>
            <h3 style={{ color: "var(--primary-blue)", marginBottom: "0.5rem" }}>
              📧 Email
            </h3>
            <p>jobs.madhuram@gmail.com</p>
          </div>
          <div>
            <h3 style={{ color: "var(--primary-blue)", marginBottom: "0.5rem" }}>
              📱 Phone
            </h3>
            <p>+91-80000646627</p>
          </div>
          <div>
            <h3 style={{ color: "var(--primary-blue)", marginBottom: "0.5rem" }}>
              📍 Address
            </h3>
            <p>A/12 Shubhlaxmi Society,Nr.Ayurvedik Crossing, Wagodia Road, Vadoadara , Gujarat - 390019</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
