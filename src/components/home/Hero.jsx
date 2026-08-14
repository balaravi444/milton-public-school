import { ArrowRight, Phone, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">

      {/* Decorative background shapes */}
      <div className="hero-background-shape hero-shape-one" />
      <div className="hero-background-shape hero-shape-two" />

      <div className="container hero-container">

        {/* LEFT SIDE */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          {/* School identity badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Milton Public School · Manvi
          </div>

          {/* PRIMARY SCHOOL IDENTITY */}
          <div className="hero-identity-block">
            <h2 className="hero-trust-header">
              ಶ್ರೀ ಎಂ.ಎನ್.ಜೆ.ವಿ.ಎಂ. ಶೈಕ್ಷಣಿಕ ಮತ್ತು ಸೇವಾ ಟ್ರಸ್ಟ್ (ರಿ).ಮಾನ್ವಿ.
            </h2>
            <h1 className="hero-title">
              <span className="hero-school-name">
                MILTON PUBLIC SCHOOL
              </span>
              <span className="hero-location">
                MANVI
              </span>
            </h1>

            {/* Description */}
            <p className="hero-description">
              English Medium education under the Karnataka State Board,
              serving students from Baby Class to 10th Standard.
            </p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="hero-actions">

            <Link
              to="/admissions"
              className="hero-btn hero-btn-primary"
            >
              Admission Enquiry
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="hero-btn hero-btn-secondary"
            >
              Contact School
            </Link>

          </div>

          {/* SCHOOL HOURS + PHONE */}
          <div className="hero-meta">

            <div className="hero-meta-item">
              <div className="hero-meta-icon">
                <Clock3 size={19} />
              </div>

              <div>
                <span>School Hours</span>
                <strong>9:30 AM – 4:15 PM</strong>
              </div>
            </div>

            <div className="hero-meta-divider" />

            <a
              href="tel:+918088291165"
              className="hero-meta-item hero-phone"
            >
              <div className="hero-meta-icon">
                <Phone size={19} />
              </div>

              <div>
                <span>Call the School</span>
                <strong>80882 91165</strong>
              </div>
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE — SCHOOL INFORMATION CARD */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.15
          }}
        >

          <div className="hero-logo-card">

            <div className="hero-logo-glow" />

            <img
              src="/images/milton-public-school-logo.png"
              alt="Milton Public School Manvi logo"
            />

            <div className="hero-card-line" />

            <p>
              Established 2009–2010
            </p>

            <div className="hero-card-details">
              <span>
                STATE BOARD
              </span>

              <span>
                ENGLISH MEDIUM
              </span>
            </div>

            <div className="hero-class-range">
              BABY CLASS TO 10TH STANDARD
            </div>

          </div>

        </motion.div>

      </div>

      {/* BOTTOM WAVE */}
      <div className="hero-bottom-wave">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,70 C240,110 430,5 720,45 C1010,85 1200,10 1440,45 L1440,100 L0,100 Z"
          />
        </svg>
      </div>

    </section>
  );
}

export default Hero;