import './Contact.css';
import PageHeader from '../components/ui/PageHeader';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';

function Contact() {
  const mapEmbedUrl = "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Milton%20Public%20School%20Manvi,%20Mehdi%20Nagar,%20Manvi,%20Karnataka%20584123&t=&z=18&ie=UTF8&iwloc=B&output=embed";
  const mapRedirectUrl = "https://www.google.com/maps/dir/?api=1&destination=Milton+Public+School+Manvi,+Mehdi+Nagar,+Manvi,+Karnataka+584123";

  return (
    <main className="contact-page">
      <PageHeader title="Contact Us" breadcrumb="Contact" />
      
      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Info Details */}
            <div className="contact-info-card">
              <span className="eyebrow gold-eyebrow">Get In Touch</span>
              <h2>We'd Love to Hear From You</h2>
              <p className="contact-intro">
                Whether you have questions about admissions, our curriculum, or want to schedule a visit, our team is here to help.
              </p>

              <div className="contact-details-list">
                <div className="contact-detail-item">
                  <div className="icon-wrapper">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4>Our Location</h4>
                    <p>Milton Public School Manvi, X3R5+R3P, Mehdi Nagar, Manvi, Karnataka 584123</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="icon-wrapper">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4>Phone Number</h4>
                    <a href="tel:+918088291165" style={{display: 'block', marginBottom: '4px', wordBreak: 'break-word'}}>+91 80882 91165</a>
                    <a href="tel:+919901464563" style={{display: 'block', wordBreak: 'break-word'}}>+91 99014 64563</a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="icon-wrapper">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4>Email Address</h4>
                    <a href="mailto:miltonpublicschoolmanvi4749@gmail.com" style={{display: 'block', marginBottom: '4px', wordBreak: 'break-word'}}>miltonpublicschoolmanvi4749@gmail.com</a>
                    <a href="mailto:miltonpublicschoolmanvi9999@gmail.com" style={{display: 'block', wordBreak: 'break-word'}}>miltonpublicschoolmanvi9999@gmail.com</a>
                  </div>
                </div>
              </div>

              <a href={mapRedirectUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary get-directions-btn">
                <Navigation size={18} />
                Get Directions
              </a>
            </div>

            {/* Map Embed */}
            <div className="contact-map-card">
              <iframe 
                title="Milton Public School Location Map"
                src={mapEmbedUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;