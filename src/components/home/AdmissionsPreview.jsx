import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileCheck, PhoneCall } from 'lucide-react';
import './AdmissionsPreview.css';

function AdmissionsPreview() {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    grade: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // School's primary WhatsApp number (without the +)
    const whatsappNumber = "918088291165"; 
    
    const message = `Hello Milton Public School,\n\nI would like to request a callback regarding admissions.\n\n*Parent's Name:* ${formData.parentName}\n*Phone Number:* ${formData.phone}\n*Grade Interested:* ${formData.grade}\n\nPlease call me back. Thank you!`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset the form
    setFormData({ parentName: '', phone: '', grade: '' });
  };

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
          <div className="admissions-callback-card">
            <div className="admissions-callback-header">
              <h3>
                <span>📞</span> Request a Call Back
              </h3>
              <p>
                Have questions about admissions or school timings? Drop your details and our office will call you.
              </p>
            </div>
            
            <form 
              className="admissions-callback-form" 
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Parent's Name" 
                  required 
                  value={formData.parentName}
                  onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                />
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  required 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div className="form-group">
                <select 
                  required 
                  value={formData.grade}
                  onChange={(e) => setFormData({...formData, grade: e.target.value})}
                >
                  <option value="" disabled>Select Grade</option>
                  <option value="Baby Class">Baby Class</option>
                  <option value="Primary">Primary School</option>
                  <option value="Middle">Middle School</option>
                  <option value="High School">High School (10th)</option>
                </select>
              </div>
              <button type="submit" className="admissions-callback-submit">
                Submit on WhatsApp →
              </button>
            </form>
          </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AdmissionsPreview;
