import './CampusSafety.css';
import { ShieldCheck, Droplet, HeartPulse } from 'lucide-react';

function CampusSafety() {
  return (
    <section className="campus-safety-section section-padding">
      <div className="container">
        
        <div className="safety-container">
          <div className="safety-content">
            <span className="eyebrow-accent">Institutional Trust</span>
            <h2>Uncompromising Safety & Hygiene</h2>
            <p className="safety-description">
              The physical and emotional well-being of our students is our absolute highest priority. 
              We maintain rigorous safety protocols and a pristine environment to ensure total peace of mind for every parent.
            </p>
            
            <div className="safety-features">
              <div className="safety-feature-card">
                <div className="safety-icon-premium">
                  <ShieldCheck size={28} strokeWidth={2} />
                </div>
                <div className="safety-text">
                  <h3>CCTV Surveillance</h3>
                  <p>24/7 comprehensive camera coverage across the entire campus, ensuring a completely secure and actively monitored environment.</p>
                </div>
              </div>

              <div className="safety-feature-card">
                <div className="safety-icon-premium">
                  <Droplet size={28} strokeWidth={2} />
                </div>
                <div className="safety-text">
                  <h3>Pure Drinking Water</h3>
                  <p>Unrestricted access to safe, RO-purified drinking water through state-of-the-art filtration systems accessible across all floors.</p>
                </div>
              </div>
              
              <div className="safety-feature-card">
                <div className="safety-icon-premium">
                  <HeartPulse size={28} strokeWidth={2} />
                </div>
                <div className="safety-text">
                  <h3>Health & Sanitization</h3>
                  <p>Daily deep-cleaning routines and immediately accessible first-aid care to maintain impeccable health standards.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="safety-visuals">
             <div className="safety-shield-backdrop">
               <ShieldCheck size={300} strokeWidth={0.5} />
             </div>
             
             <div className="safety-stats-card top-right">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Monitoring</div>
             </div>
             
             <div className="safety-stats-card bottom-left">
                <div className="stat-number">100%</div>
                <div className="stat-label">Secure Campus</div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CampusSafety;
