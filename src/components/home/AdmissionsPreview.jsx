import { Link } from 'react-router-dom';
import { ArrowRight, FileCheck, PhoneCall } from 'lucide-react';
import './AdmissionsPreview.css';

function AdmissionsPreview() {
  return (
    <section className="admissions-preview-section section-padding">
      <div className="container">
        
        <div className="admissions-preview-content">
          <div className="admissions-preview-text">
            <span className="eyebrow">Join Milton Public School</span>
            
            <h2>Admissions Open</h2>
            
            <p>
              We are now accepting admissions for the upcoming academic year. 
              Give your child the best foundation from Baby Class to 10th Standard 
              with our English Medium, Karnataka State Board curriculum.
            </p>

            <div className="admissions-cta-group">
              <Link to="/admissions" className="btn-primary admissions-btn">
                <FileCheck size={20} />
                Admission Process
                <ArrowRight size={18} className="arrow-icon" />
              </Link>
              
              <div className="btn-secondary call-btn" style={{ padding: '10px 25px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <PhoneCall size={24} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '1.4' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px', opacity: 0.8, marginBottom: '4px' }}>Call for more information</span>
                  <a href="tel:+918088291165" style={{ textDecoration: 'none', color: 'inherit' }}>+91 80882 91165</a>
                  <a href="tel:+919901464563" style={{ textDecoration: 'none', color: 'inherit' }}>+91 99014 64563</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="admissions-preview-image">
            <div className="admissions-image-frame">
              {/* Optional: Add a real image here when available */}
              <div className="admissions-placeholder">
                 <div className="decorative-circle"></div>
                 <div className="decorative-dots"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AdmissionsPreview;
