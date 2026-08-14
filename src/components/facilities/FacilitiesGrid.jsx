import './FacilitiesGrid.css';
import { MonitorPlay, Trophy, Home } from 'lucide-react';

function FacilitiesGrid() {
  const facilities = [
    {
      id: 'smart-class',
      title: 'Smart Classrooms',
      icon: MonitorPlay,
      description: 'Technology-enabled smart classrooms designed to foster interactive, 21st-century learning. Equipped with digital boards and multimedia capabilities to make every lesson engaging.'
    },
    {
      id: 'sports',
      title: 'Playground & Sports',
      icon: Trophy,
      description: 'Expansive, well-maintained grounds and state-of-the-art sports facilities designed to cultivate physical fitness, competitive teamwork, and athletic excellence.'
    },
    {
      id: 'hostel',
      title: 'Hostel Facility',
      icon: Home,
      description: 'A highly secure, comfortable, and disciplined residential environment ensuring a premium home-away-from-home experience for our boarding students.'
    }
  ];

  return (
    <section className="facilities-grid-section section-padding">
      <div className="container">
        
        <div className="section-header text-center facilities-header">
          <span className="eyebrow">World-Class Infrastructure</span>
          <h2>Our Premium Facilities</h2>
          <p className="section-subtitle">
            Providing our students with an elite academic and extracurricular environment 
            to support their holistic development and personal growth.
          </p>
        </div>

        <div className="facilities-grid">
          {facilities.map((facility) => {
            const Icon = facility.icon;
            return (
              <div key={facility.id} className="facility-card-premium">
                <div className="facility-icon-glow"></div>
                <div className="facility-icon-wrapper-premium">
                  <Icon size={42} strokeWidth={1.5} />
                </div>
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
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
