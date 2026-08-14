import './FacilitiesGrid.css';
import { MonitorPlay, Trophy, Home } from 'lucide-react';

function FacilitiesGrid() {
  const facilities = [
    {
      id: 'smart-class',
      title: 'Smart Classrooms',
      icon: MonitorPlay,
      description: 'Modern, technology-enabled classrooms designed to make learning interactive and engaging for all students.'
    },
    {
      id: 'sports',
      title: 'Playground & Sports',
      icon: Trophy,
      description: 'Expansive grounds and sports facilities to encourage physical fitness, teamwork, and athletic excellence.'
    },
    {
      id: 'hostel',
      title: 'Hostel Facility',
      icon: Home,
      description: 'A safe, comfortable, and disciplined residential environment ensuring a home-away-from-home experience.'
    }
  ];

  return (
    <section className="facilities-grid-section section-padding">
      <div className="container">
        
        <div className="section-header text-center">
          <span className="eyebrow">World-Class Infrastructure</span>
          <h2>Our Core Facilities</h2>
          <p className="section-subtitle">
            Providing students with the best resources to support their academic journey and personal growth.
          </p>
        </div>

        <div className="facilities-grid">
          {facilities.map((facility) => {
            const Icon = facility.icon;
            return (
              <div key={facility.id} className="facility-card">
                <div className="facility-icon-wrapper">
                  <Icon size={36} strokeWidth={1.5} />
                </div>
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
                <div className="facility-card-accent"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FacilitiesGrid;
