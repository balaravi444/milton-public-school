import './CampusSafety.css';
import { ShieldCheck, Droplet } from 'lucide-react';

function CampusSafety() {
  return (
    <section className="campus-safety-section section-padding">
      <div className="container">
        
        <div className="safety-container">
          <div className="safety-content">
            <span className="eyebrow">Health & Protection</span>
            <h2>Safety & Hygiene</h2>
            <p className="safety-description">
              The well-being of our students is our highest priority. We maintain strict safety protocols 
              and ensure a healthy environment throughout the campus.
            </p>
            
            <div className="safety-features">
              <div className="safety-feature-item">
                <div className="safety-icon">
                  <ShieldCheck size={28} />
                </div>
                <div className="safety-text">
                  <h3>CCTV Security</h3>
                  <p>24/7 comprehensive camera surveillance ensuring a secure and monitored environment for all students and staff.</p>
                </div>
              </div>

              <div className="safety-feature-item">
                <div className="safety-icon">
                  <Droplet size={28} />
                </div>
                <div className="safety-text">
                  <h3>Pure Drinking Water</h3>
                  <p>Access to safe, RO-purified drinking water available at multiple accessible points across the school premises.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="safety-image-container">
            {/* Placeholder for an image representing safety or the school campus */}
            <div className="safety-image-placeholder">
              <span>Campus Safety</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CampusSafety;
