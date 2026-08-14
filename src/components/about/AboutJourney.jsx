import './AboutJourney.css';
import { BookOpen, MapPin, Users } from 'lucide-react';

function AboutJourney() {
  return (
    <section className="about-journey section-padding">
      <div className="container">
        
        <div className="journey-grid">
          <div className="journey-image-wrapper">
            {/* The main school building image */}
            <div className="journey-image-frame">
               <img 
                 src="/images/school-building.png" 
                 alt="Milton Public School Campus" 
                 className="journey-image"
               />
               <div className="journey-experience-badge">
                 <span className="badge-year">2009</span>
                 <span className="badge-text">Established</span>
               </div>
            </div>
          </div>
          
          <div className="journey-content">
            <span className="eyebrow">Our Journey</span>
            <h2 className="journey-title">A Legacy of Quality Education in Manvi</h2>
            
            <p className="journey-description">
              Established in the academic year 2009-10, Milton Public School has grown 
              to become a trusted institution in Manvi. We provide a rigorous and 
              well-rounded English Medium education following the Karnataka State Board curriculum.
            </p>
            
            <p className="journey-description">
              From Baby Class up to the 10th Standard, our focus has always been on nurturing 
              young minds, fostering a love for learning, and preparing our students to excel 
              in an ever-changing world.
            </p>

            <div className="journey-stats">
              <div className="journey-stat-card">
                 <div className="stat-icon-wrapper">
                    <BookOpen size={24} />
                 </div>
                 <div className="stat-info">
                   <h4>Curriculum</h4>
                   <p>Karnataka State Board</p>
                 </div>
              </div>

              <div className="journey-stat-card">
                 <div className="stat-icon-wrapper">
                    <Users size={24} />
                 </div>
                 <div className="stat-info">
                   <h4>Classes</h4>
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
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutJourney;
