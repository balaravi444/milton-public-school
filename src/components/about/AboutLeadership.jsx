import './AboutLeadership.css';
import { Quote } from 'lucide-react';

function AboutLeadership() {
  return (
    <section className="about-leadership section-padding">
      <div className="container">
        
        <div className="leadership-content">
          <div className="leadership-text">
            <span className="eyebrow">Leadership</span>
            <h2>Message from the Principal</h2>
            
            <div className="quote-icon">
              <Quote size={40} />
            </div>
            
            <blockquote className="leadership-quote">
              <p>
                "At Milton Public School, we believe that education is not just about 
                textbooks and exams; it is about shaping the character, values, and 
                future of our students. Since our establishment in 2009, our dedicated 
                teachers and staff have worked tirelessly to create a nurturing environment 
                where every child feels valued, challenged, and inspired to succeed."
              </p>
              
              <p>
                "We welcome you to our community and look forward to partnering with you 
                in your child's educational journey."
              </p>
            </blockquote>
            
            <div className="leadership-author">
              <h4 className="author-name">Principal Name</h4>
              <p className="author-title">Principal, Milton Public School</p>
            </div>
          </div>
          
          <div className="leadership-image-wrapper">
             <div className="leadership-image-frame">
                {/* Placeholder for Principal's photo */}
                <div className="leadership-placeholder">
                  <div className="placeholder-content">
                     Photo <br/> (When Available)
                  </div>
                </div>
                
                <div className="decorative-dots"></div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutLeadership;
