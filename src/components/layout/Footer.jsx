import { Link } from 'react-router-dom';
import { MapPin, PhoneCall, Mail, Clock } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img 
                src="/images/milton-public-school-logo.png" 
                alt="Milton Public School Manvi" 
                className="footer-logo-img"
              />
            </Link>
            <p className="footer-desc">
              Providing quality English Medium education under the Karnataka State Board 
              from Baby Class to 10th Standard. A place to learn, grow, and progress.
            </p>
          </div>

          <div className="footer-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-list">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/academics">Academics</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/facilities">Facilities</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/news-events">News & Events</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>Manvi, Karnataka</span>
              </li>
              <li>
                <PhoneCall size={18} className="contact-icon" />
                <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
                  <a href="tel:+918088291165" style={{whiteSpace: 'nowrap'}}>+91 80882 91165</a>
                  <a href="tel:+919901464563" style={{whiteSpace: 'nowrap'}}>+91 99014 64563</a>
                </div>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
                  <a href="mailto:miltonpublicschoolmanvi4749@gmail.com" style={{whiteSpace: 'nowrap'}}>miltonpublicschoolmanvi4749@gmail.com</a>
                  <a href="mailto:miltonpublicschoolmanvi9999@gmail.com" style={{whiteSpace: 'nowrap'}}>miltonpublicschoolmanvi9999@gmail.com</a>
                </div>
              </li>
              <li className="hours-block">
                <Clock size={18} className="contact-icon" style={{ marginTop: '4px' }} />
                <div>
                  <div className="hours-section">
                    <strong style={{ display: 'block', color: 'var(--white)', fontSize: '0.9rem' }}>School Timings</strong>
                    <span style={{ display: 'block' }}>9:30 AM – 4:15 PM</span>
                  </div>
                  <div className="hours-section" style={{ marginTop: '10px' }}>
                    <strong style={{ display: 'block', color: 'var(--white)', fontSize: '0.9rem' }}>Admin Office Hours</strong>
                    <span style={{ display: 'block' }}>Mon-Sat: 10:00 AM - 6:45 PM</span>
                    <span style={{ display: 'block', fontSize: '0.85rem' }}>Sunday: 11:30 AM - 4:00 PM</span>
                  </div>
                </div>
              </li>
            </ul>
            
            <div className="footer-social">
              <a href="https://x.com/MiltonSchool999" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="X (Twitter)">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 1200 1227"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/></svg>
              </a>
              <a href="https://www.instagram.com/milton_public_school_manvi?igsh=M2pqcmNza2dwM3Fx" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://wa.me/919343115592" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/milton-public-school-manvi-74b169377/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Milton Public School Manvi. All Rights Reserved.</p>
            <p className="agency-credit">Designed with 💻 by <strong>SK TECH SOLUTIONS</strong></p>
          </div>
          <div className="footer-credits">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="divider">|</span>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
