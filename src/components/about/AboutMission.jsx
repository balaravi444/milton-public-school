import './AboutMission.css';
import { Target, Compass, Sparkles } from 'lucide-react';

function AboutMission() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      desc: 'To provide a strong educational foundation that fosters academic excellence, character development, and a lifelong passion for learning in every student.'
    },
    {
      icon: Compass,
      title: 'Our Vision',
      desc: 'To be a leading institution in Manvi that empowers students to reach their full potential and become responsible, innovative, and compassionate global citizens.'
    },
    {
      icon: Sparkles,
      title: 'Core Values',
      desc: 'Discipline, integrity, inclusivity, and a commitment to continuous improvement in both academics and personal growth.'
    }
  ];

  return (
    <section className="about-mission section-padding">
      <div className="container">
        
        <div className="mission-header text-center">
          <span className="eyebrow">Mission & Vision</span>
          <h2>Guiding Principles</h2>
          <p className="mission-intro">
            At Milton Public School, our principles form the bedrock of our educational philosophy, guiding our students towards academic and personal excellence.
          </p>
        </div>

        <div className="mission-grid">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="mission-card">
                <div className="mission-icon-wrapper">
                  <Icon size={32} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default AboutMission;
