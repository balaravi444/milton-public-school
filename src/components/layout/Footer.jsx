import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
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
              <li><Link to="/downloads">Downloads</Link></li>
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
                <Phone size={18} className="contact-icon" />
                <a href="tel:+918088291165">+91 80882 91165</a>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <a href="mailto:miltonpublicschool4749@gmail.com">miltonpublicschool4749@gmail.com</a>
              </li>
              <li>
                <Clock size={18} className="contact-icon" />
                <div>
                  <span style={{ display: 'block' }}>Mon-Sat: 10:00 AM - 6:45 PM</span>
                  <span style={{ display: 'block', fontSize: '0.85rem' }}>Sunday: 11:30 AM - 4:00 PM</span>
                </div>
              </li>
            </ul>
            
            <div className="footer-social">
              <a href="https://www.youtube.com/@MiltonPublicSchoolMANVI" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
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
            <a href="#">Privacy Policy</a>
            <span className="divider">|</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
