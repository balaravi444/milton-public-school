import './SchoolSchedule.css';
import { Clock, Calendar, CheckCircle2 } from 'lucide-react';

function SchoolSchedule() {
  return (
    <section className="school-schedule section-padding">
      <div className="container">
        
        <div className="schedule-content">
          <div className="schedule-text">
            <span className="eyebrow">Daily Routine</span>
            <h2>School Hours & Environment</h2>
            
            <p className="schedule-description">
              Our daily schedule is designed to optimize learning while ensuring 
              students have adequate time for extracurricular activities, rest, 
              and socialization.
            </p>

            <div className="schedule-box">
              <div className="schedule-icon-wrapper">
                <Clock size={30} />
              </div>
              <div className="schedule-details">
                <h3>Official School Hours</h3>
                <div className="time-display">9:30 AM — 4:15 PM</div>
                <p>Monday to Saturday</p>
              </div>
            </div>
            
            <ul className="schedule-benefits">
              <li>
                <CheckCircle2 size={20} className="benefit-icon" />
                <span>Structured academic periods</span>
              </li>
              <li>
                <CheckCircle2 size={20} className="benefit-icon" />
                <span>Dedicated time for extracurriculars</span>
              </li>
              <li>
                <CheckCircle2 size={20} className="benefit-icon" />
                <span>Supervised lunch and recreational breaks</span>
              </li>
            </ul>
          </div>
          
          <div className="schedule-image-wrapper">
             <div className="schedule-image-frame">
                <img 
                  src="/images/school-building.png" 
                  alt="Students at Milton Public School" 
                  className="schedule-image"
                />
                <div className="decorative-circle-accent"></div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default SchoolSchedule;
