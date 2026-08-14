import './AcademicsOverview.css';
import { BookOpen, Globe, Award } from 'lucide-react';

function AcademicsOverview() {
  return (
    <section className="academics-overview section-padding">
      <div className="container">
        
        <div className="overview-header text-center">
          <span className="eyebrow gold-eyebrow">Academic Excellence</span>
          <h2>Our Educational Foundation</h2>
          <p className="overview-subtitle">
            At Milton Public School, we provide a <span className="highlight-gold">robust and holistic</span> educational 
            experience meticulously designed to prepare our students for <span className="highlight-gold">future global challenges</span>.
          </p>
        </div>

        <div className="overview-features">
          <div className="feature-card premium">
            <div className="feature-icon-wrapper">
              <Globe size={36} strokeWidth={1.5} />
            </div>
            <h3>English Medium</h3>
            <p>
              Our core curriculum is delivered entirely in English, ensuring our students 
              develop the <span className="highlight-gold">impeccable communication skills</span> required for the modern world.
            </p>
          </div>

          <div className="feature-card premium">
            <div className="feature-icon-wrapper">
              <BookOpen size={36} strokeWidth={1.5} />
            </div>
            <h3>State Board Curriculum</h3>
            <p>
              We adhere strictly to the rigorous and comprehensive <span className="highlight-gold">Karnataka State Board</span> syllabus, 
              providing a structured and proven pathway to <span className="highlight-gold">academic success</span>.
            </p>
          </div>

          <div className="feature-card premium">
            <div className="feature-icon-wrapper">
              <Award size={36} strokeWidth={1.5} />
            </div>
            <h3>Comprehensive Journey</h3>
            <p>
              From their very first steps in Early Education up to their 10th Standard graduation, 
              we champion our students through <span className="highlight-gold">every critical stage</span> of their growth.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AcademicsOverview;
