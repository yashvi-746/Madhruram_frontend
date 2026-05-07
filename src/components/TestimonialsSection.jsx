import React, { useState, useEffect } from "react";
import "../styles/testimonials.css";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Patel",
    role: "Senior Full Stack Engineer",
    feedback: "Madhuram Jobs helped me secure my dream software engineering role in under 2 weeks! Their personalized guidance and mock preparation made a huge difference. Highly recommended consultancy!",
    rating: 5,
    avatar: "👨‍💻"
  },
  {
    id: 2,
    name: "Dr. Sunita Sharma",
    role: "VP Research & Development",
    feedback: "As a pharmaceutical research head, I was looking for very specific laboratory positions. Madhuram Jobs understood my technical background immediately and placed me at an FDA-approved formulation firm.",
    rating: 5,
    avatar: "👩‍🔬"
  },
  {
    id: 3,
    name: "Amit Mehta",
    role: "AVP Wealth Management",
    feedback: "The recruiters at Madhuram Jobs have an exceptional network in the private banking sector. They negotiated a wonderful package and guided me through every interview step with absolute professionalism.",
    rating: 5,
    avatar: "👨‍💼"
  },
  {
    id: 4,
    name: "Karan Desai",
    role: "Territory Sales Head",
    feedback: "Extremely fast placements! I got connected to top global FMCG brands through their platform. They managed the coordination seamlessly, and I couldn't be happier with my career progression.",
    rating: 5,
    avatar: "🏃‍♂️"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="section-title">Success Stories</h2>
        <p className="section-subtitle">Read what our placed candidates and corporate partners say about us</p>

        <div className="testimonial-slider-container">
          <button className="slider-nav-btn prev-btn" onClick={prevSlide} aria-label="Previous testimonial">
            ‹
          </button>

          <div className="testimonial-card-wrapper">
            {TESTIMONIALS.map((t, idx) => {
              let positionClass = "slide-inactive";
              if (idx === activeIndex) {
                positionClass = "slide-active";
              }

              return (
                <div key={t.id} className={`testimonial-card ${positionClass}`}>
                  <div className="testimonial-rating">
                    {"★".repeat(t.rating)}
                  </div>
                  <p className="testimonial-feedback">“{t.feedback}”</p>
                  
                  <div className="testimonial-author">
                    <span className="author-avatar">{t.avatar}</span>
                    <div className="author-info">
                      <h4 className="author-name">{t.name}</h4>
                      <p className="author-role">{t.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="slider-nav-btn next-btn" onClick={nextSlide} aria-label="Next testimonial">
            ›
          </button>
        </div>

        <div className="testimonial-dots">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === activeIndex ? "dot-active" : ""}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
