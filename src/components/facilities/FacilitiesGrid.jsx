import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './FacilitiesGrid.css';

function FacilitiesGrid() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };
  const facilities = [
    {
      id: 'smart-class',
      title: 'Smart Classrooms',
      image: '/images/facilities/smart_classrooms_3d.jpg',
      description: 'Technology-enabled smart classrooms designed to foster interactive, 21st-century learning. Equipped with digital boards and multimedia capabilities to make every lesson engaging.'
    },
    {
      id: 'expert-faculty',
      title: 'Expert Faculty',
      image: '/images/facilities/expert_faculty_3d.jpg',
      description: 'A dedicated team of highly qualified and experienced educators committed to providing personalized attention and nurturing every student’s potential.'
    },
    {
      id: 'safe-campus',
      title: 'Safe Campus (CCTV)',
      image: '/images/facilities/safe_campus_3d.jpg',
      description: 'A fully secure, 24/7 monitored campus with comprehensive CCTV coverage to ensure the complete safety and well-being of all our students.'
    },
    {
      id: 'value-education',
      title: 'Value-Based Education',
      image: '/images/facilities/value_education_3d.jpg',
      description: 'A strong emphasis on moral and ethical development, focusing on character building, discipline, and instilling core human values in every child.'
    },
    {
      id: 'sports',
      title: 'Playground & Sports',
      image: '/images/facilities/sports_3d.jpg',
      description: 'Expansive, well-maintained grounds and state-of-the-art sports facilities designed to cultivate physical fitness, competitive teamwork, and athletic excellence.'
    },
    {
      id: 'co-curricular',
      title: 'Co-Curricular Activities',
      image: '/images/facilities/co_curricular_3d.jpg',
      description: 'A vibrant range of extracurricular programs including arts, crafts, cultural events, and debates to foster creativity and holistic development.'
    },
    {
      id: 'wellness',
      title: 'Health & Wellness',
      image: '/images/facilities/wellness_3d.jpg',
      description: 'An on-campus medical and wellness center equipped to handle first aid emergencies and conduct regular health checkups for all students.'
    },
    {
      id: 'hostel',
      title: 'Hostel Facility',
      image: '/images/facilities/hostel_3d.jpg',
      description: 'A highly secure, comfortable, and disciplined residential environment ensuring a premium home-away-from-home experience for our boarding students.'
    }
  ];

  return (
    <section className="facilities-grid-section section-padding">
      <div className="container">
        
        <div className="section-header text-center facilities-header">
          <div className="facilities-trust-banner">
            ★ Approved Karnataka State Board Curriculum
          </div>
          <span className="eyebrow">World-Class Infrastructure</span>
          <h2>Our Premium Facilities</h2>
          <p className="section-subtitle">
            Providing our students with an elite academic and extracurricular environment 
            to support their holistic development and personal growth.
          </p>
        </div>

        <div className="facilities-grid">
          {facilities.map((facility) => {
            return (
              <div key={facility.id} className="facility-card-premium">
                <div className="facility-icon-glow"></div>
                <div className="facility-icon-wrapper-premium">
                  <img src={facility.image} alt={facility.title} className="facility-icon-image" />
                </div>
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
                {facility.id === 'hostel' && (
                  <div className="facility-expand-container">
                    <button 
                      className="facility-expand-btn"
                      onClick={() => toggleExpand(facility.id)}
                    >
                      {expandedId === facility.id ? 'Less Details' : 'More Details'}
                      {expandedId === facility.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    
                    <AnimatePresence>
                      {expandedId === facility.id && (
                        <motion.div 
                          className="hostel-details-motion"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          style={{ overflow: 'hidden', width: '100%' }}
                        >
                          <div className="hostel-details">
                            <div className="hostel-section">
                              <h4>Daily Schedule</h4>
                              <ul>
                                <li><span>Morning Prep:</span> 6:00 AM</li>
                                <li><span>School Hours:</span> 9:30 AM - 4:15 PM</li>
                                <li><span>Evening Study:</span> 5:30 PM - 7:00 PM</li>
                                <li><span>Break:</span> 7:00 PM - 8:00 PM</li>
                                <li><span>School Homeworks:</span> 8:30 PM - 9:30 PM</li>
                                <li><span>Lights Out (Sleep):</span> 9:30 PM</li>
                              </ul>
                            </div>
                            <div className="hostel-section">
                              <h4>Meal Plan</h4>
                              <p>Wholesome vegetarian meals served daily. Non-vegetarian dishes served 3 times per week.</p>
                            </div>
                            <div className="hostel-section">
                              <h4>Weekend Activities</h4>
                              <p>Weekend movie screenings and dedicated time for calling parents.</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
                <div className="facility-card-border"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FacilitiesGrid;
