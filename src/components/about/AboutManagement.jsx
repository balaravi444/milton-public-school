import './AboutManagement.css';
import { User, ShieldCheck, Briefcase, Landmark } from 'lucide-react';

function AboutManagement() {
  const management = [
    { name: 'D. Suryaprabha', title: 'President', icon: ShieldCheck, image: '/images/management/D. Suryaprabha.webp', imageStyle: { transform: 'scale(1.15)', transformOrigin: 'top center', objectPosition: 'center 15%' } },
    { name: 'D. Jayanth', title: 'Vice President', icon: Briefcase, image: '/images/management/D. Jayanth.webp', imageStyle: { transform: 'scale(1.15)', transformOrigin: 'top center', objectPosition: 'center 15%' } },
    { name: 'D.V. Prakash', title: 'Secretary & Managing Director', icon: User, image: '/images/management/D.V. PRAKASH.webp', imageStyle: { transform: 'scale(1.25)', transformOrigin: 'center center' } },
    { name: 'D. Soumya', title: 'Treasurer', icon: Landmark, image: '/images/management/D. Soumya.webp', imageStyle: { transform: 'scale(1.15)', transformOrigin: 'center center' } },
    { name: 'Krupasagar Patil', title: 'Trustee', icon: User, image: '/images/management/Krupasagar Patil.webp', imageStyle: { objectPosition: 'center 15%' } },
    { name: 'M. Siraj Ali', title: 'Board Member', icon: User, image: '/images/management/M. Siraj Ali.webp' },
  ];

  return (
    <section className="about-management section-padding">
      <div className="container">
        
        <div className="management-header text-center">
          <span className="eyebrow highlight-glow">Leadership & Governance</span>
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
                      <img loading="lazy" src={member.image} alt={member.name} className="management-dp" style={member.imageStyle || {}} />
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
