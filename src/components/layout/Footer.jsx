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
                <span>Mon-Sat: 9:30 AM - 4:15 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Milton Public School Manvi. All Rights Reserved.</p>
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
