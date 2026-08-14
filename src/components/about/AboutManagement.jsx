import './AboutManagement.css';
import { User, ShieldCheck } from 'lucide-react';

function AboutManagement() {
  const management = [
    { name: 'D. Suryaprabha', title: 'President' },
    { name: 'D. Jayanth', title: 'Vice President' },
    { name: 'D.V Prakash', title: 'Secretary' },
    { name: 'D. Soumya', title: 'Treasurer' },
  ];

  return (
    <section className="about-management section-padding">
      <div className="container">
        
        <div className="management-header text-center">
          <span className="eyebrow">Leadership Team</span>
          <h2>M.N.J.V.M Educational Trust</h2>
          <p className="management-subtitle">
            Guided by visionary leaders dedicated to providing quality education 
            and shaping the future of our students.
          </p>
        </div>

        <div className="management-grid">
          {management.map((member, index) => (
            <div key={index} className="management-card">
              <div className="management-avatar">
                {index === 0 ? <ShieldCheck size={40} /> : <User size={40} />}
              </div>
              <div className="management-info">
                <h3>{member.name}</h3>
                <span className="management-role">{member.title}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AboutManagement;
