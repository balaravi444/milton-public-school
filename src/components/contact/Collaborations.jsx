import './Collaborations.css';
import { HeartHandshake, Stethoscope, Wand2 } from 'lucide-react';

function Collaborations() {
  const initiatives = [
    {
      id: 1,
      title: "Support Our Mission",
      icon: <HeartHandshake size={32} strokeWidth={1.5} />,
      description: "We graciously accept donations from individuals and organizations. Your contributions directly support educational initiatives, infrastructure improvements, and student welfare programs."
    },
    {
      id: 2,
      title: "Health & Wellness",
      icon: <Stethoscope size={32} strokeWidth={1.5} />,
      description: "We are open to collaborating with medical professionals and NGOs to conduct social health camps, wellness programs, and hygiene awareness drives for our students and community."
    },
    {
      id: 3,
      title: "Child Development Shows",
      icon: <Wand2 size={32} strokeWidth={1.5} />,
      description: "We welcome partnerships for private shows (such as educational magic shows) and interactive awareness campaigns that foster creativity, critical thinking, and holistic child development."
    }
  ];

  return (
    <section className="collaborations-section section-padding">
      <div className="container">
        <div className="collaborations-header text-center">
          <span className="eyebrow highlight-glow">Partner With Us</span>
          <h2>Collaborations & Support</h2>
          <p className="section-subtitle">
            M.N.J.V.M Educational Trust believes in the power of community. We actively seek partnerships to enrich our students' experiences and improve our facilities.
          </p>
        </div>

        <div className="collaborations-grid">
          {initiatives.map((item) => (
            <div key={item.id} className="collaboration-card">
              <div className="collab-icon-wrapper">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="collaborations-cta text-center">
          <p>Interested in collaborating or making a donation?</p>
          <a href="mailto:miltonpublicschoolmanvi4749@gmail.com" className="btn btn-primary">Reach Out To Us</a>
          <p style={{ marginTop: '15px', fontSize: '0.95rem', color: 'var(--muted-text)', wordBreak: 'break-all' }}>
            Or email us directly at: <strong>miltonpublicschoolmanvi4749@gmail.com</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Collaborations;
