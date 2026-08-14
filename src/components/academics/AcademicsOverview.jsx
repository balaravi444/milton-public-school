import './AcademicsOverview.css';
import { BookOpen, Globe, Award } from 'lucide-react';

function AcademicsOverview() {
  return (
    <section className="academics-overview section-padding">
      <div className="container">
        
        <div className="overview-header text-center">
          <span className="eyebrow">Academic Excellence</span>
          <h2>Our Educational Foundation</h2>
          <p className="overview-subtitle">
            At Milton Public School, we provide a robust and holistic educational 
            experience designed to prepare students for future challenges.
          </p>
        </div>

        <div className="overview-features">
          <div className="feature-card">
            <div className="feature-icon">
              <Globe size={32} />
            </div>
            <h3>English Medium</h3>
            <p>
              All our core subjects are taught in English, ensuring our students 
              develop strong communication skills for the modern world.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <BookOpen size={32} />
            </div>
            <h3>State Board Curriculum</h3>
            <p>
              We follow the rigorous and comprehensive Karnataka State Board syllabus, 
              providing a structured pathway to academic success.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Award size={32} />
            </div>
            <h3>Comprehensive Journey</h3>
            <p>
              From the first steps in Baby Class all the way to 10th Standard, 
              we support our students through every critical stage of their growth.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AcademicsOverview;
