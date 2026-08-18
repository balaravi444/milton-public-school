import './AboutLeadership.css';
import { Quote } from 'lucide-react';

function AboutLeadership() {
  return (
    <section className="about-leadership section-padding">
      <div className="container">

        <div className="leadership-content">
          <div className="leadership-text">
            <span className="eyebrow">Message from the Secretary & Managing Director</span>
            <h2>Shaping Character, Values, and Futures</h2>

            <div className="quote-icon">
              <Quote size={40} />
            </div>

            <blockquote className="leadership-quote">
              <p>
                "At Milton Public School, we believe that education is not merely the accumulation of facts, but the ignition of curiosity. It is about shaping the character, values, and the very future of our students. Since our founding, our dedicated educators have worked tirelessly to cultivate a nurturing environment where every child feels valued, intellectually challenged, and inspired to succeed."
              </p>

              <p>
                "We are not just preparing students for exams; we are preparing them for life. We welcome you to our community and look forward to partnering with you in your child's extraordinary educational journey."
              </p>
            </blockquote>

            <div className="leadership-author">
              <h4 className="author-name">D.V. Prakash</h4>
              <p className="author-title">Secretary & Managing Director, Milton Public School</p>
            </div>
          </div>

          <div className="leadership-image-wrapper">
            <div className="leadership-image-frame">
              <img loading="lazy" src="/images/management/D.V. PRAKASH.webp" alt="D.V.Prakash" className="leadership-image" />

              <div className="decorative-element square"></div>
              <div className="decorative-element dots"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutLeadership;
