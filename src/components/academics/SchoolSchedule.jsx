import './SchoolSchedule.css';
import { Clock, Calendar, CheckCircle } from 'lucide-react';

function SchoolSchedule() {
  return (
    <section className="school-schedule section-padding">
      <div className="container">
        
        <div className="schedule-content">
          <div className="schedule-text">
            <span className="eyebrow">Operating Hours</span>
            <h2>Structured for Academic Excellence</h2>
            
            <p className="schedule-description">
              Our daily schedule is carefully designed to maximize student focus, 
              incorporating dedicated times for intensive learning, collaborative 
              projects, and essential extracurricular activities.
            </p>
            
            <div className="schedule-cards">
              <div className="schedule-box premium-blue">
                <div className="schedule-icon-wrapper">
                  <Clock size={32} strokeWidth={1.5} />
                </div>
                <div className="schedule-details">
                  <h3>School Hours</h3>
                  <div className="time-display">9:30 AM <span className="time-sep">-</span> 4:15 PM</div>
                  <p>Regular Academic Classes</p>
                </div>
              </div>
              
              <div className="schedule-box premium-white">
                <div className="schedule-icon-wrapper">
                  <Calendar size={32} strokeWidth={1.5} />
                </div>
                <div className="schedule-details">
                  <h3>Office & Admin Hours</h3>
                  <div className="time-display small">Mon-Sat: 10:00 AM - 6:45 PM</div>
                  <div className="time-display small">Sunday: 11:30 AM - 4:00 PM</div>
                  <p>Admissions, Fees, & Inquiries</p>
                </div>
              </div>
            </div>

            <ul className="schedule-benefits">
              <li>
                <CheckCircle size={20} className="benefit-icon" />
                <span>Optimized learning periods for peak concentration</span>
              </li>
              <li>
                <CheckCircle size={20} className="benefit-icon" />
                <span>Dedicated administrative support throughout the week</span>
              </li>
              <li>
                <CheckCircle size={20} className="benefit-icon" />
                <span>Structured balance of academics and co-curriculars</span>
              </li>
            </ul>
          </div>
          
          <div className="schedule-image-wrapper">
             <div className="schedule-image-frame">
                <img 
                  src="/images/school-building.png" 
                  alt="Milton Public School Campus" 
                  className="schedule-image"
                />
             </div>
             <div className="decorative-circle-accent"></div>
             <div className="decorative-dots-accent"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default SchoolSchedule;
