import './AboutManagement.css';
import { User, ShieldCheck, Briefcase, Landmark } from 'lucide-react';

function AboutManagement() {
  const management = [
    { name: 'D. Suryaprabha', title: 'President', icon: ShieldCheck, image: '/images/management/suryaprabha.jpg' },
    { name: 'D. Jayanth', title: 'Vice President', icon: Briefcase },
    { name: 'D.V Prakash', title: 'Secretary', icon: User },
    { name: 'D. Soumya', title: 'Treasurer', icon: Landmark },
  ];

  return (
    <section className="about-management section-padding">
      <div className="container">
        
        <div className="management-header text-center">
          <span className="eyebrow">Leadership & Governance</span>
          <h2>M.N.J.V.M Educational Trust</h2>
          <p className="management-subtitle">
            Guided by a visionary board of directors, the Trust is deeply committed to upholding the highest standards of academic excellence and fostering an environment where every student can thrive.
          </p>
        </div>

        <div className="management-grid">
          {management.map((member, index) => {
            const Icon = member.icon;
            return (
              <div key={index} className="management-card executive-card">
                <div className="management-avatar-wrapper">
                  {member.image ? (
                    <div className="management-dp-container">
                      <img src={member.image} alt={member.name} className="management-dp" />
                    </div>
                  ) : (
                    <div className="management-avatar">
                      <Icon size={44} strokeWidth={1.5} />
                    </div>
                  )}
                </div>
                <div className="management-info">
                  <h3>{member.name}</h3>
                  <span className="management-role">{member.title}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default AboutManagement;
