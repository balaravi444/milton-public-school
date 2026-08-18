import './AboutJourney.css';
import { BookOpen, MapPin, GraduationCap, Trophy } from 'lucide-react';

function AboutJourney() {
  return (
    <section className="about-journey section-padding">
      <div className="container">
        
        <div className="journey-grid">
          <div className="journey-image-wrapper">
            {/* The main school building image */}
            <div className="journey-image-frame">
               <img loading="lazy"
                 src="/images/school-building.png" 
                 alt="Milton Public School Campus" 
                 className="journey-image"
               />
            </div>
            <div className="journey-experience-badge">
              <span className="badge-year">2009</span>
              <span className="badge-text">Legacy of Excellence</span>
            </div>
            
            <div className="decorative-dots left"></div>
          </div>
          
          <div className="journey-content">
            <span className="eyebrow highlight-glow">Our Legacy</span>
            <h2 className="journey-title">A Decade of Excellence in Manvi</h2>
            
            <p className="journey-description">
              Since our foundation in 2009 under the visionary leadership of the M.N.J.V.M Educational Trust, Milton Public School has stood as a beacon of academic rigor and holistic development in the heart of Manvi.
            </p>
            
            <p className="journey-description">
              We believe that true education transcends the classroom. By seamlessly blending the robust Karnataka State Board curriculum with character-building initiatives, we empower our students—from their first steps in Baby Class to their graduation in 10th Standard—to become the innovative leaders of tomorrow.
            </p>

            <div className="journey-stats">
              <div className="journey-stat-card">
                 <div className="stat-icon-wrapper">
                    <BookOpen size={24} />
                 </div>
                 <div className="stat-info">
                   <h4>Curriculum</h4>
                   <p>State Board</p>
                 </div>
              </div>
              
              <div className="journey-stat-card">
                 <div className="stat-icon-wrapper">
                    <GraduationCap size={24} />
                 </div>
                 <div className="stat-info">
                   <h4>Academics</h4>
                   <p>Baby Class - 10th Std</p>
                 </div>
              </div>
              
              <div className="journey-stat-card">
                 <div className="stat-icon-wrapper">
                    <MapPin size={24} />
                 </div>
                 <div className="stat-info">
                   <h4>Location</h4>
                   <p>Manvi, Karnataka</p>
                 </div>
              </div>

              <div className="journey-stat-card">
                 <div className="stat-icon-wrapper">
                    <Trophy size={24} />
                 </div>
                 <div className="stat-info">
                   <h4>Medium</h4>
                   <p>English Medium</p>
                 </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutJourney;
